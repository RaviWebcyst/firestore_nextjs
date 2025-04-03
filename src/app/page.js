"use client";

import React, { useEffect, useState } from "react";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
import  Header  from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";
import axios from "axios";
import { getCookie } from "cookies-next";
import { setUser } from "../../store/auth/userSlice";
import { useDispatch } from "react-redux";




export default function Home() {


  const dispatch = useDispatch();


  const [state,setState] = useState({
    total_meditation:0,today_meditation:0,this_month_meditation:0
  })
  // const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.push('/Auth');
  //   }
  // }, [isLoggedIn]);

  const toggleMenu = () => {
    // $("#main-wrapper").toggleClass("menu-toggle");
    
    const header = document.getElementById('main-wrapper');
    if (header.classList.contains('menu-toggle')) {
      console.log(header.classList);
        header.classList.remove('menu-toggle');
      } else {
        header.classList.add('menu-toggle');
      }
  };

  async function fetchData(){
    const token = getCookie('token');
   
    

    var res = await axios.get(`/api/dashboard`,{params:{token:token}});
    if(res.status== 200){
      setState({
        total_meditation:res.data.total_meditation,today_meditation:res.data.today_meditation,this_month_meditation:res.data.this_month_meditation
      });


        if(res.data?.user_details){
          dispatch(setUser(res.data?.user_details));
        }
     }
    
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className={'show'} id="main-wrapper">
      <Header onClick={toggleMenu} />
      <Sidebar />
      <div className=" content-body default-height">
        <div className="container-fluid">
          <div className="form-head mb-4 d-flex flex-wrap align-items-center">
            <div className="me-auto">
              <h2 className="font-w600 mb-0">Dashboard</h2>
              {/* <p>Lorem ipsum  dolor sit amet </p> */}
            </div>
           </div>
           <div className="row">
           <div className="col-md-4">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<div className="media ai-icon">
									<span className="me-3 bgl-primary text-primary">
                  <svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
									</span>
									<div className="media-body">
										<p className="mb-1">Today Meditation</p>
										<h4 className="mb-0">{state.today_meditation || 0} Hrs</h4>
									</div>
								</div>
							</div>
						</div>
          </div>
           <div className="col-md-4">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<div className="media ai-icon">
									<span className="me-3 bgl-primary text-primary">
                  <svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
									</span>
									<div className="media-body">
										<p className="mb-1"> This Month Meditation</p>
										<h4 className="mb-0">{state.this_month_meditation || 0} Hrs</h4>
									</div>
								</div>
							</div>
						</div>
          </div>

          <div className="col-md-4">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<div className="media ai-icon">
									<span className="me-3 bgl-primary text-primary">
                  <svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
									</span>
									<div className="media-body">
										<p className="mb-1"> Total Meditation</p>
										<h4 className="mb-0">{state.total_meditation || 0} Hrs</h4>
									</div>
								</div>
							</div>
						</div>
          </div>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

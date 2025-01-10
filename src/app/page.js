"use client";

import React from "react";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";




export default function Home() {

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
           <div className="col-md-3">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<div className="media ai-icon">
									<span className="me-3 bgl-primary text-primary">
										<svg id="icon-customers" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
											<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
											<circle cx="12" cy="7" r="4"></circle>
										</svg>
									</span>
									<div className="media-body">
										<p className="mb-1">Today Attendence</p>
										<h4 className="mb-0">0</h4>
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

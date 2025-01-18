"use client";

import React from "react";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
import  Header  from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";


const toggleMenu = () => {
    // $("#main-wrapper").toggleClass("menu-toggle");
    
    // const header = document.querySelector('show');
    // if (header) {
    //   header.classList.toggle('menu-toggle');
    // }

    const header = document.getElementById("main-wrapper");
        // header.classList.toggle('menu-toggle');
        if (header.classList.contains('menu-toggle')) {
            header.classList.remove('menu-toggle');
          } else {
            header.classList.add('menu-toggle');
          }
  };

export default function Attendence() {

    const [attendenceList, setAttendenceList] = useState([]);
    const [total, setTotal] = useState(0);

      const [state,setState]= useState({
            name:null,
            father_name:null,
            date:new Date(),
        });
    


    async function fetchAttendence() {
        try {
            const response = await axios.get('/api/attendence',{
                params:{
                   name:state.name,
                   father_name:state.father_name,
                   date:state.date
                }
            });
            console.log(response);
            
            // const data = await response.json();
            // console.log(data);
            
            setAttendenceList(response.data.attendenceList);
            setTotal(response.data.total);
        } catch (error) {
            console.error('Error fetching attendence data:', error);
        }
    }

     const handleDeleteAttendence = async(id) => {
        if(confirm('Are you sure want to delete')){
            try {
                await axios.delete(`/api/attendence?id=${id}`);
                setAttendenceList(attendenceList.filter(attendence => attendence.id !== id));
            } catch (error) {
                console.error('Error deleting attendence:', error);
            }
    }
    }

    const resetAttendence = async() => {
        setState({
            name:null,
            father_name:null,
            date:new Date(),
        })

        await fetchAttendence();
    }

  


    useEffect(() => {
        fetchAttendence();
    }, []);


        const handleNameChange = (e) => {
        setState({ ...state, name: e.target.value });
      };
    
      const handleFatherNameChange = (e) => {
        setState({ ...state, father_name: e.target.value });
      };
      const handleDateChange = (e) => {
        setState({ ...state, date: e.target.value });
      };

//   const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoggedIn) {
//       router.push('/Auth');
//     }
//   }, [isLoggedIn]);

  return (
    <div className={'show'} id="main-wrapper">
      <Header onClick={toggleMenu} />
      <Sidebar />
      <div className=" content-body default-height">
        <div className="container-fluid">
        <div className="row page-titles">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="javascript:void(0)">Attendence</a></li>
                <li className="breadcrumb-item active"><a href="javascript:void(0)">Attendence List</a></li>
            </ol>
        </div>

    <div className="row">
<div className="col-xl-3">
    <div className="card">
        <div className="card-body">
            <h4>Total Hours</h4>
            <h3>{total}</h3>
        </div>
    </div>
</div>

    <div className="col-xl-9 m-auto">
    <div className="filter ">
                        <div className="mb-5">
                            <ul className="text-end">
                                <li><Link href="Attendence/Add" className="btn btn-primary ">Add Attendence</Link></li>
                            </ul>
                        </div>
                    </div>
                    </div>
    </div>
        

        <div className="row">
					<div className="col-xl-12">
						<div className="filter cm-content-box box-primary">
							<div className="content-title SlideToolHeader">
								<div className="cpa">
								Filter    	
								</div>
								<div className="tools">
									<a href="javascript:void(0);" className="expand handle"></a>
								</div>
							</div>
							<div className="cm-content-body  form excerpt">
								<div className="card-body pb-3">
									<div className="row">
										<div className="col-xl-3 col-sm-6">
											<input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Name" onChange={handleNameChange} />
										</div>
										<div className="col-xl-3 col-sm-6">
											<input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Father Name/Husband Name" onChange={handleFatherNameChange} />
										</div>
										<div className="col-xl-3 col-sm-6">
											 <input className="form-control  mb-3" type="date" onChange={handleDateChange}  />
										</div>
										<div className="col-xl-3 col-sm-6 ">
											<button className="btn btn-primary me-2" title="Click here to Search" type="button" onClick={fetchAttendence}>Search</button>
											<button className="btn btn-danger light" title="Click here to remove filter" type="button" onClick={resetAttendence}>Reset</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

        
           <div className="row">

           <div className="col-lg-12">

                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Attendence List</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th style={{width:"50px"}}>
													<div className="form-check custom-checkbox checkbox-primary check-lg me-3">
														<label className="form-check-label" ></label>
													</div>
												</th>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Father Name/Husband Name</th>
                                                <th>Hours</th>
                                                <th>Type</th>
                                                <th>Date</th>
												<th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {attendenceList.map((attendence, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="form-check custom-checkbox checkbox-primary check-lg me-3">
                                                            <label className="form-check-label"></label>
                                                        </div>
                                                    </td>
                                                    <td>{index + 1}</td>
                                                    <td>{attendence.name}</td>
                                                    <td>{attendence.father_name}</td>
                                                    <td>{attendence.hours}</td>
                                                    <td>{attendence.type}</td>
                                                    <td>{new Date(attendence.timestamp.seconds * 1000).toLocaleString()}</td>
                                                    <td className="d-flex gap-3">
                                                        <Link href={`/Attendence/Edit/${attendence.id}`} className="btn btn-primary">Edit</Link>
                                                        
                                                        <button className="btn btn-danger" onClick={()=>handleDeleteAttendence(attendence.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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

"use client";

import React from "react";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";




export default function Attendence() {

//   const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoggedIn) {
//       router.push('/Auth');
//     }
//   }, [isLoggedIn]);

  return (
    <div className={'show'} id="main-wrapper">
      <Header />
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
           <div className="col-lg-12">

                <div className="filter cm-content-box box-primary">
                        <div className="mb-5">
                            <ul className="text-end">
                                <li><a href="" className="btn btn-primary ">Add Attendence</a></li>
                            </ul>
                        </div>
                    </div>

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
                                                <th>Roll No</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Date</th>
                                                <th>Status</th>
												<th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
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
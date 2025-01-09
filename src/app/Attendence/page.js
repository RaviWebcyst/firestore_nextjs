"use client";

import React from "react";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";




export default function Attendence() {

    const [attendenceList, setAttendenceList] = useState([]);


    async function fetchAttendence() {
        try {
            const response = await axios.get('/api/attendence');
            console.log(response);
            
            // const data = await response.json();
            // console.log(data);
            
            setAttendenceList(response.data);
        } catch (error) {
            console.error('Error fetching attendence data:', error);
        }
    }

    useEffect(() => {
        fetchAttendence();
    }, []);

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
                                <li><Link href="Attendence/Add" className="btn btn-primary ">Add Attendence</Link></li>
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
                                                <th>#</th>
                                                <th>Name</th>
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
                                                    <td>{attendence.hours}</td>
                                                    <td>{attendence.type}</td>
                                                    <td>{new Date(attendence.timestamp.seconds * 1000).toLocaleString()}</td>
                                                    <td className="d-flex gap-3">
                                                        <Link href={`/Attendence/Edit/${attendence.id}`} className="btn btn-primary">Edit</Link>
                                                        <button className="btn btn-danger">Delete</button>
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

"use client";

import React, { useEffect } from 'react';

import { Header } from "@/app/Components/Header";
import { Sidebar } from "@/app/Components/Sidebar";
import axios from "axios";
import { useState } from "react";

export default function Edit(data) {
    const [state,setState]= useState({
        name:null,
        father_name:null,
        phone:null,
        type:null,
        location:null,
        hours:null,
        block:null,
        city:null,
        dist:null,
        state:null,
    });

    const [disable,setDisable] = useState(false);

   
    
   
   

    const handleNameChange = (e) => {
        setState({ ...state, name: e.target.value });
      };
    
      const handleFatherNameChange = (e) => {
        setState({ ...state, father_name: e.target.value });
      };
      const handlePhoneChange = (e) => {
        setState({ ...state, phone: e.target.value });
      };
      const handleTypeChange = (e) => {
        setState({ ...state, type: e.target.value });
      };
      const handleLocationChange = (e) => {
        setState({ ...state, location: e.target.value });
      };
      const handleHoursChange = (e) => {
        setState({ ...state, hours: e.target.value });
      };
      const handleBlockChange = (e) => {
        setState({ ...state, block: e.target.value });
      };
      const handleCityChange = (e) => {
        setState({ ...state, city: e.target.value });
      };
      const handleDistChange = (e) => {
        setState({ ...state, dist: e.target.value });
      };
      const handleStateChange = (e) => {
        setState({ ...state, state: e.target.value });
      };

      // const fetchAttendence = async () => {
      //   var id = data.params.slug;
      //   try {
      //     const response = await axios.get(`/api/attendence?id=${id}`);
          
      //     if (response.status === 200) {
      //       setState(response.data);
      //     }
      //   } catch (error) {
      //     console.error("Error fetching attendence:", error);
      //   }
      // };


      const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        setDisable(true);
        await axios.post(`/api/attendence`,state).then((res) => {
            console.log("res");
            console.log(res);
          if (res.status === 200) {
            console.log(res.data);
            setState({
                name: null,
                father_name: null,
                phone: null,
                type: null,
                location: null,
                hours: null,
                block: state.block,
                city: state.city,
                dist: state.dist,
                state: state.state,
            });

          }
        }).catch((err) => {
          console.log("err");
          console.log(err.response.data.message);
        //   setMesssage(err.response.data.message);
      }).finally(
        setDisable(false)
      );
      };


      useEffect(()=>{
        // fetchAttendence();
      },[])

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
    <div className={`show`} id="main-wrapper">
      <Header onClick={toggleMenu} />
      <Sidebar />
      <div className=" content-body default-height">
        <div className="container-fluid">
         
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Edit Attendence</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="mb-3 col-md-4">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="John"
                            onChange={handleNameChange}
                          />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label className="form-label">Father Name/Husband Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Father Name/Husband Name"
                            onChange={handleFatherNameChange}
                          />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label className="form-label">Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone No."
                            onChange={handlePhoneChange}
                          />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label className="form-label">Select Type</label>
                          <select className="form-control form-select"  onChange={handleTypeChange}>
                            <option value="naamcharcha">Naam Charcha</option>
                            <option value="block_naamcharcha">Block Naam Charcha</option>
                            <option value="sewa">Sewa</option>
                            <option value="meditation">Meditation</option>
                            <option value="satsang">Satsang</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Event Location</label>
                          <input type="text" className="form-control" placeholder="Enter Event Location"  onChange={handleLocationChange} />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Event Hours</label>
                          <input type="text" className="form-control" placeholder="Enter Event Hours"  onChange={handleHoursChange} />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Block</label>
                          <input type="text" className="form-control" placeholder="Enter Block"  onChange={handleBlockChange} />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Village/City</label>
                          <input type="text" className="form-control" placeholder="Enter City"  onChange={handleCityChange} />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Dist.</label>
                          <input type="text" className="form-control" placeholder="Enter District"   onChange={handleDistChange}/>
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>State</label>
                          <input type="text" className="form-control" placeholder="Enter State"  onChange={handleStateChange} />
                        </div>
                      </div>
                    
                      <button type="submit" className="btn btn-primary" disabled={disable}>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

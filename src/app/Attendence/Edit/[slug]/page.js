"use client";

import React, { useEffect } from 'react';

import  Header  from "@/app/Components/Header";
import { Sidebar } from "@/app/Components/Sidebar";
import axios from "axios";
import { useState,use } from "react";
import PropTypes from "prop-types";
import { useRouter } from 'next/navigation';



export default function Edit({params}) {
  const router = useRouter();

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

   
    useEffect(()=>{
      fetchAttendence();
    },[])

    

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


    

      const {slug}=  use(params);

      const fetchAttendence = async () => {
        
        if(slug){
          var id = slug;
          try {
            const response = await axios.get(`/api/attendence?id=${id}`);
              console.log(response);
              
            if (response.status === 200) {
              
              // setState(response.data);
              setState({
                name: response.data.name,
                father_name: response.data.father_name,
                phone: response.data.phone,
                type: response.data.type,
                location: response.data.location,
                hours: response.data.hours,
                block: response.data.block,
                city: response.data.city,
                dist: response.data.dist,
                state: response.data.state,
            });
            }
          } catch (error) {
            console.error("Error fetching attendence:", error);
          }
        }
      };


      const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        setDisable(true);
        await axios.put(`/api/attendence?id=${slug}`,state).then((res) => {
            console.log("res");
            console.log(res);
          if (res.status === 200) {
            console.log(res.data);
            router.push("/Attendence");
          }
        }).catch((err) => {
          console.log("err");
          console.log(err.response.data.message);
        //   setMesssage(err.response.data.message);
      }).finally(
        setDisable(false)
      );
      };


    
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
                            value={state.name || ""}
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
                            value={state.father_name || ""}
                          />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label className="form-label">Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone No."
                            onChange={handlePhoneChange}
                            value={state.phone || ""}
                          />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label className="form-label">Select Type</label>
                          <select className="form-control form-select"  onChange={handleTypeChange} value={state.type || ""}>
                            <option value="naamcharcha" >Naam Charcha</option>
                            <option value="block_naamcharcha" >Block Naam Charcha</option>
                            <option value="sewa" >Sewa</option>
                            <option value="meditation" >Meditation</option>
                            <option value="satsang" >Satsang</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Event Location</label>
                          <input type="text" className="form-control" placeholder="Enter Event Location"  onChange={handleLocationChange}   value={state.location || ""} />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Event Hours</label>
                          <input type="text" className="form-control" placeholder="Enter Event Hours"  onChange={handleHoursChange}  value={state.hours || ""}/>
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Block</label>
                          <input type="text" className="form-control" placeholder="Enter Block"  onChange={handleBlockChange}  value={state.block || ""} />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Village/City</label>
                          <input type="text" className="form-control" placeholder="Enter City"  onChange={handleCityChange}  value={state.city || ""} />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>Dist.</label>
                          <input type="text" className="form-control" placeholder="Enter District"   onChange={handleDistChange}  value={state.dist || ""}/>
                        </div>
                        <div className="mb-3 col-md-4">
                          <label>State</label>
                          <input type="text" className="form-control" placeholder="Enter State"  onChange={handleStateChange}  value={state.state || ""} />
                        </div>
                      </div>
                    
                      <button type="submit" className="btn btn-primary" disabled={disable}>
                        Update
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

Edit.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired, // If `slug` is required
  }).isRequired, // If `params` is required
};

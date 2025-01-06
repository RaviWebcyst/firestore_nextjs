"use client";

import React  from "react";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../store/auth/action';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { setCookie } from 'cookies-next';


export default  function Auth() {
  
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const [message,setMesssage] = useState(false);
  const [state, setState] = useState({
    email: null,
    password: null,
    // rememberMe: false,
  });




  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn]);


  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    await axios.post('https://firestore-nextjs.vercel.app/api/auth',state).then((res) => {
        console.log("res");
        console.log(res);
      if (res.status === 200) {
        console.log(res.data);
        setCookie('token', res.data.token);
        console.log("state");
        console.log(state);
        
        
        dispatch(loginUser(state));
      }
    }).catch((err) => {
      console.log("err");
      console.log(err.response.data.message);
      setMesssage(err.response.data.message);
  });
  };
  

  const handleEmailChange = (e) => {
    setState({ ...state, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setState({ ...state, password: e.target.value });
  };

  return (
    <div className="authincation ">
    <div className="container ">
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8">
                <div className="authincation-content">
                    <div className="row no-gutters">
                        <div className="col-xl-12">
                          {message && <div className="alert alert-danger" role="alert">{message}</div>}
                            <div className="auth-form">
                                <div className="text-center mb-3">
                                    <a href="/"></a>
                                </div>
                                <h4 className="text-center mb-4">Sign in your account</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="mb-1 form-label">Email</label>
                                        <input type="email" className="form-control" onChange={handleEmailChange}  />
                                    </div>
                                    <div className="mb-3 position-relative">
                                        <label className="mb-1 form-label">Password</label>
                                        <input type="password" id="dz-password" className="form-control" onChange={handlePasswordChange} />
                                        <span className="show-pass eye">

                                            {/* <i className="fa fa-eye-slash"></i>
                                            <i className="fa fa-eye"></i> */}

                                        </span>
                                    </div>
                                    <div className="form-row d-flex  flex-wrap justify-content-between mt-4 mb-2">
                                        <div className="form-group">
                                            <div className="form-check custom-checkbox ms-1">
                                                <input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
                                                <label className="form-check-label" >Remember my preference</label>
                                            </div>
                                        </div>
                                        {/* <div className="form-group">
                                            <a className="text-hover" href="/ventic/ForgotPassword">Forgot Password?</a>
                                        </div> */}
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                                    </div>
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
}

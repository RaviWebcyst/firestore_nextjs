"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/auth/action";

export const Header = () => {  
    const router = useRouter();
    const dispatch = useDispatch();

    const logout = () => {  
        dispatch(logoutUser());
        router.push('/Auth');
    }

return (
   <header className="header">
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                        </div>
                        <ul className="navbar-nav header-right">
							
                            <li className="nav-item dropdown header-profile">
                                <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
									<div className="header-info me-3">
										<span className="fs-16 font-w600 ">James P. Sullivan</span>
										<small className="text-end fs-14 font-w400">Super Admin</small>
									</div>
                                    <img src="images/profile/pic1.jpg" width="20" alt="" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="app-profile.html" className="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span className="ms-2">Profile </span>
                                    </a>
                                    <a href="javascript:;" className="dropdown-item ai-icon" onClick={logout}>
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span className="ms-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
				</nav>
			</div>
		</header>
);

}
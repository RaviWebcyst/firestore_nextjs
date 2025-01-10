
"use client";

import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Link from "next/link";

export const Sidebar = () =>{

    return (
        <div className="deznav">
            <div className="deznav-scroll mm-active">
				<ul className="metismenu mm-show mt-auto" id="menu">
                    <li><Link className="ai-icon" href="/" >
							{/* <i className="flaticon-025-dashboard"></i> */}
                            <MdDashboard size={24} />
							<span className="nav-text">Dashboard</span>
						</Link>
                    </li>
                    <li>
                        <Link className="ai-icon" href="/Attendence" >
                            <HiOutlineClipboardDocumentList size={24} />
							<span className="nav-text">Attendence</span>
						</Link>
                    </li>
                </ul>
                <div className="position-fixed bottom-0">
				<div className="plus-box">
					<p className="fs-16 font-w500 mb-3">Attendence Report</p>
				</div>
				<div className="copyright">
					<p><strong>Attendence Report Dashboard</strong> © 2025 All Rights Reserved</p>
					<p className="fs-12">Made with <span className="heart"></span> by Er. Ravi Insan</p>
				</div>
                </div>
			</div>
        </div>
    )
}
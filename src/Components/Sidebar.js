import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="bg-light" style={{ width: "370px", height: "120vh" }}>
      <nav id="sidebar" className="sidebar-panel">
        <div className="logo-sidebar text-warning ">
         
          <span className="bs-icon-s bs-icon-rounded pt-5 h1  bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-bezier"
            >
              <path
                fillRule="evenodd"
                d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
              ></path>
              <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
            </svg>
          </span>
        </div>

        <div className="mt-5 scroll-sidebar scrollbarbar text-center">
          <ul className="list-unstyled w-75 text-start ms-5 pt-5 ">
            <NavLink to="/dashbord" className="text-decoration-none text-dark">
              <li className="py-2 text-black">
                {" "}
                <i className="fas fa-th " /> &nbsp; &nbsp;Dashboard
              </li>
            </NavLink>
            <NavLink to="/users" className="text-decoration-none text-dark">
              <li className="py-2">
                <i className="fas fa-dolly " />
                &nbsp; &nbsp; Manage Users
              </li>
            </NavLink>
            <NavLink
              to="/Admin_Message"
              className="text-decoration-none text-dark"
            >
              <li className="py-2">
                <i className="fas fa-clipboard " /> &nbsp; &nbsp;Messages List
              </li>
            </NavLink>
            <NavLink
              to="/Admin_subCategories"
              className="text-decoration-none text-dark"
            >
              <li className="py-2">
                <i className="fas fa-clipboard-list " />
                &nbsp; &nbsp; Sub-Categories
              </li>
            </NavLink>
            <NavLink to="/packages" className="text-decoration-none text-dark">
              <li className="py-2">
                <i className="fas fa-clipboard-list " />
                &nbsp; &nbsp; Packages
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

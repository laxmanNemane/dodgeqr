import axios from "axios";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Redux-toolkit/userSlice";
import UserContext from "../useContext/Context";

const SidebarNav = () => {
  const { token } = useContext(UserContext);

  const navigate = useNavigate();

  // console.timeLog("answer time");
  // console.timeEnd("answer time");

  console.log(token)

  const data = useSelector((state) => state.users.user);
  console.log(data);

  const dispatch = useDispatch();
  const Logout = () => {
    if (data.user.email === "dodgeadmin@yopmail.com") {
      axios
        .post("https://dodgeqr.prometteur.in/api/admin/logout", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          if(res.status === 200){
            dispatch(logout());
            localStorage.clear();
          }
          
        })
        .catch((err) => {
          console.log(err);
        });

      
    } else {
      axios
        .post("https://dodgeqr.prometteur.in/api/user/logout" , {
          headers: {
            Authorization:token,
          }
        } )
        .then((res) => {
          console.log(" user logout Suucessfully");
        })

      localStorage.clear();
    }

    navigate("/");
    alert("logout Succesfull");
  };

  return (
    <nav className="bg-light    ">
      <div className="mx-5 d-flex">
        <div className=" me-auto my-2">
          <h2 className="align-items-center ">
            Hi, <span></span>
          </h2>
        </div>
        <ul className="list-unstyled">
          <li className="nav-item dropdown mt-3" style={{ border: "none" }}>
            <a
              className="nav-link dropdown-toggle text-dark text-decoration-none"
              href="/"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink to="/profile">
                <li className="ms-2">
                  <i className="fas fa-user"></i> My Profile
                </li>
              </NavLink>
              <li className="ms-2">
                <i className="fas fa-user-cog"></i> Account Setting
              </li>

              <li onClick={Logout} className="ms-2">
                <i className="fas fa-sign-out-alt"></i>
                Logout
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarNav;

import axios from "axios";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Redux-toolkit/userSlice";
import UserContext from "../useContext/Context";

const SidebarNav = () => {
  const { token } = useContext(UserContext);

  const navigate = useNavigate();

  console.log(token)

  const dispatch = useDispatch()
  const Logout = () => {
    axios
      .post("https://dodgeqr.prometteur.in/api/admin/logout", {
        headers: {
          Authorization: token,
        },
        data: {
          token,
        },
      })
      .then((res) => {
        dispatch(logout())
      })
      .catch((err) => {
        console.log(err);
      });

    localStorage.clear();
    navigate("/");
    alert("logout Succesfull");
  };

  return (
    <nav className="bg-light    ">
      <div className="mx-5 d-flex">
        <div className=" me-auto my-2">
          <h2 className="align-items-center ">
            Hi, <span>Lakhan Doe</span>
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

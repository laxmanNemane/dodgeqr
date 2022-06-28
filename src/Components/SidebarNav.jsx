import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../commen/API";
import Sidebar from "./Sidebar";

const SidebarNav = ({ authtoken }) => {
  const navigate = useNavigate();

  const logout = async () => {
    let res = await axios.post(
      `${API_URL}/admin/logout`,
      {
        token: {
          authtoken,
        },
      },
      {
        headers: {
          Authorization: authtoken,
        },
      }
    );
    console.log(res);
    localStorage.removeItem("token");
    navigate("/");
    alert("logout is successfully");
  };

  return (
    <header
      className="d-flex  bg-secondary "
      style={{ width: "100%", height: "80px" }}
    >
      <Sidebar />

      <div className="header-left me-auto  pt-3  ">
        <h2 className="align-items-center ms-3">
          Hi, <span>Lakhan Doe</span>
        </h2>
      </div>
      <div className="header-right me-5 d-flex  align-items-center ">
        <div className="m">
          <ul className="list-unstyled d-flex text-white    ">
            <li className="dropdown notoi-li mx-5  text-dark ">
           
              <i className="fas fa-bell text-dark"></i>
              {/* </a> */}
              <ul
                className="dropdown-menu nofify-ul"
                aria-labelledby="dropdownNotification"
              >
                <li className="title-li">Notification</li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex">
                    <div className="noti-left">
                      <span className="sp-1">
                        <i className="far fa-comment-dots"></i>
                      </span>
                    </div>
                    <div className="noti-right">
                      <span>04:10 PM</span>
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex">
                    <div className="noti-left">
                      <span className="sp-2">
                        <i className="far fa-comment-dots"></i>
                      </span>
                    </div>
                    <div className="noti-right">
                      <span>03:10 PM</span>
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex">
                    <div className="noti-left">
                      <span className="sp-3">
                        <i className="far fa-comment-dots"></i>
                      </span>
                    </div>
                    <div className="noti-right">
                      <span>01:10 PM</span>
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex">
                    <div className="noti-left">
                      <span className="sp-4">
                        <i className="far fa-comment-dots"></i>
                      </span>
                    </div>
                    <div className="noti-right">
                      <span>12:10 PM</span>
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex ">
                    <div className="noti-left">
                      <span className="sp-5">
                        <i className="far fa-comment-dots h1 me-2 mt-2"></i>
                      </span>
                    </div>
                    <div className="noti-right">
                      <span>11:10 AM</span>
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item">
                    <div className="noti-left ">
                      User
                      {/* <img src={avatars1Img} alt="user photo" /> */}
                    </div>
                    <div className="noti-right">
                      <span>11:10 AM</span>
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="img-li dropdown text-dark">
              <a
                className="dropdown-toggle"
                id="dropdownProfile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* <img src={avatars1Img} alt="user photo" /> */}
              </a>
              <ul
                className="dropdown-menu profile-ul"
                aria-labelledby="dropdownProfile"
              >
                <li>
                  <a className="dropdown-item">
                    <i className="fas fa-user"></i> My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <i className="fas fa-envelope-open-text"></i> Inbox
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <i className="fas fa-user-cog"></i> Account Setting
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="ms-2 text-dark text-decoration-none"
                    onClick={logout}
                  >
                    <i className="fas fa-sign-out-alt"></i> Log Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default SidebarNav;

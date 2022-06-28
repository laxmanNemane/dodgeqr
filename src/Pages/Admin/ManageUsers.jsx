import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../commen/API";
import SidebarNav from "../../Components/SidebarNav";

const ManageUsers = ({ authtoken }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/users`, {
        headers: {
          Authorization: authtoken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(users)
  return (
    <>
      <div>
        <SidebarNav />
      </div>
      <div
        className="ap-com container-main ms-auto me-5"
        style={{ width: "80%" }}
      >
        <div className="ap-com sm-com-heading mb-4 text-start">
          <h5 className="pt-4">Manage Users</h5>
        </div>
        <div className="ap-com table-panel table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Primary Number</th>
                <th scope="col">Secondary WhatsApp Number</th>
                <th scope="col">Emergency Contact</th>
                <th scope="col">Address for delivery of sticker</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {users &&
              users.map((user, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>(+1) {user.whatsapp_primary}</td>
                      <td> {user.whatsapp_secondary} </td>
                      <td>
                        <i>Not available</i>
                      </td>
                      <td></td>
                      <td className="text-center">
                        <div className="action-div dropdown">
                          <button
                            className=""
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ border: "none" }}
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <a className="dropdown-item">
                                <i className="fas fa-eye"></i> View
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item">
                                <i className="fas fa-pencil-alt"></i> Update
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item">
                                <i className="fas fa-trash-alt"></i> Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
           
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;

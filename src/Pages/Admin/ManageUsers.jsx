// import axios from "axios";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Index from "../../HOC_Component/Index";
import UserContext from "../../useContext/Context";
// import { API_URL } from "../../commen/API";

const ManageUsers = () => {
  const { token, manageusers, setManageusers } = useContext(UserContext);
  // console.log(token);

  console.log(manageusers.length);

  useEffect(() => {
    axios
      .get("https://dodgeqr.prometteur.in/api/users", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setManageusers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  // console.log(manageusers);

  return (
    <>
      <div className="ap-com ms-5 ">
        <div className="ap-com sm-com-heading mb-4 text-start">
          <h5 className="pt-4">Manage Users</h5>
        </div>
        <div className="ap-com table-panel  table-responsive">
          <table className="table table-bordered ">
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

            {manageusers.map((user, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.whatsapp_primary}</td>
                    <td>{user.whatsapp_secondary} </td>
                    <td>{user.emergency_contact}</td>
                    <td>{user.address}</td>
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
                            <a className="dropdown-item" href="/">
                              <i className="fas fa-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              <i className="fas fa-pencil-alt"></i> Update
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
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

const Users = Index(ManageUsers);
export default Users;

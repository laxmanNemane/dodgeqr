import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Index from "../../HOC_Component/Index";
import UserContext from "../../useContext/Context";
import AddPackages from "./PopupBoxes/AddPackages";

const ManagePakages = () => {
  //token getting from usecontext
  const { token } = useContext(UserContext);

  //store value of all packages
  const [managePackage, setManagePackage] = useState([]);

  // get packages API
  useEffect(() => {
    axios
      .get("https://dodgeqr.prometteur.in/api/packages", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setManagePackage(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token, setManagePackage]);

  // console.log(managePackage);

  return (
    <div className="ms-3">
      <div className="">
        <div className="d-flex">
          <div className="ap-com sm-com-heading me-auto   text-start">
            <p className="pt-4">Manage Packages</p>
          </div>
          <div className="my-3 me-5">
            <AddPackages
              managePackage={managePackage}
              setManagePackage={setManagePackage}
            />
          </div>
        </div>
        <div className="ap-com table-panel ">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                <th></th>
              </tr>
            </thead>

            {managePackage.map((element, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{element.title}</td>
                    <td>{element.description}</td>
                    <td>{element.price}</td>
                    <td className="">
                      <div className="action-div dropdown">
                        <button
                          className=""
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
                              <i className="fas fa-check"></i> Active
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              <i className="fas fa-ban"></i> Deactive
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              <i className="fas fa-info"></i> Show
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
    </div>
  );
};

const Packages = Index(ManagePakages);

export default Packages;

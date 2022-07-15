import { Spin } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import Index from "../../HOC_Component/Index";
import { callPackageList } from "../../Redux-toolkit/PackageSlice";
import UserContext from "../../useContext/Context";
import AddPackages from "./PopupBoxes/AddPackages";

const ManagePakages = () => {
  //token getting from usecontext
  const { token } = useContext(UserContext);

  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [element, setElement] = useState();

  //store value of all packages
  const [managePackage, setManagePackage] = useState([]);

  const dispatch = useDispatch();
  const { packages, status } = useSelector((state) => state.package);
  console.log(packages);

  const navigate = useNavigate()

  // const callMessageApi = () => {
  //   axios
  //     .get("https://dodgeqr.prometteur.in/api/packages", {
  //       headers: {
  //         Authorization: token,
  //       },
  //     })
  //     .then((res) => {
  //       setManagePackage(res.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

 


  const  getPackagetoredux = ()=>{

    dispatch(callPackageList()).then((result) => {
      console.log(result); // => 233
    })
    .catch((error) => {
      navigate("/") // if there is an error
      console.error(error); 
    });
  }

  // get packages API
  useEffect(() => {
    // callMessageApi();
    getPackagetoredux()
   
  }, [show]);

  const OnupdateMessage = (id, data) => {
    setId(id);
    setElement(data);
    setShow(true);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://dodgeqr.prometteur.in/api/admin/package/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        // console.log(res.data);
        dispatch(callPackageList());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpen = () => {
    setId("");
    setShow(true);
  };
  // console.log(managePackage);

  return (
    <div className="ms-3">
      <div className="">
        <div className="d-flex">
          <div className="ap-com sm-com-heading me-auto   text-start">
            <p className="pt-4">Manage Packages</p>
          </div>
          <div className="my-3 me-5">
            <button className="btn btn-outline-primary " onClick={handleOpen}>
              Add New Package
            </button>
            <AddPackages
              managePackage={managePackage}
              setManagePackage={setManagePackage}
              show={show}
              setShow={setShow}
              id={id}
              element={element}
            />
          </div>
        </div>
        {status === "loading" ? (
           <h4 style={{textAlign:"center" , margin:"10% 0 0 0"}}> <Spin tip="loading...." size="large" /></h4>
        ) : (
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

              {packages &&
                packages.map((element, index) => {
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
                              <li
                                className="my-2 mx-2"
                                onClick={() =>
                                  OnupdateMessage(element._id, element)
                                }
                              >
                                <i className="fas fa-pencil-alt mx-2"></i>{" "}
                                Update
                              </li>
                              <li
                                className="my-2 mx-2"
                                onClick={() => onDelete(element._id)}
                              >
                                <i className="fas fa-trash-alt mx-2"></i> Delete
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
        )}
      </div>
    </div>
  );
};

const Packages = Index(ManagePakages);

export default Packages;

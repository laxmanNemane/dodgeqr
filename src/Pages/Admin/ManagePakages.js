import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Index from "../../HOC_Component/Index";
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

  const callMessageApi = () => {
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
  };

  // get packages API
  useEffect(() => {
    callMessageApi();
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
        console.log(res.data);
        callMessageApi();
      })
      .catch((err) => {
        console.log(err);
      });
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

            {managePackage &&
              managePackage.map((element, index) => {
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
                              <i className="fas fa-pencil-alt mx-2"></i> Update
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
      </div>
    </div>
  );
};

const Packages = Index(ManagePakages);

export default Packages;

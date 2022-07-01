import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Index from "../../HOC_Component/Index";
import UserContext from "../../useContext/Context";
import AddSubcategory from "./PopupBoxes/AddSubcategory";

const SubCategories = () => {
  const { token} = useContext(UserContext);

  // console.log(token);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://dodgeqr.prometteur.in/api/subcategory", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  console.log(category)

  return (
    <>
      <div className="ms-3">
        <div className="ap-com  ">
          <div className="d-flex">
            <div className="ap-com sm-com-heading me-auto   text-start">
              <p className="pt-4">Manage Subcategory</p>
            </div>
            <div className="my-3 me-5">
              <AddSubcategory  category={category} setCategory={setCategory}/>
            </div>
          </div> 
          <div className="ap-com table-panel table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" width="20%">
                    Title
                  </th>
                  <th scope="col" width="20%">
                    Category
                  </th>
                  <th scope="col" width="60%">
                    Message
                  </th>
                  <th scope="col" width="20%">
                    Action
                  </th>
                  <th></th>
                </tr>
              </thead>
              {category.map((element, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{element.title}</td>
                      <td>{element.category}</td>
                      <td>{element.messages_id.map((m) => m.message).join(', ')}</td>

                      <td>
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
    </>
  );
};

const Categories = Index(SubCategories);
export default Categories;

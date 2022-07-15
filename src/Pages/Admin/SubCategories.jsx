import { Button, Spin } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Index from "../../HOC_Component/Index";
import { callSubcategoryList } from "../../Redux-toolkit/SubcategorySlice";
import UserContext from "../../useContext/Context";
import AddSubcategory from "./PopupBoxes/AddSubcategory";

const SubCategories = () => {
  const { token } = useContext(UserContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [id, setId] = useState();
  const [element, setElement] = useState();

  const dispatch = useDispatch();
  const { subCategoryList, status } = useSelector((state) => state.subCategory);
  // console.log(subCategoryList);

  useEffect(() => {
    dispatch(callSubcategoryList());
  }, [isModalVisible]);

  const onDelete = (id) => {
    if (
      window.confirm(
        "Are you sure that tou wanted to delete that categories  record "
      )
    ) {
      axios
        .delete(`https://dodgeqr.prometteur.in/api/subcategory/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res.data);
          // dispatch(callSubcategoryList());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onUpdate = (id, data) => {
    setId(id);
    setElement(data);
    setIsModalVisible(true);
  };

  const handleOpen = () => {
    setId("");
    setElement("");
    setIsModalVisible(true);
  };

  // console.log(category);
  if (status === "loading") {
    return (
      <h4 style={{ textAlign: "center", margin: "10% 0 0 0" }}>
        {" "}
        <Spin tip="loading...." size="large" />
      </h4>
    );
  }

  return (
    <>
      <div className="ms-3">
        <div className="ap-com  ">
          <div className="d-flex">
            <div className="ap-com sm-com-heading me-auto   text-start">
              <p className="pt-4">Manage Subcategory</p>
            </div>
            <div className="my-3 me-5">
              <Button onClick={handleOpen}>Add New Subcategory</Button>
            </div>
          </div>
          {/* {status === "loading" ? (
            <h4 style={{textAlign:"center" , margin:"10% 0 0 0"}}> <Spin tip="loading...." size="large" /></h4>
          ) : ( */}
          <div className="ap-com table-panel table">
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
              {subCategoryList &&
                subCategoryList.map((element, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{element.title}</td>
                        <td>
                          {element.category === 1 ? "Movable" : "Immovable"}
                        </td>
                        <td>
                          {element.messages_id &&
                            element.messages_id
                              .map((m) => m.message)
                              .join(", ")}
                        </td>

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
                              <li
                                onClick={() => onUpdate(element._id, element)}
                              >
                                <i className="fas fa-pencil-alt mx-2"></i>{" "}
                                Update
                              </li>
                              <li onClick={() => onDelete(element._id)}>
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
          {/* )} */}
        </div>
      </div>
      <AddSubcategory
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        id={id}
        element={element}
      />
    </>
  );
};

const Categories = Index(SubCategories);
export default Categories;

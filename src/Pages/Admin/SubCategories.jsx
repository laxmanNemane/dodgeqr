import { Button, Spin } from "antd";
import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveSubcategory } from "../../commen/API";
import Index from "../../HOC_Component/Index";
import { callSubcategoryList } from "../../Redux-toolkit/SubcategorySlice";
import AddSubcategory from "./PopupBoxes/AddSubcategory";

const SubCategories = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [id, setId] = useState();
  const [element, setElement] = useState();

  const dispatch = useDispatch();
  const { subCategoryList, status } = useSelector((state) => state.subCategory);
  // console.log(subCategoryList);

  const [updateStatus, setUpdateStatus] = useState(false);

  useEffect(() => {
    dispatch(callSubcategoryList());
    setUpdateStatus(false)
  }, [isModalVisible ,updateStatus]);

  const onDelete = (id) => {
    RemoveSubcategory(id);
    dispatch(callSubcategoryList());
    setUpdateStatus(true)
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

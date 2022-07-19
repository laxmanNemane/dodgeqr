import { Form, Modal, Radio } from "antd";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callSubcategoryList } from "../../../Redux-toolkit/SubcategorySlice";

const SelectCategory = ({ show, setShow, id }) => {
  // const [show , setShow] = useState(false)

  const dispatch = useDispatch();
  const { subCategoryList, status, deleteRes } = useSelector(
    (state) => state.subCategory
  );
  //   console.log(data);

  const handleCancel = () => {
    setShow(false);
  };

  const handleOk = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    console.log("hello");
  };
  const handleMessages = (e) => {
    if (id) {
      axios
        .patch(
          `https://dodgeqr.prometteur.in/api/user/link_device/${id}`,
          { device_category: e.target.value },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    console.log(e.target.value);
    handleCancel();
  };

  useEffect(() => {
    dispatch(callSubcategoryList());
  }, []);
  return (
    <>
      <Modal
        title="Select"
        visible={show}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Formik
          initialValues={{
            category: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.category) {
              errors.title = "required";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, setFieldValue, handleChange, handleSubmit }) => {
            return (
              <div>
                <Form className="text-center">
                  <label className="fw-bold">Select Category</label>
                  <br />
                  <br />

                  <Radio.Group
                    onChange={handleChange}
                    name="category"
                    value={values.category}
                    className="my-3"
                  >
                    {subCategoryList &&
                      subCategoryList.map((ele, index) => {
                        return (
                          <Radio
                            key={index}
                            value={ele._id}
                            style={{ width: "200px" }}
                            className="shadow px-3 py-4"
                            onChange={(e) => handleMessages(e)}
                          >
                            {" "}
                            {ele.title}
                          </Radio>
                        );
                      })}
                  </Radio.Group>

                  <br />

                  <button
                    type="submit"
                    className="btn btn-outline-success me-2 my-3  "
                    onSubmit={handleSubmit}
                  >
                    Link Category
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default SelectCategory;

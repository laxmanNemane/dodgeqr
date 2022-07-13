import axios from "axios";
import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Checkbox, Modal } from "antd";
import UserContext from "../../../useContext/Context";
import { ErrorMessage, Field, Form, Formik } from "formik";

const AddPackages = ({
  managePackage,
  setManagePackage,
  setShow,
  show,
  element,
  id,
}) => {
  // modal functioanlity
  const handleClose = () => setShow(false);

  //geting token from global store
  const { token } = useContext(UserContext);

  const handleSubmit = (values) => {
    console.log(values);

    if (id) {
      axios
        .patch(
          `https://dodgeqr.prometteur.in/api/admin/package/${id}`,
          values,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          // setMessageList([...messageslist, res.data]);
          console.log(res.data);
          handleClose();
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      axios
        .post("https://dodgeqr.prometteur.in/api/admin/package", values, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          // setManagePackage(res.data);
          console.log(token);
        })
        .catch((err) => {
          console.log(err);
          console.log(token);
        });
      handleClose();
    }
  };

  console.log(element);

  // console.log(element.is_message);

  return (
    <>
      <Modal
        destroyOnClose={true}
        title="Add Package"
        visible={show}
        onCancel={() => setShow(false)}
        footer={null}
      >
        {id ? (
          <Formik
            initialValues={{
              title: element.title,
              description: element.description,
              price: element.price,
              is_message: element.is_message,
              is_call: element.is_call,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.title) {
                errors.title = "required";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ values, errors, handleSubmit, ErrorMessage, handleChange }) => {
              return (
                <div>
                  <Form>
                    <Field
                      className="form-control mb-3"
                      // as="textarea"
                      id="title"
                      name="title"
                      value={values.title}
                      placeholder="Write Title Here"
                    />
                    <Field
                      className="form-control mb-3"
                      // as="textarea"
                      id="description"
                      name="description"
                      value={values.description}
                      placeholder="Write descrption Here"
                    />
                    <Field
                      className="form-control mb-3"
                      // as="textarea"
                      id="price"
                      name="price"
                      value={values.price}
                      placeholder="Write price Here"
                    />

                    <Checkbox
                      onChange={handleChange}
                      defaultChecked={element.is_message}
                      id="is_message"
                      name="is_message"
                    >
                      Message
                    </Checkbox>

                    <Checkbox
                      onChange={handleChange}
                      defaultChecked={element.is_call}
                      id="is_call"
                      name="is_call"
                    >
                      Call
                    </Checkbox>

                    {/* <ErrorMessage name="message" /> */}
                    <button
                      type="submit"
                      className="btn btn-outline-success me-2 form-control"
                      onSubmit={handleSubmit}
                    >
                      update Package
                    </button>
                  </Form>
                </div>
              );
            }}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              title: "",
              description: "",
              price: "",
              is_message: false,
              is_call: false,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.title) {
                errors.title = "required";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ values, errors, handleSubmit, ErrorMessage, handleChange }) => {
              return (
                <div>
                  <Form>
                    <Field
                      className="form-control mb-3"
                      // as="textarea"
                      id="title"
                      name="title"
                      value={values.title}
                      placeholder="Write Title Here"
                    />
                    <Field
                      className="form-control mb-3"
                      // as="textarea"
                      id="description"
                      name="description"
                      value={values.description}
                      placeholder="Write descrption Here"
                    />
                    <Field
                      className="form-control mb-3"
                      // as="textarea"
                      id="price"
                      name="price"
                      value={values.price}
                      placeholder="Write price Here"
                    />

                    <Checkbox onChange={handleChange} id="is_message">
                      Message
                    </Checkbox>

                    <Checkbox onChange={handleChange} id="is_call">
                      Call
                    </Checkbox>

                    {/* <ErrorMessage name="message" /> */}
                    <button
                      type="submit"
                      className="btn btn-outline-success me-2 form-control"
                      onSubmit={handleSubmit}
                    >
                      Add Package
                    </button>
                  </Form>
                </div>
              );
            }}
          </Formik>
        )}
      </Modal>
    </>
  );
};

export default AddPackages;

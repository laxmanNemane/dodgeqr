import { Modal } from "antd";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import UserContext from "../../../useContext/Context";

const AddMessages = ({ show, setShow, id, element }) => {
  const handleClose = () => {
    setShow(false);
  };

  const { token } = useContext(UserContext);

  const postMessage = (values) => {
    console.log(values);
    handleClose();

    // axios
    //   .post(
    //     "https://dodgeqr.prometteur.in/api/message",
    //     values,
    //     {
    //       headers: {
    //         Authorization: token,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     // setMessageList([...messageslist, res.data]);
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
    //   // ("");
    //   handleClose();
  };

  const UpdateMessage = (values) => {
    console.log(values);
    handleClose();

    // axios
    //   .patch(
    //     `https://dodgeqr.prometteur.in/api/message/${id}`,
    //    values,
    //     {
    //       headers: {
    //         Authorization: token,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     // setMessageList([...messageslist, res.data]);
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
    //   handleClose();
  };

  // console.log(id);

  const handleSubmit = (values) => {
    if (!id) {
      axios
        .post("https://dodgeqr.prometteur.in/api/message", values, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          // setMessageList([...messageslist, res.data]);
          console.log(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
      // ("");
      handleClose();
    } else {
      axios
        .patch(`https://dodgeqr.prometteur.in/api/message/${id}`, values, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          // setMessageList([...messageslist, res.data]);
          console.log(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
      handleClose();
    }
    console.log("values of ", values);
    handleClose();
  };

  return (
    <>
      {id ? (
        <Modal
          destroyOnClose={true}
          title="Add message"
          visible={show}
          onCancel={() => setShow(false)}
          footer={null}
        >
          <Formik
            initialValues={{ message: element.message }}
            validate={(values) => {
              const errors = {};
              if (!values.message) {
                errors.message = "required";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ values, errors, handleSubmit }) => {
              return (
                <div>
                  <Form>
                    <Field
                      className="form-control mb-3"
                      as="textarea"
                      id="message"
                      name="message"
                      value={values.message}
                      placeholder="write Message here"
                    />
                    <ErrorMessage name="message" />
                    <button
                      type="submit"
                      className="btn btn-outline-success me-2 form-control"
                      onSubmit={handleSubmit}
                    >
                      Update Message
                    </button>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </Modal>
      ) : (
        <Modal
          destroyOnClose={true}
          title="Add message"
          visible={show}
          onCancel={() => setShow(false)}
          footer={null}
        >
          <Formik
            initialValues={{ message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.message) {
                errors.message = "required";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ values, errors }) => {
              return (
                <div>
                  <Form>
                    <Field
                      className="form-control mb-3"
                      as="textarea"
                      id="message"
                      name="message"
                      value={values.message}
                      placeholder="write Message here"
                    />
                    <ErrorMessage name="message" />
                    <button
                      type="submit"
                      className="btn btn-outline-success me-2 form-control"
                      onSubmit={handleSubmit}
                    >
                      Add Message
                    </button>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </Modal>
      )}
      {/* {id != null ? (
      <Modal show={show} onHide={handleClose}   destroyOnClose={true}>
        <Formik
          initialValues={{ message: `${element.message}` }}
          validate={(values) => {
            const errors = {};
            if (!values.message) {
              errors.message = "required";
            }
            return errors;
          }}
          onSubmit={AddMessage}
          enableReinitialize
        >
          {({ values }) => (
          
              <Modal.Header>
                <h5>Add Message</h5>
                <AiOutlineClose
                  className="mb-2 fw-bold"
                  onClick={handleClose}
                />
           
              <Modal.Body>
                <Form>
                  <Field
                    className="form-control mb-3"
                    as="textarea"
                    id="message"
                    name="message"
                    value={values.message}
                    placeholder="write Message here"
                  />
                  <ErrorMessage name="message" />
                  <button
                    type="submit"
                    className="btn btn-outline-success me-2 form-control"
                    onSubmit={AddMessage}
                  >
                    Update Message
                  </button>
                </Form>
              </Modal.Body>
          )}
        </Formik>
      </Modal>
      ) : (
        <Formik
          initialValues={{ message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.message) {
              errors.message = "required";
            }
            return errors;
          }}
          onSubmit={AddMessage}
        >
          {({ values, resetForm }) => (
            <Modal show={show} onHide={handleClose}   destroyOnClose={true}>
              <Modal.Header>
                <h5>Add Message</h5>
                <AiOutlineClose
                  className="mb-2 fw-bold"
                  onClick={handleClose}
                />
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Field
                    className="form-control mb-3"
                    as="textarea"
                    id="message"
                    value={values.message}
                    placeholder="write Message here"
                  />
                  <ErrorMessage name="message" />
                  <button
                    type="submit"
                    className="btn btn-outline-success me-2 form-control"
                    onSubmit={AddMessage}
                  >
                    Add Message
                  </button>
                </Form>
              </Modal.Body>
            </Modal>
          )}
        </Formik>
      )} */}
    </>
  );
};

export default AddMessages;

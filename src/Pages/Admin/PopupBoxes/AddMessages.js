import { Modal } from "antd";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import UserContext from "../../../useContext/Context";

const AddMessages = ({ show, setShow, id, element }) => {
  const handleClose = () => {
    setShow(false);
  };

  const { token } = useContext(UserContext);

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
    </>
  );
};

export default AddMessages;

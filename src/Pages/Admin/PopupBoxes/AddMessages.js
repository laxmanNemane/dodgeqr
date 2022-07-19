import { Modal } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { UpdateAddMessages } from "../../../commen/API";

const AddMessages = ({
  show,
  setShow,
  id,
  element,
  updateStatus,
  setUpdateStatus,
}) => {
  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (values) => {
    UpdateAddMessages(values, id);
    handleClose();
    setUpdateStatus(true);
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
            {({ values, handleSubmit }) => {
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

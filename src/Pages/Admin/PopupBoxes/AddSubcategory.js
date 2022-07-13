import axios from "axios";
import UserContext from "../../../useContext/Context";
import { Field, Form, Formik } from "formik";
import { useContext, useEffect } from "react";
import { Modal, Radio, Select } from "antd";
const { Option } = Select;

const AddSubcategory = ({ isModalVisible, setIsModalVisible, element, id }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { token, messageslist, setMessageList } = useContext(UserContext);



  useEffect(() => {
    axios
      .get("https://dodgeqr.prometteur.in/api/message-list", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setMessageList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token, setMessageList]);

  console.log(element);

  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = "title is required";
    }
    if (!values.Category) {
      errors.title = "title is required";
    }
    if (!values.message_id) {
      errors.messages_id = "title is required";
    }
    return errors;
  };

  console.log(id);

  const handleMessages = (e, setFieldValue) => {
    setFieldValue("messages_id", e);
    console.log(e)
  };

  const handleSubmit = (values, action) => {
    console.log(values);
    if (id) {
      console.log(values);
      axios
        .patch(
          `https://dodgeqr.prometteur.in/api/subcategory/${id}`,
          values,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          handleCancel();

        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(values);
      axios
        .post(
          "https://dodgeqr.prometteur.in/api/subcategory",
          values,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          handleCancel();
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>

      {id ?
        (
          <Modal
            destroyOnClose={true}
            title="Add message"
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
          >
            <Formik
              initialValues={{
                title: element.title,
                category: element.category,
                messages_id: element.messages_id,

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
              {({ values, errors, setFieldValue, handleChange }) => {
                return (
                  <div>
                    <Form>
                      <Field
                        className="form-control mb-3"
                        id="title"
                        name="title"
                        value={values.title}
                        placeholder="write Title here"
                      />
                      {/* <ErrorMessage name="message" /> */}

                      <label>Category</label><br />
                      <Radio.Group
                        onChange={handleChange}
                        name="category"
                        value={values.category}
                      >
                        <Radio value={1}>Movable</Radio>
                        <Radio value={2}>Immovable</Radio>
                      </Radio.Group>
                      <br />
                      <br />

                      <Select
                        mode="multiple"
                        allowClear
                        placeholder="Please select"
                        id="messages_id"
                        name="messages_id"
                        defaultValue={element.messages_id.map((ele) => {
                          return (
                            <Option key={ele._id} values={ele._id}>
                              {ele._id}
                            </Option>
                          );
                        })}
                        style={{ width: "100%" }}
                        onChange={(e) => handleMessages(e, setFieldValue)}
                        tokenSeparators={[","]}
                      >
                        {messageslist &&
                          messageslist.map((ele, index) => {
                            return (
                              <Option key={index} value={ele._id}>
                                {ele.message}
                              </Option>
                            );
                          })}
                      </Select>

                      <button
                        type="submit"
                        className="btn btn-outline-success me-2  my-3 form-control"
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
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
          >
            <Formik
              initialValues={{
                title: "",
                category: "",
                messages_id: []
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
              {({ values, errors, setFieldValue, handleChange, handleSubmit }) => {
                return (
                  <div>
                    <Form>
                      <Field
                        className="form-control mb-3"
                        id="title"
                        name="title"
                        value={values.title}
                        placeholder="write Title here"
                      />
                      {/* <ErrorMessage name="message" /> */}

                      <label>Category</label><br />
                      <Radio.Group
                        onChange={handleChange}
                        name="category"
                        value={values.category}
                      >
                        <Radio value={1}>Movable</Radio>
                        <Radio value={2}>Immovable</Radio>
                      </Radio.Group>

                      <br />
                      <br />

                      <Select
                        mode="multiple"
                        allowClear
                        placeholder="Please select"
                        id="message_id"
                        name="message_id"
                        style={{ width: "100%" }}
                        onChange={(e) => handleMessages(e, setFieldValue)}
                        tokenSeparators={[","]}
                      >
                        {messageslist &&
                          messageslist.map((ele, index) => {
                            return (
                              <Option key={index} value={ele._id}>
                                {ele.message}
                              </Option>
                            );
                          })}
                      </Select>

                      <button
                        type="submit"
                        className="btn btn-outline-success me-2 my-3 form-control"
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
        )
      }

    </>
  );
};

export default AddSubcategory;


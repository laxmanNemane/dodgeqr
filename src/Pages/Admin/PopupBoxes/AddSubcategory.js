import axios from "axios";
import UserContext from "../../../useContext/Context";
import { Field, Form, Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { Modal, Radio, Select } from "antd";
import { UpdateAddSubcategory } from "../../../commen/API";
import { useDispatch } from "react-redux";
import { PostSubcategory } from "../../../Redux-toolkit/SubcategorySlice";
const { Option } = Select;

const AddSubcategory = ({ isModalVisible, setIsModalVisible, element, id }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { token, messageslist, setMessageList } = useContext(UserContext);
  // const [messages, setMessages] = useState([]);
  let children = [];

  const dispatch = useDispatch()

  // console.log(messageslist);

  // messageslist.map((msg) => children.push(msg._id));

  useEffect(() => {
    axios
      .get("https://dodgeqr.prometteur.in/api/message-list", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setMessageList(res.data);
        // setMessages(res.data);
        // console.log(messages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token, setMessageList]);

  // console.log(element);

  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = "title is required";
    }

    if (!values.Category) {
      errors.Category = "category is required";
    }
    if (!values.messages_id) {
      errors.messages_id = "title is required";
    }
    return errors;
  };

  // console.log(id);
  // console.log(element);
  let message;

  const handleMessages = (e, setFieldValue) => {
    message = e;
    setFieldValue("messages_id", e);
    console.log(e);
  };

  const handleSubmit = (values) => {
    // console.log(values);
    
    UpdateAddSubcategory(values , id)
    handleCancel();
 
  };

  // console.log(element.messages_id.map((ele)=>ele._id))
  return (
    <>
      {id ? (
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
              messages_id: element.messages_id.map((ele) => ele._id),
            }}
            // validate={validate}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              setFieldValue,
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
            }) => {
              return (
                <div>
                  <Form>
                    <Field
                      className="form-control mb-3"
                      id="title"
                      name="title"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.title}
                      placeholder="write Title here"
                    />
                    {errors.title && touched.title ? (
                      <h5>{errors.title}</h5>
                    ) : null}
                    {/* <ErrorMessage name="message" /> */}

                    <label>Category</label>
                    <br />
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
                          <Option key={ele._id}>
                            {/* {console.log(ele._id)} */}
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
                      onClick={handleSubmit}
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
              messages_id: [],
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
            {({
              values,
              errors,
              setFieldValue,
              handleChange,
              handleSubmit,
            }) => {
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

                    <label>Category</label>
                    <br />
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
      )}
    </>
  );
};

export default AddSubcategory;

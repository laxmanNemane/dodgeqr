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

  // console.log(token);
  // console.log(flag);

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
  };

  console.log("outside of handlesubmit");
  const handleSubmit = (values) => {
    // alert("clicked handlesubmit")
    console.log(values);
    console.log("inside handlesubmit");
    // if (id) {
    //   console.log(id)
    //   console.log(values);
    //   alert("clicked")
    // axios
    // .patch(
    //   `https://dodgeqr.prometteur.in/api/subcategory/${id}`,
    //   values,
    //   {
    //     headers: {
    //       Authorization: token,
    //     },
    //   }
    // )
    // .then((res) => {
    //   console.log(res.data);
    //   handleCancel();

    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    // } else {
    //   console.log(values);
    //   axios
    //     .post(
    //       "https://dodgeqr.prometteur.in/api/subcategory",
    //       values,
    //       {
    //         headers: {
    //           Authorization: token,
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       handleCancel();
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  };

  return (
    <>
      {id ? (
        <Modal
          footer={null}
          title="Add Subcategory "
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Formik
            initialValues={{
              title: element.title,
              category: element.category,
              messages_id: element.messages_id,
            }}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              setFieldValue,
              handleSubmit,

              /* and other goodies */
            }) => {
              return (
                <Form>
                  <Field
                    className="form-control mb-3"
                    id="title"
                    name="title"
                    value={values.title}
                    placeholder="write Title here"
                  />

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
                    className="btn btn-outline-success me-2 my-3 form-control"
                    onClick={handleSubmit}
                  >
                    Update Message
                  </button>
                </Form>
              );
            }}
          </Formik>
        </Modal>
      ) : (
        <Modal
          footer={null}
          title="Add Subcategory "
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Formik
            initialValues={{
              title: "",
              category: "",
              messages_id: [],
            }}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              setFieldValue,
              handleSubmit,

              /* and other goodies */
            }) => {
              return (
                <Form>
                  <Field
                    className="form-control mb-3"
                    id="title"
                    name="title"
                    value={values.title}
                    placeholder="write Title here"
                  />

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

                  <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    id="messages_id"
                    name="messages_id"
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
                    Add Message
                  </button>
                </Form>
              );
            }}
          </Formik>
        </Modal>
      )}
    </>
  );
};

export default AddSubcategory;

//  <Modal
// footer={null}
// title="Add Subcategory "
// visible={isModalVisible}
// onOk={handleOk}
// onCancel={handleCancel}
// >
// <Formik
//   initialValues={initialValue}
//   validate={validate}
//   onSubmit={hanleSubmit}
// >
//   {({
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     setFieldValue,
//     handleSubmit,

/* and other goodies */
//   }) => {
//     return (
//       <Form>
//         <Field
//           className="form-control mb-3"
//           id="title"
//           name="title"
//           value={values.title}
//           placeholder="write Title here"
//         />

//         <label>Category</label>
//         <br />
//         <Radio.Group
//           onChange={handleChange}
//           name="Category"
//           value={values.Category}
//         >
//           <Radio value={1}>Movable</Radio>
//           <Radio value={2}>Immovable</Radio>
//         </Radio.Group>

//         <Select
//           mode="multiple"
//           allowClear
//           placeholder="Please select"
//           id="message_id"
//           name="message_id"
//           style={{ width: "100%" }}
//           onChange={(e) => handleMessages(e, setFieldValue)}
//           tokenSeparators={[","]}
//         >
//           {messageslist &&
//             messageslist.map((ele, index) => {
//               return (
//                 <Option key={index} value={ele._id}>
//                   {ele.message}
//                 </Option>
//               );
//             })}
//         </Select>

//         <button type="submit" onSubmit={hanleSubmit}>
//           Submit
//         </button>
//       </Form>
//     );
//   }}
// </Formik>
// </Modal>

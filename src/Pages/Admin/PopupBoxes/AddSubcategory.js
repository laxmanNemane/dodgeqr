import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Input, Modal, Radio, Select } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import axios from "axios";
import UserContext from "../../../useContext/Context";
const { Option } = Select;

const AddSubcategory = ({ isModalVisible, setIsModalVisible, element, id }) => {
  const showModal = () => {
    // console.log("clicked");
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [newonesubcategory, setNewOneSubCategory] = useState({
    title: "",
    category1: "",
  });

  const { token, messageslist, setCategory, setMessageList } =
    useContext(UserContext);

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

  const [one, setOne] = useState();

  const handleChange = (e) => {
    setNewOneSubCategory({
      ...newonesubcategory,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value) => {
    setOne(value);
  };

  console.log(one);

  console.log(messageslist);

  const postSubcategory = () => {
    axios
      .post(
        "https://dodgeqr.prometteur.in/api/subcategory",
        {
          title: newonesubcategory.title,
          category: newonesubcategory.category1,
          messages_id: one,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setCategory(res.data);
        handleCancel();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setNewOneSubCategory("");
    setOne("");
  };

  const updateSubcategory = (data, id) => {
    axios
      .patch(
        `https://dodgeqr.prometteur.in/api/subcategory/${id}`,
        {
          title: newonesubcategory.title,
          category: newonesubcategory.category1,
          messages_id: one,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    handleCancel();
    setNewOneSubCategory("");
    setOne("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id) {
      postSubcategory();
    } else {
      updateSubcategory(element, id);
    }
  };
  console.log(newonesubcategory);

  return (
    <>
      <Button onClick={showModal}>click me</Button>
      {!id ? (
        <Modal
          title="Add Subcategory "
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form>
            {/* title */}
            <label>Title</label>
            <Input
              placeholder="Basic usage"
              className="form-control"
              name="title"
              value={newonesubcategory.title}
              onChange={handleChange}
            />

            <br />
            <br />

            {/* movable or immovable */}
            <label>Category</label>
            <br />
            <Radio.Group
              onChange={handleChange}
              name="category1"
              value={newonesubcategory.category1}
            >
              <Radio value={1}>Movable</Radio>
              <Radio value={2}>Immovable</Radio>
            </Radio.Group>

            <br />
            <br />

            {/* select multi */}
            <label>Message</label>
            <Select
              className="control-form"
              mode="tags"
              allowClear
              placeholder="Please select"
              style={{ width: "100%" }}
              onChange={handleSelectChange}
              tokenSeparators={[","]}
            >
              {messageslist.map((ele, index) => {
                return (
                  <Option key={index} value={ele._id}>
                    {ele.message}
                  </Option>
                );
              })}
            </Select>

            <br />
            <br />

            <button
              placeholder="Add New"
              type="btn"
              className="btn btn-outline-success  px-3 w-100"
              onClick={handleSubmit}
            >
              Add New Category <CheckCircleTwoTone />
            </button>
          </Form>
        </Modal>
      ) : (
        <Modal
          title="Add Subcategory "
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {/*  */}
          <Form>
            {/* title */}
            <label>Title</label>
            <Input
              placeholder="Basic usage"
              className="form-control"
              name="title"
              defaultValue={element.title}
              onChange={(e) => handleChange(e)}
            />

            <br />
            <br />

            {/* movable or immovable */}
            <label>Category</label>
            <br />
            <Radio.Group onChange={handleChange} value={element.category}>
              <Radio value={1}>Movable</Radio>
              <Radio value={2}>Immovable</Radio>
            </Radio.Group>

            <br />
            <br />

            {/* select multi */}
            <label>Message</label>
            <Select
              className="control-form"
              mode="tags"
              allowClear
              defaultValue={element.messages_id.map((ele) => {
                return <Option key={ele.message}>{ele.message}</Option>;
              })}
              placeholder="Please select"
              style={{ width: "100%" }}
              onChange={handleSelectChange}
              tokenSeparators={[","]}
            >
              {messageslist.map((ele, index) => {
                return (
                  <Option key={index} value={ele.message}>
                    {ele.message}
                  </Option>
                );
              })}
            </Select>

            <br />
            <br />

            <button
              placeholder="Add New"
              type="btn"
              className="btn btn-outline-success  px-3 w-100"
              onClick={handleSubmit}
            >
              Update
            </button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default AddSubcategory;

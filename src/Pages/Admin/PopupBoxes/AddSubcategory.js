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
    Category: "",
  });

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

  const [one, setOne] = useState();

  const handleChange = (e) => {
    setNewOneSubCategory({
      ...newonesubcategory,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (values) => {
    setOne(values);
    // console.log(values)
  };

  // console.log(one);

  // console.log(messageslist);

  const postSubcategory = () => {
    console.log("one", one);
    axios
      .post(
        "https://dodgeqr.prometteur.in/api/subcategory",
        {
          title: newonesubcategory.title,
          category: newonesubcategory.Category,
          messages_id: one,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        // setCategory([...category, res.data]);

        handleCancel();
        setNewOneSubCategory("");
        setOne("");

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSubcategory = (data, id) => {
    console.log("update one", one);
    console.log("update newsubcategory one", newonesubcategory);

    // console.log(data)

    // console.log(element.title)
    // console.log(element.category)
    // console.log(element.messages_id.map((ele)=>ele._id))

    // console.log([data , newonesubcategory , one])

    axios
      .patch(
        `https://dodgeqr.prometteur.in/api/subcategory/${id}`,
        {
          title: newonesubcategory.title,
          category: newonesubcategory.Category,
          messages_id: one,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        handleCancel();
        setNewOneSubCategory("");
        setOne("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id) {
      postSubcategory();
    } else {
      updateSubcategory(element, id);
    }
  };
  // console.log(newonesubcategory);

  return (
    <>
      <Button onClick={showModal}>Add New Subcategory</Button>
      {!id ? (
        <Modal
        footer={null}
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
              name="Category"
              value={newonesubcategory.Category}
            >
              <Radio value={1}>Movable</Radio>
              <Radio value={2}>Immovable</Radio>
            </Radio.Group>

            <br />
            <br />

            {/* select multi */}
            <label>Message</label>
            <Select
              mode="multiple"
              allowClear
              placeholder="Please select"
              style={{ width: "100%" }}
              onChange={handleSelectChange}
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
        footer={null}
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
            <Radio.Group
              name="Category"
              onChange={handleChange}
              defaultValue={element.category}
            >
              <Radio value={1}>Movable</Radio>
              <Radio value={2}>Immovable</Radio>
            </Radio.Group>

            <br />
            <br />

            {/* select multi */}
            <label>Message</label>
            <Select
              mode="multiple"
              allowClear
              defaultValue={element.messages_id.map((ele) => {
                return (
                  <Option key={ele._id} values={ele._id}>
                    {ele._id}
                  </Option>
                );
              })}
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
              Update
            </button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default AddSubcategory;

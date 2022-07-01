import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

import Select from "react-select";
import UserContext from "../../../useContext/Context";

const AddSubcategory = ({ category, setCategory }) => {
  // modal functioanlity
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const { token, messageslist, setMessageList } = useContext(UserContext);

  const [newsubcategory, setNewSubcategory] = useState({
    title: "",
    category1: "",
  });

  ///api call for Messagaes which is used in input box
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

  const handleShow = () => {
    setShow(true);
  };

  //getting message here
  const [displayValue, getDisplayvalue] = useState();

  const handleChange = (e) => {
    getDisplayvalue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const handleInput = (e) => {
    const newData = { ...newsubcategory };
    newData[e.target.name] = e.target.value;
    setNewSubcategory(newData);
  };


  const AddNewSubCategory = (e) => {
    console.log(displayValue);
    e.preventDefault();
    axios
      .post(
        "https://dodgeqr.prometteur.in/api/subcategory",
        {
          title: newsubcategory.title,
          category: newsubcategory.category1,
          messages_id: displayValue,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setCategory([...category, res.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
    setNewSubcategory("");
   
  };

  return (
    <>
      <button className="btn btn-outline-primary" onClick={handleShow}>
        Add sub-Category
      </button>

      {/* modal body */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h5>Subcategory messages</h5>
          <AiOutlineClose className="mb-2 fw-bold" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <form>
            <label className="py-1 fw-bold"> &nbsp; Title: </label>
            <input
              className="form-control mb-3"
              type="text"
              name="title"
              value={newsubcategory.title}
              onChange={(e) => handleInput(e)}
              placeholder="write title here"
              required
            />

            <label className="py-1 fw-bold"> &nbsp; Category:</label>
            <input
              className="form-control mb-3"
              type="number"
              name="category1"
              value={newsubcategory.category1}
              onChange={(e) => handleInput(e)}
              placeholder="write title here"
              required
            />

            <label className="py-2 fw-bold"> &nbsp; Messages: </label>

            <Select
              isMulti
              //   value={selectedOption}
              onChange={handleChange}
              options={messageslist.map((guest, index) => {
                return {
                  value: guest._id,
                  label: guest.message,
                  key: index,
                };
              })}
            />
            <div className="text-center my-2">
              <button
                className="btn btn-outline-success "
                onClick={AddNewSubCategory}
              >
                Add categories list
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddSubcategory;

import axios from "axios";
import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import UserContext from "../../../useContext/Context";

const AddMessages = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState("");

  const { token , messageslist ,setMessageList} = useContext(UserContext);
  // console.log(token);

  const AddMessage = () => {
    axios
      .post(
        "https://dodgeqr.prometteur.in/api/message",
        { message: message },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setMessageList([...messageslist, res.data]);
      })
      .catch((err) => {
        console.log("err", err);
      });
    handleClose();
    setMessage("");
  };

  console.log(messageslist);
  console.log(message);

  return (
    <>
      <button className="btn btn-outline-primary " onClick={handleShow}>
        Add New Messages
      </button>

      {/* modal body */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h5>Add Message</h5>
          <AiOutlineClose className="mb-2 fw-bold" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <form>
            <label className="py-1"> &nbsp; Message: </label>
            <input
              className="form-control mb-3"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="write Message here"
              autoFocus
              required
            />
          </form>
          <button className="btn btn-outline-success me-2" onClick={AddMessage}>
            Add Message
          </button>
          <button className="btn btn-outline-warning" onClick={handleClose}>
            Cancel
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMessages;

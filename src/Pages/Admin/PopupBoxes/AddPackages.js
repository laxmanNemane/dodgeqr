import axios from "axios";
import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import UserContext from "../../../useContext/Context";

const AddPackages = ({ managePackage, setManagePackage }) => {
  // modal functioanlity
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //geting token from global store
  const { token } = useContext(UserContext);

  //   console.log(token);

  //the is new package initial state
  const [newpackage, setNewPackage] = useState({
    title: "",
    description: "",
    price: "",
    is_message: "",
    it_call: "",
  });

  //geting input values
  const HandleChange = (e) => {
    const newData = { ...newpackage };
    newData[e.target.name] = e.target.value;

    setNewPackage(newData);
  };

  //geting input checkbox value
  const handleCheckbox = (e) => {
    const newData = { ...newpackage };
    newData[e.target.name] = e.target.checked;

    setNewPackage(newData);
  };

  //   ADD new package API
  const AddNewPackage = (e) => {
    e.preventDefault();
    axios
      .post("https://dodgeqr.prometteur.in/api/admin/package", newpackage, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setManagePackage([...managePackage, res.data]);
        console.log(token);
      })
      .catch((err) => {
        console.log(err);
        console.log(token);
      });
    handleClose();
    alert("package add Successfully");
  };

  //   console.log(newpackage);
  //   console.log(managePackage);

  return (
    <>
      <button className="btn btn-outline-primary " onClick={handleShow}>
        Add New Package
      </button>

      {/* modal body */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h5>Add Package</h5>
          <AiOutlineClose className="mb-2 fw-bold" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <form>
            <label className="py-1"> &nbsp; Title: </label>
            <input
              className="form-control mb-3"
              type="text"
              name="title"
              placeholder="write title here"
              value={newpackage.title}
              onChange={(e) => HandleChange(e)}
              required
            />

            <label className="py-1"> &nbsp; Description: </label>
            <textarea
              id="w3review"
              name="description"
              rows="3"
              cols="44"
              value={newpackage.description}
              onChange={(e) => HandleChange(e)}
              placeholder="description is here"
            ></textarea>

            <label className="py-1"> &nbsp; Price: </label>
            <input
              className="form-control mb-3"
              type="text"
              name="price"
              value={newpackage.price}
              onChange={(e) => HandleChange(e)}
              placeholder=""
              autoFocus
              required
            />

            <input
              className=" mb-3 me-2"
              type="checkbox"
              name="is_message"
              value={newpackage.is_message}
              onChange={(e) => handleCheckbox(e)}
              placeholder=""
            />
            <label> it_message</label>
            <br />

            <input
              className=" mb-3 me-2"
              type="checkbox"
              name="it_call"
              value={newpackage.it_call}
              onChange={(e) => handleCheckbox(e)}
              placeholder=""
            />
            <label> it_call</label>

            <br />

            <div className="text-center my-2">
              <button
                className="btn btn-outline-success "
                onClick={AddNewPackage}
              >
                Add Package
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddPackages;

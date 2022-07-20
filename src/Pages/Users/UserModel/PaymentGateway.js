import { Form, Modal, Radio } from "antd";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { callSubcategoryList } from "../../../Redux-toolkit/SubcategorySlice";

const PaymentGateway = ({ show, setShow, element, detail }) => {
  // const [show , setShow] = useState(false)

  //   console.log(data);

  let transaction_id = Math.floor(Math.random() * 10000 + 6);
  // console.log(transaction_id)
  console.log(`transc_WqKeX${transaction_id}`);

  console.log(element);
  console.log(detail);
  const handleCancel = () => {
    setShow(false);
  };

  const handleOk = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    // alert("hello");

    console.log("package_id", element._id);

    console.log("transaction_id", `transc_WqKeX${transaction_id}`);
    console.log("order_id", detail.id);

    axios
      .post(
        "https://dodgeqr.prometteur.in/api/user/purchase",
        {
          package_id: element._id,
          transaction_id: `transc_WqKeX${transaction_id}`,
          order_id: detail.id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        toast.success(`Payment is Successfull`)
        toast.success(`you nice choice`);
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    element && (
      <>
        <Modal
          title=""
          visible={show}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <div>
            <div>
              <h3 className=" fw-bold">DodgeQr</h3>
              <p>Buy a Qr code for your needs</p>
              <p style={{ fontSize: "30px" }}>$ {element.price}</p>
            </div>

            <button
              type="submit"
              className="btn btn-outline-success me-2 my-3  "
              onClick={handleSubmit}
            >
              procced to pay
            </button>
          </div>
        </Modal>
      </>
    )
  );
};

export default PaymentGateway;

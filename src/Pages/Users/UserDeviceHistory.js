import axios from "axios";
import React, { useEffect, useState } from "react";
import Index from "../../HOC_Component/Index";
import SelectCategory from "./UserModel/SelectCategory";

const UserDeviceHistory = () => {
  const [device, setDevice] = useState([]);
  const [show, setShow] = useState(false);
  const [id , setId] = useState()
  const [element , setElement] =useState()

  const callDeviceHistory = () => {
    axios
      .get("https://dodgeqr.prometteur.in/api/device_history", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setDevice(res.data);
      })
      .catch((error) => {
        // dispatch(getPackages({ status: "Error" }));
        // navigate("/");
        // localStorage.clear();
        console.log("error", error);
      });
  };

  useEffect(() => {
    callDeviceHistory();
  }, []);

  const OnupdateMessage=(id ,data)=>{
    setId(id)
    setElement(data)
    setShow(true)
    console.log(id)
  }

  return (
    <div style={{ width: "96%", margin: "auto" }}>
      <div className="ap-com table-panel ">
        <p>Device History </p>
        <SelectCategory show={show} setShow={setShow} element={element} id={id} />
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Order Id</th>
              <th scope="col">Package Id </th>
              <th scope="col">Transaction Id</th>
              <th scope="col">Purchased Date</th>
              <th scope="col">Device Category</th>
              <th scope="col">Device Linked Date</th>
              <th scope="col">QR Code</th>
              <th scope="col">Action</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {device &&
              device.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ele.order_id}</td>
                    <td>{ele.package_id}</td>
                    <td>{ele.transaction_id}</td>
                    <td>{ele.purchased_date}</td>
                    <td>{ele.device_category}</td>
                    <td>{ele.device_linked_date}</td>
                    <td>
                      {ele.device_qr_code ? (
                        <img src={ele.device_qr_code} width={70} />
                      ) : (
                        <button
                          className="btn "
                          style={{ border: "1px solid purple" }}
                          onClick={() =>
                            OnupdateMessage(ele._id, element)
                          }
                        >
                          Link Device
                        </button>
                      )}{" "}
                    </td>
                    <td className="">
                      <div className="action-div dropdown">
                        <button
                          className=""
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ border: "none" }}
                        >
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li
                            className="my-2 mx-2"
                           
                          >
                            <i className="fas fa-pencil-alt mx-2"></i> Update
                          </li>
                          <li
                            className="my-2 mx-2"
                            // onClick={() => onDelete(element._id)}
                          >
                            <i className="fas fa-trash-alt mx-2"></i> Delete
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index(UserDeviceHistory);

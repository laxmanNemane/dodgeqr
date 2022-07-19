import axios from "axios";
import React, { useEffect, useState } from "react";
import Index from "../../HOC_Component/Index";

const UserpurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const callPurchaseHistory = () => {
    axios
      .get("https://dodgeqr.prometteur.in/api/history", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setPurchaseHistory(res.data);
      })
      .catch((error) => {
        // dispatch(getPackages({ status: "Error" }));
        // navigate("/");
        // localStorage.clear();
        console.log("error", error);
      });
  };

  useEffect(() => {
    callPurchaseHistory();
  }, []);

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div className="ap-com table-panel table-reponsive ">
        <p>Purchase History</p>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Order Id</th>
              <th scope="col">Package </th>
              <th scope="col">Transaction Id</th>
              <th scope="col">Purchased Date</th>
              <th scope="col">Device Category</th>
              <th scope="col">Device Linked Date</th>
              {/* <th scope="col">Action</th> */}
              <th></th>
            </tr>
          </thead>

          <tbody>
            {purchaseHistory &&
              purchaseHistory.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ele.order_id}</td>
                    <td>
                      {ele.package ? <i>{ele.package}</i> : "Not Linked"}{" "}
                    </td>
                    <td>{ele.transaction_id}</td>
                    <td>{ele.purchased_date}</td>
                    <td>{ele.device_category}</td>
                    <td>{ele.device_linked_date}</td>
{/* 
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
                            // onClick={() =>
                            //   OnupdateMessage(element._id, element)
                            // }
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
                    </td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index(UserpurchaseHistory);

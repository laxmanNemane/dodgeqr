import axios from "axios";
import React, { useContext, useEffect } from "react";
import Index from "../../HOC_Component/Index";
import UserContext from "../../useContext/Context";
import AddMessages from "./PopupBoxes/AddMessages";

const MeassageList = () => {
  const { token , messageslist ,setMessageList} = useContext(UserContext);

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
  }, [token ,setMessageList]);

  // console.log(messageslist)

  return (
    <>
      <div className="ap-com  ms-5 ">
      <div className="d-flex">
          <div className="ap-com sm-com-heading me-auto   text-start">
            <p className="pt-4">Manage Messages</p>
          </div>
          <div className="my-3 me-5">
            <AddMessages />
          </div>
        </div>
        <div className="ap-com table-panel ">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" width="20%">
                  Id
                </th>
                <th scope="col" width="80%">
                  Message
                </th>
                <th scope="col" width="20%">
                  Action
                </th>
              </tr>
            </thead>
            {messageslist.map((message, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{message.message}</td>
                    <td>
                      <div className="action-div dropdown">
                        <button
                          className="border-none"
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
                          <li>
                            <a className="dropdown-item" href="/">
                              <i className="fas fa-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              <i className="fas fa-pencil-alt"></i> Update
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              <i className="fas fa-trash-alt"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

const Messages = Index(MeassageList);

export default Messages;

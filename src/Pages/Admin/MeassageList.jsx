import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Index from "../../HOC_Component/Index";
import UserContext from "../../useContext/Context";
import AddMessages from "./PopupBoxes/AddMessages";

const MeassageList = () => {
  const { token, messageslist, setMessageList } = useContext(UserContext);

  // console.log(token);
  // console.log(flag);

  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [element, setElement] = useState();

  const getMessageList = () => {
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
  };

  useEffect(() => {
    getMessageList();
  }, [show]);

  const OnupdateMessage = (id, data) => {
    console.log("hello clicked");

    setId(id);
    setElement(data);
    setShow(true);
  };
  // console.log(messageslist)

  const onDelete = (id) => {
    axios
      .delete(`https://dodgeqr.prometteur.in/api/message/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        getMessageList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="ap-com  ms-5 ">
        <div className="d-flex">
          <div className="ap-com sm-com-heading me-auto   text-start">
            <p className="pt-4">Manage Messages</p>
          </div>
          <div className="my-3 me-5">
            <AddMessages
              show={show}
              setShow={setShow}
              id={id}
              element={element}
            />
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
            {messageslist &&
              messageslist.map((message, index) => {
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
                            <li
                              className="my-2 mx-2"
                              onClick={() =>
                                OnupdateMessage(message._id, message)
                              }
                            >
                              <i className="fas fa-pencil-alt mx-2"></i> Update
                            </li>
                            <li
                              className="my-2 mx-2"
                              onClick={() => onDelete(message._id)}
                            >
                              <i className="fas fa-trash-alt mx-2"></i> Delete
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

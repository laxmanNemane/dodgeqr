import { Spin } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Base_Url,
  callAcction,
  getMessageList,
  RemoveMessage,
} from "../../commen/API";
import Index from "../../HOC_Component/Index";
import { getMessages } from "../../Redux-toolkit/MessagesSlice";
import UserContext from "../../useContext/Context";
import AddMessages from "./PopupBoxes/AddMessages";
import { token } from "../../commen/API";

const MeassageList = () => {
  const { token, messageslist, setMessageList } = useContext(UserContext);

  // console.log(token);
  // console.log(flag);

  const { messages, status } = useSelector((state) => state.message);
  // console.log(messages);

  const [show, setShow] = useState(false);

  const [id, setId] = useState();
  const [element, setElement] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateStatus, setUpdateStatus] = useState(false);

  // console.log(token);

  const getMessageList = () => {
    try {
      axios
        .get(`${Base_Url}/message-list`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          dispatch(getMessages(res.data));
        })
        .catch((error) => {
          navigate("/")
          localStorage.clear();
          console.log(error);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getMessageList();
    setUpdateStatus(false);
  }, [ show ,updateStatus]);

  const OnupdateMessage = (id, data) => {
    setId(id);
    setElement(data);
    setShow(true);
  };

  const handleNewModal = () => {
    setId(null);
    setShow(true);
  };
  // console.log(messageslist)

  const onDelete = (id) => {
    RemoveMessage(id);
    getMessageList();
    setUpdateStatus(true);
  };

  return (
    <>
      <div className="ap-com  ms-5 ">
        <div className="d-flex">
          <div className="ap-com sm-com-heading me-auto   text-start">
            <p className="pt-4">Manage Messages</p>
          </div>
          <div className="my-3 me-5">
            <button
              className="btn btn-outline-primary "
              onClick={handleNewModal}
            >
              Add New Messages
            </button>
            <AddMessages
              show={show}
              setShow={setShow}
              id={id}
              element={element}
              updateStatus={updateStatus}
              setUpdateStatus={setUpdateStatus}
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
            {messages &&
              messages.map((message, index) => {
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

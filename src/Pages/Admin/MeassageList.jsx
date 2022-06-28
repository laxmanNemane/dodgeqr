import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL, Auth_token } from '../../commen/API';
import SidebarNav from '../../Components/SidebarNav'

const MeassageList = ({authtoken}) => {
  const [messages, SetMessage] = useState([])

  // let token = localStorage.getItem("token")
  //   console.log(token)
  useEffect(() => {
    axios.get(`${API_URL}/message-list`, {
      headers: {
        'Authorization': authtoken,
        'Content-Type': 'application/json',
      },

    }).then((res) => {
      SetMessage(res.data);
    })
      .catch((error) => {
        console.error(error)
      })


  },[])

  // console.log(Auth_token)



  console.log(messages)
  return (
    <>
      <div>
        <SidebarNav />
      </div>
      <div className='ap-com container-main ms-auto me-5' style={{ width: "80%" }}>
        <div className="ap-com sm-com-heading mb-4 text-start">
          <h5 className='pt-4'>Manage Messages List</h5>
        </div>
        <div className="ap-com table-panel table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" width="20%">Id</th>
                <th scope="col" width="80%">Message</th>
                <th scope='col' width="20%">Action</th>
              </tr>
            </thead>
            {messages && messages.map((message, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>
                      {index + 1}
                    </td>
                    <td>
                      {message.message}
                    </td>

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
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-pencil-alt"></i> Update
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-trash-alt"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )
            })}

            

          </table>
        </div>
      </div>
    </>
  )
}

export default MeassageList

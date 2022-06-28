import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL,  } from '../../commen/API'
// import Sidebar from '../../Components/Sidebar'
import SidebarNav from '../../Components/SidebarNav'

const ManagePakages = ({authtoken}) => {

    const [packages , setPakages] = useState([])

    const getpackages=()=>{
        axios.get(`${API_URL}/packages`, {
            headers: {
                'Authorization': authtoken,
                'Content-Type': 'application/json',
            },

        }).then((res) => {
            setPakages(res.data)
        })
            .catch((error) => {
                console.error(error)
            })
    }


    // let token = localStorage.getItem("token")
    // console.log(token)
    useEffect(() => {
        getpackages();

        // alert("i am clicked")

    })
    


    return (
        <>
            <div>
                <SidebarNav />
            </div>
            <div className='ap-com container-main me-5 pe-5 ms-auto' style={{ width: "80%" }}>
                <div className="ap-com sm-com-heading mb-4 pt-4 text-start">
                    <h5 className='pt-4'>Manage Packages</h5>
                </div>
                <div className="ap-com table-panel table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Package Mode</th>
                                <th scope="col">Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        {packages && packages.map((element , index)=>{
                            return (
                                <tbody key={index}>
                                <tr>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        {element.title}
                                    </td>
                                    <td>{element.description}</td>
                                    <td>{element.price}</td>
                                    <td>Pro</td>
                                    <td className="text-center">
                                        <div className="action-div dropdown">
                                            <button
                                                className=""
                                            
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                style={{border:"none"}}
                                            >
                                                <i className="fas fa-ellipsis-v"></i>
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton1"
                                            >
                                                <li>
                                                    {/* <a className="dropdown-item" href="#"> */}
                                                        <i className="fas fa-check"></i> Active
                                                    {/* </a> */}
                                                </li>
                                                <li>
                                                    {/* <a className="dropdown-item"> */}
                                                        <i className="fas fa-ban"></i> Deactive
                                                    {/* </a> */}
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    {/* <a className="dropdown-item" > */}
                                                        <i className="fas fa-info"></i> Show
                                                    {/* </a> */}
                                                </li>
                                                <li>
                                                    {/* <a className="dropdown-item" > */}
                                                        <i className="fas fa-pencil-alt"></i> Update
                                                    {/* </a> */}
                                                </li>
                                                <li>
                                                    {/* <a className="dropdown-item" > */}
                                                        <i className="fas fa-trash-alt"></i> Delete
                                                    {/* </a> */}
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

export default ManagePakages

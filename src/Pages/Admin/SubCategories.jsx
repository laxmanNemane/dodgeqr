import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../commen/API'
import SidebarNav from '../../Components/SidebarNav'

const SubCategories = ({authtoken}) => {

    const [subcategory, setSubcategory] = useState([])

    
    useEffect(() => {
        axios.get(`${API_URL}/subcategory`, {
            headers: {
                'Authorization': authtoken,
                'Content-Type': 'application/json',
            },

        }).then((res) => {
            setSubcategory(res.data);
        })
            .catch((error) => {
                console.error(error)
            })


    } ,[subcategory])

    return (
        <>
            <div>
                <SidebarNav />
            </div>
            <div className='ap-com container-main ms-auto me-5' style={{ width: "80%" }}>
                <div className="ap-com sm-com-heading mb-4 text-start">
                    <h5 className='pt-4'>Manage Subcategories</h5>
                </div>
                <div className="ap-com table-panel table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" width="20%">Title</th>
                                <th scope="col" width="20%">Category</th>
                                <th scope="col" width="60%">Message</th>
                                <th scope="col" width="20%">Action</th>
                                <th></th>
                            </tr>
                        </thead>

                        { subcategory && subcategory.map((category , index)=>{
                            return (
                                <tbody key={index}>
                                <tr>
                                    <td>
                                        {category.title}
                                    </td>
                                    <td>
                                        {category.category}
                                    </td>
                                    <td> Lorem, ipsum dolor.</td>
    
                                    <td>
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
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fas fa-check"></i> Active
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fas fa-ban"></i> Deactive
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fas fa-info"></i> Show
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

export default SubCategories

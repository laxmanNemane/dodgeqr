import React from 'react'
import { Link } from 'react-router-dom'
import SidebarNav from '../../Components/SidebarNav'

const MainDashbord = () => {
    return (
        <>
            <div>
                <SidebarNav />
            </div>
            <div className='ap-com container-main me-5 pe-5 ms-auto' style={{ width: "80%" }}>
                <div className="d-flex py-4 px-3 ">
                    <Link to="/ManageUsers">
                        <div class="qa-com qa-1  text-center me-4" style={{ width: "200px", height: "150px", background: " #ffcccc", padding: "20px 0 0 0", borderRadius: "20px" }} ><a href="/manage-users">
                            <div class="qa-icon " ><i class="fas fa-user"></i></div>

                            <div class="qa-content"><h3 class="fw-bold">350</h3><p>Users Active</p></div></a></div>
                    </Link>

                    <div class="qa-com qa-2 text-center" style={{ width: "200px", height: "150px", background: " #ffcccc", padding: "20px 0 0 0", borderRadius: "20px" }}><a href="/manage-qr-codes"><div class="qa-icon"><i class="fas fa-qrcode"></i></div><div class="qa-content"><h3 class="fw-bold">15000+</h3><p>QR Codes generated</p></div></a></div>
                </div>
            </div>
        </>
    )
}

export default MainDashbord

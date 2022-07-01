import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/" className='text-decoration-none'>
                            <li className="nav-item">
                              Home
                            </li>
                        </NavLink>
                       

                    </ul>
                    <NavLink to="/login">
                        <button className="btn btn-outline-secondary">Login</button>
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}

export default Navbar

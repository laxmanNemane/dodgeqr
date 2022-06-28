import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/" className='text-decoration-none'>

                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="#">Home</a>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Contact</a>
                        </li>

                    </ul>
                    <Link to="/login">
                        <button className="btn btn-outline-secondary">Login</button>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar

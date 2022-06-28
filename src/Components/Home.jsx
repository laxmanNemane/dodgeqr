import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../Components/Navbar"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="pt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2>Home_page </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi id quaerat!</p>
                            <Link to="/signup">

                                <button className="btn btn-outline-warning me-4">Sign Up free</button>
                            </Link>
                            <button className="btn btn-outline-success">Learn More</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Home

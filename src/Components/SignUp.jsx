import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../Components/Navbar";
// import axios from "axios"

const SignUp = () => {

    // const [state, setState] = useState({
    //     name: "",
    //     email: "",
    //     whatsapp_primary: "",
    //     whatsapp_secondary: "",
    //     emergency_contact: "",
    //     address: "",
    //     password: ""
    // });


    // const [notification , setnotif]

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setState({
    //         ...state,
    //         [e.target.name]: value
    //     });
    // };

    // {
    //     "name" : "Nikhil Taralekar",
    //     "email" : "n.taralekar@prometteur.in",
    //     "whatsapp_primary" : "9860370894",
    //     "whatsapp_secondary" : "",
    //     "emergency_contact" : "9860370894",
    //     "address" : "Pune",
    //     "password" : "Qwerty@123"
    // }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const userData = {
    //         name: state.name,
    //         email: state.email,
    //         whatsapp_primary: state.whatsapp_primary,
    //         whatsapp_secondary: state.whatsapp_secondary,
    //         emergency_contact: state.emergency_contact,
    //         address: state.address,
    //         password: state.password

    //     };

    //     try {
    //         let result = await axios.post("https://dodgeqr.prometteur.in/api/user", userData)
    //         console.log(result.data)
    //         // setState("");
    //     } catch (error) {
    //         console.log(error)
    //     }
    return (
        <>
            <Navbar />
            <div className=" signup pt-5">

                <div className="container pt-5 text-center">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-1"></div>
                        <div className="col-lg-8 col-md-8 col-sm-10 card py-4 px-5 bg-dark  text-white" style={{ borderRadius: "20px" }}>
                            <h4 className='py-2 mb-2'>Register here</h4>
                            <form >
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12  py-3">
                                        {/* name */}

                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder='Name'
                                        // value={state.name}
                                        // onChange={handleChange}
                                        />

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 py-3">
                                        {/* email */}


                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder='Email'
                                        // value={state.email}
                                        // onChange={handleChange}
                                        />

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 py-3">


                                        {/* wastapp primary contact */}

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="whatsapp_primary"
                                            placeholder='Watsapp Primary Number'
                                        // value={state.whatsapp_primary}
                                        // onChange={handleChange}
                                        />

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 py-3">
                                        {/* watsapp secondary contact */}

                                        <input
                                            type="text"
                                            name="whatsapp_secondary"
                                            className="form-control"
                                            placeholder='Watsapp Secondary Number'
                                        // value={state.whatsapp_secondary}
                                        // onChange={handleChange}
                                        />

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 py-3">

                                        {/* emaergency contact */}

                                        <input
                                            type="text"
                                            name="emergency_contact"
                                            className="form-control"
                                            placeholder='Emergency Number'
                                        // value={state.emergency_contact}
                                        // onChange={handleChange}
                                        />

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 py-3">
                                        {/* adress */}

                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            placeholder='Address'
                                        // value={state.address}
                                        // onChange={handleChange}
                                        />

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12  py-3">

                                        <input
                                            type="text"
                                            name="password"
                                            className="form-control"
                                            placeholder='password'
                                        // value={state.password}
                                        // onChange={handleChange}
                                        />


                                    </div>
                                    <br />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 text-center py-3">
                                    <button type=" submit " className="text-center btn btn-outline-light">Register</button>
                                </div>

                                <div className="text-center">
                                    <p>already an account exists? <Link to="/login" className='ms-1'>Log In</Link></p>


                                </div>


                            </form>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-1"></div>
                    </div>
                </div>


            </div>
        </>





    )
}


export default SignUp

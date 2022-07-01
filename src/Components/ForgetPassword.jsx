import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../Components/Navbar";

const ForgetPassword = () => {
  return (
    <>
    <Navbar/>
    <div className='container pt-5'>
      <div className="card mt-5 w-50 mx-auto py-3 bg-dark  " style={{ borderRadius: "25px" }}>
        <div className="card-body">
          <h4 className='text-white'>Forget Password</h4>
          <small className='text-white py-2'>Enter your email and we'll send you a link to <br /> reset your password</small>

          <form className='py-2'>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4 py-2">

              <input type="email" id="form2Example1" className="form-control" placeholder='Email' />
            </div>


            {/* <!-- Submit button --> */}
            <button type="button" className="btn  btn-block mb-4 text-white border px-3">Submit</button>


            <div className="text-center text-white">
              <Link to="/login" className='text-decoration-none'><p className="text-white">Back To login&nbsp; &nbsp;<i className="fas fa-chevron-right "></i></p></Link>

            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ForgetPassword

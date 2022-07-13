import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { login } from "../Redux-toolkit/userSlice";
import UserContext from "../useContext/Context";

const LoginPage = () => {
  const { user, setUser, flag, setAdmin } = useContext(UserContext);

  const navigate = useNavigate();

  const disaptch = useDispatch();

  const data = useSelector((state) => state.users);
  console.log(data);



  // forget password

  const handleChange = async (e) => {
    const newData = { ...user };
    newData[e.target.name] = e.target.value;
    setUser(newData);

    // console.log(newData);
  };



  const Login = async () => {
    // console.log(user);
    try {
      console.log("before api hit");
      let result = await axios.post(
        `https://dodgeqr.prometteur.in/api/admin/login`,
        user
      );
      setAdmin(result.data.user);
      disaptch(login(result.data))
      disaptch(login({token:result.data.token}))
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));

      console.log(result.data.token);
      navigate("/dashbord");

      alert("login Succesfully");
    } catch (error) {
      console.log("please fill the valid detail");
    }

  };

  console.log(flag);
  const Submit = (e) => {
    e.preventDefault();
    // console.log(user);

  };

  console.log(user);
  const forget = async () => {
    alert("forget password");
  };

  return (
    <>
      <Navbar />
      <div className="container pt-5 text-center">
        <div
          className="card mt-5 w-50 mx-auto py-5 bg-dark  "
          style={{ borderRadius: "25px" }}
        >
          <div className="card-body">
            <h4 className="text-white">Log In</h4>
            <p className="text-white">Please enter your login and password!</p>

            <form onSubmit={(e) => Submit(e)}>
              {/* <!-- Email input --> */}
              <p className="text-danger">error</p>
              <div className="form-outline mb-4 py-2">
                <input
                  type="email"
                  id="form2Example1"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4 py-2">
                <input
                  type="password"
                  id="form2Example2"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              {/* <!-- 2 column grid layout for inline styling --> */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <label className="form-check-label text-white">
                      {" "}
                      Remember me{" "}
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                  </div>
                </div>

                <div className="col">
                  <Link
                    to="/forgetpassword"
                    className="text-white text-decoration-none"
                    onClick={forget}
                  >
                    Forgot password ?
                  </Link>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="button"
                className="btn  btn-block mb-4 text-white border px-3"
                onClick={Login}
              >
                Log in
              </button>

              <div className="text-center text-white">
                <p>
                  Not a member? <Link to="/SignUp">Register</Link>
                </p>
                <p>or sign up with:</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

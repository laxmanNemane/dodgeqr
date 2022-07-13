import { Formik, useFormik } from "formik";
import React from "react";
import { useContext } from "react";
import Index from "../../HOC_Component/Index";
import UserContext from "../../useContext/Context";

const ProfilePage = () => {
  const { admin } = useContext(UserContext);
  console.log(admin);

  const formik = useFormik({
    initialValues: {
      name: admin.name,
      email: admin.email,
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
    validate: (values) => {
      let errors = {};
    },
  });
  return (
    <div className="ms-4 my-4">
      <h5>Profile page</h5>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="fw-bold h6 ms-2">
          {" "}
          name :
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control w-50"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <br />
        <label htmlFor="email" className="fw-bold h6 ms-2">
          {" "}
          email :
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control w-50"
          disabled
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit" className="btn btn-outline-primary my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Index(ProfilePage);

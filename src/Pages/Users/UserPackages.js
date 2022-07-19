import axios from "axios";
import React, { useEffect, useState } from "react";
import Index from "../../HOC_Component/Index";

const UserPackages = () => {
  const [userPackage, setUserPackage] = useState([]);

  const CallUserPackages = () => {
    // dispatch(getPackages({ status: "loading"     }));
    axios
      .get("https://dodgeqr.prometteur.in/api/packages", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUserPackage(res.data);
      })
      .catch((error) => {
        // dispatch(getPackages({ status: "Error" }));
        // navigate("/");
        // localStorage.clear();
        console.log("error", error);
      });
  };

  useEffect(() => {
    CallUserPackages();
  }, []);

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div className="ap-com table-panel ">
        <p>Packages</p>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {userPackage &&
              userPackage.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{ele.title}</td>
                    <td>{ele.description}</td>
                    <td>{ele.price}.00 INR</td>
                   <td><button className="btn btn-outline-secondary">Select package</button></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index(UserPackages);

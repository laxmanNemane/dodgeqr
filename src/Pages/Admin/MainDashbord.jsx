import React from "react";
import { Link } from "react-router-dom";
import Index from "../../HOC_Component/Index";

const MainDashbord = () => {
  return (
    <div className="ms-3">
      <div className="ap-com container-main me-5 pe-5 ms-auto">
        <div className="d-flex py-4 px-3 ">
          <Link to="/users" className="text-decoration-none text-dark">
            <div
              className="card mx-2 text-center "
              style={{ width: "12rem", borderRadius: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <p className="card-text h1 text-secondary">
                  <i className="fas fa-user"></i>
                </p>
                <h3>350</h3>
              </div>
            </div>
          </Link>
          <div
            className="card mx-2 text-center "
            style={{ width: "12rem", borderRadius: "20px" }}
          >
            <div className="card-body">
              <h5 className="card-title"> Qr Code</h5>
              <p className="card-text h1 text-success">
                <i className="fas fa-qrcode"></i>
              </p>
              <h3>250</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index(MainDashbord);
// BoxDashbord;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Index from "../../HOC_Component/Index";
import PaymentGateway from "./UserModel/PaymentGateway";

const UserPackages = () => {
  const [userPackage, setUserPackage] = useState([]);
  const [show, setShow] = useState(false);
  const [element , setElement] = useState()
  const [orderDetail ,setOrderDetail] = useState([])


  let transaction_id  = Math.floor(Math.random()*10000+6)
  // console.log(transaction_id)  
  console.log(`transc_WqKeX${transaction_id}`)



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

  console.log(userPackage);

  useEffect(() => {
    CallUserPackages();
  }, []);

  const genrateOrder = (price, packageName , data) => {
    // alert(price);
    // console.log(data)
    console.log(price);
    setShow(true);
    setElement(data)

    axios
      .post(
        "https://dodgeqr.prometteur.in/api/user/generate_order",
        {
          amount: parseInt(price),
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setOrderDetail(res.data);
        toast.success(`you are selected (${packageName}) package`)
      })
      .catch((error) => {
        // dispatch(getPackages({ status: "Error" }));
        // navigate("/");
        // localStorage.clear();
        console.log("error", error);
      });
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div className="ap-com table-panel ">
        <p>Packages</p>
        <PaymentGateway show={show} setShow={setShow} detail={orderDetail} element={element} />
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
                    <td>{index + 1}</td>
                    <td>{ele.title}</td>
                    <td>{ele.description}</td>
                    <td>{ele.price}.00 INR</td>
                    <td>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => genrateOrder(ele.price, ele.title , ele)}
                      >
                        {ele.price > 80
                          ? "Select package"
                          : "package is Not Available"}
                      </button>
                    </td>
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

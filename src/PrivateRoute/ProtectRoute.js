import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../useContext/Context";

// const useAuth = () => {
//     const {flag , admin} = useContext(UserContext)
//     console.log(flag)

//   return  user && user.flag;
// };

const ProtectRoute = () => {
  const { admin } = useContext(UserContext);
  return admin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Packages from "./Pages/Admin/ManagePakages";
import Users from "./Pages/Admin/ManageUsers";
import BoxDashbord from "./Pages/Admin/MainDashbord";
import Categories from "./Pages/Admin/SubCategories";
import Messages from "./Pages/Admin/MeassageList";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import ForgetPassword from "./Components/ForgetPassword";
import ProtectRoute from "./PrivateRoute/ProtectRoute";
import ProfilePage from "./Pages/Admin/ProfilePage";
import { ToastContainer } from "react-toastify";
import UserPackages from "./Pages/Users/UserPackages";
import UserpurchaseHistory from "./Pages/Users/UserpurchaseHistory";
import UserDeviceHistory from "./Pages/Users/UserDeviceHistory";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" size="20px" autoClose={2000} />
      <Routes>
        {/* hoc component */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route element={<ProtectRoute />}>
          <Route path="/dashbord" element={<BoxDashbord />} />
          <Route path="/users" element={<Users />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/Admin_Message" element={<Messages />} />
          <Route path="/Admin_subCategories" element={<Categories />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/u_package" element={<UserPackages />} />
        <Route path="/u_purchase_history" element={<UserpurchaseHistory />} />
        <Route path="/u_device_history" element={<UserDeviceHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

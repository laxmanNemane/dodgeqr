import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <div className="App">
      {/*Routing */}
      <BrowserRouter>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

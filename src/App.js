
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
// import Navbar from './Components/Navbar';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import Sidebar from './Components/Sidebar';
import MeassageList from './Pages/Admin/MeassageList';
import ManagePakages from './Pages/Admin/ManagePakages';
import ManageUsers from './Pages/Admin/ManageUsers';
import SubCategories from './Pages/Admin/SubCategories';
import SidebarNav from './Components/SidebarNav';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux"
// import { getUsers } from './Redux/userSlice';
// import todos, { todosList } from './Redux/TodosSlice';
import ForgetPassword from './Components/ForgetPassword';
import MainDashbord from './Pages/Admin/MainDashbord';

function App() {
  
  const [authtoken , SetAuthtoken] = useState("")

  useEffect(()=>{
    SetAuthtoken(localStorage.getItem("token"));
  },[])
  console.log(authtoken)
  




  return (
    <div className="App">

      {/*Routing */}
      <BrowserRouter>
        {/* <h3 className='py-2'>Nothing is impossible. ...🚀😃</h3> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage authtoken={authtoken} />} />
          <Route path='/SignUp' element={<SignUp authtoken={authtoken} />} />
          <Route path='/Sidebar' element={<Sidebar />} />
          <Route path='/MeassageList' element={<MeassageList authtoken={authtoken} />} />
          <Route path='/ManagePakages' element={<ManagePakages authtoken={authtoken} />} />
          <Route path='/ManageUsers' element={<ManageUsers authtoken={authtoken} />} />
          <Route path='/SubCategories' element={<SubCategories  authtoken={authtoken}/>} />
          <Route path='/SidebarNav' element={<SidebarNav authtoken={authtoken} />} />
          <Route path='/ForgetPassword' element={<ForgetPassword authtoken={authtoken} />} />
          <Route path='/dashboard' element={<MainDashbord />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

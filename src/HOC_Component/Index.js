import React from "react";
import Sidebar from "../Components/Sidebar";
import SidebarNav from "../Components/SidebarNav";

const Index = (Component) => {
  return (props) => {
    return (
      <div className="d-flex ">
        <Sidebar />
        <div className="w-100 ms-1">
          <SidebarNav />
          <Component />
        </div>
      </div>
    );
  };
};

export default Index;

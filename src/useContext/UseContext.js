import React, { useState } from "react";
import UserContext from "./Context";

const UseContext = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  //users 
  const [manageusers, setManageusers] = useState([]);

  // messaeg














   

  const [messageslist, setMessageList] = useState([]);
  // console.log(messageslist)

  //subcategory
  const [category, setCategory] = useState([]);

  // admin

  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("user")));

  // token
  const token = localStorage.getItem("token");

  
  


  // console.log(admin);
  // flag
  const [flag, setFlag] = useState(admin ? true : false);

  // console.log(flag);

  // console.log(user);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        flag,
        setFlag,
        token,
        messageslist,
        setMessageList,
        category,
        setCategory,
        manageusers,
        setManageusers
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UseContext;

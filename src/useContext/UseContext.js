import React, { useState } from "react";
import UserContext from "./Context";

const UseContext = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [flag, setFlag] = useState(user ? true : false);
  console.log(flag)

 
  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser , setFlag , flag }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UseContext;

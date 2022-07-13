import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import store from './Redux/store';
// import { Provider } from 'react-redux';
import UseContext from "./useContext/UseContext";
import { Provider } from "react-redux";
import store from "./Redux-toolkit/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <UseContext>
      <App />
    </UseContext>
  </React.StrictMode>
  </Provider>
);

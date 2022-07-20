import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/userContext";
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    </Router>
   
  </React.StrictMode>,
  document.getElementById("root")
);

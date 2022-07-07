import React from "react";

import "./App.css"
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import MainPage from "./MainPage";
import Waiting from "./Waiting";
import Project from "./Project";

class App extends React.Component {
  render(){
    return (
      <>
      <MainPage />
      </>
  );
  }
}

export default App;





// const [user, setUser] = useState(null);

// useEffect(() => {
//   const getUser = () => {
//     fetch("http://localhost:3000/auth/login/success", {
//       method: "GET",
//       credentials: "include",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Credentials": true,
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) return response.json();
//         throw new Error("authentication has been failed!");
//       })
//       .then((resObject) => {
//         setUser(resObject.user);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   getUser();
// }, []);

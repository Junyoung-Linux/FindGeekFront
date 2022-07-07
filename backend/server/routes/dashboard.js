import React from "react";
import { useUserContext } from "../context/userContext";

const DashBoard = () =>{
    const {user, logoutUser} = useUserContext();
    return(
        <div>
            <h1>Github</h1>
            <h2>Name: {user.displayName}</h2>
            <h2>Email: {user.email}</h2>
            <button onClick={logoutUser}>Log out</button>
        </div>
    )
    
} 

export default DashBoard;

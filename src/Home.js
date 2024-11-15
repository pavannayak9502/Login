import React from "react";
import { useNavigate } from "react-router-dom";


let Home=()=>{
    let navigate = useNavigate();

    let handleLogout=(event)=>{
        event.preventDefault();

        //clear user authentication data
        localStorage.removeItem('token');
        alert("You have been logged out...");

        //Navigate to login page.
        navigate("/");
    };

    return(
        <div>
            <h1>Welcome to the home Page!</h1>
            <button onClick={handleLogout} style={{float: "right"}}>Logout</button>
        </div>
    );
};
export default Home;
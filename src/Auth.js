import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


let Auth=()=>{
    let[username, setUsername]=useState("");
    let[password, setPassword]=useState("");
    let[isLogin, setIsLogin]=useState(true);
    let[error, setError]=useState("");
    let navigate = useNavigate();

    let handleSubmit=async(event)=>{
        event.preventDefault();
        setError("");

        try{
            let Details = {username, password};
            let url = isLogin ? "http://localhost:5000/login" : "http://localhost:5000/register";
            let response = await axios.post(url, Details);

            if(isLogin){
                localStorage.setItem("token", response.data.token);
                alert("Login successfull!");
                navigate("/home");
            }
            else{
                alert("Registation successful.. Please log in now!");
            }
            setUsername("");
            setPassword("");
            setError("");

        }catch(err){
            if(err.response && err.response.data.message){
                setError(err.response.data.message);
            }else{
                alert("Invalid credentails!");
                setError("Invalid credentails!");
            }
            setUsername("");
            setPassword("");

            setTimeout(()=>setError(""), 1500);
        }
    };

    let handleReset=(event)=>{
        event.preventDefault();
        setUsername("");
        setPassword("");
        setError("");
    };

    return(
        <>
        <div className="Form">
        <h1 style={{color: isLogin? "red" : "blue"}}>{isLogin ? "Login Page" : "Register Page"}</h1>
        <form onSubmit={handleSubmit}>
            <label>User Name : <input type="name" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Mobile Number & Email" autoComplete="on" title="username" required/></label>
            <label>Password : <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="User Password" autoComplete="on" title="password" required/></label>
            <button type="submit" id="button1">{isLogin ? "Login" : "Register"}</button>
            <button type="button" onClick={handleReset} id="button2">Reset</button>
            {error && <p style={{color : "red"}}>{error}</p>}
        </form>
        <p>{isLogin ? "No Account ?" : "Already have an account?"} {""} <button type="button" onClick={()=>setIsLogin(!isLogin)} id="button3">{isLogin ? "Register" : "Login"}</button></p>
        </div>
        </>
    );
};
export default Auth;
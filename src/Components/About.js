import React, { useState } from "react";

import {useNavigate} from"react-router-dom";
function About(){
    const[state,setState]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const navigate =useNavigate()
    const {username,email,password,confirmpassword} = state;
    const changeHandler=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
       // console.log("state>>..",state)
        password===confirmpassword?console.log("state",state):alert("password and confirmpassword must be same")
        
    }
    return<>
             <h1>This is an AboutPage</h1>
        
        <div>
        <form onSubmit={submitHandler}>
            Username:
            <input type="text" name="username" onChange={changeHandler} value={username}/><br/><br/>
            {username.length<=5?<p style={{color:"red"}}>username must be 5 cherecters</p>:""}
            Email:
            <input type="email" name="email" onChange={changeHandler} value={email}/><br/><br/>
            <label>Password:</label>
            <input type="password" name="password" onChange={changeHandler} value={password}/><br/><br/>
            <label>ConfrimPassword:</label>
            <input type="password" name="confirmpassword" onChange={changeHandler} value={confirmpassword}/><br/><br/>
            <input type="submit" name="submit" />
        </form>
        </div>
        <button onClick={()=>navigate(-1)}>Back to Home</button>
    </>
}
export default About;
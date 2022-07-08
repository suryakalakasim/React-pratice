import React, { useEffect, useRef, useState } from "react";
import {Link} from 'react-router-dom';
import {Tabledata} from './table';
import '../App.css';
function Dashboad(){
    //const [state,setState]=useState("")
   // const[email,setMail]=useState("")
    //const[phnum,setPhnum]=useState('')
    const[formdata,setFormdata]=useState({usernsme:"",email:"",phnum:""})
    const name =useRef("")
    const mail =useRef("")
    const num =useRef("")
    
      useEffect(()=>{
         name.current.focus();
       
      },[])
     
    
      const handelSubmit=(e)=>{
          e.preventDefault();
         // setState(...state,name.current.value);
         // setMail(...email,mail.current.value);
          //setPhnum(...phnum,num.current.value)
          console.log('form>>',name.current.value,mail.current.value,num.current.value)
          //let obj={name:name.current.value,email:mail.current.value,phnum:num.current.value}
          setFormdata({id:"1",username:name.current.value,email:mail.current.value,phnum:num.current.value})
          console.log(formdata,"formdata>>>")
}
    return<div>
        <h1 style={{color:"green"}}>This is an Dashboad page</h1>
        <form onSubmit={handelSubmit}>
            <label>Name:</label>
        <input type="text" ref={name} placeholder="enter your name"/><br/><br/>
        <label>Email:</label>
        <input type="email" ref={mail} placeholder="enter your MailId"/><br/><br/>
        <label>Number:</label>
        <input type="number" ref={num} placeholder="enter your phone number"/><br/><br/>
        <input type="submit"/>
        </form>
        
         {/* <Tabledata state={state} email={email} phnum={phnum}  />  */}
         <Tabledata data={formdata}/>
        <Link to='/'>Back to Home </Link>
    </div>
}
export default Dashboad;
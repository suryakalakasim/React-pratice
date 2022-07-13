import React from "react";
import {useNavigate} from 'react-router-dom';
import{Formik, useFormik} from 'formik';
function RegistationForm(){
    const formik=useFormik({
        initialValues:{
          name:"",
          email:"",
          password:""  
        },
        onSubmit:(values)=>{
            alert([values.name,"your form was submited"])
        }
    })
    const navigate=useNavigate();
    return<div>
        <h1>RegistrationForm</h1>
        <form onSubmit={formik.handleSubmit}>
            <label>Name</label><br/>
            <input type="text" id="name" name="name" 
            value={formik.values.name} onChange={formik.handleChange}/><br/><br/>

            <label>Email</label><br/>
            <input type="text" id="email" name="email"
            value={formik.values.email} onChange={formik.handleChange}/><br/><br/>

            <label>Password</label><br/>
            <input type="text" id="password" name="password"
            value={formik.values.password} onChange={formik.handleChange}/><br/><br/>
             <button type="submit"> Registration</button><br/><br/>
        </form>
<button type="button" onClick={()=>navigate(-1)}>Back to Home</button>
    </div>
}
export default RegistationForm;
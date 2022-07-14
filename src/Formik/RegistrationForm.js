import React from "react";
import {useNavigate} from 'react-router-dom';
import{useFormik} from 'formik';
function RegistrationForm(){
    const initialValues = { name:"", email:"", password:"" }
    const onSubmit =(values)=>{
        console.log("form values",values)
       // alert([JSON.stringify(values),"your form was submited"])
        alert("Your Form is Submited");
    }
    const validate =values=>{
        let errors={}
        if(!values.name){
            errors.name="This Field is Required"
        }
      if(!values.email){
            errors.email="This Field is Required"
      }
      if(!values.password){
        errors.password="This Field is Required"
      }
       return errors
    }
    const formik=useFormik({
        initialValues,
        onSubmit,
        validate
         })
         console.log("form errors",formik.errors)
         console.log("vigited fields",formik.touched)
    const navigate=useNavigate();
    return<div className="Registration-form">
        <h1>RegistrationForm</h1>
        <form onSubmit={formik.handleSubmit}>
            <label>Name</label><br/>
            <input type="text" id="name" name="name" onBlur={formik.handleBlur} 
            value={formik.values.name} onChange={formik.handleChange}/><br/>
              {formik.touched.name && formik.errors.name?<div className="error">{formik.errors.name}</div>:null}<br/>
            <label>Email</label><br/>
            <input type="email" id="email" name="email" onBlur={formik.handleBlur}
            value={formik.values.email} onChange={formik.handleChange}/><br/>
             {formik.touched.email && formik.errors.email?<div className="error">{formik.errors.email}</div>:null}<br/>
            <label>Password</label><br/>
            <input type="text" id="password" name="password"  onBlur={formik.handleBlur}
            value={formik.values.password} onChange={formik.handleChange}/><br/>
            {formik.touched.password && formik.errors.password?<div className="error">{formik.errors.password}</div>:null}<br/>
             <button type="submit"> Registration</button><br/><br/>
        </form>
<button type="button" onClick={()=>navigate(-1)}>Back to Home</button>
    </div>
}
export default RegistrationForm;
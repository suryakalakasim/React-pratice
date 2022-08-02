import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {viewContact} from './contactAction';
   const ContactList=()=>{
       const [state,setState]=useState([]);
     const dispacth= useDispatch();
     const contactLIst=useSelector(state=>state.contactReducer?.contactInfo)
     const empolyeeReducer=useSelector(state=>state.EmpolyeeReducer)
     console.log("contact>>>",contactLIst)
       useEffect(()=>{
        axios.get('http://209.209.41.154:8001/api/UserRegister/GetAll').then((res)=>{
            setState(res.data)
            dispacth( viewContact(res.data))
        }).catch((err)=>{
            console.log(err)
        })
       }
       ,[])
 
       console.log("contactInfo",)
       return<div>
         {contactLIst?.length > 0 ?  contactLIst?.map((items)=><h3 key={items.id}>Email:{items.email} MobileNum:{items.mobileNumber}</h3>):<h4>data not found</h4>}
       </div>
   }
   export default ContactList;
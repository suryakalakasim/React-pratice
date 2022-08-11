import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector,batch } from "react-redux";
import {viewContact} from './contactAction';
import { EmpolyeeAction } from "../EmpolyeeData/empolyeeAction";
   const ContactList=()=>{
       const [state,setState]=useState([]);
     const dispacth= useDispatch();
     const contactLIst=useSelector(state=>state)
     const empolyeeINfo=useSelector(state=>state.EmpolyeeReducer?.EmpolyeeDetails)
     console.log("contact>>>",state);
     console.log("empolyeeInfo",empolyeeINfo);
       useEffect(()=>{
        axios.get('http://209.209.41.154:8001/api/UserRegister/GetAll').then((res)=>{
            setState(res.data)
            batch(() => {
              dispacth( viewContact(res.data))
            dispacth(EmpolyeeAction())
            })  
        }).catch((err)=>{
            console.log(err)
        })
       }
       ,[])
       return<div>
           <h3 style={{textAlign:"center"}}>Contact Details</h3>
         {contactLIst?.length > 0 ?  contactLIst?.map((items)=><h3 key={items.id}>Email:{items.email} MobileNum:{items.mobileNumber}</h3>):<h4>data not found</h4>}
       {/* <h2>Id:{empolyeeINfo.id} Name:{empolyeeINfo.name} Designation:{empolyeeINfo.designation}</h2> */}
       </div>
   }
   export default ContactList;
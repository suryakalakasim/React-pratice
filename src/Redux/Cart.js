import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { AddProduct } from "./redux/Cake/cakeActions";
import { RemoveProduct } from "./redux/Cake/cakeActions";

const Cart =({product,AddProduct,RemoveProduct})=>{
   const [itams,setItams]=useState("")
    const subimtHandler=async e =>{
e.preventDefault();
if(itams !==""){
    await AddProduct({name:itams});
    setItams("");
}
setItams();
    }
}
return(
    <center>
        <div>
             
        </div>
    </center>
)
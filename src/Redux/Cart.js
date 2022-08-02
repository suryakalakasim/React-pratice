import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { AddProduct } from "./redux/Cake/cakeActions";
import { RemoveProduct } from "./redux/Cake/cakeActions";

const Cart =({product,AddProduct,RemoveProduct})=>{
   const [items,setItems]=useState("");
    const submitHandler=async e =>{
e.preventDefault();
if(items !==""){
    await AddProduct({name:items});
    setItems("");
}
setItems("");
    }

return(
    <center>
        <div  style={{"width":"18rem"}}>
            
            <form onSubmit={submitHandler}>
             <input type="text" placeholder="Add Products" value={items} onChange={e =>setItems(e.target.value)}/>
           <button type="submit" >AddProduct</button>
            </form><br/>
            {product.map((product,i )=>{
                return(<div key={i}>
              {product.name}
              <button type="button" onClick={()=>RemoveProduct(product.name)}> x</button> 
                </div>)})}
             
        </div>
    </center>)
}
        
const mapStateToProps = state =>({
        product : state
    })



export default connect(mapStateToProps,{AddProduct,RemoveProduct})(Cart);
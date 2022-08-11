import React from "react";
import {BUY_CAKE} from '../Redux';
import { connect } from "react-redux";
 function CakeContainer(props){
     console.log("cakeProps",props)
     return<div>
<h2>No.of Cakes-{props.numOfCakes}</h2>
<button onClick={props.BUY_CAKE}>Buy Cake</button>

     </div>
 }
 const mapStateToProps =state=>{
     return{
         numOfCakes:state.numOfCakes
     }
 }
 const mapDispatchToProps =dispatch=>{
     return{
         BUY_CAKE:()=>dispatch(BUY_CAKE())
     }
 }
 export default connect(mapStateToProps,mapDispatchToProps )(CakeContainer);
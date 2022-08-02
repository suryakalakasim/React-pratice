import React from "react";
import { connect } from "react-redux";
import { IncAction } from "./new/action";
import { DecAction } from "./new/action";
   
const Operation=(props)=>{
    console.log("prop>..>",props)
return<div>
    <h3>Count:{props.localVariable}</h3>
    <button type="button" onClick={props.IncAction}>INCREMENT</button><br/><br/>
    <button type="button" onClick={props.DecAction}>DECREMENT</button>

</div>
}
const mapStateToProps = state =>{
    return{
   localVariable:state}
   }
   const mapDispatchToProps =dispatch=>{
    return{
        IncAction:()=>dispatch(IncAction()),
        DecAction:()=>dispatch(DecAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Operation);
import React from "react";
  import { connect } from 'react-redux';
  import { IncAction } from "./redux/Cake/cakeActions";
  import { DecAction } from "./redux/Cake/cakeActions";
const Counter = ({localVariable,IncAction,DecAction})=>{
    return <div>
    <h1>Count {localVariable}</h1>
    <button type="button" onClick={IncAction}>INCREMENT</button><br/><br/>
    <button type="button" onClick={DecAction}>DECREMENT</button>

    </div>
}
const mapStateToProps = state =>({
    localVariable:state
   })
export default connect(mapStateToProps,{IncAction,DecAction}) (Counter);
 

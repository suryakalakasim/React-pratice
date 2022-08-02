import React from "react";
import {Link} from 'react-router-dom'
import Desingning from "./Designing";
class EvenntBind extends React.Component{
    constructor(){
        super()
     this.state={
         massege: "Hello"
     }  

    //method3
    //this.ClickHandler = this.ClickHandler.bind(this)

    }
     /*ClickHandler(){
         this.setState({
             massege:"good bye"
         })
     } */
     ClickHandler=()=>{
         this.setState({
             massege:"Good Bye"
         })
     }
    
    render(){
        return<div>
            <h1> {this.state.massege}</h1>
            {/*method1*/}
            <button onClick={this.ClickHandler.bind(this)}>click</button>
           {/*method2*/}
           {/*<button onClick={()=>this.ClickHandler()}>click</button>*/}
           {/* <button onClick={this.ClickHandler}>click</button><br/><br/> */}
           <Link className="link-style" to='/'>Back to Home</Link><br/><br/>
           {/* <Desingning/> */}
        </div>
    }
}
export default EvenntBind;
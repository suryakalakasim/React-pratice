import React from "react";
import {Link} from 'react-router-dom'
class EvenntBind extends React.Component{
    constructor(){
        super()
     this.state={
         massege: "hello"
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
             massege:"good bye"
         })
     }
    
    render(){
        return<div>
            <h1> {this.state.massege}</h1>
            {/*method1*/}
            {/*<button onClick={this.ClickHandler.bind(this)}>click</button>*/}
           {/*method2*/}
           {/*<button onClick={()=>this.ClickHandler()}>click</button>*/}
           <button onClick={this.ClickHandler}>click</button>
           <Link to='/'>Back to Home</Link>
        </div>
    }
}
export default EvenntBind;
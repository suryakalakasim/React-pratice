import React,{useState} from "react";
import {Link} from 'react-router-dom';
 function Calculeter(){
     const[input,setInput]=useState("")
     const[result,setResult]=useState(0)
     const inputhandler=(e)=>{
         setInput(e.target.value)
     }
     return<>
     <h1 style={{color:"green"}}>Claculater</h1>
     <input type="text" name="input" value={input} onChange={inputhandler}/><br/><br/>
         <button type="button" onClick={()=>setResult(eval(input))}>Result</button>
    <h4>Result is:{result}</h4>
    <button className="button-style" onClick={()=>setInput(input+"1")}>1</button>
    <button className="button-style" onClick={()=>setInput(input+"2")}>2</button>
    <button className="button-style" onClick={()=>setInput(input+"3")}>3</button>
    <button className="button-style" onClick={()=>setInput(input+"4")}>4</button>
    <button className="button-style" onClick={()=>setInput(input+"5")}>5</button><br/>
    <button className="button-style" onClick={()=>setInput(input+"6")}>6</button>
    <button className="button-style" onClick={()=>setInput(input+"7")}>7</button>
    <button className="button-style" onClick={()=>setInput(input+"8")}>8</button>
    <button className="button-style" onClick={()=>setInput(input+"9")}>9</button>
    <button className="button-style" onClick={()=>setInput(input+"0")}>0</button><br/>
    <button className="button-style" onClick={()=>setInput(input+"+")}>+</button>
    <button className="button-style" onClick={()=>setInput(input+"-")}>-</button>
    <button className="button-style" onClick={()=>setInput(input+"/")}>/</button>
    <button className="button-style" onClick={()=>setInput(input+"*")}>*</button>
    <button className="button-style" onClick={()=>setInput("")}>clr</button><br/>

     <Link to="/">back to home</Link> 
     </>
 }
 export default Calculeter;
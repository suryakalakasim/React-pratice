import React,{useState} from "react";
import {Link} from 'react-router-dom';
 function Calculetor(){
     const[input,setInput]=useState("")
     const[result,setResult]=useState(0)
     const inputHandler=(e)=>{
         setInput(e.target.value)
     }
     return<>
     <h1 style={{color:"green"}}>Claculator</h1>
     <input type="text" name="input" disabled={input.length===0} value={input} onChange={inputHandler}/><br/><br/>
         <button type="button" disabled={input.length===0} onClick={()=>setResult(eval(input))}>Result</button>
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
    <button className="button-style" onClick={()=>setInput("")}>clr</button><br/><br/>

     <Link className="link-style" to="/">back to home</Link> 
     </>
 }
 export default Calculetor;
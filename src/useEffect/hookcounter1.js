import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import DataFaching from "./DataFaching";
function HookCounter1(){
   const[count,setcount]=useState(0)
   useEffect(()=>{
       document.title=`you clicked ${count}`
   },[])
    return<div>
         <h1>count:{count}</h1>
         <button onClick={()=>setcount(count+1)}>click</button><br/>
         <DataFaching/>
         <Link to='/'>back to Home</Link>
    </div>
}
export default HookCounter1;
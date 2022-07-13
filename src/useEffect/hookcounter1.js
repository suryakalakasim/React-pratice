import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import DataFetching from "./DataFetching";
function HookCounter1(){
   const[count,setcount]=useState(0)
   useEffect(()=>{
       document.title=`you clicked ${count}`
   },[count])
    return<div>
         <h1>count:{count}</h1>
         <button onClick={()=>setcount(count+1)}>click</button><br/>
         <DataFetching/>
         <Link className="link-style" to='/'>back to Home</Link>
    </div>
}
export default React.memo(HookCounter1);
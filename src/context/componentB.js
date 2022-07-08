import React,{createContext, useContext} from "react";
import { UserContext } from "./createContext";
 function ComponentB(){
     const [data]=useContext(UserContext)
     console.log("componentB>>>",data)
     return<div>
         <div className="card">
             <div className="card-body">
             ComponentB
             {data.map((itam,i)=><h1 className="card-text" key={i}>{itam.brandname}:{itam.color}</h1>)}
             </div>
             </div>
     </div>
 }
 export default ComponentB;
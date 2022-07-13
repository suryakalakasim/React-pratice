import React,{createContext, useContext} from "react";
import { UserContext } from "./createContext";
import {StudentContext} from './componentA';
 function ComponentB(){
     const studentData=useContext(StudentContext);
     console.log("studentdataB>>>",studentData)
     const [data]=useContext(UserContext)
     console.log("componentB>>>",data)
     return<div>
         <div className="card">
             <div className="card-body">
             ComponentB
             {studentData?studentData.map((x,y)=><ul key={y}>  
             <li>{y+1}</li>
             <li>{x.name}</li>
             <li>{x.grade}</li>
             </ul>):<h3>no data found</h3>}
             {data.map((itam,i)=><h1 className="card-text" key={i}>{itam.brandname}:{itam.color}</h1>)}
             </div>
             </div>
     </div>
 }
 export default ComponentB;
import React, { useContext } from "react";
import { UserContext } from './createContext';

function ComponentA() {
    const [data,setData]= useContext(UserContext)
    console.log('ComponentA==>', data);
    return <div>
        <div className="card">
            <div className="card-body">
                componentA                
        {data.map((itam,i)=><h1 className="card-text" key={i}>{itam.brandname}:{itam.color}</h1>)}
            </div>
            </div>
           
    
    </div>
}
export default ComponentA;
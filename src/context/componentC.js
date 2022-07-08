import React, { useContext } from "react";
import { UserContext } from './createContext';

function ComponentC() {
    const [data] = useContext(UserContext)
    console.log('ComponentC==>', data);
    return <div>
        <div className="card">
            <div className="card-body">                
            ComponentC
            {data.map((itam,i)=><h1 className="card-text" key={i}>{itam.brandname}:{itam.color}</h1>)}
            </div>
            </div>
           
    
    </div>
}
export default ComponentC;
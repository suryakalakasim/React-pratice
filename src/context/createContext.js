import React,{createContext, useState} from "react";
import { Link } from "react-router-dom";
import ComponentA from "./componentA";

export const UserContext = createContext()
function Createcontext(){
    const[data,setData]=useState('kala')
    return<div>
            <h3>createContext</h3>
            <UserContext.Provider value={{data ,setData}}>
     <ComponentA/>
    </UserContext.Provider>

            <Link to='/'>back to Home</Link>
    </div>
}
export default Createcontext;
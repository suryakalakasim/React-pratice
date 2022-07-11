import React from "react";
import { UserProvider } from "./userContext";
import ClassComponentB from "./classComponentB";
class ClassComponentA extends React.Component{
    render(){
        let arry=[{car:"maruthi-sujiki",color:"red"},{car:"honda",color:"black"}]
        return<div>
       <UserProvider value={arry}> 
           <ClassComponentB/>
       </UserProvider>
        </div>
    }
}
export default ClassComponentA;
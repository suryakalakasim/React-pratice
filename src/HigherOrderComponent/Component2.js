import React from "react";
import {HigherOrderComponent} from './HigherOrderComponent';
import {Link} from 'react-router-dom';
   function Component2(props){
       console.log("component2>>>..",props)
       const{detiles}=props
       console.log("detiles>>>",detiles)
       return<div>
           <Link className="link" to='/'>Back to Home</Link>
       </div>
   }
   export default HigherOrderComponent(Component2);
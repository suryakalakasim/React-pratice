import React from "react";
import {HigherOrderComponent} from './HigherOrderComponent';
import {Link} from 'react-router-dom';
   function Component2(props){
       console.log("component2>>>..",props)
       const {details}=props
      console.log("detiles>>>",details)
       return<div>
           <h3>component2</h3>
<table>
    <thead>
        <tr>
            <td>S.No</td>
            <td>StudentName</td>
            <td>Age</td>
            <td>Marks</td>
        </tr>
    </thead>
    <tbody>
        {details.map((x,i)=><tr key={i+1}>
              <td>{i+1}</td>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>{x.marks}</td>
        </tr>)}
    </tbody>
</table>
           <Link className="link" to='/'>Back to Home</Link>
       </div>
   }
   export default HigherOrderComponent(Component2);
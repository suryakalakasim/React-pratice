import React,{useState} from "react";
import StudentData from "./studentData";
import Studentlist from "./studentList";
  import {Link} from 'react-router-dom';
function ConditionalRendering(){
const[data,setData]=useState([{id:"101",name:"ravi",age:"20",marks:100},
{id1:"102",name:"raju",age:"21",marks:120},
{id:"103",name:"siva",age:"23",marks:110}
])
const[show,setShow]=useState(true)
   const clickHandel=()=>setShow((preState)=>!preState)
   
       return<>
    {show?<StudentData data={data}/>:<Studentlist data={data}/>}
    <button onClick={clickHandel} type="button">click</button>
    <Link to="/">Back to home</Link>
    </>
}
export default ConditionalRendering;
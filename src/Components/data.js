import React,{useState} from "react";
import { Card } from 'react-bootstrap';

export function Data(props){
     console.log("props>>>",props)
    const{value} = props
     console.log("data>>>>",value)
     const[color,setColor]=useState(false)
   const buttonClick=()=>{
        setColor( current =>!current)
   }
     return<div>
           
                {value?<Card className="card" style={{ backgroundColor:color?"blue" : "", color:color? "white" : "", width: "18rem",cursor:"pointer" }}
                        onClick={buttonClick}>id:{value.id}<br /> title:{value.title} </Card>:<h3>data not found</h3>}

     </div>
 }


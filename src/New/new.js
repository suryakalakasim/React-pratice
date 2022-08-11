import React, { useEffect } from "react";
import { google, outlook ,office365} from "calendar-link"
import axios from "axios";
const event = {
    title: "My birthday party",
    description: "Be there!",
    start: "2019-12-29 18:00:00 +0100",
    duration: [3, "hour"],
  };
 
const New=()=>{
    useEffect(()=>{
     axios.get('').then(res=>{
        console.log("res>>>",res)    
       google(event)
     })
     .catch(error=>{
         console.log(error)
     })
    },[])
    console.log("google>>",office365(event))
return<div>

</div>
}
export default New;
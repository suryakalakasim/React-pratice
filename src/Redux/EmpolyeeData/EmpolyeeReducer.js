import { EmpolyeeList } from "./empolyeeType";
const initialState={
     EmpolyeeDetails:{
    id:"",
    name:"",
    designation:""
}
}
export default function EmpolyeeReducer(state=initialState,action){
const {type,payload}=action
//console.log("empolyeeReducer>>",payload)
switch(type){
   case EmpolyeeList:
      return {...state,EmpolyeeDetails:{
    id:"123",
    name:"ravi",
    designation:"software-engineer"
   }
}
      default:
          return state
}
}


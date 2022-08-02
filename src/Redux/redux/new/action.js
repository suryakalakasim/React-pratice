import { INCREMENT,DECREMENT } from "./actionType"

export const IncAction=()=>async dispach => {
   dispach({
       type:INCREMENT
   })
}
export const DecAction=()=> async dispach =>{
    dispach({
        type:DECREMENT
    })
}
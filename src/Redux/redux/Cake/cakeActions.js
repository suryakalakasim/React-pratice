{/*import { BUY_CAKE } from "./cakeTypes"
 export const buyCake=()=>{
    return{
        type:BUY_CAKE
    }
}*/}
{/*export const IncAction=()=> async disptch=>{
     disptch({type:"INCREMENT"})
 }
  export const DecAction=()=> async disptch=>{
      disptch({type:"DECREMENT"})
  }*/}
  export const AddProduct=(value)=> async disptch  =>{
      disptch({
          type: "add",
          payload:{value}
      })
  }
  export const RemoveProduct =(value)=> async disptch =>{
      disptch({
          type:"remove",
          payload:{name:value}
      })
  }
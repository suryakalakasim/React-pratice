import { BUY_CAKE } from "./cakeTypes";
const initialState={
    numOfCakes:10
}
const cakeReducer=(state=initialState,action)=>{
 switch (action.type) {
     case BUY_CAKE:return{
         ...state,
         numOfCakes:state.numOfCakes-1
     }
     default:return state
        
 }
}
export default cakeReducer;
//const count = 0;
{/*export default function reducer(state=count,action){
    const{type,payload}=action
    switch(type){
        case "INCREMENT":
            return state + 1;
            case "DECREMENT":
                return state- 1;
                default: return state;
    }
}*/}
// const initial=[]
//    export default function reducer(state=initial,action){
//      const{type,payload}=action
//     switch(type){
//         case "add":
//             return [...state,payload]
//             case "remove":
//                 return state.filter(product=> product.name !== payload.name)
//                 default :
//                 return state;
//     }
//    }
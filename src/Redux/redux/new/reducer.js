import { INCREMENT,DECREMENT } from "./actionType";
const initial = 0;
export default function reducer(state=initial,action){
  console.log("state>>",state)
  const{type,payload}= action
  switch(type){
      case INCREMENT:
      return state+1
      case DECREMENT:
          return state-1;
          default :return state;
  }

}
import {createStore,applyMiddleware } from "redux";
//import cakeReducer from "./Cake/cakeReducer";
import reducer from "./Cake/cakeReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//const store= createStore(cakeReducer)
const middleWare=[thunk]
const store= createStore(
    reducer,
    
   composeWithDevTools(applyMiddleware(...middleWare))
)
export default store ;
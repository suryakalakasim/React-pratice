import {createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducer from "./contactReducer";
import EmpolyeeReducer from "../EmpolyeeData/EmpolyeeReducer";

const middleWare=[thunk]
const allReducers = combineReducers({
    contactReducer,
     EmpolyeeReducer
})
const store= createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middleWare))
)
export default store ;
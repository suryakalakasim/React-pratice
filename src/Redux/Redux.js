import React from "react";
import {useNavigate} from 'react-router-dom';
import CakeContainer from './CakeContainer';
import {Provider} from 'react-redux';
//import store from "./Contacts/contactStore";
import ContactList from "./Contacts/contactList";
import store from "./redux/store";
//import Counter from "./Counter";
//import  Badge  from "./Bach";
//import Cart from "./Cart";
import Operation from "./redux/add-subOperation";


function Redux(){
    const navigate=useNavigate();
    return<div>
        <Provider store={store}>
         {/* <CakeContainer/> */}
         {/* <Counter/> */}
         {/* <Badge/> */}
         {/* <Cart/> */}
         {/* <Operation/> */}
         <ContactList/>
         </Provider>
         <br/><button onClick={()=>navigate(-1)}>Back to Home</button>
    </div>
}
export default Redux;
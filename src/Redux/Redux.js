import React from "react";
import {Link} from 'react-router-dom';
import CakeContainer from './CakeContainer';
import {Provider} from 'react-redux';
import store from "./redux/store";
function Redux(){
    return<div>
        <Provider store={store}>
         <CakeContainer/>
         </Provider>
         <br/><Link to='/'>Back to Home </Link>
    </div>
}
export default Redux;
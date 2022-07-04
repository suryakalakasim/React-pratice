import React from "react";
import {Link} from 'react-router-dom';
function Home(){
    return<div>
        <h1 style={{color:"green"}}>Hello World</h1>
        <Link to='/dashboad'>Dashboad </Link> <br/>
        <Link to='/homepage'>HomePage </Link>
    </div>
}
export default Home;
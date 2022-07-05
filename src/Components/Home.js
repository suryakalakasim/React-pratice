import React from "react";
import {Link} from 'react-router-dom';
function Home(){
    return<div>
        <nav className="nav">
        <Link className="link" to='/dashboad'>Dashboad </Link> 
         <Link className="link" to='/homepage'>HomePage </Link>
         <Link className="link" to='/about'>AboutPage </Link>
        </nav>
    </div>
}
export default Home;
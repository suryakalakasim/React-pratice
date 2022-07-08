import React from "react";
import {Link} from 'react-router-dom';
function Home(){
    return<div>
        HomePage
        
        <nav className="nav">
         
        <Link className="link" to='/homepage'>HomePage </Link>
        <Link className="link" to='/dashboad'>Dashboad </Link> 
         <Link className="link" to='/about'>AboutPage </Link>
         <Link className="link" to='/conditionalrander'>Condetionalrendaring</Link>
       <Link className="link" to='/claculater'>Claculater</Link>
       <Link className="link" to='/context'>context</Link>
       <Link className="link" to='/counter'>counter</Link>
        </nav>
    </div>
}
export default Home;
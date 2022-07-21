import React from "react";
import {Link} from 'react-router-dom';
function Home(){
    return<div>
        HomePage
        
        <nav className="nav">
        
        <Link className="link" to='/homepage'>HomePage </Link>
        <Link className="link" to='/dashboad'>Dashboad </Link> 
         <Link className="link" to='/about'>AboutPage </Link>
         <Link className="link" to='/conditionalrender'>ConditionalRendering</Link>
       <Link className="link" to='/claculator'>Claculator</Link>
       <Link className="link" to='/context'>context</Link>
       <Link className="link" to='/counter'>counter</Link>
       <Link className="link" to='/event'>EventBinding</Link>
       <Link className="link" to='/formik'>Formik</Link>
       <Link className="link" to='/redux'>Redux </Link>
       {/* <Link className="link" to='/components'>component</Link> */}
        </nav>
    </div>
}
export default Home;
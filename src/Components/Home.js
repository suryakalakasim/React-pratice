import React from "react";
import {Link} from 'react-router-dom';
import images from '../images/pexels-blaque-x-863963.jpg';
function Home(){
    return<div>
                <h2 style={{textAlign:"center", color:"yellow"}}>Home Page</h2>
                <img className="image-style" src={images} alt="image" height={100} width={100} />  
        <nav className="nav">
        
        <Link className="link" to='/homepage'>Home</Link>
        <Link className="link" to='/dashboad'>Dashboad </Link> 
         <Link className="link" to='/about'>AboutPage </Link>
         <Link className="link" to='/conditionalrender'>ConditionalRendering</Link>
       <Link className="link" to='/claculator'>Claculator</Link>
       <Link className="link" to='/context'>context</Link>
       <Link className="link" to='/counter'>counter</Link>
       <Link className="link" to='/event'>EventBinding</Link>
       <Link className="link" to='/formik'>Formik</Link>
       <Link className="link" to='/redux'>Redux </Link>
       <Link className="link" to='/profile'>profile </Link>
     
       {/* <Link className="link" to='/components'>component</Link> */}
        </nav><br/>
        <Link className="styleForLink" to='/'>Back </Link>
    </div>
}
export default Home;
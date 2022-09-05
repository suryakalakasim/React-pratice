import React from 'react';
import { BiWater } from "react-icons/bi";
import {FaFacebookF } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
function DesignPage2() {
  return (
    <div className='page2container'>
        <div className='expertTrainers'>
        <h2 style={{color:"black"}}>EXPERT </h2>{"  "}
        <h2 style={{color:"red"}}>TRAINERS</h2>
        </div>
        <center><BiWater color='red' size={50}/></center>
        <p style={{textAlign:"center"}}>Tags: video, business, bootstrap-4, darygray, 2-column, health-fitness<br/>
Training Studio Template is 100% free to download </p>
        <div className='page2card'>
        <div className='card2'>
        <img className='imageStyle2' src="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367__340.jpg" alt="image" />
       <p style={{color:"red" ,marginTop:"5px", textAlign:"left"}}> strongth trainer</p>
       <h6>Breat D.Bowers</h6>
       <p className='paragraphStyle'>Stand Blog HTML CSS Template is ready</p>
       <p className='paragraphStyle'> serve as your CMS theme for your</p>
       <p className='paragraphStyle'>business website You can adapt this</p>
        <p className='paragraphStyle'> Boostrap 4 CSS layout for... </p>
        <p style={{marginLeft:"10px"}}><FaFacebookF/> <FaTwitter/> in Be </p>
        </div>
        <div className='card2'>
        <img className='imageStyle2' src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg" alt="image"  />
        <p style={{color:"red" ,marginTop:"3px", textAlign:"left"}}>muscle trainer</p>
        <h6>Hector T.Daigl</h6>
        <p className='paragraphStyle'>Stand Blog HTML CSS Template is ready</p>
       <p className='paragraphStyle'> serve as your CMS theme for your</p>
       <p className='paragraphStyle'>business website You can adapt this</p>
        <p className='paragraphStyle'> Boostrap 4 CSS layout for... </p> 
        <p style={{marginLeft:"10px"}}><FaFacebookF/> <FaTwitter/> in Be </p>
        </div>
        <div className='card2'>
        <img className='imageStyle2' src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__340.jpg" alt="image"  />
        <p style={{color:"red" ,marginTop:"3px", textAlign:"left"}}> power trainer</p>
         <h6 style={{marginTop:"0px"}}>Paul D.Newman</h6>
       <p className='paragraphStyle'>Stand Blog HTML CSS Template is ready</p>
       <p className='paragraphStyle'> serve as your CMS theme for your</p>
       <p className='paragraphStyle'>business website You can adapt this</p>
        <p className='paragraphStyle'> Boostrap 4 CSS layout for... </p>
        <p style={{marginLeft:"10px"}}><FaFacebookF/> <FaTwitter/> in Be </p>
        </div>
       
        </div>
    </div>
  )
}

export default DesignPage2
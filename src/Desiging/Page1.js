import React from 'react';
import images from '../images/pexels-blaque-x-863963.jpg';
import DesignPage2 from './page2';

function DesignPage1() {
  return (
    <div className='page1container'>
        {/* <h3s style={{color:"green"}}>DesignPage1</h3s> */}
        <div className='card1'>
        <img className='imageStyle' src={images} alt="image" />
       <h5 style={{color:"blue" ,marginTop:"5px", textAlign:"center"}}> <sub>55</sub>1 Stand Blog</h5>
       <p className='paragraphStyle'>Stand Blog HTML CSS Template is ready<br/>to serve as your CMS theme for your<br/>business website You can adapt this<br/> Boostrap 4 CSS layout for... </p>
        </div>
        <div className='card1'>
        <img className='imageStyle' src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg" alt="image"  />
       <h5 style={{color:"blue" ,marginTop:"5px", textAlign:"center"}}> <sub>55</sub>0 Diagoona</h5>
       <p className='paragraphStyle'>Stand Blog HTML CSS Template is ready<br/>to serve as your CMS theme for your<br/>business website You can adapt this<br/> Boostrap 4 CSS layout for... </p>
        </div>
        <div className='card1'>
        <img className='imageStyle' src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__340.jpg" alt="image"  />
       <h6 style={{color:"blue" ,marginTop:"5px", textAlign:"center"}}> 549 Business Oriented</h6>
       <p className='paragraphStyle'>Business Oriented is free CSS template<br/> that focuses on corporate websites. You <br/>can use this in your digital marketing <br/>purpose too. Header... </p>
        </div>
    
    </div>
  )
}

export default DesignPage1
import React from 'react'
import { BiWater,BiDumbbell } from "react-icons/bi";
function DesignPage3() {
  return (
    <div>
         <div className='expertTrainers'>
        <h2 style={{color:"black"}}>OUR</h2>{"  "}
        <h2 style={{color:"orangered"}}>CLASSES</h2>
        </div>
        <center><BiWater color='orangered' size={50}/></center>
        <p style={{textAlign:"center"}}>Tags: video, business, bootstrap-4, darygray, 2-column, health-fitness<br/>
Training Studio Template is 100% free to download </p>
<div  className='pageDesign3'>
    <div className='allTraining'>
        <p className='firstTraining'><BiDumbbell color='orangered'/> First Training Class</p>
        <p className='trainingClass'> <BiDumbbell color='orangered'/> Second Training Class</p>
        <p className='trainingClass'> <BiDumbbell color='orangered'/>  Third Training Class</p>
        <p className='trainingClass'> <BiDumbbell color='orangered'/> Fourth Training Class</p>
        <p className='schedule'>View All Schedules</p>
    </div>
    <div className='column2'>
    <img className='imageStyle3' src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__340.jpg" alt="image"  />
    <h6>First Training Class</h6>
    <p className='paragraphStyle'>Stand Blog HTML CSS Template is ready serve as your</p>
       <p className='paragraphStyle'>CMS theme for your business website You</p>
       <p className='paragraphStyle'> can adapt this  Boostrap 4 CSS layout for...</p><br/>
       <p className='viewschedule'>View Schedules</p>
    </div>
</div>
    </div>
  )
}

export default DesignPage3;
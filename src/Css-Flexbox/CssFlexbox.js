import React from 'react';
import {useNavigate} from 'react-router-dom';
import CssGrid from './Css-Grid';

function CssFlexbox() {
    const navigate =useNavigate();
  return (
    <div className='body'>
        <div className='container'>
            <div className='flex-item item-1'>Itam 1</div>
            <div className='flex-item item-2'>Itam 2</div>
            <div className='flex-item item-3'>Itam 3</div>
            <div className='flex-item item-4'>Itam 4</div>
            <div className='flex-item item-5'>Itam 5</div>
            <div className='flex-item item-6'>Itam 6</div>
            <div className='flex-item item-7'>Itam 7</div>
            <div className='flex-item item-8'>Itam 8</div>
        </div><br/>
      <CssGrid/><br/>
<button onClick={()=>navigate(-1)}>Back to Home</button>
    </div>
  )
}

export default CssFlexbox
import React from 'react';
import {Link} from 'react-router-dom';

function Design() {
  return (
    <div>
      <nav>
      <Link className="link" to='/page1'>Home </Link>
       <Link className="link" to='/page2'>Dashboad</Link>
       <Link className="link" to='/page3'>About</Link>
       <Link className="link" to='/page4'>Page</Link>
      </nav>

    </div>
  )
}

export default Design
import './App.css';
import React from 'react';
import Routess from './router';
import New from './New/new';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
//toast.configure();
  const notify=()=>{
    toast("WELCOME TO REACT")
  }
  return (
    <div className="App">
      <marquee> <h1 style={{ color: "red" }} >Welcome to React</h1> </marquee><hr />
      <ToastContainer/>
      <Routess />
      <New/>
      {/* <button onClick={notify}>notify</button> */}
    </div> 
  );
}

export default App;

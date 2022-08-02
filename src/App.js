import './App.css';
import React from 'react';
import Routess from './router';
function App() {
  return (
    <div className="App">
      <marquee> <h1 style={{ color: "red" }} >Welcome to React</h1> </marquee><hr />
      <Routess />
    </div> 
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import HomePage from './Components/HomePage';
import Dashboad from './Components/Dashboad';
import About from './Components/About';
function App() {
  return (
    <div className="App">
      <marquee> <h1 style={{color:"red"}} >Welcome to React</h1> </marquee><hr/>
    
     
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/dashboad' element={<Dashboad/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

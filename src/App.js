import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import HomePage from './Components/HomePage';
import Dashboad from './Components/Dashboad';
function App() {
  return (
    <div className="App">
     <h1>Welcome to React</h1>
     
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/dashboad' element={<Dashboad/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import HomePage from './HomePage';
import Dashboad from './Dashboad';
import About from './About';
import Condetionalrendaring from "./conditionalrendaring";
import Calculeter from "./calculater";
import Createcontext from "../context/createContext";
import HookCounter1 from "../useEffect/hookcounter1";

function Routess(props) {
  console.log("inputprop>>",props)
  return (
    <div>
      {/* <marquee> <h1 style={{color:"red"}} >Welcome to React</h1> </marquee><hr/> */}
     
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/dashboad' element={<Dashboad/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/conditionalrander' element={<Condetionalrendaring/>}/>
        <Route path='/claculater'element={<Calculeter/>}/>
        <Route path='/context' element={<Createcontext/>}/>
        <Route path='/counter' element={<HookCounter1/>}/>
      </Routes>
    </BrowserRouter>
    

    </div>
  );
}

export default Routess;
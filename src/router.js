import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import HomePage from './Components/HomePage';
import Dashboad from './Components/Dashboad';
import About from './Components/About';
import ConditionalRendering from "./Components/ConditionalRendering";
import Calculetor from "./Components/calculator";
import Createcontext from "./context/createContext";
import HookCounter1 from "./useEffect/hookcounter1";
import Component2 from "./HigherOrderComponent/Component2";
import EvenntBind from "./Components/EventBinding";
import RegistrationForm from "./Formik/RegistrationForm";
import PageNotFond from "./Components/PageNotFound";
import CakeContainer from './Redux/CakeContainer';
function Routess() {
  return (
    <div>
      
     
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/dashboad' element={<Dashboad/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/conditionalrender' element={<ConditionalRendering/>}/>
        <Route path='/claculator'element={<Calculetor/>}/>
        <Route path='/context' element={<Createcontext/>}/>
        <Route path='/counter' element={<HookCounter1/>}/>
        <Route path='/event' element={<EvenntBind/>}/>
        <Route path='/formik' element={<RegistrationForm/>}/>
        <Route path='*' element={<PageNotFond/>}/>
        <Route path='/redux' element={<CakeContainer/>}/>
        {/* <Route path='/components' element={<Component2/>}/> */}
      </Routes>
    </BrowserRouter>
    

    </div>
  );
}

export default Routess;
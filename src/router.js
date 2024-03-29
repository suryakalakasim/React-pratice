import { Routes, Route,Navigate } from "react-router-dom";
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
import Welcome from "./Components/Welcome";
import Redux from "./Redux/Redux";
import ProfileForm from "./Formik/ProfileForm";
import CssFlexbox from "./Css-Flexbox/CssFlexbox";
import Design from "./Desiging/Design";
import DesignPage1 from "./Desiging/Page1";
import DesignPage2 from "./Desiging/Page2";
import DesignPage3 from "./Desiging/Page3";
import DesignPage4 from "./Desiging/Page4";
function Routess() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Navigate to={'/welcome'}/>} />
      <Route path='/welcome' element={<Welcome/>} />
        <Route path='/home' element={<Home/>} />
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
        <Route path='/redux' element={<Redux/>}/>
        <Route path='/profile' element={<ProfileForm/>}/>
        <Route path='/flexbox' element={<CssFlexbox/>}/>
       <Route path='/design' element={<Design/>}/>
        {/* <Route path='/components' element={<Component2/>}/> */}
        <Route path='/page1' element={<DesignPage1/>}/>
        <Route path='/page2' element={<DesignPage2/>}/>
       <Route path='/page3' element={<DesignPage3/>}/>
       <Route path='/page4' element={<DesignPage4/>}/>
      </Routes>
    
    

    </div>
  );
}

export default Routess;
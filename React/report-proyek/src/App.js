import React from "react";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import LayoutFull from "./Component/LayoutFull/LayoutFull";
import NavbarReport from "./Component/Navbar/NavbarReport";


function App() {
  return (
    
  <div>
      <Router>
        <Routes>
          <Route path='/' element={<LayoutFull/>}/>
          <Route path='/navbarReport' element={<NavbarReport/>}/>
        </Routes>
      </Router>
  </div> 
    
    
  );
}

export default App;

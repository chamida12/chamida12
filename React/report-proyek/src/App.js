import React from "react";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import FullNeraca from "./Component/LayoutFull/FullNeraca";
import LayoutFull from "./Component/LayoutFull/LayoutFull";
import NavbarReport from "./Component/Navbar/NavbarReport";



function App() {
  return (
    
  <div>
      <Router>
        <Routes>
          <Route path='/' element={<LayoutFull/>}/>
          <Route path='/navbarReport' element={<NavbarReport/>}/>
          <Route path='/laporan-neraca' element={<FullNeraca/>}/>
        </Routes>
      </Router>
  </div> 
    
    
  );
}

export default App;

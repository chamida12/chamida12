import React from "react";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import FullNeraca from "./Component/LayoutFull/FullNeraca";
import FullPettyCash from "./Component/LayoutFull/FullPettyCash";
import LayoutFull from "./Component/LayoutFull/LayoutFull";
import NavbarReportAcounting from "./Component/Navbar/NavbarReportAcounting";




function App() {
  return (
    
  <div>
      <Router>
        <Routes>
          <Route path='/' element={<LayoutFull/>}/>
          <Route path='/navbarReport' element={<NavbarReportAcounting/>}/>
          <Route path='/laporan-neraca' element={<FullNeraca/>}/>
          <Route path='/laporan-petty-cash' element={<FullPettyCash/>}/>
        </Routes>
      </Router>
  </div> 
    
    
  );
}

export default App;

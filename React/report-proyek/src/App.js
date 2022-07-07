import React from "react";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import FullInputPettyCash from "./Component/LayoutFull/FullInputPettyCash";
import FullNeraca from "./Component/LayoutFull/FullNeraca";
import FullPettyCash from "./Component/LayoutFull/FullPettyCash";
import LayoutFull from "./Component/LayoutFull/LayoutFull";

import NavbarReportAcounting from "./Component/Navbar/NavbarReportAcounting";
import { InputPayment } from "./pages/Cash Bank/Bank Payment/InputPayment";




function App() {
  return (
    
  <div>
      <Router>
        <Routes>
          <Route path='/' element={<LayoutFull/>}/>
          <Route path='/navbarReport' element={<NavbarReportAcounting/>}/>
          <Route path='/laporan-neraca' element={<FullNeraca/>}/>
          <Route path='/laporan-petty-cash' element={<FullPettyCash/>}/>
          <Route path='/input-petty-cash' element={<FullInputPettyCash/>}/>
          <Route path='/input-payment' element={<InputPayment/>}/>

        </Routes>
      </Router>
  </div> 
    
    
  );
}

export default App;

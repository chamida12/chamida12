import { BrowserRouter,Route } from "react-router-dom";
import './App.css';
import LayoutFull from "./Component/LayouFull/LayoutFull";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        
        
            <Route path="/" element={<LayoutFull/>}/>
        
     
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;



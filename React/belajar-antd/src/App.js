
import HalamanDepan from './Component/Latihan/HalamanDepan';
import MembuatTulisan from './Component/Latihan/MembuatTulisan';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HookClass from './Component/Latihan/Hook/HookClass';
import HookStatless from './Component/Latihan/Hook/HookStatless';


function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path='/' element={<HalamanDepan/>}/>
    <Route path='/tulis' element={<MembuatTulisan/>}/>
    <Route path='/hookclass' element={<HookClass/>}/>
    <Route path='/hookStatless' element={<HookStatless/>}/>
   
  
  

    </Routes>
     </Router>
    </div>
  );
}

export default App;
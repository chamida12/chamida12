
import HalamanDepan from './Component/Latihan/HalamanDepan';
import MembuatTulisan from './Component/Latihan/MembuatTulisan';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path='/' element={<HalamanDepan/>}/>
    <Route path='/tulis' element={<MembuatTulisan/>}/>

   
  
  

    </Routes>
     </Router>
    </div>
  );
}

export default App;
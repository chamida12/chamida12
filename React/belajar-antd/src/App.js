
import HalamanDepan from './Component/Latihan/HalamanDepan';
import MembuatTulisan from './Component/Latihan/MembuatTulisan';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HookClass from './Component/Latihan/Hook/HookClass';
import HookStatless from './Component/Latihan/Hook/HookStatless';
import Post from './Component/Latihan/Post';
import './App.css';
import ButtonDisabled from './Pages/ButtonDisabled';
import FormInput from './Pages/FormInput';
import ValidasiFormAntd from './Pages/VlidasiFormAntd';
import Login from './Pages/Login';
import MencobaLogin from './Pages/MencobaLogin';


function App() {
  return (
    <div className='App'>
    <Router>
    <Routes>
    <Route path='/' element={<HalamanDepan/>}/>
    <Route path='/tulis' element={<MembuatTulisan/>}/>
    <Route path='/hookclass' element={<HookClass/>}/>
    <Route path='/hookStatless' element={<HookStatless/>}/>
    <Route path='/post' element={<Post/>}/>
    <Route path='/button' element={<ButtonDisabled/>}/>
    <Route path='/form' element={<FormInput/>}/>
    <Route path='/validasiForm' element={<ValidasiFormAntd/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/loginindia' element={<MencobaLogin/>}/>


   
  
  

    </Routes>
     </Router>
    </div>
  );
}

export default App;
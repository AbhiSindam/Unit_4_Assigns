
import './App.css';

import {Routes, Route} from 'react-router-dom'
import {Home} from "./components/Home"
import {About} from './components/About'
import {Books} from './components/Books'
import {Login} from './components/Login'
import { Navbarr } from './components/Navbarr';

function App() {
  return (
    <div className="App">
      <Navbarr/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/books' element={<Books/>}/>
      <Route path='/login' element={<Login/>}/>

      </Routes>      
    </div>
  );
}

export default App;

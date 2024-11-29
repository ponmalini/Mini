
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import RegisterForm from './components/Register';
import Home from './components/Home';
import WeddingDecor from './components/WeddingDecor';
import NamingCeremony from './components/NamingCeremony';
import BirthdayParties from './components/BirthdayParties';
import ProductLaunch from './components/ProductLaunch';
import About from './components/About';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className = "App">
      
      <BrowserRouter>

      <Routes>
        <Route path ="/" element ={<RegisterForm/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
       
        
      </Routes>
      <Routes>
        <Route path ='/WeddingDecor' element ={<WeddingDecor/>}/>
      </Routes>
      <Routes>
        <Route path ='/About' element ={<About/>}/>
      </Routes>
      <Routes>
        <Route path ='/Contact' element ={<Contact/>}/>
      </Routes>
      <Routes>
        <Route path ='/NamingCeremony' element ={<NamingCeremony/>}/>
      </Routes>
      <Routes>
        <Route path ='/BirthdayParties' element ={<BirthdayParties/>}/>
      </Routes>
      <Routes>
        <Route path ='/ProductLaunch' element ={<ProductLaunch/>}/>
      </Routes>
      

      </BrowserRouter>

      
      </div>
  );
}

export default App;

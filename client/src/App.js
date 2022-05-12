import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';



function App() {
  return (
    <div className='App'>
      <header >

      <Navbar />
      
      
      <Routes>  
      <Route path="/" element={ <HomePage /> } />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
     
      </Routes>  

    

      </header>
    </div>
  );
}

export default App;









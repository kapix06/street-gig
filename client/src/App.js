import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Navbar />
      <Routes>  
      <Route path="/" element={ <HomePage /> } />
      </Routes>  


      </header>
    </div>
  );
}

export default App;









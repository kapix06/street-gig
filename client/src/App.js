import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddEvent from './pages/AddEvent';
import UserPage from './pages/UserPage';
import AllEvents from './pages/AllEvents';
import EventDetails from './pages/EventDetails';
//import UserDetails from './components/UserDetails';


function App() {
  return (
    <div className='App'>
      <header >

      <Navbar />
      
      
      <Routes>  
      <Route path="/" element={ <HomePage /> } />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/addEvent' element={<AddEvent />} />
      <Route path='/userpage/:id' element={<UserPage />} />
      <Route path='/allevents' element={<AllEvents />} />
      <Route path='/events/:id' element={<EventDetails />} />
      </Routes>  

    

      </header>
    </div>
  );
}

export default App;









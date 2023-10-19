import './App.css';

import Navigation from './components/Navigation';
import Film from './components/Film';
import Footer from './components/Footer';
import Main from './components/Main';
import Contact from './components/Contact';
import VideoTrailer from './components/VideoTrailer.js';
import { Routes, Route } from 'react-router-dom';

import { createContext, useState } from 'react';
import Detail from './components/Detail';

function App() {
  const CartContext = createContext();
  return (
    <div className='App'>
    
      <Navigation />

      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/video' element={<VideoTrailer />}></Route>
      </Routes>
      
       
       <Footer/>
    </div>
   
  );
}

export default App;

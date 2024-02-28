import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Menu_all from './component/Menu_all'
import Home from './component/Home';
import About from './component/About';
import Shop from './component/Shop';

function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Menu_all> </Menu_all>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

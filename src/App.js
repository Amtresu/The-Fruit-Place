import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import LaunchDetail from './components/Details';



function App() {



  return (
    <div>
      <Routes>
        <Route path="/the-launch-place/Details" element={<LaunchDetail />} />
        <Route path='/the-launch-place' element={<Header />} />
      </Routes>
    </div>
  )
}

export default App;

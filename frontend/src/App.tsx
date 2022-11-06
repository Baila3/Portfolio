import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route path='/' element={<><Navbar/><Home/></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

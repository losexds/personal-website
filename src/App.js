import React from "react";
import {Routes, Route, Link } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";


// Pages

import HomePage from './pages/Home'
import About from './pages/AboutUs'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

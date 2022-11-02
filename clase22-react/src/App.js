//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import './App.css';

import  HomePage  from "./pages/HomePage";
import Ejemplo1 from "./pages/Ejemplo1";

function App() {
  return (
    <div className="App">

      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
         <Route path = '/'element={<HomePage/>}></Route>
         <Route path='/ejemplo1' element={<Ejemplo1/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components/pages
import {HomePage} from './pages/HomePage';
import Prices from './pages/prices';
import {Login} from "./pages/login";
import {Logout} from './pages/logout';
import {Navigation} from './components/navigation';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu';



function  App() {
  return (
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/prices" element={<Prices/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  );
};

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//components/pages
import HomePage from './pages/HomePage';
import Prices from './pages/prices';
import LandingPage from './pages/LandingPage';
import Login from './pages/login';
import SignUp from './pages/SignUp';
import Logout from './pages/logout';
import {Navigation} from './components/navigation';
import {Footer} from './components/Footer';
// todo import BurgerMenu from './components/BurgerMenu';



function  App() {
  return (
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/prices" element={<Prices/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  );
};

export default App;
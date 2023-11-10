import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components/pages
import HomePage from './pages/HomePage';
import {Login} from "./pages/login";
import {Logout} from './pages/logout';
import {Navigation} from './components/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu';
import AuthButtons from './components/AuthButtons';


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

function  App() {
  return (
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
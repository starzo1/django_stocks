import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components/pages
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu';
import AuthButtons from './components/AuthButtons';


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

function  App() {
  return (
    <Router>
      <div className="App" id="outer-container">
        {/*<Nav outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />*/}
        <Header />
        <AuthButtons />
        <BurgerMenu />
        <div id="page-wrap">
          <Routes>
            {/*pages*/}
            <Route exact path="/" element={<HomePage />} />
            {/*<Route path="/portfolio" component={Portfolio} />*/}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
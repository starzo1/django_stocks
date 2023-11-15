import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/LandingPage.css'; 
import InvestImg from '../images/invest.png';

function LandingPage() {
  // Check authorization status here
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    
    <div className="landing-page-container">
      <div className="centered-content">
      <img src={InvestImg} alt="" />
        <h1>Welcome to Our Investment Platform</h1>
        <p>
          Explore the world of investments, funds, and the stock market with our platform. 
          We provide real-time updates on prices, trends, and opportunities to help you 
          make informed investment decisions.
        </p>
        {isAuth ? (
          <Navigate to="/home" />
        ) : (
          <div>
            <p>Please log in or sign up to continue.</p>
            <ButtonGroup>
              <Button variant="primary" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button variant="secondary" onClick={() => navigate('/signup')}>
                Sign Up
              </Button>
            </ButtonGroup>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
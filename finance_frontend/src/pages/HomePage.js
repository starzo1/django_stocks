import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockList from '../components/StockList'; // Import the StockList component

export const HomePage = () => {
  const [message, setMessage] = useState('');
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      window.location.href = '/login';
    } else {
      (async () => {
        try {
          const { data } = await axios.get('http://localhost:8000/api/stocks/', {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          setMessage(data.message);
          setStocks(data); // Assuming the stocks are in the data response
        } catch (e) {
          console.log('not auth');
        }
      })();
    }
  }, []);

  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hi Welcome to investing page {message}</h3>
      <StockList stocks={stocks} /> {/* Pass the stocks array as a prop to StockList */}
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockList from '../components/StockList';

export const HomePage = () => {
  const [message, setMessage] = useState('');
  const [stocks, setStocks] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      window.location.href = '/login';
    } else {
      (async () => {
        try {
          const [stocksResponse, pricesResponse] = await Promise.all([
            axios.get('http://localhost:8000/api/stocks/'),
            axios.get('http://localhost:8000/api/prices/'),
          ]);

          setMessage(stocksResponse.data.message);
          setStocks(stocksResponse.data);
          setPrices(pricesResponse.data);
        } catch (e) {
          console.log('Error fetching data:', e);
        }
      })();
    }
  }, []);

  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hi Welcome to investing page {message}</h3>
      <StockList stocks={stocks} prices={prices} />
    </div>
  );
};
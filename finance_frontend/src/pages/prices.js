import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const PriceListPage = () => {
  const [latestPrices, setLatestPrices] = useState([]);

  useEffect(() => {
    // Fetch prices data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/prices/');
        const latestPricesMap = {};

        // Filter to get only the latest price for each stock
        response.data.forEach((price) => {
          if (!latestPricesMap[price.stock] || new Date(price.date) > new Date(latestPricesMap[price.stock].date)) {
            latestPricesMap[price.stock] = price;
          }
        });

        // Convert map values to an array
        const latestPricesArray = Object.values(latestPricesMap);
        setLatestPrices(latestPricesArray);
      } catch (error) {
        console.log('Error fetching prices:', error);
      }
    };

    fetchData();
  }, []);

  // Function to calculate the percentage change
  const calculatePercentageChange = (previousClose, latestClose) => {
    if (previousClose === 0) return 0; // To avoid division by zero
    return ((latestClose - previousClose) / previousClose);
  };

  return (
    <div className="mt-5 text-center">
      <h3>Latest Prices </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Adj Close</th>
            <th>Volume</th>
            <th>24H Change %</th>
            <th></th> {/* "Buy Now" button */}
          </tr>
        </thead>
        <tbody>
          {latestPrices.map((price, index) => {
            const previousClose = index > 0 ? latestPrices[index - 1].close : 0;
            const percentChange = calculatePercentageChange(previousClose, price.close);

            return (
              <tr key={price.date}>
                <td>{price.stock}</td>
                <td>{price.open}</td>
                <td>{price.high}</td>
                <td>{price.low}</td>
                <td>{price.close}</td>
                <td>{price.adj_close}</td>
                <td>{price.volume}</td>
                <td>{percentChange.toFixed(2)}%</td>
                <td>
                  <Button variant="success">Buy/Sell</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PriceListPage;
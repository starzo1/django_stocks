import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const StockList = ({ stocks, prices }) => {
  // Helper function to get the close price for a specific stock
  const getClosePrice = (ticker) => {
    const price = prices.find((p) => p.stock === ticker);
    return price ? price.close : 'N/A';
  };

  return (
    <CardGroup>
      {stocks.map((stock) => (
        <Card key={stock.ticker}>
          <Card.Body>
            <Card.Title>{stock.name}</Card.Title>
            <Card.Text>
              <strong>Ticker:</strong> {stock.ticker}<br />
              <strong>Sector:</strong> {stock.sector}<br />
              <strong>Industry:</strong> {stock.industry}<br />
              <strong>Close Price:</strong> {getClosePrice(stock.ticker)}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};

export default StockList;
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap'; // Assuming you are using Bootstrap components

const StockList = ({ stocks }) => {
  return (
    <CardGroup>
      {stocks.map((stock) => (
        <Card key={stock.ticker}>
          <Card.Body>
            <Card.Title>{stock.name}</Card.Title>
            <Card.Text>
              <strong>Ticker:</strong> {stock.ticker}<br />
              <strong>Sector:</strong> {stock.sector}<br />
              <strong>Industry:</strong> {stock.industry}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};

export default StockList;
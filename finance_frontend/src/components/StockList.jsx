import { useEffect, useState } from "react";
import { Card, CardGroup } from 'react-bootstrap';


function StockCard({ ticker, name, sector, industry }) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{ticker}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
          <Card.Text>
            Sector: {sector}
            <br />
            Industry: {industry}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  function StockList() {
    const [stocks, setStocks] = useState([]);
  
    useEffect(() => {
      // Replace this with your API URL
      const apiUrl = 'http://localhost:8000/api/stocks/';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setStocks(data));
    }, []);
  
    return (
      <CardGroup>
        {stocks.map((stock) => (
          <StockCard key={stock.ticker} {...stock} />
        ))}
      </CardGroup>
    );
  }
  
  export default StockList;
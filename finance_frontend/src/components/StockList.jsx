import React, { useState } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/StockList.css'; // Include a corresponding CSS file for transitions



const StockList = ({ stocks, prices }) => {
  // Helper function to get the close price for a specific stock
  const getClosePrice = (ticker) => {
    const price = prices.find((p) => p.stock === ticker);
    return price ? price.close : 'N/A';
  };

  const cardsPerPage = 5;

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(0);

  // State to keep track of the selected industry filter
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Function to handle next page button click
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page button click
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Function to handle industry filter button click
  const handleIndustryFilter = (industry) => {
    setSelectedIndustry((prevIndustry) => (prevIndustry === industry ? null : industry));
    setCurrentPage(0); // Reset page when changing the filter
  };

  // Filter stocks based on the selected industry
  const filteredStocks = selectedIndustry
    ? stocks.filter((stock) => stock.industry === selectedIndustry)
    : stocks;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <Button
          variant={selectedIndustry === 'Consumer Electronics' ? 'primary' : 'secondary'}
          onClick={() => handleIndustryFilter('Consumer Electronics')}
        >
          Consumer Electronics
        </Button>{' '}
        <Button
          variant={selectedIndustry === 'Semiconductors' ? 'primary' : 'secondary'}
          onClick={() => handleIndustryFilter('Semiconductors')}
        >
          Semiconductors
        </Button>{' '}
        <Button
          variant={selectedIndustry === 'Internet Retail' ? 'primary' : 'secondary'}
          onClick={() => handleIndustryFilter('Internet Retail')}
        >
          Internet Retail
        </Button>
      </div>
      <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <TransitionGroup>
          <CSSTransition key={currentPage} classNames="fade" timeout={500}>
            <CardGroup style={{ maxHeight: '100%', overflowY: 'auto' }}>
              {filteredStocks.slice(startIndex, endIndex).map((stock) => (
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
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button variant="primary" onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </Button>{' '}
        <Button variant="primary" onClick={handleNextPage} disabled={endIndex >= filteredStocks.length}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StockList;
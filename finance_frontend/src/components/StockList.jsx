import React, { useState } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/StockList.css";

const StockList = ({ stocks, prices }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const cardsPerPage = 5;
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const getClosePrice = (ticker) => {
    const price = prices.find((p) => p.stock === ticker);
    return price ? price.close : "N/A";
  };

  const filteredStocks = selectedIndustry
    ? stocks.filter((stock) => stock.industry === selectedIndustry)
    : stocks;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleIndustryFilter = (industry) => {
    setSelectedIndustry((prevIndustry) =>
      prevIndustry === industry ? null : industry
    );
    setCurrentPage(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <Button
          variant={
            selectedIndustry === "Consumer Electronics"
              ? "primary"
              : "secondary"
          }
          onClick={() => handleIndustryFilter("Consumer Electronics")}
        >
          Consumer Electronics
        </Button>
        <Button
          variant={
            selectedIndustry === "Semiconductors" ? "primary" : "secondary"
          }
          onClick={() => handleIndustryFilter("Semiconductors")}
        >
          Semiconductors
        </Button>
        <Button
          variant={
            selectedIndustry === "Internet Retail" ? "primary" : "secondary"
          }
          onClick={() => handleIndustryFilter("Internet Retail")}
        >
          Internet Retail
        </Button>
      </div>
      <div style={{ maxHeight: "500px", overflowY: "auto" }}>
        <TransitionGroup>
            <CSSTransition key={currentPage} classNames="fade" timeout={500}>
              <CardGroup style={{ maxHeight: "100%", overflowY: "auto" }}>
                {filteredStocks.slice(startIndex, endIndex).map((stock) => (
                  <Card key={stock.ticker}>
                    <Card.Body>
                      <Card.Title>{stock.name}</Card.Title>
                      <Card.Text>
                      <strong>Ticker:</strong> {stock.ticker}
                      <br />
                      <strong>Sector:</strong> {stock.sector}
                      <br />
                      <strong>Industry:</strong> {stock.industry}
                      <br />
                      <strong>Close Price:</strong>
                      {getClosePrice(stock.ticker)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button
          variant="primary"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={handleNextPage}
          disabled={endIndex >= filteredStocks.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StockList;
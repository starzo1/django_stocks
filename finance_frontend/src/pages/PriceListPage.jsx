import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { SparklineCell } from "../components/SparklineCell";
import "../styles/Prices.css";

const PriceListPage = () => {
  const [latestPrices, setLatestPrices] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/prices/");
        const latestPricesMap = {};

        response.data.forEach((price) => {
          if (
            !latestPricesMap[price.stock] ||
            new Date(price.date) > new Date(latestPricesMap[price.stock].date)
          ) {
            latestPricesMap[price.stock] = price;
          }
        });

        const latestPricesArray = Object.values(latestPricesMap);
        setLatestPrices(latestPricesArray);
      } catch (error) {
        console.log("Error fetching prices:", error);
      }
    };

    fetchData();
  }, []);

  const sortedPrices = latestPrices.sort((a, b) => {
    if (sortConfig.key) {
      const keyA = a[sortConfig.key];
      const keyB = b[sortConfig.key];

      if (keyA < keyB) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (keyA > keyB) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }

    return 0;
  });

  const calculatePercentageChange = (previousClose, latestClose) => {
    if (previousClose === 0) return 0; // To avoid division by zero
    return (latestClose - previousClose) / previousClose;
  };

  const renderSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? <FaArrowUp /> : <FaArrowDown />;
    }
    return null;
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="landing-page-container">
      <div className="centered-content">
        <div className="mt-5 text-center">
          <h3>Latest Prices </h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th onClick={() => handleSort("stock")}>
                  Stock {renderSortIndicator("stock")}
                </th>
                <th onClick={() => handleSort("open")}>
                  Open {renderSortIndicator("open")}
                </th>
                <th onClick={() => handleSort("high")}>
                  High {renderSortIndicator("high")}
                </th>
                <th onClick={() => handleSort("low")}>
                  Low {renderSortIndicator("low")}
                </th>
                <th onClick={() => handleSort("close")}>
                  Close {renderSortIndicator("close")}
                </th>
                <th onClick={() => handleSort("adj_close")}>
                  Adj Close {renderSortIndicator("adj_close")}
                </th>
                <th onClick={() => handleSort("volume")}>
                  Volume {renderSortIndicator("volume")}
                </th>
                <th onClick={() => handleSort("percentChange")}>
                  24H Change % {renderSortIndicator("percentChange")}
                </th>
                <th>10D Graph</th>
                <th></th> {/* "Buy Now" button */}
              </tr>
            </thead>
            <tbody>
              {sortedPrices.map((price, index) => {
                const previousClose =
                index > 0 ? sortedPrices[index - 1].close : 0;
                const percentChange = calculatePercentageChange(
                  previousClose,
                  price.close
                );

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
                      <SparklineCell ticker={price.stock} />
                    </td>
                    <td>
                      <Button variant="success">Buy/Sell</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PriceListPage;
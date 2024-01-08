import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import StockList from "../components/StockList";

const HomePage = () => {
  const [stocks, setStocks] = useState([]);
  const [prices, setPrices] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const [stocksResponse, pricesResponse] = await Promise.all([
            axios.get("http://localhost:8000/api/stocks/"),
            axios.get("http://localhost:8000/api/prices/"),
          ]);
          setStocks(stocksResponse.data);
          setPrices(pricesResponse.data);

          const access_token = localStorage.getItem("access_token");
          const payload = jwtDecode(access_token);
          const username = payload.user;
          setUsername(username);
        } catch (e) {
          console.log("Error fetching data:", e);
        }
      })();
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Hi, {username}. Welcome to the investing page </h3>
      <StockList stocks={stocks} prices={prices} />
    </div>
  );
};

export default HomePage;
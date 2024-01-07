import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";

// A custom cell component that renders a sparkline graph
export const SparklineCell = ({ ticker }) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Fetch the price data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/prices/?ticker=${ticker}`
        );
        const data = response.data;
        const latestPrices = data.slice(-10).map((day) => Number(day.close));

        // Set the prices in the state
        setPrices(latestPrices);
      } catch (error) {
        console.log("Error fetching prices:", error);
      }  
    };

    fetchData();
  }, [ticker]);

  return (
    <div>
      <Sparklines data={prices} width={80} height={20}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </div>
  );
};
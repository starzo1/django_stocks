import React from 'react';


const HomePage = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <h1>Welcome to Our Stock Trading Platform</h1>
          <p>Start investing and trading today!</p>
        </section>
        <section className="features">
          <div className="feature">
            <h2>Real-Time Stock Prices</h2>
            <p>Get up-to-the-minute stock prices and market data.</p>
          </div>
          <div className="feature">
            <h2>User-Friendly Interface</h2>
            <p>Intuitive and easy-to-use platform for all users.</p>
          </div>
          <div className="feature">
            <h2>Advanced Analytics</h2>
            <p>Access advanced analytics tools for informed decision-making.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
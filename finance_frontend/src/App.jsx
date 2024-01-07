import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Login, Logout, LandingPage, HomePage, PriceListPage, SignUp } from "./pages";


function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/prices" element={<PriceListPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
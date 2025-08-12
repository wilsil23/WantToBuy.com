import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Buy" element={<BuyPage />} />
      <Route path="/Sell" element={<SellPage />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default MyRoutes;
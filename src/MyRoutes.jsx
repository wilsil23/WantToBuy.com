import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import ProfilePage from './pages/ProfilePage';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/Buy" element={<BuyPage />} />
      <Route path="/Sell" element={<SellPage />} />
      <Route path="/Profile" element={<ProfilePage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default MyRoutes;
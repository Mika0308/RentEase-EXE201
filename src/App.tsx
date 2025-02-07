import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import Navbar from './component/Layout/Navbar';
import Home from './component/pages/Home';
import Profile from './component/pages/Profile';
import Settings from './component/pages/Setting';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
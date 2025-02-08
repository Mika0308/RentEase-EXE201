import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Setting';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <main >
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
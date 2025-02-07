import React from 'react';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import Navbar from './component/Layout/Navbar';
import { Routes, Route } from 'react-router-dom';

// Dummy pages để điều hướng
const Home = () => <div className="p-4">Welcome to RentEase!</div>;
const Profile = () => <div className="p-4">This is your Profile page.</div>;
const Settings = () => <div className="p-4">Adjust your Settings here.</div>;

const App = () => {
  return (
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
  );
};

export default App;

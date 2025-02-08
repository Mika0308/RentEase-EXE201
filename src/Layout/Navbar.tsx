import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4 shadow-md">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/profile" className="hover:text-blue-600">Profile</Link></li>
        <li><Link to="/settings" className="hover:text-blue-600">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
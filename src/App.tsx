import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/login";
import Settings from "../src/pages/Setting";
import Dashboard from "./pages/admin/dashboard";
import Users from "./pages/admin/user";
import Manage from "./pages/admin/manage";
import DashboardLayout from "./component/dashboard";
import ApartmentDetail from "./pages/ApartmentDetail"; // Make sure to import ApartmentDetail

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="dbhome" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="manage" element={<Manage />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="apartment/:id" element={<ApartmentDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
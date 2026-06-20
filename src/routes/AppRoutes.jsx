// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import DashboardLayout from '../layouts/DashboardLayout';

// Pages
import Home from '../pages/Home'; // <-- Add this import
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import DiscoverTrips from '../pages/DiscoverTrips';
import CreateTrip from '../pages/CreateTrip';
import MyTrips from '../pages/MyTrips';
import TripDetails from '../pages/TripDetails';
import JoinRequestManager from '../pages/JoinRequestManager';
import ChatRoom from '../pages/ChatRoom';
import ExpenseTracker from '../pages/ExpenseTracker';
import Profile from '../pages/Profile';

function AppRoutes() {
  return (
    <Routes>
      {/* Public Landing Root View */}
      <Route path="/" element={<Home />} /> {/* <-- Add this route */}

      {/* Public Guest Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Authenticated Internal Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/discover" element={<DiscoverTrips />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/requests" element={<JoinRequestManager />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/expenses" element={<ExpenseTracker />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Wildcard Fallback Redirect */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default AppRoutes;
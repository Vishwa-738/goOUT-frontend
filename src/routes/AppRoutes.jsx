// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Import Layouts
import DashboardLayout from '../layouts/DashboardLayout';

// Import Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import DiscoverTrips from '../pages/DiscoverTrips';
import ExpenseTracker from '../pages/ExpenseTracker';
import ChatRoom from '../pages/ChatRoom';
import CreateTrip from '../pages/CreateTrip';
import MyTrips from '../pages/MyTrips';
import Profile from '../pages/Profile';
import JoinRequestManager from '../pages/JoinRequestManager';
import TripDetails from '../pages/Tripdetails';

// Higher-Order Component to protect dashboard layout panels
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="d-flex justify-content-center align-items-center vh-100">Loading Session...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Landing Framework Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Core Application Protected Routes wrapped inside Dashboard Layout structures */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="discover" element={<DiscoverTrips />} />
        <Route path="expenses" element={<ExpenseTracker />} />
        <Route path="chat" element={<ChatRoom />} />
        <Route path="create-trip" element={<CreateTrip />} />
        <Route path="my-trips" element={<MyTrips />} />
        <Route path="profile" element={<Profile />} />
        <Route path="requests" element={<JoinRequestManager />} />
        <Route path="trip/:id" element={<TripDetails />} />
      </Route>

      {/* Fallback Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
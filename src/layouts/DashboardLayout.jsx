// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout() {
  return (
    <div className="d-flex flex-column vh-100 overflow-hidden bg-light">
      {/* Global Application Header Mount */}
      <Navbar />

      {/* Main Structural Layout Divided Wrapper Box */}
      <div className="d-flex flex-grow-1 overflow-hidden">
        {/* Left Side Application Navigation Strip */}
        <Sidebar />

        {/* Dynamic Inner Component Dashboard Mounting View Panel */}
        <main className="flex-grow-1 overflow-y-auto p-4 position-relative">
          <div className="container-fluid g-0 animate-fade-in">
            {/* The Outlet acts as a portal loading the active sub-routes cleanly */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
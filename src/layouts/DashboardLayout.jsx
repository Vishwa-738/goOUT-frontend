// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function DashboardLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Global Top Navigation Bar */}
      <Navbar />
      
      <div className="d-flex flex-grow-1">
        {/* Global Left Navigation Sidebar */}
        <Sidebar />
        
        {/* Main Fluid Content Container Area */}
        <main className="flex-grow-1 p-4 bg-light" style={{ minWidth: 0 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
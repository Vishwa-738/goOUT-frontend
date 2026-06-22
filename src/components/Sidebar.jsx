// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  // Navigation links array mapping cleanly to AppRoutes configuration targets
  const navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/dashboard/discover', label: 'Discover Trips', icon: '🌍' },
    { path: '/dashboard/expenses', label: 'Expense Tracker', icon: '💰' },
    { path: '/dashboard/my-trips', label: 'My Trips', icon: '🎒' },
    { path: '/dashboard/chat', label: 'Chat Room', icon: '💬' },
    { path: '/dashboard/create-trip', label: 'Create New Trip', icon: '➕' },
    { path: '/dashboard/requests', label: 'Join Requests', icon: '🔔' },
    { path: '/dashboard/profile', label: 'My Profile', icon: '👤' },
  ];

  return (
    <div className="bg-dark text-white vh-100 p-3 shadow-sm" style={{ width: '260px' }}>
      <div className="text-uppercase tracking-wider fw-bold text-muted small px-3 mb-4">
        Main Navigation
      </div>
      
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        {navLinks.map((link) => (
          <li key={link.path} className="nav-item">
            <NavLink
              to={link.path}
              end={link.path === '/dashboard'}
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center gap-3 px-3 py-2.5 rounded-3 border-0 transition-all ${
                  isActive ? 'bg-primary fw-semibold shadow-sm' : 'opacity-75 link-hover'
                }`
              }
            >
              <span className="fs-5">{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
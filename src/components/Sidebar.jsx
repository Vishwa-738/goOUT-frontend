// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { 
      path: '/dashboard', 
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      )
    },
    { 
      path: '/discover', 
      label: 'Discover Trips',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      )
    },
    { 
      path: '/my-trips', 
      label: 'My Trips',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
      )
    },
    { 
      path: '/expenses', 
      label: 'Expenses',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
      )
    },
    { 
      path: '/profile', 
      label: 'Profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      )
    }
  ];

  return (
    <div 
      className="bg-white d-flex flex-column p-3" 
      style={{ 
        width: 'var(--sidebar-width)', 
        minHeight: 'calc(100vh - 70px)', 
        position: 'sticky',
        top: '70px',
        borderRight: '1px solid #edf2f7'
      }}
    >
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item">
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `nav-link d-flex align-items-center gap-3 py-2.5 px-4 rounded-3 text-decoration-none text-nowrap ${
                  isActive ? 'text-white shadow-sm' : 'text-secondary bg-transparent'
                }`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#14a3e4' : 'transparent',
                fontWeight: isActive ? '600' : '500',
                fontSize: '1rem',
                letterSpacing: '0.2px',
                height: '50px' // Hardcoded height forces all button boxes to remain identical
              })}
            >
              <span className="d-flex align-items-center justify-content-center" style={{ width: '20px' }}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
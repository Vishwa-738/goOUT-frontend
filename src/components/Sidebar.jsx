// src/components/Sidebar.jsx
import React from 'react';

// 🚀 STEP 1: Import your custom SVGs from the assets folder
import homeIcon from '../assets/home-icon.svg';
import discoverIcon from '../assets/discover-icon.svg';
import tripsIcon from '../assets/trips-icon.svg';
import expensesIcon from '../assets/expenses-icon.svg';
import profileIcon from '../assets/profile-icon.svg';

export default function Sidebar({ activeTab, setActiveTab }) {
  
  const menuItems = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: <img src={homeIcon} alt="Home" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /> 
    },
    { 
      id: 'discover', 
      label: 'Discover Trips', 
      icon: <img src={discoverIcon} alt="Discover" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /> 
    },
    { 
      id: 'my-trips', 
      label: 'My Trips', 
      icon: <img src={tripsIcon} alt="Trips" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /> 
    },
    { 
      id: 'expenses', 
      label: 'Expenses', 
      icon: <img src={expensesIcon} alt="Expenses" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /> 
    },
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: <img src={profileIcon} alt="Profile" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /> 
    }
  ];

  return (
    <div style={{ 
      width: '260px', 
      /* 🚀 THE FIX: Applied the teal-to-green gradient */
      background: 'linear-gradient(135deg, #17B0B2 0%, #8ADD63 100%)', 
      borderRadius: '24px', 
      margin: '24px', 
      /* 🚀 THE FIX: Changed to fill the exact remaining height */
      height: 'calc(100vh - 128px)', 
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)', 
      display: 'flex', 
      flexDirection: 'column', 
      padding: '24px 16px' 
    }}>
      
      {/* Navigation Links */}
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 24px',
                /* 🚀 THE FIX: Used a dark semi-transparent overlay for the active state so it blends with the gradient */
                backgroundColor: isActive ? 'rgba(0, 0, 0, 0.15)' : 'transparent',
                color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.75)', /* White text looks best on gradients */
                border: 'none',
                borderRadius: '16px',
                fontSize: '15px',
                fontWeight: isActive ? 'bold' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                textAlign: 'left',
                width: '100%'
              }}
              onMouseOver={(e) => {
                if (!isActive) {
                  /* Light glass hover effect */
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                }
              }}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>

    </div>
  );
}
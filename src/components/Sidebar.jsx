// src/components/Sidebar.jsx
import React from 'react';
import { Home, Compass, MapPin, Wallet, User } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'discover', label: 'Discover Trips', icon: <Compass size={20} /> },
    { id: 'my-trips', label: 'My Trips', icon: <MapPin size={20} /> },
    { id: 'expenses', label: 'Expenses', icon: <Wallet size={20} /> },
    { id: 'profile', label: 'Profile', icon: <User size={20} /> }
  ];

  return (
    <div style={{ 
      width: '260px', 
      backgroundColor: '#ffffff', 
      borderRight: '1px solid #f1f5f9', 
      display: 'flex', 
      flexDirection: 'column', 
      padding: '32px 16px' 
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
                backgroundColor: isActive ? '#0EA5E9' : 'transparent',
                color: isActive ? '#ffffff' : '#64748b',
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
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.color = '#0f172a';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#64748b';
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
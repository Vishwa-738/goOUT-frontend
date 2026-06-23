import React from 'react';
import { Home, Compass, MapPin, Wallet, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ activeTab, setActiveTab }) {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'discover', label: 'Discover Trips', icon: Compass },
    { id: 'my-trips', label: 'My Trips', icon: MapPin },
    { id: 'expenses', label: 'Expenses', icon: Wallet },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const handleLogout = () => {
    // If you build the full AuthContext later, call your auth.logout() function here first!
    console.log("User logged out");
    navigate('/login');
  };

  return (
    <div style={{
      width: '260px',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #E2E8F0',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '24px',
      paddingBottom: '24px', // Added bottom padding to hold the logout button
      paddingLeft: '16px',
      paddingRight: '16px',
      boxSizing: 'border-box'
    }}>
      
      {/* Top Navigation Links */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 20px',
                borderRadius: '16px',
                border: 'none',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'left',
                backgroundColor: isActive ? '#0EA5E9' : 'transparent',
                color: isActive ? '#FFFFFF' : '#64748B',
                boxShadow: isActive ? '0 4px 12px rgba(14, 165, 233, 0.25)' : 'none'
              }}
            >
              <IconComponent size={20} style={{ color: isActive ? '#FFFFFF' : '#94A3B8' }} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* BOTTOM FIXED LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '12px 20px',
          borderRadius: '16px',
          border: '1px solid #FEE2E2',
          backgroundColor: '#FFF1F2',
          color: '#E11D48', // Deep rose/red color to indicate an exit action
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          textAlign: 'left',
          marginTop: 'auto' // This CSS property pushes the button to the very bottom of the flex container!
        }}
      >
        <LogOut size={20} color="#E11D48" />
        Log Out
      </button>

    </div>
  );
}
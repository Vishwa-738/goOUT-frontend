// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import CreateTrip from './CreateTrip';
import { User, Settings, LogOut, Bell } from 'lucide-react';
import Discover from './DiscoverTrips';
import Sidebar from '../components/Sidebar';
import ExpenseTracker from './ExpenseTracker';
import Profile from './Profile';
import MyTrips from './MyTrips'; 
import TripDetails from './TripDetails'; 
import ChatRoom from './ChatRoom';       
import DashboardHome from './DashboardHome'; // 🚀 NEW: Imported the dynamic feed!

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div style={{ display: 'flex', backgroundColor: '#F8FAFC', height: '100vh', width: '100vw', margin: 0, padding: 0, boxSizing: 'border-box', overflow: 'hidden' }}>
      
      {/* Sidebar Navigation Column */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Window Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        
        {/* Global Fixed Top Navigation Header */}
        <header style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #f1f5f9',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0
        }}>
          <button 
            onClick={() => setActiveTab('home')}
            style={{ 
              background: 'transparent',
              border: 'none',
              padding: 0,
              color: '#0EA5E9', 
              fontWeight: '900', 
              fontSize: '24px', 
              letterSpacing: '-1px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: '26px' }}>🌐</span> GoOut
          </button>
          
          <input 
            type="text" 
            placeholder="Search trips, destinations, travelers..." 
            style={{
              width: '380px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '8px 16px',
              fontSize: '14px',
              outline: 'none'
            }}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* Notification Bell */}
            <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Bell size={22} color="#64748b" />
              <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '10px', height: '10px', backgroundColor: '#0EA5E9', borderRadius: '50%', border: '2px solid #fff' }}></div>
            </div>

            {/* Profile Dropdown Trigger */}
            <div style={{ position: 'relative' }}>
              <div 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#cbd5e1', overflow: 'hidden', cursor: 'pointer', border: isProfileOpen ? '2px solid #0EA5E9' : '2px solid transparent', transition: 'all 0.2s' }}
              >
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* The Dropdown Menu Box */}
              {isProfileOpen && (
                <div style={{ position: 'absolute', top: '50px', right: '0', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '220px', zIndex: 100, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                  <div style={{ padding: '16px', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>Sarah Kumar</div>
                    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>sarah@example.com</div>
                  </div>
                  <div style={{ padding: '8px' }}>
                    <button 
                      onClick={() => { setActiveTab('profile'); setIsProfileOpen(false); }}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', borderRadius: '8px', color: '#334155', fontSize: '14px', textAlign: 'left' }}
                    >
                      <User size={18} color="#64748b" /> Profile
                    </button>
                    <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', borderRadius: '8px', color: '#334155', fontSize: '14px', textAlign: 'left' }}>
                      <Settings size={18} color="#64748b" /> Settings
                    </button>
                  </div>
                  <div style={{ padding: '8px', borderTop: '1px solid #f1f5f9' }}>
                    <button 
                      onClick={() => {
                        localStorage.clear(); 
                        sessionStorage.clear();
                        window.location.href = '/login'; 
                      }}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', borderRadius: '8px', color: '#ef4444', fontSize: '14px', textAlign: 'left' }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >                      
                      <LogOut size={18} color="#ef4444" /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* INNER CONTENT SCROLL AREA */}
        <div style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
          
          {/* HOME TAB - 🚀 Now rendering the dynamic component! */}
          {activeTab === 'home' && <DashboardHome />}

          {/* DISCOVER TRIPS */}
          {activeTab === 'discover' && <Discover setActiveTab={setActiveTab} />}

          {/* TRIP DETAILS VIEW */}
          {activeTab === 'trip-details' && <TripDetails setActiveTab={setActiveTab} />}

          {/* LIVE CHAT ROOM */}
          {activeTab === 'chat' && <ChatRoom />}

          {/* MY TRIPS */}
          {activeTab === 'my-trips' && <MyTrips setActiveTab={setActiveTab} />}

          {/* EXPENSES */}
          {activeTab === 'expenses' && <ExpenseTracker />}

          {/* PROFILE */}
          {activeTab === 'profile' && <Profile />}
          
          {/* CREATE NEW TRIP VIEW */}
          {activeTab === 'create-trip' && <CreateTrip setActiveTab={setActiveTab} />}
        </div>
      </div>
    </div>
  );
}
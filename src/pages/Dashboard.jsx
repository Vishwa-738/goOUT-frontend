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
import DashboardHome from './DashboardHome'; 
import logo from '../assets/Full size logo.svg';
import topBarBg from '../assets/Top bar image.svg';
import pageBg from '../assets/page-background.svg';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // 🚀 GRAB THE USER DATA FROM LOCAL STORAGE
  const userString = localStorage.getItem('user');
  const currentUser = userString ? JSON.parse(userString) : null;

  // 🚀 FALLBACK TO DEFAULTS JUST IN CASE
  const displayName = currentUser?.name || currentUser?.email?.split('@')[0] || "Traveler";
  const displayEmail = currentUser?.email || "No email found";
  
  // 🚀 DYNAMIC PROFILE PICTURE WITH DEFAULT GENERATOR
  const displayPic = currentUser?.profilePic || currentUser?.avatar || "https://ui-avatars.com/api/?name=" + displayName + "&background=0EA5E9&color=fff";

 return (
    // 🚀 THE FIX: Applied the full-page background image here!
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundImage: `url(${pageBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', /* Keeps the image perfectly still when you scroll the feed */
      height: '100vh', 
      width: '100vw', 
      margin: 0, 
      padding: 0, 
      boxSizing: 'border-box', 
      overflow: 'hidden' 
    }}>
      
      {/* Your Header goes here... */} 
      {/* 🚀 MOVED: Global Fixed Top Navigation Header is now at the very top */}
      <header style={{
        backgroundImage: `url(${topBarBg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
        padding: '10px 32px',
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
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            width: '120px', 
            justifyContent: 'center'
          }}
        >
          <img 
            src={logo} 
            alt="GoOut Logo" 
            style={{ 
              height: '60px', 
              width: '100%', 
              objectFit: 'contain',
              transform: 'scale(3.7)' 
            }} 
          />
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
              {/* 🚀 DYNAMIC IMAGE SOURCE APPLIED HERE */}
              <img src={displayPic} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* The Dropdown Menu Box */}
            {isProfileOpen && (
              <div style={{ 
                position: 'absolute', 
                top: '50px', 
                right: '0', 
                /* 🚀 THE FIX: Added the gradient background and removed the hard border */
                background: 'linear-gradient(135deg, #17B0B2 0%, #8ADD63 100%)', 
                borderRadius: '16px', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)', 
                width: '220px', 
                zIndex: 100, 
                border: 'none', 
                overflow: 'hidden' 
              }}>
                
                {/* 🚀 DYNAMIC USER INFO IN THE MENU */}
                <div style={{ padding: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#ffffff' }}>{displayName}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', marginTop: '2px' }}>{displayEmail}</div>
                </div>
                
                <div style={{ padding: '8px' }}>
                  <button 
                    onClick={() => { setActiveTab('profile'); setIsProfileOpen(false); }}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', borderRadius: '8px', color: '#ffffff', fontSize: '14px', textAlign: 'left', transition: 'all 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <User size={18} color="#ffffff" /> Profile
                  </button>
                  <button 
                    style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', borderRadius: '8px', color: '#ffffff', fontSize: '14px', textAlign: 'left', transition: 'all 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <Settings size={18} color="#ffffff" /> Settings
                  </button>
                </div>
                <div style={{ padding: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <button 
                    onClick={() => {
                      localStorage.clear(); 
                      sessionStorage.clear();
                      window.location.href = '/login'; 
                    }}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', borderRadius: '8px', color: '#ffffff', fontSize: '14px', textAlign: 'left', transition: 'all 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >                      
                    <LogOut size={18} color="#ffffff" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 🚀 NEW: Bottom Wrapper containing both Sidebar and Main Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Sidebar Navigation Column */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* INNER CONTENT SCROLL AREA */}
        <div style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
          
          {/* HOME TAB */}
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
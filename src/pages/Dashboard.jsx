import React, { useState } from 'react';
import Discover from './DiscoverTrips';
import Sidebar from '../components/Sidebar';
import ExpenseTracker from './ExpenseTracker';
import MyTrips from './MyTrips'; // Linked your brand new file here!

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ display: 'flex', backgroundColor: '#F8FAFC', minHeight: '100vh', width: '100vw', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' }}>
      {/* Sidebar Navigation Column */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Window Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Global Fixed Top Navigation Header */}
        <header style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #f1f5f9',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '20px', cursor: 'pointer' }}>🔔</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#cbd5e1', overflow: 'hidden' }}>
              <img src="https://via.placeholder.com/150" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </header>

        {/* Dynamic Inner Panel View Router */}
        <div style={{ padding: '32px', flex: 1 }}>
          
          {/* HOME TAB WINDOW VIEW */}
          {activeTab === 'home' && (
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              
              {/* Left Column Feed Stream */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <input type="text" placeholder="Share your travel experience..." style={{ width: '100%', border: 'none', outline: 'none', fontSize: '14px' }}/>
                </div>

                <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', padding: '24px' }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold' }}>Sarah Kumar</h4>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>2 hours ago • Ella, Sri Lanka</span>
                  <p style={{ marginTop: '12px', fontSize: '14px', color: '#334155', lineHeight: '1.5' }}>
                    Just witnessed the most breathtaking sunrise at Ella Rock! The hike was challenging but absolutely worth it. 🌄
                  </p>
                  <div style={{ marginTop: '16px', borderRadius: '16px', overflow: 'hidden', maxHeight: '400px' }}>
                    <img src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800" alt="Ella" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>

              {/* Right Side Sticky Utilities Grid Pane */}
              <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ backgroundColor: '#00A3E1', color: '#ffffff', padding: '24px', borderRadius: '24px' }}>
                  <span style={{ fontSize: '14px', opacity: 0.9 }}>Colombo, Sri Lanka</span>
                  <h2 style={{ fontSize: '42px', fontWeight: 'bold', margin: '4px 0' }}>28°C</h2>
                  <p style={{ fontSize: '13px', margin: 0 }}>Partly Cloudy</p>
                </div>
              </div>

            </div>
          )}

          {/* DISCOVER TRIPS TAB WINDOW VIEW */}
{activeTab === 'discover' && (
  <div>
    <h3 style={{ fontWeight: 'bold', fontSize: '20px', margin: 0 }}>Discover Trips View</h3>
    <p style={{ color: '#64748b', fontSize: '14px' }}>Tharindu's stream filters load here.</p>
  </div>
)}

          {/* MY TRIPS TAB WINDOW VIEW (Figma Setup Live!) */}
          {activeTab === 'my-trips' && (
            <MyTrips />
          )}

          {/* EXPENSES TAB WINDOW VIEW */}
          {activeTab === 'expenses' && (
            <ExpenseTracker />
          )}

          {/* PROFILE CONFIGURATION TAB WINDOW VIEW */}
          {activeTab === 'profile' && (
            <div>
              <h3 style={{ fontWeight: 'bold', fontSize: '20px', margin: 0 }}>Profile Configuration</h3>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
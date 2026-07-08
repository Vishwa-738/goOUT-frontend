// src/pages/Dashboard.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'; 
import CreateTrip from './CreateTrip';
import { User, Settings, LogOut, Bell, CheckCircle } from 'lucide-react'; //  Added CheckCircle
import Discover from './DiscoverTrips';
import Sidebar from '../components/Sidebar';
import ExpenseTracker from './ExpenseTracker';
import ExpenseTripsList from './ExpenseTripsList'; 
import Profile from './Profile';
import MyTrips from './MyTrips'; 
import TripDetails from './TripDetails'; 
import ChatRoom from './ChatRoom';       
import DashboardHome from './DashboardHome'; 
import logo from '../assets/Full size logo.svg';
import topBarBg from '../assets/Top bar image.svg';
import pageBg from '../assets/page-background.svg';
import SettingsPage from './Settings'; 
import api from '../services/api'; //  Needed to fetch notifications

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split('/');
  let activeTab = pathParts[pathParts.length - 1];
  if (activeTab === 'dashboard') activeTab = 'home'; 

  const setActiveTab = (tab) => {
    navigate(`/dashboard/${tab}`);
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  //  NEW: Notification State
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  
  const [selectedExpenseTrip, setSelectedExpenseTrip] = useState(null); 

  const userString = localStorage.getItem('user');
  const currentUser = userString ? JSON.parse(userString) : null;

  const displayName = currentUser?.name || currentUser?.email?.split('@')[0] || "Traveler";
  const displayEmail = currentUser?.email || "No email found";
  const displayPic = currentUser?.profilePic || currentUser?.avatar || "https://ui-avatars.com/api/?name=" + displayName + "&background=0EA5E9&color=fff";

  //  NEW: Click Outside Listener to close dropdowns
  const profileRef = useRef(null);
  const notifRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //  NEW: Fetch Notifications from Backend
  const fetchNotifications = async () => {
    try {
      // NOTE: This will 404 until the backend team creates the endpoint!
      const response = await api.get('/api/v1/notifications');
      let data = Array.isArray(response.data) ? response.data : (response.data?.data || []);
      setNotifications(data);
    } catch (error) {
      console.warn("Backend notification endpoint might not be ready yet.", error);
      // Fallback dummy data so you can see the UI working right now!
      setNotifications([
        { id: 1, message: "Sachin requested to join Nsbm Kollo.", isRead: false, createdAt: new Date().toISOString() },
        { id: 2, message: "Your request for Supiri Yaluwo was accepted!", isRead: true, createdAt: new Date(Date.now() - 86400000).toISOString() }
      ]);
    }
  };

  useEffect(() => {
    fetchNotifications();
    // Poll for new notifications every 30 seconds
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  const markAllAsRead = async () => {
    // Optimistically update UI
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    try {
      // Endpoint for backend to clear them out
      await api.put('/api/v1/notifications/read-all');
    } catch (e) {
      console.warn("Could not mark as read on backend.");
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

 return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundImage: `url(${pageBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', 
      height: '100vh', 
      width: '100vw', 
      margin: 0, 
      padding: 0, 
      boxSizing: 'border-box', 
      overflow: 'hidden' 
    }}>
      
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
          style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', width: '120px', justifyContent: 'center' }}
        >
          <img src={logo} alt="GoOut Logo" style={{ height: '60px', width: '100%', objectFit: 'contain', transform: 'scale(3.7)' }} />
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          
          {/*  UPGRADED: NOTIFICATION BELL DROPDOWN */}
          <div ref={notifRef} style={{ position: 'relative' }}>
            <div 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '8px', borderRadius: '50%', backgroundColor: isNotifOpen ? 'rgba(255,255,255,0.2)' : 'transparent', transition: 'all 0.2s' }}
              onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }}
            >
              <Bell size={22} color="#64748b" />
              {unreadCount > 0 && (
                <div style={{ position: 'absolute', top: '6px', right: '8px', width: '10px', height: '10px', backgroundColor: '#ef4444', borderRadius: '50%', border: '2px solid #fff' }}></div>
              )}
            </div>

            {isNotifOpen && (
              <div style={{ 
                position: 'absolute', top: '50px', right: '-10px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '320px', zIndex: 100, border: '1px solid #f1f5f9', overflow: 'hidden' 
              }}>
                <div style={{ padding: '16px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>Notifications</span>
                  {unreadCount > 0 && (
                    <button 
                      onClick={markAllAsRead}
                      style={{ background: 'none', border: 'none', color: '#0EA5E9', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <CheckCircle size={14} /> Mark all read
                    </button>
                  )}
                </div>
                
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {notifications.length === 0 ? (
                    <div style={{ padding: '32px 16px', textAlign: 'center', color: '#94a3b8', fontSize: '14px' }}>
                      <Bell size={32} color="#cbd5e1" style={{ margin: '0 auto 8px' }}/>
                      You have no notifications.
                    </div>
                  ) : (
                    notifications.map(notif => (
                      <div key={notif.id} style={{ padding: '16px', borderBottom: '1px solid #f1f5f9', backgroundColor: notif.isRead ? '#fff' : '#f0f9ff', transition: 'background-color 0.2s' }}>
                        <div style={{ fontSize: '14px', color: '#334155', lineHeight: '1.4', fontWeight: notif.isRead ? 'normal' : '500' }}>
                          {notif.message}
                        </div>
                        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px' }}>
                          {new Date(notif.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* PROFILE DROPDOWN */}
          <div ref={profileRef} style={{ position: 'relative' }}>
            <div 
              onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }}
              style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#cbd5e1', overflow: 'hidden', cursor: 'pointer', border: isProfileOpen ? '2px solid #0EA5E9' : '2px solid transparent', transition: 'all 0.2s' }}
            >
              <img src={displayPic} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {isProfileOpen && (
              <div style={{ 
                position: 'absolute', top: '50px', right: '0', background: 'linear-gradient(135deg, #17B0B2 0%, #8ADD63 100%)', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', width: '220px', zIndex: 100, border: 'none', overflow: 'hidden' 
              }}>
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
                    onClick={() => { setActiveTab('settings'); setIsProfileOpen(false); }}
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

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
          
          <Routes>
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="home" element={<DashboardHome />} />
            <Route path="discover" element={<Discover setActiveTab={setActiveTab} />} />
            <Route path="trip-details" element={<TripDetails setActiveTab={setActiveTab} />} />
            <Route path="chat" element={<ChatRoom />} />
            <Route path="my-trips" element={<MyTrips setActiveTab={setActiveTab} />} />
            <Route path="profile" element={<Profile />} />
            <Route path="create-trip" element={<CreateTrip setActiveTab={setActiveTab} />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="edit-trip" element={<CreateTrip />} />
            <Route path="expenses" element={
              <ExpenseTripsList setActiveTab={setActiveTab} setSelectedExpenseTrip={setSelectedExpenseTrip} />
            } />
            
            <Route path="expense-details" element={
              selectedExpenseTrip ? (
                <ExpenseTracker 
                  tripId={selectedExpenseTrip.id || selectedExpenseTrip._id} 
                  tripName={selectedExpenseTrip.title}
                  setActiveTab={setActiveTab} 
                />
              ) : (
                <Navigate to="/dashboard/expenses" replace /> 
              )
            } />
          </Routes>

        </div>
      </div>
    </div>
  );
}
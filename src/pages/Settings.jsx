// src/pages/Settings.jsx
import React, { useState } from 'react';
import { User, Bell, Shield, Globe, Moon, CreditCard, Save } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('preferences');
  
  // Dummy state for our toggles and inputs
  const [currency, setCurrency] = useState('USD');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);

  const handleSave = () => {
    // Later, we will connect this to your backend!
    alert("Settings saved successfully!");
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 8px 0' }}>Settings</h1>
        <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>Manage your account preferences and app behavior.</p>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        
        {/* LEFT SIDEBAR NAVIGATION */}
        <div style={{ width: '240px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          
          <button 
            onClick={() => setActiveTab('preferences')}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: 'none', background: activeTab === 'preferences' ? '#f0f9ff' : 'transparent', color: activeTab === 'preferences' ? '#0EA5E9' : '#64748b', fontWeight: activeTab === 'preferences' ? 'bold' : '500', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}
          >
            <Globe size={18} /> App Preferences
          </button>

          <button 
            onClick={() => setActiveTab('notifications')}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: 'none', background: activeTab === 'notifications' ? '#f0f9ff' : 'transparent', color: activeTab === 'notifications' ? '#0EA5E9' : '#64748b', fontWeight: activeTab === 'notifications' ? 'bold' : '500', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}
          >
            <Bell size={18} /> Notifications
          </button>

          <button 
            onClick={() => setActiveTab('security')}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: 'none', background: activeTab === 'security' ? '#f0f9ff' : 'transparent', color: activeTab === 'security' ? '#0EA5E9' : '#64748b', fontWeight: activeTab === 'security' ? 'bold' : '500', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}
          >
            <Shield size={18} /> Security
          </button>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '24px', padding: '32px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          
          {activeTab === 'preferences' && (
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>App Preferences</h3>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#334155', marginBottom: '8px' }}>
                  <CreditCard size={18} color="#0EA5E9" /> Default Currency
                </label>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>Choose the default currency for your expense tracker.</p>
                <select 
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  style={{ width: '100%', maxWidth: '300px', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#f8fafc', color: '#0f172a' }}
                >
                  <option value="USD">USD ($) - US Dollar</option>
                  <option value="LKR">LKR (Rs) - Sri Lankan Rupee</option>
                  <option value="EUR">EUR (€) - Euro</option>
                  <option value="GBP">GBP (£) - British Pound</option>
                </select>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f1f5f9', margin: '32px 0' }}></div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#334155', marginBottom: '8px' }}>
                  <Moon size={18} color="#8b5cf6" /> Appearance
                </label>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>Dark mode is currently in development.</p>
                <select disabled style={{ width: '100%', maxWidth: '300px', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', backgroundColor: '#f1f5f9', color: '#94a3b8', cursor: 'not-allowed' }}>
                  <option>Light Mode (Default)</option>
                  <option>Dark Mode (Coming Soon)</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Notification Settings</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #f1f5f9' }}>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#334155' }}>Email Notifications</div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Receive emails when someone requests to join your trip.</div>
                </div>
                <input 
                  type="checkbox" 
                  checked={emailNotifs} 
                  onChange={(e) => setEmailNotifs(e.target.checked)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }} 
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#334155' }}>Push Notifications</div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Get pinged for new group chat messages.</div>
                </div>
                <input 
                  type="checkbox" 
                  checked={pushNotifs} 
                  onChange={(e) => setPushNotifs(e.target.checked)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }} 
                />
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Security & Account</h3>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>Keep your account secure. Need to update your password?</p>
              
              <button style={{ padding: '12px 24px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', fontWeight: 'bold', color: '#334155', cursor: 'pointer', marginBottom: '32px' }}>
                Change Password
              </button>

              <div style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#ef4444', fontWeight: 'bold' }}>Danger Zone</h4>
                <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#991b1b' }}>Once you delete your account, there is no going back. Please be certain.</p>
                <button style={{ padding: '10px 20px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Delete Account
                </button>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
            <button 
              onClick={handleSave}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px', backgroundColor: '#10B981', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(16, 185, 129, 0.2)' }}
            >
              <Save size={18} /> Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
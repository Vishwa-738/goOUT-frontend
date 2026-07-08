// src/pages/Settings.jsx
import React, { useState } from 'react';
import { User, Bell, Shield, Globe, Moon, CreditCard, Save, X, AlertTriangle, Key } from 'lucide-react';
import api from '../services/api'; //  Import the API service

export default function Settings() {
  const [activeTab, setActiveTab] = useState('preferences');
  
  // Preferences State
  const [currency, setCurrency] = useState('USD');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);

  // Security Modals State
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Password Form State
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');

  // Delete Account Form State
  const [deleteConfirmText, setDeleteConfirmText] = useState('');

  const handleSavePreferences = () => {
    // For now, this just saves locally. You can wire this to an API later if needed.
    alert("Preferences saved successfully!");
  };

  // 🚀 ACTION: Change Password
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordError('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters long.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Calls the new backend endpoint
      await api.put('/api/v1/users/me/password', {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      });
      
      alert("Password changed successfully!");
      setIsPasswordModalOpen(false);
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      setPasswordError(error.response?.data?.message || "Failed to change password. Please check your current password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  //  ACTION: Delete Account
  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== "DELETE") {
      alert("Please type DELETE to confirm.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Calls the new backend endpoint
      await api.delete('/api/v1/users/me');
      
      alert("Your account has been deleted. We're sorry to see you go.");
      
      // Clear storage and redirect to login
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = '/login';
    } catch (error) {
      alert(error.response?.data?.message || "Failed to delete account. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif', position: 'relative' }}>
      
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
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
                <button 
                  onClick={handleSavePreferences}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px', backgroundColor: '#10B981', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(16, 185, 129, 0.2)' }}
                >
                  <Save size={18} /> Save Changes
                </button>
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
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
                <button 
                  onClick={handleSavePreferences}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px', backgroundColor: '#10B981', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(16, 185, 129, 0.2)' }}
                >
                  <Save size={18} /> Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Security & Account</h3>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>Keep your account secure. Need to update your password?</p>
              
              <button 
                onClick={() => setIsPasswordModalOpen(true)}
                style={{ padding: '12px 24px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', fontWeight: 'bold', color: '#334155', cursor: 'pointer', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Key size={18} /> Change Password
              </button>

              <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <AlertTriangle size={20} color="#ef4444" />
                  <h4 style={{ margin: 0, color: '#ef4444', fontWeight: 'bold', fontSize: '16px' }}>Danger Zone</h4>
                </div>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#991b1b', lineHeight: '1.5' }}>
                  Once you delete your account, there is no going back. All your trips, expenses, and chat messages will be permanently removed. Please be certain.
                </p>
                <button 
                  onClick={() => setIsDeleteModalOpen(true)}
                  style={{ padding: '12px 24px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 6px rgba(239, 68, 68, 0.2)' }}
                >
                  Delete Account
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/*  MODAL: CHANGE PASSWORD */}
      {isPasswordModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '24px', width: '100%', maxWidth: '400px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#0f172a' }}>Change Password</h3>
              <button onClick={() => setIsPasswordModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}><X size={24} /></button>
            </div>

            {passwordError && (
              <div style={{ padding: '12px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444', borderRadius: '8px', marginBottom: '16px', fontSize: '13px' }}>
                {passwordError}
              </div>
            )}

            <form onSubmit={handleChangePassword} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>Current Password</label>
                <input 
                  type="password" required
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>New Password</label>
                <input 
                  type="password" required
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>Confirm New Password</label>
                <input 
                  type="password" required
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>
              <button 
                type="submit" disabled={isSubmitting}
                style={{ marginTop: '8px', padding: '14px', backgroundColor: '#0EA5E9', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/*  MODAL: DELETE ACCOUNT */}
      {isDeleteModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '24px', width: '100%', maxWidth: '400px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#fef2f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <AlertTriangle size={32} color="#ef4444" />
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 'bold', color: '#0f172a' }}>Delete Account?</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>
                This action is permanent and cannot be undone. To confirm, type <strong>DELETE</strong> below.
              </p>
            </div>

            <input 
              type="text" 
              placeholder="Type DELETE"
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none', textAlign: 'center', fontWeight: 'bold', fontSize: '16px', letterSpacing: '2px', marginBottom: '24px' }}
            />

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                style={{ flex: 1, padding: '14px', backgroundColor: '#f8fafc', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={handleDeleteAccount}
                disabled={isSubmitting || deleteConfirmText !== 'DELETE'}
                style={{ flex: 1, padding: '14px', backgroundColor: deleteConfirmText === 'DELETE' ? '#ef4444' : '#fca5a5', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: deleteConfirmText === 'DELETE' ? 'pointer' : 'not-allowed' }}
              >
                {isSubmitting ? 'Deleting...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
// src/pages/Profile.jsx
import React, { useState } from 'react';
import { MapPin, Calendar, Edit, Camera, MessageCircle, Heart, CheckCircle, Image as ImageIcon } from 'lucide-react';

export default function Profile() {
  // State to handle tab switching
  const [activeTab, setActiveTab] = useState('my-trips');

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* --- TOP PROFILE HEADER CARD --- */}
      <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '32px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', marginBottom: '24px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            {/* Avatar Container */}
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop" 
                alt="Profile Avatar" 
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} 
              />
              <button style={{ position: 'absolute', bottom: '4px', right: '4px', backgroundColor: '#0EA5E9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Camera size={18} />
              </button>
            </div>

            {/* Profile Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Sarah Kumar</h2>
                <span style={{ backgroundColor: '#0EA5E9', color: '#fff', fontSize: '12px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle size={12} /> Verified
                </span>
              </div>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '12px' }}>sarah@example.com</p>
              
              <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '13px', marginBottom: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> Colombo, Sri Lanka</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Joined January 2025</span>
              </div>

              <p style={{ color: '#334155', fontSize: '15px', maxWidth: '500px', lineHeight: '1.5' }}>
                Adventure enthusiast and solo traveler exploring Sri Lanka's hidden gems. Photography lover 📸
              </p>
            </div>
          </div>

          <button style={{ backgroundColor: '#0EA5E9', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
            Edit Profile
          </button>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '32px' }}>
          {[
            { label: 'Trips Created', value: '12', icon: <MapPin size={24} color="#0EA5E9" /> },
            { label: 'Trips Joined', value: '28', icon: <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%230EA5E9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path><circle cx='9' cy='7' r='4'></circle><path d='M23 21v-2a4 4 0 0 0-3-3.87'></path><path d='M16 3.13a4 4 0 0 1 0 7.75'></path></svg>" alt="users" /> },
            { label: 'Posts Shared', value: '45', icon: <MessageCircle size={24} color="#0EA5E9" /> },
            { label: 'Total Likes', value: '2.4K', icon: <Heart size={24} color="#0EA5E9" /> }
          ].map((stat, i) => (
            <div key={i} style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>{stat.value}</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- TABS & CONTENT SECTION --- */}
      <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
        
        {/* Segmented Tab Navigation */}
        <div style={{ display: 'flex', backgroundColor: '#f1f5f9', borderRadius: '12px', padding: '4px', marginBottom: '24px' }}>
          {['My Trips', 'Experiences', 'Activity'].map((tab) => {
            const isActive = activeTab === tab.toLowerCase().replace(' ', '-');
            return (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                style={{
                  flex: 1, padding: '10px', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: isActive ? 'bold' : '500',
                  backgroundColor: isActive ? '#fff' : 'transparent',
                  color: isActive ? '#0f172a' : '#64748b',
                  boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
              >
                {tab}
              </button>
            )
          })}
        </div>

        {/* Tab Content: MY TRIPS */}
        {activeTab === 'my-trips' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', border: '1px solid #f1f5f9', padding: '16px', borderRadius: '16px' }}>
              <img src="https://images.unsplash.com/photo-1588598126710-53bc7f9273c0?w=200&h=150&fit=crop" style={{ width: '120px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} alt="Trip" />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold' }}>Cultural Triangle Adventure</h4>
                  <span style={{ backgroundColor: '#22c55e', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>Active</span>
                </div>
                <div style={{ color: '#64748b', fontSize: '13px', display: 'flex', gap: '16px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> Sigiriya & Dambulla</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Jun 15-20, 2026</span>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', border: '1px solid #f1f5f9', padding: '16px', borderRadius: '16px' }}>
              <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop" style={{ width: '120px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} alt="Trip" />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold' }}>Whale Watching & Beach Bliss</h4>
                  <span style={{ backgroundColor: '#94a3b8', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>Completed</span>
                </div>
                <div style={{ color: '#64748b', fontSize: '13px', display: 'flex', gap: '16px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> Mirissa</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> May 10-15, 2026</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: EXPERIENCES */}
        {activeTab === 'experiences' && (
          <div style={{ border: '1px solid #f1f5f9', padding: '20px', borderRadius: '16px' }}>
            <p style={{ margin: '0 0 16px 0', color: '#334155', fontSize: '15px', lineHeight: '1.5' }}>
              Just witnessed the most breathtaking sunrise at Ella Rock! The hike was challenging but absolutely worth it.
            </p>
            <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?w=800&h=300&fit=crop" style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }} alt="Experience" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '14px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', cursor: 'pointer' }}><Heart size={16} fill="#ef4444" /> 124</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}><MessageCircle size={16} color="#0EA5E9" /> 18</span>
              </div>
              <span>2 days ago</span>
            </div>
          </div>
        )}

        {/* Tab Content: ACTIVITY */}
        {activeTab === 'activity' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { text: 'Joined Cultural Triangle Adventure', dot: '#0EA5E9', time: '2 days ago' },
              { text: 'Shared a new experience post', dot: '#22c55e', time: '2 days ago' },
              { text: 'Completed Whale Watching & Beach Bliss trip', dot: '#8b5cf6', time: '1 week ago' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.dot, marginTop: '6px' }}></div>
                <div>
                  <div style={{ color: '#334155', fontSize: '15px' }} dangerouslySetInnerHTML={{ __html: item.text.replace(/((Joined|Shared|Completed))/g, '<strong>$1</strong>') }} />
                  <div style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
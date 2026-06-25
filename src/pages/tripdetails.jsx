// src/pages/TripDetails.jsx
import React, { useState } from 'react';
import { 
  MapPin, Calendar, DollarSign, Users, CloudRain, Wind, Droplets, 
  MessageCircle, Cloud, Wallet 
} from 'lucide-react';

export default function TripDetails({ setActiveTab }) {
  const [activeSegment, setActiveSegment] = useState('overview');

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* --- HERO BANNER --- */}
      <div style={{ position: 'relative', height: '350px', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px' }}>
        <img 
          src="https://images.unsplash.com/photo-1588598126710-53bc7f9273c0?w=1200&h=400&fit=crop" 
          alt="Trip Hero" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: '#fff' }}>
          <h1 style={{ margin: '0 0 8px 0', fontSize: '36px', fontWeight: 'bold' }}>Cultural Triangle Adventure</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', opacity: 0.9 }}>
            <MapPin size={18} /> Sigiriya & Dambulla
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        
        {/* ==========================================
            MAIN CONTENT AREA (Left Side)
            ========================================== */}
        <div style={{ flex: 1 }}>
          
          {/* Top Info Cards */}
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid #f1f5f9', display: 'flex', gap: '24px', marginBottom: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
              <div style={{ backgroundColor: '#f0f9ff', padding: '12px', borderRadius: '12px', color: '#0EA5E9' }}><Calendar size={24} /></div>
              <div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Duration</div>
                <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>Jun 15 - Jun 20, 2026</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, borderLeft: '1px solid #f1f5f9', paddingLeft: '24px' }}>
              <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderRadius: '12px', color: '#10B981' }}><DollarSign size={24} /></div>
              <div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Budget</div>
                <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>$350 - $450</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, borderLeft: '1px solid #f1f5f9', paddingLeft: '24px' }}>
              <div style={{ backgroundColor: '#f5f3ff', padding: '12px', borderRadius: '12px', color: '#8b5cf6' }}><Users size={24} /></div>
              <div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Members</div>
                <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>4/8</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
            <button style={{ flex: 1, backgroundColor: '#0EA5E9', color: '#fff', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(14, 165, 233, 0.2)' }}>
              Request to Join
            </button>
            <button 
              onClick={() => setActiveTab('chat')} 
              style={{ flex: 1, backgroundColor: '#fff', color: '#334155', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
            >
              <MessageCircle size={20} /> Chat with Group
            </button>
          </div>

          {/* Segmented Tabs & Content Container */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
            
            {/* Tab Navigation */}
            <div style={{ display: 'flex', backgroundColor: '#f8fafc', padding: '8px', borderBottom: '1px solid #f1f5f9' }}>
              {['Overview', 'Places', 'Expenses', 'Members'].map((tab) => {
                const isActive = activeSegment === tab.toLowerCase();
                return (
                  <button 
                    key={tab}
                    onClick={() => setActiveSegment(tab.toLowerCase())}
                    style={{
                      flex: 1, padding: '12px', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: isActive ? 'bold' : '500',
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

            {/* Tab Content: OVERVIEW */}
            {activeSegment === 'overview' && (
              <div style={{ padding: '32px' }}>
                
                <h3 style={{ margin: '0 0 16px 0', fontSize: '20px', color: '#0f172a' }}>About This Trip</h3>
                <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '15px', marginBottom: '32px' }}>
                  Join us for an unforgettable journey through Sri Lanka's Cultural Triangle! We'll explore the ancient rock fortress of Sigiriya, marvel at the cave temples of Dambulla, and immerse ourselves in the rich history of this UNESCO World Heritage Site. This trip is perfect for history buffs and adventure seekers alike.
                </p>

                <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#0f172a' }}>What's Included:</h4>
                <ul style={{ color: '#475569', lineHeight: '1.8', fontSize: '15px', paddingLeft: '20px', margin: '0 0 32px 0' }}>
                  <li>Accommodation in comfortable guesthouses</li>
                  <li>Transportation between destinations</li>
                  <li>Entrance fees to all sites</li>
                  <li>Local guide services</li>
                  <li>Breakfast daily</li>
                </ul>

                <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#0f172a' }}>What to Bring:</h4>
                <ul style={{ color: '#475569', lineHeight: '1.8', fontSize: '15px', paddingLeft: '20px', margin: '0 0 32px 0' }}>
                  <li>Comfortable hiking shoes</li>
                  <li>Light, breathable clothing</li>
                  <li>Sun protection</li>
                  <li>Camera</li>
                  <li>Water bottle</li>
                </ul>

                <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#0f172a' }}>Trip Organizer</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#f8fafc', padding: '16px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" alt="Raj Patel" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#0f172a', marginBottom: '4px' }}>Raj Patel</div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>Adventure enthusiast | 15+ trips organized</div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDEBAR (Weather & Actions)
            ========================================== */}
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Weather Widget */}
          <div style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)', borderRadius: '20px', padding: '24px', color: '#fff', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', opacity: 0.9, marginBottom: '4px' }}>Sigiriya, Sri Lanka</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: 1 }}>28°</span>
                  <Wind size={28} color="#fff" />
                </div>
                <div style={{ fontSize: '14px', marginTop: '8px', opacity: 0.9 }}>Partly Cloudy</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '16px 0', margin: '16px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Wind size={18} style={{ opacity: 0.8 }} />
                <div>
                  <div style={{ fontSize: '11px', opacity: 0.8 }}>Wind</div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>12 km/h</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Droplets size={18} style={{ opacity: 0.8 }} />
                <div>
                  <div style={{ fontSize: '11px', opacity: 0.8 }}>Humidity</div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>75%</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                <div key={day} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '6px' }}>{day}</div>
                  <Cloud size={16} style={{ margin: '0 auto 6px auto', opacity: 0.9 }} />
                  <div style={{ fontSize: '12px', fontWeight: 'bold' }}>27°</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions Panel */}
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#0f172a' }}>Quick Actions</h4>
            
            <button 
              onClick={() => setActiveTab('chat')}
              style={{ width: '100%', padding: '12px 16px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'transparent', cursor: 'pointer', color: '#334155', fontSize: '14px', fontWeight: '500', transition: 'all 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <MessageCircle size={18} color="#64748b" /> Open Chat Room
            </button>
            
            <button 
              style={{ width: '100%', padding: '12px 16px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'transparent', cursor: 'pointer', color: '#334155', fontSize: '14px', fontWeight: '500', transition: 'all 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <MapPin size={18} color="#64748b" /> Place Updates
            </button>
            
            <button 
              onClick={() => setActiveTab('expenses')}
              style={{ width: '100%', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'transparent', cursor: 'pointer', color: '#334155', fontSize: '14px', fontWeight: '500', transition: 'all 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Wallet size={18} color="#64748b" /> Track Expenses
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
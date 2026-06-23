import React, { useState } from 'react';
import { Calendar, DollarSign, Users, ArrowLeft, Plus, MapPin, Sparkles } from 'lucide-react';
import ChatRoom from './ChatRoom';

export default function TripDetails({ onBack }) {
  const [activeSubTab, setActiveSubTab] = useState('overview');
  const [inChat, setInChat] = useState(false);

  if (inChat) {
    return <ChatRoom onBack={() => setInChat(false)} />;
  }

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0F172A', backgroundColor: '#F8FAFC', minHeight: '100%', paddingBottom: '32px' }}>
      
      {/* BACK NAVIGATION */}
      <button 
        onClick={onBack}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          backgroundColor: 'transparent', border: 'none',
          color: '#64748B', fontSize: '14px', fontWeight: '600',
          cursor: 'pointer', marginBottom: '20px', transition: 'color 0.2s'
        }}
      >
        <ArrowLeft size={16} /> Back to My Trips
      </button>

      {/* PREMIUM HERO BANNER */}
      <div style={{
        position: 'relative', width: '100%', height: '300px',
        borderRadius: '28px', overflow: 'hidden', marginBottom: '28px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1588598126702-bc327fb2ccbe?w=1200")',
        backgroundSize: 'cover', backgroundPosition: 'center',
        boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.1)'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)'
        }} />
        <div style={{ position: 'absolute', bottom: '28px', left: '32px', color: '#FFFFFF', right: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(8px)', color: '#FFFFFF', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={14} /> Cultural Triangle, Sri Lanka
              </span>
              <span style={{ backgroundColor: '#10B981', color: '#FFFFFF', fontSize: '12px', fontWeight: '600', padding: '4px 10px', borderRadius: '20px' }}>
                Verified Trip
              </span>
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 4px 0', letterSpacing: '-0.5px' }}>Sigiriya & Dambulla Expedition</h1>
            <p style={{ margin: 0, color: '#E2E8F0', fontSize: '15px' }}>Explore ancient rock fortresses and royal cave temples</p>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
        
        {/* LEFT COLUMN - CONTENT & TABS */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* METRICS & ACTION BAR */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px', backgroundColor: '#F8FAFC', borderRadius: '16px' }}>
                <div style={{ backgroundColor: '#E0F2FE', padding: '12px', borderRadius: '14px', color: '#0EA5E9' }}><Calendar size={22} /></div>
                <div>
                  <span style={{ fontSize: '12px', color: '#64748B', fontWeight: '500', display: 'block' }}>Dates</span>
                  <strong style={{ fontSize: '14px', color: '#0F172A' }}>Jun 15 - Jun 20</strong>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px', backgroundColor: '#F8FAFC', borderRadius: '16px' }}>
                <div style={{ backgroundColor: '#ECFDF5', padding: '12px', borderRadius: '14px', color: '#10B981' }}><DollarSign size={22} /></div>
                <div>
                  <span style={{ fontSize: '12px', color: '#64748B', fontWeight: '500', display: 'block' }}>Est. Budget</span>
                  <strong style={{ fontSize: '14px', color: '#0F172A' }}>$350 - $450</strong>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px', backgroundColor: '#F8FAFC', borderRadius: '16px' }}>
                <div style={{ backgroundColor: '#FEF3C7', padding: '12px', borderRadius: '14px', color: '#F59E0B' }}><Users size={22} /></div>
                <div>
                  <span style={{ fontSize: '12px', color: '#64748B', fontWeight: '500', display: 'block' }}>Group Size</span>
                  <strong style={{ fontSize: '14px', color: '#0F172A' }}>4 / 8 Joined</strong>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <button style={{ flex: 1, backgroundColor: '#0EA5E9', color: '#FFFFFF', border: 'none', borderRadius: '16px', padding: '14px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.25)', transition: 'opacity 0.2s' }}>
                Request to Join Trip
              </button>
              <button 
                onClick={() => setInChat(true)}
                style={{ flex: 1, backgroundColor: '#F1F5F9', color: '#0F172A', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '14px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background 0.2s' }}
              >
                💬 Open Live Group Chat
              </button>
            </div>
          </div>

          {/* ELEGANT SUB-TAB NAVIGATION */}
          <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid #E2E8F0', paddingBottom: '4px' }}>
            {['overview', 'places', 'expenses', 'members'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px 12px 0 0',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: '700',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  color: activeSubTab === tab ? '#0EA5E9' : '#64748B',
                  borderBottom: activeSubTab === tab ? '3px solid #0EA5E9' : '3px solid transparent',
                  marginBottom: '-6px',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT CARD */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)', minHeight: '280px' }}>
            
            {activeSubTab === 'overview' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 12px 0', color: '#0F172A' }}>About The Expedition</h3>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', margin: '0 0 24px 0' }}>
                  Join us for an unforgettable journey through Sri Lanka's Cultural Triangle. We'll hike the majestic Lion Rock of Sigiriya at dawn, explore the beautifully preserved Dambulla Cave Temples, and experience authentic local cuisine. Curated specifically for young professionals and digital nomads seeking a balanced mix of history and adventure.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }}>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 8px 0', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={16} color="#0EA5E9"/> What's Included
                    </h4>
                    <ul style={{ color: '#475569', fontSize: '13px', lineHeight: '1.6', paddingLeft: '16px', margin: 0 }}>
                      <li>Boutique villa accommodations</li>
                      <li>Private air-conditioned van</li>
                      <li>All UNESCO monument entry tickets</li>
                      <li>Daily organic local breakfasts</li>
                    </ul>
                  </div>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 8px 0', color: '#0F172A' }}>🎒 Essential Gear</h4>
                    <ul style={{ color: '#475569', fontSize: '13px', lineHeight: '1.6', paddingLeft: '16px', margin: 0 }}>
                      <li>Sturdy trail runners or hiking shoes</li>
                      <li>Breathable linen/cotton clothing</li>
                      <li>High SPF sunscreen & sunglasses</li>
                      <li>Reusable insulated water flask</li>
                    </ul>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '24px 0' }} />
                
                <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 12px 0', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Lead Organizer</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img src="https://via.placeholder.com/150/0ea5e9/ffffff?text=RP" alt="Organizer" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #E0F2FE' }} />
                  <div>
                    <strong style={{ fontSize: '15px', color: '#0F172A', display: 'block' }}>Raj Patel</strong>
                    <span style={{ fontSize: '13px', color: '#64748B' }}>Experienced Backpacker • 18 Verified Trips</span>
                  </div>
                </div>
              </div>
            )}

            {activeSubTab === 'places' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', margin: 0, color: '#0F172A' }}>Key Destinations</h3>
                  <button style={{ backgroundColor: '#0EA5E9', color: '#FFFFFF', border: 'none', padding: '8px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Plus size={16} /> Add Suggestion
                  </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ padding: '18px', border: '1px solid #E2E8F0', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <strong style={{ fontSize: '16px', color: '#0F172A' }}>Sigiriya Lion Rock Fortress</strong>
                        <span style={{ fontSize: '11px', backgroundColor: '#E0F2FE', color: '#0369A1', fontWeight: '600', padding: '2px 8px', borderRadius: '6px' }}>Monument</span>
                      </div>
                      <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#475569' }}>5th-century citadel on a massive granite peak. 1,200 steps to the summit.</p>
                    </div>
                    <span style={{ color: '#10B981', fontWeight: '800', fontSize: '16px', backgroundColor: '#ECFDF5', padding: '6px 12px', borderRadius: '10px' }}>$30</span>
                  </div>
                  <div style={{ padding: '18px', border: '1px solid #E2E8F0', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <strong style={{ fontSize: '16px', color: '#0F172A' }}>Dambulla Royal Cave Temple</strong>
                        <span style={{ fontSize: '11px', backgroundColor: '#FEF3C7', color: '#B45309', fontWeight: '600', padding: '2px 8px', borderRadius: '6px' }}>Heritage</span>
                      </div>
                      <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#475569' }}>Complex of 5 sacred caves filled with ancient Buddhist murals and statues.</p>
                    </div>
                    <span style={{ color: '#10B981', fontWeight: '800', fontSize: '16px', backgroundColor: '#ECFDF5', padding: '6px 12px', borderRadius: '10px' }}>$10</span>
                  </div>
                </div>
              </div>
            )}

            {activeSubTab === 'expenses' && (
              <div style={{ textAlign: 'center', padding: '48px 16px' }}>
                <DollarSign size={48} color="#0EA5E9" style={{ marginBottom: '16px', opacity: 0.8 }} />
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A', margin: '0 0 8px 0' }}>Transparent Group Ledger</h4>
                <p style={{ color: '#64748B', fontSize: '14px', maxWidth: '360px', margin: '0 auto 20px auto' }}>All trip shared expenses, grocery splits, and fuel costs will be tracked collaboratively here.</p>
                <button style={{ backgroundColor: '#0EA5E9', color: '#FFFFFF', border: 'none', padding: '12px 24px', borderRadius: '14px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)' }}>
                  Initialize Expense Ledger
                </button>
              </div>
            )}

            {activeSubTab === 'members' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { name: 'Raj Patel', role: 'Trip Creator', badge: 'Organizer', img: 'https://via.placeholder.com/150/0ea5e9/ffffff?text=RP' },
                  { name: 'Sarah Kumar', role: 'Photographer', badge: 'Joined', img: 'https://via.placeholder.com/150/10b981/ffffff?text=SK' },
                  { name: 'Emma Wilson', role: 'Medic / Doctor', badge: 'Joined', img: 'https://via.placeholder.com/150/f59e0b/ffffff?text=EW' },
                  { name: 'David Chen', role: 'DJ & Music', badge: 'Joined', img: 'https://via.placeholder.com/150/8b5cf6/ffffff?text=DC' }
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', border: '1px solid #E2E8F0', borderRadius: '16px', backgroundColor: '#F8FAFC' }}>
                    <img src={m.img} alt={m.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <strong style={{ fontSize: '15px', color: '#0F172A', display: 'block' }}>{m.name}</strong>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>{m.role}</span>
                    </div>
                    <span style={{ backgroundColor: m.badge === 'Organizer' ? '#E0F2FE' : '#ECFDF5', color: m.badge === 'Organizer' ? '#0369A1' : '#047857', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '12px' }}>
                      {m.badge}
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* RIGHT SIDE STICKY WIDGET COLUMN */}
        <div style={{ width: '340px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* PREMIUM WEATHER CARD */}
          <div style={{
            background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
            color: '#FFFFFF', padding: '26px', borderRadius: '28px',
            boxShadow: '0 10px 20px -5px rgba(14, 165, 233, 0.3)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: 0.9 }}>Current Conditions</span>
              <span style={{ fontSize: '20px' }}>☀️</span>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 4px 0' }}>Dambulla, LK</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '52px', fontWeight: '900', margin: 0, tracking: '-1px' }}>29°</h2>
              <span style={{ fontSize: '20px', fontWeight: '700', opacity: 0.9 }}>C</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', padding: '14px', borderRadius: '16px', fontSize: '12px', fontWeight: '600' }}>
              <div><span style={{ opacity: 0.8, display: 'block', fontSize: '10px' }}>HUMIDITY</span>72%</div>
              <div><span style={{ opacity: 0.8, display: 'block', fontSize: '10px' }}>WIND</span>14 km/h</div>
              <div><span style={{ opacity: 0.8, display: 'block', fontSize: '10px' }}>FEELS LIKE</span>31°C</div>
            </div>
          </div>

          {/* QUICK PORTAL PANEL */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)' }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Group Operations</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button onClick={() => setInChat(true)} style={sidebarBtnStyle}>
                <span style={{ fontSize: '16px' }}>💬</span> Enter Group Chat Room
              </button>
              <button style={sidebarBtnStyle}>
                <span style={{ fontSize: '16px' }}>📍</span> Live Member Map
              </button>
              <button style={sidebarBtnStyle}>
                <span style={{ fontSize: '16px' }}>📁</span> Shared Booking Docs
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

const sidebarBtnStyle = {
  width: '100%', textAlign: 'left', padding: '14px 16px',
  backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0',
  borderRadius: '14px', fontSize: '14px', fontWeight: '600',
  color: '#0F172A', cursor: 'pointer', display: 'flex',
  alignItems: 'center', gap: '12px', transition: 'all 0.2s'
};
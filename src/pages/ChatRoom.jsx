import React from 'react';
import { 
  ArrowLeft, MapPin, Smile, Paperclip, Send, AlertTriangle, 
  Users, Shield, Coffee, Home, Navigation, Map, Phone, Sun
} from 'lucide-react';

export default function ChatRoom({ onBack }) {
  const activeMembers = [
    { name: 'Raj Patel', role: 'Organizer', online: true, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150' },
    { name: 'Sarah Kumar', role: 'You', online: true, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { name: 'Emma Wilson', role: 'typing...', online: true, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
    { name: 'David Chen', role: 'Member', online: true, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { name: 'Priya Nair', role: 'Member', online: false, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 40px)', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0f172a', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
      
      {/* 🌟 CHAT HEADER */}
      <div style={{ padding: '16px 24px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button onClick={onBack} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#475569', transition: 'all 0.2s' }}>
            <ArrowLeft size={18} />
          </button>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '700', margin: 0, letterSpacing: '-0.5px' }}>Ella Adventure Trip</h2>
              <span style={{ backgroundColor: '#eef2ff', color: '#4f46e5', fontSize: '12px', padding: '4px 10px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                <MapPin size={12} /> Ella, Sri Lanka
              </span>
            </div>
            <span style={{ fontSize: '13px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', fontWeight: '500' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', boxShadow: '0 0 0 2px #d1fae5' }} /> 3 members active now
            </span>
          </div>
        </div>
      </div>

      {/* 3-COLUMN MAIN LAYOUT */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', backgroundColor: '#f8fafc' }}>
        
        {/* 🌿 LEFT COLUMN: Trip Context */}
        <div style={{ width: '280px', backgroundColor: '#ffffff', borderRight: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', padding: '24px', overflowY: 'auto' }}>
          
          <div style={{ height: '140px', borderRadius: '20px', overflow: 'hidden', position: 'relative', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <img src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=400" alt="Ella" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)', color: '#ffffff' }}>
              <strong style={{ display: 'block', fontSize: '15px', fontWeight: '600' }}>Ella Adventure</strong>
              <span style={{ fontSize: '12px', opacity: 0.9, fontWeight: '400' }}>Jul 8-14, 2026</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <div style={{ flex: 1, padding: '16px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Budget</span>
              <strong style={{ display: 'block', color: '#4f46e5', fontSize: '16px', marginTop: '4px' }}>Rs. 18K</strong>
            </div>
            <div style={{ flex: 1, padding: '16px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Duration</span>
              <strong style={{ display: 'block', color: '#10b981', fontSize: '16px', marginTop: '4px' }}>7 Days</strong>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#334155' }}>Squad</h4>
            <span style={{ fontSize: '12px', color: '#4f46e5', backgroundColor: '#eef2ff', padding: '4px 10px', borderRadius: '12px', fontWeight: '600' }}>5 Total</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {activeMembers.map((member, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ position: 'relative' }}>
                  <img src={member.avatar} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }} />
                  {member.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', backgroundColor: '#10b981', border: '2px solid #ffffff', borderRadius: '50%' }} />}
                </div>
                <div>
                  <strong style={{ fontSize: '14px', display: 'block', color: '#1e293b' }}>{member.name} {member.role === 'Organizer' && '⭐'}</strong>
                  <span style={{ fontSize: '12px', fontWeight: '500', color: member.role === 'typing...' ? '#4f46e5' : '#94a3b8' }}>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 💬 CENTER COLUMN: Live Chat Stream */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ textAlign: 'center', margin: '8px 0' }}>
              <span style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
                Emma Wilson joined the trip • 9:22 AM
              </span>
            </div>

            {/* Received Message */}
            <div style={{ display: 'flex', gap: '12px', maxWidth: '85%' }}>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" alt="avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                   <span style={{ fontSize: '13px', color: '#475569', fontWeight: '600' }}>Emma Wilson</span>
                   <span style={{ fontSize: '11px', color: '#94a3b8' }}>9:24 AM</span>
                </div>
                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '4px 20px 20px 20px', fontSize: '14px', lineHeight: '1.6', color: '#334155', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  Just joined! So excited for this. I heard the Nine Arch Bridge is magical at sunrise. Should we plan that for Day 1?
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                  <span style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', fontSize: '12px', padding: '4px 10px', borderRadius: '16px', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>🔥 4</span>
                </div>
              </div>
            </div>

            {/* Sent Message */}
            <div style={{ display: 'flex', gap: '12px', maxWidth: '85%', alignSelf: 'flex-end' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                   <span style={{ fontSize: '11px', color: '#94a3b8' }}>9:28 AM</span>
                   <span style={{ fontSize: '13px', color: '#475569', fontWeight: '600' }}>You</span>
                </div>
                <div style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: '#ffffff', padding: '16px', borderRadius: '20px 4px 20px 20px', fontSize: '14px', lineHeight: '1.6', boxShadow: '0 4px 16px rgba(79, 70, 229, 0.2)' }}>
                  100% yes! I looked it up — the 6:30 AM train passes through at golden hour. Perfect for photos.
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                  <span style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', fontSize: '12px', padding: '4px 10px', borderRadius: '16px', cursor: 'pointer' }}>🚂 2</span>
                </div>
              </div>
            </div>

            {/* Received Message */}
            <div style={{ display: 'flex', gap: '12px', maxWidth: '85%' }}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                   <span style={{ fontSize: '13px', color: '#475569', fontWeight: '600' }}>David Chen</span>
                   <span style={{ fontSize: '11px', color: '#94a3b8' }}>9:45 AM</span>
                </div>
                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '4px 20px 20px 20px', fontSize: '14px', lineHeight: '1.6', color: '#334155', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  I rented bikes from Green View Hostel — Rs. 1500/day. Anyone else want one? They have 3 more available.
                </div>
              </div>
            </div>

          </div>

          {/* Typing Indicator & Input Field */}
          <div style={{ padding: '20px 32px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#64748b', fontSize: '13px', fontWeight: '500' }}>
               <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" alt="avatar" style={{ width: '20px', height: '20px', borderRadius: '50%' }} /> 
               <span style={{ fontStyle: 'italic' }}>Emma is typing...</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#f8fafc', padding: '8px 8px 8px 20px', borderRadius: '30px', border: '1px solid #e2e8f0', transition: 'border 0.2s', ':focus-within': { borderColor: '#4f46e5' } }}>
              <button style={{ border: 'none', background: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex' }}><Smile size={22} /></button>
              <input 
                type="text" 
                placeholder="Message the squad..." 
                style={{ flex: 1, backgroundColor: 'transparent', border: 'none', fontSize: '15px', outline: 'none', color: '#334155' }}
              />
              <button style={{ border: 'none', background: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', marginRight: '8px' }}><Paperclip size={22} /></button>
              <button style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: '#ffffff', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)', transition: 'transform 0.2s' }}>
                <Send size={18} style={{ marginLeft: '2px' }}/>
              </button>
            </div>
          </div>
        </div>

        {/* ⚡ RIGHT COLUMN: Live Trip Widgets */}
        <div style={{ width: '340px', backgroundColor: '#ffffff', borderLeft: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', overflowY: 'auto' }}>
          
          {/* Enhanced Weather Widget */}
          <div style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)', color: '#ffffff', padding: '24px', borderRadius: '24px', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 24px rgba(14, 165, 233, 0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: '600', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px' }}>Live Weather</span>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '4px 0 0 0' }}>Ella, LK</h3>
              </div>
              <Sun size={28} color="#fde047" />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', margin: '20px 0' }}>
              <h2 style={{ fontSize: '48px', fontWeight: '800', margin: 0, lineHeight: 1 }}>24°</h2>
              <span style={{ fontSize: '15px', opacity: 0.9, marginBottom: '6px', fontWeight: '500' }}>Partly Cloudy</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(255,255,255,0.15)', padding: '16px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
              <div style={{ textAlign: 'center' }}><span style={{ fontSize: '11px', opacity: 0.8 }}>Rain</span><strong style={{ display: 'block', fontSize: '14px', marginTop: '2px' }}>35%</strong></div>
              <div style={{ textAlign: 'center' }}><span style={{ fontSize: '11px', opacity: 0.8 }}>Wind</span><strong style={{ display: 'block', fontSize: '14px', marginTop: '2px' }}>12 km/h</strong></div>
              <div style={{ textAlign: 'center' }}><span style={{ fontSize: '11px', opacity: 0.8 }}>Feels</span><strong style={{ display: 'block', fontSize: '14px', marginTop: '2px' }}>26°C</strong></div>
            </div>
          </div>

          {/* Travel Updates Card */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #f1f5f9', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b' }}>
              <AlertTriangle size={18} color="#f59e0b" /> Trip Alerts
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7', padding: '16px', borderRadius: '16px' }}>
                <strong style={{ fontSize: '13px', color: '#b45309', display: 'flex', alignItems: 'center', gap: '6px' }}><Navigation size={14}/> Road Condition</strong>
                <p style={{ fontSize: '13px', color: '#92400e', margin: '6px 0 8px 0', lineHeight: 1.5 }}>Minor construction near Rawana Falls — 20 min delay.</p>
              </div>
            </div>
          </div>

          {/* Price Updates */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#1e293b' }}>
              Live Expenses <span style={{ fontSize: '11px', backgroundColor: '#ecfdf5', color: '#10b981', padding: '4px 8px', borderRadius: '10px', fontWeight: '600' }}>Tracking</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', backgroundColor: '#ffffff', border: '1px solid #f1f5f9', padding: '16px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <div style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '12px', borderRadius: '12px' }}><Coffee size={20}/></div>
                <div>
                  <strong style={{ fontSize: '14px', display: 'block', color: '#334155' }}>Rice & Curry</strong>
                  <span style={{ color: '#4f46e5', fontWeight: '700', fontSize: '15px' }}>Rs. 900</span>
                </div>
              </div>
            </div>

            {/* Quick Action Grid */}
            <h4 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 16px 0', color: '#1e293b' }}>Actions</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button style={gridBtnStyle}><Map size={18} color="#4f46e5"/> Share Location</button>
              <button style={gridBtnStyle}><Phone size={18} color="#ef4444"/> Emergency</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

const gridBtnStyle = {
  backgroundColor: '#f8fafc',
  border: '1px solid #f1f5f9',
  borderRadius: '16px',
  padding: '16px 12px',
  fontSize: '12px',
  fontWeight: '600',
  color: '#475569',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.2s',
  ':hover': { backgroundColor: '#f1f5f9' }
};
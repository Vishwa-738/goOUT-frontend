// src/pages/ChatRoom.jsx
import React from 'react';
import { 
  MapPin, MessageCircle, MoreHorizontal, Paperclip, Smile, Send, 
  CloudRain, Wind, Droplets, AlertTriangle, Users, Shield, Coffee, Home 
} from 'lucide-react';

export default function ChatRoom() {
  return (
    <div style={{ display: 'flex', gap: '24px', height: '100%', fontFamily: 'sans-serif' }}>
      
      {/* ==========================================
          LEFT COLUMN: Trip Context & Members
          ========================================== */}
      <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Trip Hero Card */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ height: '120px', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?w=600&h=300&fit=crop" alt="Ella" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', padding: '16px' }}>
              <h3 style={{ color: '#fff', margin: '0 0 4px 0', fontSize: '16px' }}>Ella Adventure</h3>
              <span style={{ color: '#e2e8f0', fontSize: '12px' }}>Jul 8-14, 2026</span>
            </div>
          </div>
          <div style={{ display: 'flex', padding: '16px', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Budget</div>
              <div style={{ fontWeight: 'bold', color: '#0EA5E9', fontSize: '14px' }}>Rs. 18K</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }}></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Duration</div>
              <div style={{ fontWeight: 'bold', color: '#10B981', fontSize: '14px' }}>7 Days</div>
            </div>
          </div>
        </div>

        {/* Active Members */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h4 style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a', margin: 0 }}>Active Members</h4>
            <span style={{ fontSize: '12px', color: '#64748b', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '12px' }}>3/5</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Member 1 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Raj" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0', right: '0', width: '10px', height: '10px', backgroundColor: '#10B981', borderRadius: '50%', border: '2px solid #fff' }}></div>
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>Raj Patel ⭐️</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Organizer</div>
              </div>
            </div>

            {/* Member 2 (You) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop" alt="You" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0', right: '0', width: '10px', height: '10px', backgroundColor: '#10B981', borderRadius: '50%', border: '2px solid #fff' }}></div>
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>Sarah Kumar</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>You</div>
              </div>
            </div>

             {/* Member 3 (Typing) */}
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Emma" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0', right: '0', width: '10px', height: '10px', backgroundColor: '#10B981', borderRadius: '50%', border: '2px solid #fff' }}></div>
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>Emma Wilson</div>
                <div style={{ fontSize: '12px', color: '#0EA5E9', fontWeight: '500' }}>typing •••</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ==========================================
          CENTER COLUMN: Live Chat Feed
          ========================================== */}
      <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        {/* Chat Header */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageCircle size={20} color="#0EA5E9" />
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Group Chat</h3>
            <span style={{ fontSize: '12px', color: '#10B981', backgroundColor: '#d1fae5', padding: '2px 8px', borderRadius: '12px', marginLeft: '8px' }}>Live</span>
            {/* 🚀 NEW PREVIEW BADGE */}
            <span style={{ fontSize: '12px', color: '#64748b', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '12px', marginLeft: '4px' }}>Preview</span>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#fafaf9' }}>
          
          <div style={{ textAlign: 'center', margin: '12px 0' }}>
            <span style={{ fontSize: '12px', color: '#94a3b8', backgroundColor: '#f1f5f9', padding: '4px 12px', borderRadius: '12px' }}>Emma Wilson joined the trip • 9:22 AM</span>
          </div>

          {/* Incoming Message */}
          <div style={{ display: 'flex', gap: '12px', maxWidth: '80%' }}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} alt="Emma" />
            <div>
              <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px', marginLeft: '4px' }}>Emma Wilson</div>
              <div style={{ backgroundColor: '#fff', padding: '12px 16px', borderRadius: '16px', borderTopLeftRadius: '4px', border: '1px solid #f1f5f9', fontSize: '14px', color: '#334155', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                Just joined! So excited for this. I heard the Nine Arch Bridge is magical at sunrise. Should we plan that for Day 1?
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', marginLeft: '4px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>9:24 AM</span>
                <span style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '8px', fontSize: '12px' }}>👍 4</span>
              </div>
            </div>
          </div>

          {/* Outgoing Message (You) */}
          <div style={{ display: 'flex', gap: '12px', maxWidth: '80%', alignSelf: 'flex-end', flexDirection: 'row-reverse' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <div style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)', padding: '12px 16px', borderRadius: '16px', borderTopRightRadius: '4px', fontSize: '14px', color: '#fff', boxShadow: '0 2px 4px rgba(14, 165, 233, 0.2)' }}>
                100% yes! I looked it up — the 6:30 AM train passes through at golden hour. Perfect for photos.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', marginRight: '4px' }}>
                <span style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '8px', fontSize: '12px' }}>🚂 2</span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>9:28 AM</span>
              </div>
            </div>
          </div>

          {/* Incoming Message */}
          <div style={{ display: 'flex', gap: '12px', maxWidth: '80%' }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} alt="Raj" />
            <div>
              <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px', marginLeft: '4px' }}>Raj Patel</div>
              <div style={{ backgroundColor: '#fff', padding: '12px 16px', borderRadius: '16px', borderTopLeftRadius: '4px', border: '1px solid #f1f5f9', fontSize: '14px', color: '#334155', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                Count me in for a bike! Also heads up — the road to Rawana Falls has some construction. Plan an extra 20 minutes.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', marginLeft: '4px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>10:02 AM</span>
                <span style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '8px', fontSize: '12px' }}>🙏 2</span>
              </div>
            </div>
          </div>

           {/* Typing Indicator */}
           <div style={{ display: 'flex', gap: '12px', maxWidth: '80%', alignItems: 'center' }}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} alt="Emma" />
            <div style={{ backgroundColor: '#fff', padding: '10px 16px', borderRadius: '16px', borderTopLeftRadius: '4px', border: '1px solid #f1f5f9', display: 'flex', gap: '4px' }}>
              <div style={{ width: '6px', height: '6px', backgroundColor: '#cbd5e1', borderRadius: '50%' }}></div>
              <div style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8', borderRadius: '50%' }}></div>
              <div style={{ width: '6px', height: '6px', backgroundColor: '#64748b', borderRadius: '50%' }}></div>
            </div>
          </div>

        </div>

        {/* 🚀 NEW: Disabled Chat Input Bar */}
        <div style={{ padding: '20px', borderTop: '1px solid #f1f5f9', backgroundColor: '#fff', display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.7 }}>
          <button disabled style={{ background: 'transparent', border: 'none', cursor: 'not-allowed', display: 'flex' }}><Smile size={24} color="#94a3b8" /></button>
          <button disabled style={{ background: 'transparent', border: 'none', cursor: 'not-allowed', display: 'flex' }}><Paperclip size={24} color="#94a3b8" /></button>
          
          <input 
            type="text" 
            disabled 
            placeholder="🚀 Live Group Chat is launching in Version 2.0!" 
            style={{ flex: 1, padding: '12px 16px', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '24px', outline: 'none', fontSize: '14px', cursor: 'not-allowed' }} 
          />
          
          <button disabled style={{ backgroundColor: '#94a3b8', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'not-allowed' }}>
            <Send size={18} color="#fff" style={{ marginLeft: '2px' }} />
          </button>
        </div>

      </div>

      {/* ==========================================
          RIGHT COLUMN: Utilities & Weather
          ========================================== */}
      <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Weather Card */}
        <div style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)', borderRadius: '20px', padding: '24px', color: '#fff', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '13px', opacity: 0.9, marginBottom: '4px' }}>Live Weather</div>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Ella, Sri Lanka</div>
            </div>
            <CloudRain size={28} color="#fff" />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: 1 }}>24°</span>
            <span style={{ fontSize: '14px', opacity: 0.9 }}>C <br/>Partly Cloudy</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '16px' }}>
            <div style={{ textAlign: 'center' }}>
              <Droplets size={16} style={{ margin: '0 auto 4px auto', opacity: 0.8 }} />
              <div style={{ fontSize: '11px', opacity: 0.8 }}>Rain</div>
              <div style={{ fontSize: '13px', fontWeight: 'bold' }}>35%</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Wind size={16} style={{ margin: '0 auto 4px auto', opacity: 0.8 }} />
              <div style={{ fontSize: '11px', opacity: 0.8 }}>Wind</div>
              <div style={{ fontSize: '13px', fontWeight: 'bold' }}>12 km/h</div>
            </div>
          </div>
        </div>

        {/* Travel Updates */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <AlertTriangle size={18} color="#0EA5E9" />
            <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 'bold' }}>Travel Updates</h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '4px', borderRadius: '6px' }}><AlertTriangle size={14} /></span>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#334155' }}>Road Condition</span>
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 8px 0', lineHeight: 1.4 }}>Minor construction near Rawana Falls — 20 min delay possible.</p>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>1h ago</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
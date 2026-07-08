// src/pages/ChatRoom.jsx
import React from 'react';
import { 
  MessageCircle, Send, Smile, Paperclip, Sparkles, 
  ShieldCheck, Zap, Bell, ArrowLeft, Radio 
} from 'lucide-react';

export default function ChatRoom({ setActiveTab }) {
  return (
    <div className="container-fluid py-3" style={{ maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Back Button */}
      {setActiveTab && (
        <button 
          onClick={() => setActiveTab('my-trips')}
          className="btn btn-link text-decoration-none text-secondary p-0 mb-4 d-flex align-items-center gap-2 fw-semibold"
          style={{ cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Trips
        </button>
      )}

      {/*  V2.0 HERO BANNER */}
      <div 
        className="card border-0 rounded-4 p-5 text-white mb-4 shadow-sm" 
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0EA5E9 100%)', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', opacity: 0.1 }}>
          <MessageCircle size={300} color="#fff" />
        </div>

        <div className="position-relative z-1 max-w-lg">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ backgroundColor: 'rgba(14, 165, 233, 0.2)', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            <Sparkles size={16} color="#38bdf8" />
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '0.5px', color: '#38bdf8' }}>ROADMAP PREVIEW • VERSION 2.0</span>
          </div>
          
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem', letterSpacing: '-0.5px' }}>
            Real-Time Group Chat
          </h1>
          <p className="mb-4 text-light opacity-75" style={{ fontSize: '1.1rem', maxWidth: '650px', lineHeight: 1.6 }}>
            We are actively expanding GoOUT into a full-fledged collaborative communication suite. Version 2.0 will introduce dedicated end-to-end encrypted trip channels, media sharing, and instant itinerary syncing.
          </p>

          <div className="d-flex flex-wrap gap-3 pt-2">
            <div className="d-flex align-items-center gap-2 bg-dark bg-opacity-50 px-3 py-2 rounded-3 border border-secondary border-opacity-25 text-light small">
              <Radio size={16} color="#10B981" /> WebSockets & STOMP Protocol
            </div>
            <div className="d-flex align-items-center gap-2 bg-dark bg-opacity-50 px-3 py-2 rounded-3 border border-secondary border-opacity-25 text-light small">
              <Zap size={16} color="#f59e0b" /> Zero-Latency Sync
            </div>
            <div className="d-flex align-items-center gap-2 bg-dark bg-opacity-50 px-3 py-2 rounded-3 border border-secondary border-opacity-25 text-light small">
              <ShieldCheck size={16} color="#38bdf8" /> Spring Security JWT Auth
            </div>
          </div>
        </div>
      </div>

      {/*  UPCOMING ARCHITECTURE & FEATURES GRID */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 rounded-4 p-4 h-100 bg-white shadow-sm border border-light">
            <div className="d-inline-flex p-3 rounded-3 mb-3" style={{ backgroundColor: '#f0f9ff', color: '#0EA5E9' }}>
              <Radio size={24} />
            </div>
            <h5 className="fw-bold text-dark mb-2">Live WebSockets</h5>
            <p className="text-secondary small mb-0 lh-base">
              Replacing standard REST polling with Spring Boot WebSocket endpoints to deliver bidirectional, instant messaging across mobile and web clients without page refreshes.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 rounded-4 p-4 h-100 bg-white shadow-sm border border-light">
            <div className="d-inline-flex p-3 rounded-3 mb-3" style={{ backgroundColor: '#f0fdf4', color: '#10B981' }}>
              <Bell size={24} />
            </div>
            <h5 className="fw-bold text-dark mb-2">Smart Notifications</h5>
            <p className="text-secondary small mb-0 lh-base">
              Automated push alerts triggered when trip organizers update itineraries, log new expenses, or post emergency weather updates in the group channel.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 rounded-4 p-4 h-100 bg-white shadow-sm border border-light">
            <div className="d-inline-flex p-3 rounded-3 mb-3" style={{ backgroundColor: '#f5f3ff', color: '#8b5cf6' }}>
              <ShieldCheck size={24} />
            </div>
            <h5 className="fw-bold text-dark mb-2">MongoDB Persistence</h5>
            <p className="text-secondary small mb-0 lh-base">
              Chat history and shared media URLs will be persisted asynchronously in scalable MongoDB document collections, ensuring zero data loss across user sessions.
            </p>
          </div>
        </div>
      </div>

      {/*  MOCK UI PREVIEW BAR */}
      <div className="card border-0 rounded-4 p-4 bg-white shadow-sm border border-light text-center">
        <h6 className="fw-bold text-secondary mb-3 text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
          Interactive Chat UI Preview (Disabled in V1.0)
        </h6>
        
        <div className="d-flex align-items-center gap-2 bg-light p-2 rounded-pill border mx-auto" style={{ maxWidth: '700px', opacity: 0.7 }}>
          <button disabled className="btn border-0 text-secondary p-2 shadow-none"><Smile size={20} /></button>
          <button disabled className="btn border-0 text-secondary p-2 shadow-none"><Paperclip size={20} /></button>
          <input 
            type="text" 
            disabled 
            placeholder=" Live Group Chat is arriving in Release 2.0..." 
            className="form-control bg-transparent border-0 shadow-none text-secondary small"
            style={{ cursor: 'not-allowed' }}
          />
          <button disabled className="btn rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#94a3b8', width: '38px', height: '38px', cursor: 'not-allowed' }}>
            <Send size={16} color="#fff" />
          </button>
        </div>
      </div>

    </div>
  );
}
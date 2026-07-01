// src/pages/TripDetails.jsx
import React, { useState, useEffect } from 'react';
import { 
  MapPin, Calendar, DollarSign, Users, CloudRain, Wind, Droplets, 
  MessageCircle, Cloud, Wallet, CheckCircle, Shield 
} from 'lucide-react';
import api from '../services/api'; 

export default function TripDetails({ setActiveTab, tripId }) {
  const [activeSegment, setActiveSegment] = useState('overview');
  const [tripData, setTripData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!tripId) return;

    const fetchTripDetails = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`/api/v1/trips/${tripId}`); 
        console.log("🔥 Backend JSON Data:", response.data);
        setTripData(response.data);
      } catch (error) {
        console.error("Error fetching trip details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTripDetails();
  }, [tripId]);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '50px', color: '#64748b' }}>Loading your adventure...</div>;
  }

  if (!tripData) {
    return <div style={{ textAlign: 'center', padding: '50px', color: '#ef4444' }}>Trip not found.</div>;
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* --- HERO BANNER --- */}
      <div style={{ position: 'relative', height: '350px', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', backgroundColor: '#e2e8f0' }}>
        <img 
          src={tripData.coverImageUrl || "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=400&fit=crop"} 
          alt="Trip Hero" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: '#fff' }}>
          <h1 style={{ margin: '0 0 8px 0', fontSize: '36px', fontWeight: 'bold' }}>
            {tripData.title || 'Untitled Adventure'}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', opacity: 0.9 }}>
            <MapPin size={18} /> {tripData.destinations || 'Location TBD'}
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
                {/* 🚀 FIXED: Using startDate and endDate from the DB */}
                <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>
                  {tripData.startDate && tripData.endDate ? `${tripData.startDate} to ${tripData.endDate}` : 'Dates TBD'}
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, borderLeft: '1px solid #f1f5f9', paddingLeft: '24px' }}>
              <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderRadius: '12px', color: '#10B981' }}><DollarSign size={24} /></div>
              <div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Budget</div>
                {/* 🚀 FIXED: Using minBudget from the DB */}
                <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>
                  {tripData.minBudget ? `$${tripData.minBudget}` : 'TBD'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, borderLeft: '1px solid #f1f5f9', paddingLeft: '24px' }}>
              <div style={{ backgroundColor: '#f5f3ff', padding: '12px', borderRadius: '12px', color: '#8b5cf6' }}><Users size={24} /></div>
              <div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Members</div>
                {/* 🚀 FIXED: Using maxParticipants from the DB */}
                <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>
                  {tripData.joinedMembers?.length || 0} / {tripData.maxParticipants || 8}
                </div>
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
                <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '15px', marginBottom: '32px', whiteSpace: 'pre-wrap' }}>
                  {tripData.description || 'No description provided for this adventure yet.'}
                </p>

                <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#0f172a' }}>Trip Organizer</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#f8fafc', padding: '16px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <img 
                    src={tripData.organizer?.avatarUrl || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop"} 
                    alt="Organizer" 
                    style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#0f172a', marginBottom: '4px' }}>
                      {tripData.organizer?.firstName || 'Trip'} {tripData.organizer?.lastName || 'Organizer'}
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>Admin & Organizer</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content: MEMBERS */}
            {activeSegment === 'members' && (
              <div style={{ padding: '32px' }}>
                <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', color: '#0f172a' }}>Travelers ({tripData.joinedMembers?.length || 0})</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                  {tripData.joinedMembers?.length > 0 ? (
                    tripData.joinedMembers.map((member) => (
                      <div key={member.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                        <img 
                          src={member.avatarUrl || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop'} 
                          alt={member.firstName} 
                          style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
                        />
                        <div>
                          <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>
                            {member.firstName} {member.lastName}
                          </div>
                          
                          <div style={{ fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px', color: member.role === 'admin' ? '#8b5cf6' : (member.isApproved ? '#10B981' : '#f59e0b') }}>
                            {member.role === 'admin' ? (
                              <><Shield size={14} /> Admin</>
                            ) : member.isApproved ? (
                              <><CheckCircle size={14} /> Approved</>
                            ) : (
                              <>Pending Approval</>
                            )}
                          </div>

                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ color: '#64748b', gridColumn: '1 / -1', padding: '20px 0' }}>
                      No members have joined this trip yet.
                    </div>
                  )}
                </div>
              </div>
            )}

            {(activeSegment === 'places' || activeSegment === 'expenses') && (
              <div style={{ padding: '60px 32px', textAlign: 'center', color: '#64748b' }}>
                Content for {activeSegment} coming soon!
              </div>
            )}

          </div>
        </div>

        {/* ==========================================
            RIGHT SIDEBAR (Weather & Actions)
            ========================================== */}
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)', borderRadius: '20px', padding: '24px', color: '#fff', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', opacity: 0.9, marginBottom: '4px' }}>{tripData.destinations || 'Location TBD'}</div>
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
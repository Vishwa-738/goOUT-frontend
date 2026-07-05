// src/pages/MyTrips.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, DollarSign, Plus, Eye, Edit2, UserCheck, Trash2, Check, X, CheckCircle, ChevronDown } from 'lucide-react';
import TripDetails from './TripDetails'; 
import API from '../services/api'; 

export default function MyTrips({ setActiveTab }) {
  const [viewingTripId, setViewingTripId] = useState(null); 
  const [trips, setTrips] = useState([]); 
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(false);

  // 🚀 NEW: Refs for smooth scrolling
  const organizingRef = useRef(null);
  const joinedRef = useRef(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await API.get('/api/v1/trips/my-trips'); 
        let actualTrips = [];
        
        if (Array.isArray(response.data)) actualTrips = response.data;
        else if (response.data && response.data.data) actualTrips = response.data.data;
        else if (response.data && response.data.content) actualTrips = response.data.content;
        else if (response.data && response.data.trips) actualTrips = response.data.trips;

        setTrips(actualTrips);
      } catch (error) {
        console.error("Error fetching trips from database:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  const handleDelete = async (tripId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this trip? This cannot be undone.");
    if (!isConfirmed) return;
    try {
      await API.delete(`/api/v1/trips/${tripId}`);
      setTrips((prevTrips) => prevTrips.filter((trip) => (trip.id || trip._id) !== tripId));
      alert("Trip successfully deleted!");
    } catch (error) {
      console.error("Error deleting trip:", error);
      alert("Failed to delete the trip. Check the console for details.");
    }
  };

  const handleEndTrip = async (tripId) => {
    const isConfirmed = window.confirm("Are you sure you want to end this trip? It will be marked as finished.");
    if (!isConfirmed) return;

    setTrips(currentTrips => 
      currentTrips.map(trip => 
        (trip.id || trip._id) === tripId ? { ...trip, status: 'COMPLETED' } : trip
      )
    );

    try {
      await API.patch(`/api/v1/trips/${tripId}/complete`);
      alert("Trip successfully ended!");
      window.dispatchEvent(new CustomEvent('trip-status-changed'));
    } catch (error) {
      console.error("Failed to end trip on backend:", error);
      alert("Failed to update the trip on the server. Please try again.");
    }
  };

  const openManageRequests = async (tripId) => {
    setSelectedTripId(tripId);
    setIsModalOpen(true);
    setLoadingRequests(true);

    try {
      const response = await API.get(`/api/v1/trips/${tripId}/requests`);
      let actualRequests = [];
      if (Array.isArray(response.data)) actualRequests = response.data;
      else if (response.data && response.data.data) actualRequests = response.data.data;
      setPendingRequests(actualRequests);
    } catch (error) {
      console.error("Error fetching requests:", error);
      alert("Failed to load requests.");
    } finally {
      setLoadingRequests(false);
    }
  };

  const handleRequestAction = async (requesterId, status) => {
    try {
      await API.put(`/api/v1/trips/${selectedTripId}/requests/${requesterId}?status=${status}`);
      setPendingRequests((prev) => prev.filter(req => (req.id || req.userId) !== requesterId));
      alert(`User ${status.toLowerCase()} successfully!`);
    } catch (error) {
      console.error(`Error processing ${status} action:`, error);
      alert("Failed to process request.");
    }
  };

  // 🚀 NEW: Helper function to scroll to the sections smoothly
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (viewingTripId) {
    return <TripDetails setActiveTab={setActiveTab} tripId={viewingTripId} onBack={() => setViewingTripId(null)} />;
  }

  const organizedTrips = trips.filter(trip => trip.isOrganizer === true);
  const joinedTrips = trips.filter(trip => trip.isOrganizer === false);

  const stats = [
    { label: 'Total Trips', count: trips.length, color: '#0EA5E9' }, 
    { label: 'Organizing', count: organizedTrips.length, color: '#10B981' },
    { label: 'Joined', count: joinedTrips.length, color: '#8b5cf6' },
  ];

  const renderTripCards = (tripList) => {
    if (tripList.length === 0) {
      return <p style={{ color: '#64748b', fontStyle: 'italic', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>No trips in this category yet.</p>;
    }
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {tripList.map((trip) => {
          const isAdmin = trip.isOrganizer === true;
          const actualImage = trip.imageUrl || trip.coverImageUrl || 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600';

          return (
            <div key={trip.id || trip._id} style={{ backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #f1f5f9', display: 'flex', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              
              <div style={{ width: '300px', height: '220px', position: 'relative', flexShrink: 0 }}>
                <img src={actualImage} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: isAdmin ? '#10B981' : '#8b5cf6', color: '#ffffff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  {isAdmin ? 'Admin' : 'Member'}
                </span>
              </div>

              <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 16px 0', color: '#0f172a' }}>{trip.title}</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}><MapPin size={18} color="#0EA5E9" /> {trip.destinations}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}><Calendar size={18} color="#0EA5E9" /> {trip.startDate} - {trip.endDate}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}><DollarSign size={18} color="#10B981" /> ${trip.minBudget}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}><Users size={18} color="#0EA5E9" /> Max: {trip.maxParticipants}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => setViewingTripId(trip.id || trip._id)}
                    style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: 'none', backgroundColor: '#0EA5E9', color: '#ffffff', transition: 'all 0.2s' }}
                  >
                    <Eye size={16} /> View Details
                  </button>

                  {isAdmin && (
                    <>
                      <button style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', backgroundColor: '#ffffff', color: '#334155', border: '1px solid #cbd5e1', transition: 'all 0.2s' }}>
                        <Edit2 size={16} /> Edit
                      </button>
                      
                      <button 
                        onClick={() => openManageRequests(trip.id || trip._id)}
                        style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', transition: 'all 0.2s' }}
                      >
                        <UserCheck size={16} /> Requests
                      </button>

                      {trip.status !== 'COMPLETED' && (
                        <button 
                          onClick={() => handleEndTrip(trip.id || trip._id)}
                          style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', backgroundColor: '#fff7ed', color: '#ea580c', border: '1px solid #ffedd5', transition: 'all 0.2s' }}
                        >
                          <CheckCircle size={16} /> End Trip
                        </button>
                      )}

                      <button 
                        onClick={() => handleDelete(trip.id || trip._id)} 
                        style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', backgroundColor: '#fff5f5', color: '#ef4444', border: '1px solid #fecaca', marginLeft: 'auto', transition: 'all 0.2s' }}
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#0f172a', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 6px 0', color: '#0f172a' }}>My Trips</h1>
          <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>Manage your created trips and track members</p>
        </div>
        <button 
          onClick={() => setActiveTab('create-trip')}
          style={{ backgroundColor: '#0EA5E9', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 20px', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(14, 165, 233, 0.2)' }}
        >
          <Plus size={18} /> Create New Trip
        </button>
      </div>

      {/* METRICS STATS ROW */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{ flex: 1, backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: stat.color, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold' }}>
              {stat.count}
            </div>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#0f172a' }}>{stat.count}</h3>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0, fontWeight: '500' }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🚀 NEW: QUICK JUMP NAVIGATION BAR */}
      {!loading && trips.length > 0 && (
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', padding: '16px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <span style={{ fontWeight: '600', color: '#64748b', alignSelf: 'center', marginRight: '8px' }}>Quick Jump:</span>
          
          <button 
            onClick={() => scrollToSection(organizingRef)}
            style={{ padding: '8px 16px', borderRadius: '12px', border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4', color: '#16a34a', fontWeight: '600', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dcfce7'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f0fdf4'}
          >
            Trips I'm Organizing <ChevronDown size={16} />
          </button>

          <button 
            onClick={() => scrollToSection(joinedRef)}
            style={{ padding: '8px 16px', borderRadius: '12px', border: '1px solid #ddd6fe', backgroundColor: '#f5f3ff', color: '#7c3aed', fontWeight: '600', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ede9fe'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f5f3ff'}
          >
            Trips I've Joined <ChevronDown size={16} />
          </button>
        </div>
      )}

      {/* TRIP LISTS */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Loading your adventures from the database...</div>
      ) : (
        <>
          {/* 🚀 NEW: Added the organizingRef here so the page knows where to scroll! */}
          <div ref={organizingRef} style={{ marginBottom: '48px', scrollMarginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '4px', height: '24px', backgroundColor: '#10B981', borderRadius: '4px' }}></div>
              <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Trips I'm Organizing</h2>
            </div>
            {renderTripCards(organizedTrips)}
          </div>

          {/* 🚀 NEW: Added the joinedRef here so the page knows where to scroll! */}
          <div ref={joinedRef} style={{ scrollMarginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '4px', height: '24px', backgroundColor: '#8b5cf6', borderRadius: '4px' }}></div>
              <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Trips I've Joined</h2>
            </div>
            {renderTripCards(joinedTrips)}
          </div>
        </>
      )}

      {/* MODAL */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '32px', width: '90%', maxWidth: '500px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>Join Requests</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
                <X size={24} />
              </button>
            </div>

            {loadingRequests ? (
              <p style={{ textAlign: 'center', color: '#64748b', padding: '20px 0' }}>Loading requests...</p>
            ) : pendingRequests.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b' }}>
                <UserCheck size={48} color="#cbd5e1" style={{ marginBottom: '16px' }} />
                <p>No pending requests right now.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {pendingRequests.map((req) => (
                  <div key={req.id || req.userId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '16px', backgroundColor: '#f8fafc' }}>
                    <div>
                      <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', color: '#0f172a' }}>{req.userName || 'Traveler'}</p>
                      <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Wants to join this trip</p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button 
                        onClick={() => handleRequestAction(req.id || req.userId, 'ACCEPTED')}
                        style={{ padding: '8px 12px', borderRadius: '8px', border: 'none', backgroundColor: '#10B981', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}
                      >
                        <Check size={16} /> Accept
                      </button>
                      <button 
                        onClick={() => handleRequestAction(req.id || req.userId, 'REJECTED')}
                        style={{ padding: '8px 12px', borderRadius: '8px', border: 'none', backgroundColor: '#ef4444', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}
                      >
                        <X size={16} /> Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
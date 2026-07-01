import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, DollarSign, User, Search, CheckCircle } from 'lucide-react';
import API from '../services/api'; // Make sure this path points to your Axios interceptor!

export default function DiscoverTrips({ setActiveTab }) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // These states handle the button loading and success UI
  const [requestingIds, setRequestingIds] = useState({}); 
  const [requestedIds, setRequestedIds] = useState([]);

 // 1. Fetch real trips from the backend
  useEffect(() => {
    const fetchDiscoverTrips = async () => {
      try {
        // 👈 UPDATE THIS LINE RIGHT HERE!
        const response = await API.get('/api/v1/trips/public'); 
        
        // Universal Unwrapper
        // ... rest of the code
        
        // Universal Unwrapper
        let actualTrips = [];
        if (Array.isArray(response.data)) actualTrips = response.data;
        else if (response.data && response.data.data) actualTrips = response.data.data;
        else if (response.data && response.data.content) actualTrips = response.data.content;
        
        setTrips(actualTrips);
      } catch (error) {
        console.error("Error fetching discover trips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscoverTrips();
  }, []);

  // 2. Handle the Request to Join button
  const handleJoinRequest = async (tripId) => {
    try {
      // Show loading spinner just for this specific button
      setRequestingIds(prev => ({ ...prev, [tripId]: true }));
      
      // Hit Methsara's new endpoint
      await API.post(`/api/v1/trips/${tripId}/join`);
      
      // Mark as successfully requested so the button turns green
      setRequestedIds(prev => [...prev, tripId]);
      alert("Request sent successfully! Waiting for the admin to approve.");
      
    } catch (error) {
      console.error("Error sending join request:", error);
      alert("Failed to send request. You might have already requested to join this trip!");
    } finally {
      setRequestingIds(prev => ({ ...prev, [tripId]: false }));
    }
  };

  if (loading) {
    return <div style={{ padding: '32px', textAlign: 'center', marginTop: '50px' }}>Loading discovering trips...</div>;
  }

  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 8px 0' }}>Discover Trips</h1>
        <p style={{ color: '#64748b', fontSize: '16px', margin: 0 }}>Find the perfect travel group and explore Sri Lanka together</p>
      </div>

      

      {/* CTA Banner */}
      <div style={{ backgroundColor: '#10B981', borderRadius: '16px', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Can't find the perfect trip?</h3>
          <p style={{ color: '#d1fae5', margin: 0, fontSize: '15px' }}>Create your own and invite others to join your adventure</p>
        </div>
        <button 
          onClick={() => setActiveTab('create-trip')}
          style={{ backgroundColor: '#fff', color: '#10B981', border: 'none', padding: '12px 24px', borderRadius: '24px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Create New Trip
        </button>
      </div>

      {/* Dynamic Trips Grid */}
      {trips.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b' }}>No public trips available right now. Be the first to create one!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {trips.map(trip => {
            const tripId = trip.id || trip._id;
            const isRequested = requestedIds.includes(tripId);
            const isRequesting = requestingIds[tripId];

            return (
              <div key={tripId} style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                
                {/* Image & Badge */}
                <div style={{ position: 'relative', height: '200px' }}>
                  {/* Fallback image if backend doesn't have one */}
                  <img src={trip.image || 'https://images.unsplash.com/photo-1588598126710-53bc7f9273c0?w=600&h=400&fit=crop'} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(255,255,255,0.95)', color: '#0EA5E9', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    {trip.currentParticipants || 0}/{trip.maxParticipants || 0} joined
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 16px 0' }}>{trip.title}</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                      <MapPin size={16} color="#0EA5E9" /> {trip.destinations || trip.location || 'N/A'}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                      <Calendar size={16} color="#0EA5E9" /> {trip.startDate} to {trip.endDate}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                      <DollarSign size={16} color="#10B981" /> ${trip.minBudget} - ${trip.maxBudget}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                      <User size={16} color="#0EA5E9" /> Organized by Admin
                    </div>
                  </div>

                  {/* Dynamic Request Button */}
                  <button 
                    onClick={() => handleJoinRequest(tripId)}
                    disabled={isRequested || isRequesting}
                    style={{ 
                      width: '100%', 
                      backgroundColor: isRequested ? '#10B981' : '#0EA5E9', 
                      color: '#fff', 
                      border: 'none', 
                      padding: '12px', 
                      borderRadius: '12px', 
                      fontWeight: 'bold', 
                      cursor: (isRequested || isRequesting) ? 'not-allowed' : 'pointer', 
                      fontSize: '15px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px',
                      opacity: isRequesting ? 0.7 : 1
                    }}
                  >
                    {isRequesting ? 'Sending Request...' : isRequested ? <><CheckCircle size={18} /> Request Pending</> : 'Request to Join'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
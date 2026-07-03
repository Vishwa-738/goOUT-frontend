// src/pages/DiscoverTrips.jsx
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, DollarSign, Users, Eye } from 'lucide-react';
import api from '../services/api';
import TripDetails from './TripDetails';

export default function DiscoverTrips({ setActiveTab }) {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [viewingTripId, setViewingTripId] = useState(null);

  // 🚀 Fetch trips, dynamically appending the search query if it exists!
  const fetchDiscoverTrips = async (query = '') => {
    setIsLoading(true);
    try {
      // Use Methsara's new Smart Search Engine endpoint!
      const endpoint = query 
        ? `/api/v1/trips?search=${encodeURIComponent(query)}` 
        : '/api/v1/trips';
        
      const response = await api.get(endpoint);
      
      // Unwrap the data safely
      let actualTrips = [];
      if (Array.isArray(response.data)) actualTrips = response.data;
      else if (response.data?.data) actualTrips = response.data.data;
      else if (response.data?.content) actualTrips = response.data.content;
      else if (response.data?.trips) actualTrips = response.data.trips;

      // Only show upcoming trips in the Discover feed
      const upcomingTrips = actualTrips.filter(trip => trip.status !== 'COMPLETED');
      
      setTrips(upcomingTrips);
    } catch (error) {
      console.error("Error fetching discover trips:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load all trips on initial mount
  useEffect(() => {
    fetchDiscoverTrips();
  }, []);

  // Handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    fetchDiscoverTrips(searchInput);
  };

  // 🚀 Render Trip Details if a user clicks "View Details"
  if (viewingTripId) {
    return (
      <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
        <button 
          onClick={() => setViewingTripId(null)}
          style={{ 
            marginBottom: '20px', padding: '10px 18px', borderRadius: '12px', 
            border: '1px solid #cbd5e1', backgroundColor: '#ffffff', color: '#334155', 
            fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}
        >
          ← Back to Discover
        </button>
        <TripDetails tripId={viewingTripId} setActiveTab={setActiveTab} />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Header & Search Bar */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px' }}>
          Discover New Adventures
        </h1>
        <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '24px' }}>
          Find amazing trips created by the GoOut community and join the journey.
        </p>

        {/* 🚀 THE SMART SEARCH ENGINE BAR */}
        <form 
          onSubmit={handleSearch} 
          style={{ 
            display: 'flex', maxWidth: '600px', margin: '0 auto', 
            backgroundColor: '#fff', borderRadius: '16px', padding: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '16px', color: '#94a3b8' }}>
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search by destination (e.g., Nuwara Eliya) or title..." 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ 
              flex: 1, border: 'none', outline: 'none', padding: '12px 16px', 
              fontSize: '16px', color: '#0f172a', backgroundColor: 'transparent' 
            }} 
          />
          <button 
            type="submit"
            style={{ 
              backgroundColor: '#0EA5E9', color: '#fff', border: 'none', 
              borderRadius: '12px', padding: '0 24px', fontWeight: 'bold', 
              cursor: 'pointer', transition: 'background-color 0.2s' 
            }}
          >
            Search
          </button>
        </form>
      </div>

      {/* Results Grid */}
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>Searching for adventures...</div>
      ) : trips.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#64748b', backgroundColor: '#fff', borderRadius: '20px' }}>
          <Search size={48} color="#cbd5e1" style={{ marginBottom: '16px' }} />
          <h3>No trips found!</h3>
          <p>Try searching for a different location or check back later.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {trips.map((trip) => {
            const actualImage = trip.imageUrl || trip.coverImageUrl || 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600';
            
            return (
              <div key={trip.id || trip._id} style={{ backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column' }}>
                
                {/* Trip Image */}
                <div style={{ height: '200px', position: 'relative' }}>
                  <img src={actualImage} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', color: '#0EA5E9' }}>
                    {trip.joinedMembers?.length || 0} / {trip.maxParticipants || 10} Joined
                  </div>
                </div>

                {/* Trip Details */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>{trip.title}</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                      <MapPin size={16} color="#0EA5E9" /> {trip.destinations || trip.destination || 'TBD'}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                      <Calendar size={16} color="#0EA5E9" /> {trip.startDate} to {trip.endDate}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                      <DollarSign size={16} color="#10B981" /> Est. ${trip.minBudget}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                    <button 
                      onClick={() => setViewingTripId(trip.id || trip._id)}
                      style={{ width: '100%', padding: '12px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', border: 'none', backgroundColor: '#f0f9ff', color: '#0EA5E9', transition: 'all 0.2s' }}
                      onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0EA5E9'; e.currentTarget.style.color = '#fff'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#f0f9ff'; e.currentTarget.style.color = '#0EA5E9'; }}
                    >
                      <Eye size={18} /> View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

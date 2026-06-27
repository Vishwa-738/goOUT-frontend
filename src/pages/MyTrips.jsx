// src/pages/MyTrips.jsx
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, DollarSign, Plus, Eye, Edit2, UserCheck, Trash2 } from 'lucide-react';
import TripDetails from './TripDetails'; 
import API from '../services/api'; // 👈 Imported your Axios API!

export default function MyTrips({ setActiveTab }) {
  const [viewingDetails, setViewingDetails] = useState(false);
  const [trips, setTrips] = useState([]); // 👈 Replaced hardcoded array with React State!
  const [loading, setLoading] = useState(true);

  // 👈 Added useEffect to fetch data from Methsara's backend automatically!
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await API.get('/api/v1/trips/my-trips'); 
        console.log("RAW BACKEND DATA:", response.data); 
        
        // 🚀 THE UNIVERSAL UNWRAPPER 🚀
        // This safely extracts your trips no matter how Java wrapped them!
        let actualTrips = [];
        
        if (Array.isArray(response.data)) {
          actualTrips = response.data;           // If it's a plain list
        } else if (response.data && response.data.data) {
          actualTrips = response.data.data;      // If wrapped in a "data" object
        } else if (response.data && response.data.content) {
          actualTrips = response.data.content;   // If wrapped in a Spring Boot "content" object
        } else if (response.data && response.data.trips) {
            actualTrips = response.data.trips;   // If wrapped in a custom "trips" object
        }

        // Save the extracted list to React state
        setTrips(actualTrips);

      } catch (error) {
        console.error("Error fetching trips from database:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  if (viewingDetails) {
    return <TripDetails setActiveTab={setActiveTab} onBack={() => setViewingDetails(false)} />;
  }

  const stats = [
    { label: 'Total Trips', count: trips.length, color: '#0EA5E9' }, // 👈 Now dynamically counts real trips!
    { label: 'Active Trips', count: trips.length, color: '#10B981' },
    { label: 'Members Joined', count: 0, color: '#8b5cf6' },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#0f172a', maxWidth: '1100px', margin: '0 auto' }}>
      
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

      {/* LOADING STATE */}
      {loading ? (
        <p>Loading your adventures from the database...</p>
      ) : trips.length === 0 ? (
        <p>No trips found. Time to create one!</p>
      ) : (
      
      /* TRIP CARDS LIST */
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {trips.map((trip) => (
          <div key={trip.id || trip._id} style={{ backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #f1f5f9', display: 'flex', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            
            <div style={{ width: '300px', height: '220px', position: 'relative', flexShrink: 0 }}>
              <img src={'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600'} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: '#10B981', color: '#ffffff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                Active
              </span>
            </div>

            <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 16px 0', color: '#0f172a' }}>{trip.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: '16px' }}>
                  {/* 👈 Mapped to Methsara's Java variables here! */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}><MapPin size={18} color="#0EA5E9" /> {trip.destinations}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}><Calendar size={18} color="#0EA5E9" /> {trip.startDate} - {trip.endDate}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}><DollarSign size={18} color="#10B981" /> ${trip.minBudget}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}><Users size={18} color="#0EA5E9" /> Max: {trip.maxParticipants}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={() => setViewingDetails(true)}
                  style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: 'none', backgroundColor: '#0EA5E9', color: '#ffffff', transition: 'all 0.2s' }}
                >
                  <Eye size={16} /> View Details
                </button>
                <button style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', backgroundColor: '#ffffff', color: '#334155', border: '1px solid #cbd5e1', transition: 'all 0.2s' }}>
                  <Edit2 size={16} /> Edit
                </button>
                <button style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', backgroundColor: '#fff5f5', color: '#ef4444', border: '1px solid #fecaca', marginLeft: 'auto', transition: 'all 0.2s' }}>
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
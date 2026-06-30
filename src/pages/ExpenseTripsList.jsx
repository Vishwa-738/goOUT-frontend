// src/pages/ExpenseTripsList.jsx
import React, { useState, useEffect } from 'react';
import { Map, ArrowRight, Wallet } from 'lucide-react';
import api from '../services/api';

export default function ExpenseTripsList({ setActiveTab, setSelectedExpenseTrip }) {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        // 🚀 THE FIX: Hitting Methsara's new dedicated endpoint!
        // The api.js interceptor automatically attaches the JWT token.
        const response = await api.get('/api/v1/trips/my-trips');
        
        // Safely extract the array based on how Spring Boot wraps the JSON
        let rawData = [];
        if (Array.isArray(response.data)) rawData = response.data;
        else if (response.data && response.data.data) rawData = response.data.data;
        else if (response.data && response.data.content) rawData = response.data.content;

        // No more frontend filtering needed! The backend did the heavy lifting.
        setTrips(rawData);
      } catch (error) {
        console.error("Failed to fetch My Trips for expenses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const handleTripSelect = (trip) => {
    setSelectedExpenseTrip(trip);
    setActiveTab('expense-details'); 
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Wallet size={28} color="#10B981" /> Select a Trip Budget
        </h2>
        <p style={{ color: '#64748b', fontSize: '15px' }}>Choose a trip below to manage expenses, split costs, and track your budget.</p>
      </div>

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>Loading your trips...</div>
      ) : trips.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
          <p style={{ color: '#64748b', fontSize: '16px' }}>You haven't created or joined any trips yet.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {trips.map(trip => (
            <div 
              key={trip.id || trip._id || Math.random()} 
              onClick={() => handleTripSelect(trip)}
              style={{ 
                backgroundColor: '#fff', 
                borderRadius: '16px', 
                padding: '24px', 
                border: '1px solid #e2e8f0', 
                cursor: 'pointer', 
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#0EA5E9';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(14, 165, 233, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Map size={20} color="#0EA5E9" />
                </div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>
                  {trip.title || trip.name || 'Untitled Trip'}
                </h3>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>
                  {trip.destinations || trip.location || 'Location TBD'}
                </span>
                <ArrowRight size={18} color="#0EA5E9" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
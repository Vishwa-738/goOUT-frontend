import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { MapPin, Calendar, DollarSign, Image as ImageIcon, AlignLeft, Users } from 'lucide-react';

export default function CreateTrip() {
  const navigate = useNavigate();

  const [tripData, setTripData] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    capacity: '',
    description: ''
  });

  const handleChange = (e) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formattedPayload = {
        title: tripData.title,
        description: tripData.description,
        destinations: tripData.destination, 
        startDate: tripData.startDate,
        endDate: tripData.endDate,
        minBudget: parseFloat(tripData.budget) || 0, 
        maxBudget: parseFloat(tripData.budget) || 0, 
        maxParticipants: parseInt(tripData.capacity, 10) || 0,
        isPublic: true,     // 🚀 ADD THIS: Stops the 'isPublic' crash
        isOrganizer: true   // 🚀 ADD THIS: Satisfies the new organizer logic
      };

      const response = await API.post('/api/v1/trips', formattedPayload); 
      console.log("Trip successfully saved to database!", response.data);
      
      alert("successfully created trip");
      
      navigate('/dashboard'); 
      
    } catch (error) {
      console.error("Error creating trip:", error);
      alert("Failed to publish the trip. Check the console to see what the backend said.");
    }
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: '#0f172a' }}>Plan a New Adventure</h2>
        <p style={{ color: '#64748b', fontSize: '15px' }}>Fill in the details below to publish your trip to the GoOut community.</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Basic Info Section */}
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlignLeft size={20} color="#0EA5E9" /> Trip Basics
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Trip Title</label>
              <input 
                type="text" 
                name="title"
                placeholder="e.g., Weekend Getaway to Ella" 
                onChange={handleChange}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Destination</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <MapPin size={18} color="#94a3b8" />
                <input 
                  type="text" 
                  name="destination"
                  placeholder="Where are you going?" 
                  onChange={handleChange}
                  style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent' }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Start Date</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <Calendar size={18} color="#94a3b8" />
                <input type="date" name="startDate" onChange={handleChange} style={{ border: 'none', outline: 'none', width: '100%', color: '#475569' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>End Date</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <Calendar size={18} color="#94a3b8" />
                <input type="date" name="endDate" onChange={handleChange} style={{ border: 'none', outline: 'none', width: '100%', color: '#475569' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Estimated Budget</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <DollarSign size={18} color="#94a3b8" />
                <input type="number" name="budget" placeholder="Amount" onChange={handleChange} style={{ border: 'none', outline: 'none', width: '100%' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Max Travelers</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <Users size={18} color="#94a3b8" />
                <input type="number" name="capacity" placeholder="Group size" onChange={handleChange} style={{ border: 'none', outline: 'none', width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#0EA5E9', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '12px', 
            padding: '16px', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            marginTop: '8px'
          }}>
          Publish Trip
        </button>
      </form>
    </div>
  );
}
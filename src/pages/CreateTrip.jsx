// src/pages/CreateTrip.jsx
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
    description: '',
    imageUrl: '' 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 🚀 NEW: State for location autocomplete
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);

  // Standard handler for all inputs EXCEPT destination
  const handleChange = (e) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };

  // 🚀 NEW: Custom handler just for Destination to trigger the API
  const handleDestinationChange = async (e) => {
    const query = e.target.value;
    setTripData({ ...tripData, destination: query });

    if (query.length > 2) {
      setIsSearchingLocation(true);
      try {
        // Free Geocoding API from Open-Meteo!
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=en&format=json`);
        const data = await res.json();
        
        if (data.results) {
          setSuggestions(data.results);
          setShowSuggestions(true);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Failed to fetch locations", error);
      } finally {
        setIsSearchingLocation(false);
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // 🚀 NEW: Handler for when a user clicks a city from the dropdown
  const handleSelectLocation = (location) => {
    // Format it nicely: "City, Region, Country"
    const locationString = `${location.name}${location.admin1 ? `, ${location.admin1}` : ''}, ${location.country}`;
    setTripData({ ...tripData, destination: locationString });
    setShowSuggestions(false); // Hide the dropdown
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true); 
    
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
        imageUrl: tripData.imageUrl, 
        isPublic: true,     
        isOrganizer: true,
        status: 'UPCOMING'
      };

      const response = await API.post('/api/v1/trips', formattedPayload); 
      console.log("Trip successfully saved to database!", response.data);
      
      window.dispatchEvent(new CustomEvent('trip-created'));
      
      alert("Successfully created trip");
      navigate('/dashboard'); 
      
    } catch (error) {
      console.error("Error creating trip:", error);
      alert("Failed to publish the trip. Check the console to see what the backend said.");
      setIsSubmitting(false); 
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
                value={tripData.title}
                placeholder="e.g., Weekend Getaway to Ella" 
                onChange={handleChange}
                disabled={isSubmitting}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} 
              />
            </div>

            {/* 🚀 FIXED: Destination wrapper with Dropdown logic */}
            <div style={{ position: 'relative' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Destination</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <MapPin size={18} color="#94a3b8" />
                <input 
                  type="text" 
                  name="destination"
                  value={tripData.destination} // Bind the state so we can autofill it!
                  placeholder={isSearchingLocation ? "Searching maps..." : "Where are you going?"}
                  onChange={handleDestinationChange}
                  disabled={isSubmitting}
                  autoComplete="off" // Prevent the ugly browser history dropdown
                  style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent' }} 
                />
              </div>

              {/* 🚀 THE DROPDOWN MENU */}
              {showSuggestions && suggestions.length > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  marginTop: '6px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  zIndex: 50,
                  overflow: 'hidden'
                }}>
                  {suggestions.map((loc) => (
                    <div 
                      key={loc.id}
                      onClick={() => handleSelectLocation(loc)}
                      style={{ 
                        padding: '12px 16px', 
                        cursor: 'pointer', 
                        borderBottom: '1px solid #f1f5f9', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <MapPin size={16} color="#0EA5E9" />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>{loc.name}</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>
                          {loc.admin1 ? `${loc.admin1}, ` : ''}{loc.country}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Cover Image URL (Optional)</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <ImageIcon size={18} color="#94a3b8" />
                <input 
                  type="url" 
                  name="imageUrl"
                  value={tripData.imageUrl}
                  placeholder="Paste an image link here..." 
                  onChange={handleChange}
                  disabled={isSubmitting}
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
                <input type="date" name="startDate" value={tripData.startDate} onChange={handleChange} disabled={isSubmitting} style={{ border: 'none', outline: 'none', width: '100%', color: '#475569', backgroundColor: 'transparent' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>End Date</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <Calendar size={18} color="#94a3b8" />
                <input type="date" name="endDate" value={tripData.endDate} onChange={handleChange} disabled={isSubmitting} style={{ border: 'none', outline: 'none', width: '100%', color: '#475569', backgroundColor: 'transparent' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Estimated Budget</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <DollarSign size={18} color="#94a3b8" />
                <input type="number" name="budget" value={tripData.budget} placeholder="Amount" onChange={handleChange} disabled={isSubmitting} style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Max Travelers</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <Users size={18} color="#94a3b8" />
                <input type="number" name="capacity" value={tripData.capacity} placeholder="Group size" onChange={handleChange} disabled={isSubmitting} style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent' }} />
              </div>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            backgroundColor: isSubmitting ? '#94a3b8' : '#0EA5E9', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '12px', 
            padding: '16px', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            marginTop: '8px',
            transition: 'background-color 0.2s'
          }}>
          {isSubmitting ? 'Publishing Adventure...' : 'Publish Trip'}
        </button>
      </form>
    </div>
  );
}
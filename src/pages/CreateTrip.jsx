// src/pages/CreateTrip.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; //  NEW: Import useLocation
import API from '../services/api';
import { MapPin, Calendar, Image as ImageIcon, AlignLeft, Users, AlertCircle } from 'lucide-react';

const USD_TO_LKR_RATE = 300; 

export default function CreateTrip() {
  const navigate = useNavigate();
  const location = useLocation(); //  Grab the data sent from the Edit button

  //  Check if we are editing an existing trip
  const editTripData = location.state?.trip;
  const isEditing = !!editTripData;

  // Pre-fill the form if we are editing, otherwise start blank!
  const [tripData, setTripData] = useState({
    title: editTripData?.title || '',
    destination: editTripData?.destinations || editTripData?.destination || '',
    startDate: editTripData?.startDate || '',
    endDate: editTripData?.endDate || '',
    budget: editTripData?.minBudget || '', 
    capacity: editTripData?.maxParticipants || '',
    description: editTripData?.description || '',
    imageUrl: editTripData?.imageUrl || editTripData?.coverImageUrl || '' 
  });

  // Default to USD if editing (since backend normalizes everything to USD)
  const [currency, setCurrency] = useState(isEditing ? 'USD' : 'LKR');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);

  // If editing, we shouldn't lock the start date to "today" because the trip might have started in the past!
  const todayDate = new Date().toISOString().split('T')[0];
  const minStartDate = isEditing ? undefined : todayDate;

  const handleChange = (e) => {
    setFormErrors({ ...formErrors, [e.target.name]: null });
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };

  const handleDestinationChange = async (e) => {
    setFormErrors({ ...formErrors, destination: null });
    const query = e.target.value;
    setTripData({ ...tripData, destination: query });

    if (query.length > 2) {
      setIsSearchingLocation(true);
      try {
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

  const handleSelectLocation = (loc) => {
    const locationString = `${loc.name}${loc.admin1 ? `, ${loc.admin1}` : ''}, ${loc.country}`;
    setTripData({ ...tripData, destination: locationString });
    setShowSuggestions(false); 
  };

  const getConvertedBudgetDisplay = () => {
    if (!tripData.budget) return null;
    const amount = parseFloat(tripData.budget);
    if (isNaN(amount)) return null;

    if (currency === 'LKR') {
      const usdValue = (amount / USD_TO_LKR_RATE).toFixed(2);
      return `≈ $${usdValue} USD`;
    } else {
      const lkrValue = (amount * USD_TO_LKR_RATE).toLocaleString();
      return `≈ Rs. ${lkrValue} LKR`;
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!tripData.title.trim()) errors.title = "Trip title is required.";
    if (!tripData.destination.trim()) errors.destination = "Destination is required.";
    if (!tripData.imageUrl.trim()) errors.imageUrl = "Cover image URL is required.";
    
    if (!tripData.startDate) {
      errors.startDate = "Start date is required.";
    } else if (!isEditing && tripData.startDate < todayDate) {
      errors.startDate = "Start date cannot be in the past.";
    }

    if (!tripData.endDate) {
      errors.endDate = "End date is required.";
    } else if (tripData.startDate && tripData.endDate < tripData.startDate) {
      errors.endDate = "End date must be after the start date.";
    }

    if (!tripData.budget || parseFloat(tripData.budget) <= 0) {
      errors.budget = "Please enter a valid budget.";
    }

    if (!tripData.capacity) {
      errors.capacity = "Group size is required.";
    } else {
      const capacityNum = parseInt(tripData.capacity, 10);
      if (capacityNum <= 0) errors.capacity = "Must be at least 1 traveler.";
      if (capacityNum > 40) errors.capacity = "Maximum group size is 40.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (isSubmitting) return;
    setIsSubmitting(true); 
    
    try {
      let finalUsdBudget = parseFloat(tripData.budget);
      if (currency === 'LKR') {
        finalUsdBudget = finalUsdBudget / USD_TO_LKR_RATE;
      }

      const formattedPayload = {
        title: tripData.title,
        description: tripData.description,
        destinations: tripData.destination, 
        startDate: tripData.startDate,
        endDate: tripData.endDate,
        minBudget: Math.round(finalUsdBudget), 
        maxBudget: Math.round(finalUsdBudget), 
        maxParticipants: parseInt(tripData.capacity, 10),
        imageUrl: tripData.imageUrl, 
        isPublic: true,     
        isOrganizer: true,
        status: editTripData?.status || 'UPCOMING' // Keep the existing status if editing
      };

      //  SMART ROUTING: Decide whether to POST or PUT
      if (isEditing) {
        await API.put(`/api/v1/trips/${editTripData.id || editTripData._id}`, formattedPayload);
        alert("Trip updated successfully!");
      } else {
        await API.post('/api/v1/trips', formattedPayload); 
        alert("Trip created successfully!");
      }
      
      window.dispatchEvent(new CustomEvent('trip-created'));
      navigate('/dashboard/my-trips'); // Send them back to My Trips
      
    } catch (error) {
      console.error("Error saving trip:", error);
      alert("Failed to save the trip. Check the console.");
      setIsSubmitting(false); 
    }
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: '#0f172a' }}>
          {isEditing ? 'Edit Your Adventure' : 'Plan a New Adventure'}
        </h2>
        <p style={{ color: '#64748b', fontSize: '15px' }}>
          {isEditing ? 'Update the details below to modify your trip.' : 'Fill in the details below to publish your trip to the GoOut community.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlignLeft size={20} color="#0EA5E9" /> Trip Basics
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Trip Title *</label>
              <input 
                type="text" 
                name="title"
                value={tripData.title}
                placeholder="e.g., Weekend Getaway to Ella" 
                onChange={handleChange}
                disabled={isSubmitting}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: `1px solid ${formErrors.title ? '#ef4444' : '#e2e8f0'}`, outline: 'none' }} 
              />
              {formErrors.title && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/> {formErrors.title}</span>}
            </div>

            <div style={{ position: 'relative' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Destination *</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: `1px solid ${formErrors.destination ? '#ef4444' : '#e2e8f0'}` }}>
                <MapPin size={18} color={formErrors.destination ? '#ef4444' : '#94a3b8'} />
                <input 
                  type="text" 
                  name="destination"
                  value={tripData.destination} 
                  placeholder={isSearchingLocation ? "Searching maps..." : "Where are you going?"}
                  onChange={handleDestinationChange}
                  disabled={isSubmitting}
                  autoComplete="off" 
                  style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent' }} 
                />
              </div>
              {formErrors.destination && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/> {formErrors.destination}</span>}

              {showSuggestions && suggestions.length > 0 && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', marginTop: '6px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', zIndex: 50, overflow: 'hidden' }}>
                  {suggestions.map((loc) => (
                    <div 
                      key={loc.id}
                      onClick={() => handleSelectLocation(loc)}
                      style={{ padding: '12px 16px', cursor: 'pointer', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '12px', transition: 'background-color 0.2s' }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <MapPin size={16} color="#0EA5E9" />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>{loc.name}</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>{loc.admin1 ? `${loc.admin1}, ` : ''}{loc.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Cover Image URL *</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: `1px solid ${formErrors.imageUrl ? '#ef4444' : '#e2e8f0'}` }}>
                <ImageIcon size={18} color={formErrors.imageUrl ? '#ef4444' : '#94a3b8'} />
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
              {formErrors.imageUrl && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/> {formErrors.imageUrl}</span>}
            </div>

          </div>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Start Date *</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: `1px solid ${formErrors.startDate ? '#ef4444' : '#e2e8f0'}` }}>
                <Calendar size={18} color={formErrors.startDate ? '#ef4444' : '#94a3b8'} />
                <input type="date" name="startDate" value={tripData.startDate} min={minStartDate} onChange={handleChange} disabled={isSubmitting} style={{ border: 'none', outline: 'none', width: '100%', color: '#475569', backgroundColor: 'transparent' }} />
              </div>
              {formErrors.startDate && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/> {formErrors.startDate}</span>}
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>End Date *</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: `1px solid ${formErrors.endDate ? '#ef4444' : '#e2e8f0'}` }}>
                <Calendar size={18} color={formErrors.endDate ? '#ef4444' : '#94a3b8'} />
                <input type="date" name="endDate" value={tripData.endDate} min={tripData.startDate || minStartDate} onChange={handleChange} disabled={isSubmitting} style={{ border: 'none', outline: 'none', width: '100%', color: '#475569', backgroundColor: 'transparent' }} />
              </div>
              {formErrors.endDate && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/> {formErrors.endDate}</span>}
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Estimated Budget *</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: `1px solid ${formErrors.budget ? '#ef4444' : '#e2e8f0'}` }}>
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)}
                  disabled={isSubmitting}
                  style={{ border: 'none', outline: 'none', backgroundColor: 'transparent', fontWeight: 'bold', color: '#0EA5E9', cursor: 'pointer' }}
                >
                  <option value="LKR">LKR</option>
                  <option value="USD">USD</option>
                </select>
                <input type="number" name="budget" value={tripData.budget} min="1" placeholder="Amount" onChange={handleChange} disabled={isSubmitting} style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent' }} />
              </div>
              <div style={{ fontSize: '12px', color: '#10B981', marginTop: '4px', fontWeight: '600' }}>
                {getConvertedBudgetDisplay()}
              </div>
              {formErrors.budget && <span style={{ color: '#ef4444', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/> {formErrors.budget}</span>}
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#475569' }}>Max Travelers *</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: `1px solid ${formErrors.capacity ? '#ef4444' : '#e2e8f0'}` }}>
                <Users size={18} color={formErrors.capacity ? '#ef4444' : '#94a3b8'} />
                <input type="number" name="capacity" value={tripData.capacity} min="1" max="40" placeholder="Max 40" onChange={handleChange} disabled={isSubmitting} style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent' }} />
              </div>
              {formErrors.capacity && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/> {formErrors.capacity}</span>}
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
          {isSubmitting ? 'Saving...' : (isEditing ? 'Save Changes' : 'Publish Trip')}
        </button>
      </form>
    </div>
  );
}
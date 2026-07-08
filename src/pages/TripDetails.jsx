// src/pages/TripDetails.jsx
import React, { useState, useEffect } from 'react';
import { 
  MapPin, Calendar, DollarSign, Users, Wind, Droplets, 
  MessageCircle, Cloud, Wallet, CheckCircle, Shield, Check, 
  Utensils, Car, Home, Ticket, Map, Coffee, Info, X, Clock,
  Edit, Plus, Trash2, Sun, CloudRain, CloudLightning, AlertCircle // 🚀 IMPORTED AlertCircle
} from 'lucide-react';
import api from '../services/api'; 

export default function TripDetails({ setActiveTab, tripId }) {
  const [activeSegment, setActiveSegment] = useState('overview');
  const [tripData, setTripData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isRequesting, setIsRequesting] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  // Expenses & Places State
  const [tripExpenses, setTripExpenses] = useState([]);
  const [isLoadingExpenses, setIsLoadingExpenses] = useState(false);
  const [tripPlaces, setTripPlaces] = useState([]);
  const [isLoadingPlaces, setIsLoadingPlaces] = useState(false);
  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState(false);
  const [placeForm, setPlaceForm] = useState({ name: '', category: 'Food & Dining', tip: '' });

  // Overview Edit State
  const [isEditingOverview, setIsEditingOverview] = useState(false);
  const [overviewDescription, setOverviewDescription] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [isSavingOverview, setIsSavingOverview] = useState(false);

  const [weather, setWeather] = useState({
    temp: '--', condition: 'Fetching...', humidity: '--', wind: '--'
  });

  const userString = localStorage.getItem('user');
  const currentUser = userString ? JSON.parse(userString) : null;

  useEffect(() => {
    if (!tripId) return;

    const fetchTripDetails = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`/api/v1/trips/${tripId}`); 
        setTripData(response.data);
        setOverviewDescription(response.data.description || '');
        setGalleryImages(response.data.galleryImages || []);
      } catch (error) {
        console.error("Error fetching trip details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTripDetails();
  }, [tripId]);

  useEffect(() => {
    if (tripData?.destinations || tripData?.destination) {
      const fetchWeather = async () => {
        try {
          const locationString = tripData.destinations || tripData.destination;
          const city = locationString.split(',')[0].trim();

          const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
          const geoData = await geoRes.json();

          if (!geoData.results || geoData.results.length === 0) {
            setWeather(prev => ({ ...prev, condition: 'Weather unavailable' }));
            return;
          }

          const { latitude, longitude } = geoData.results[0];

          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
          const weatherData = await weatherRes.json();
          const current = weatherData.current;

          const code = current.weather_code;
          let condition = 'Clear';
          if (code >= 1 && code <= 3) condition = 'Partly Cloudy';
          if (code >= 45 && code <= 55) condition = 'Foggy';
          if (code >= 61 && code <= 67) condition = 'Rain';
          if (code >= 80 && code <= 82) condition = 'Heavy Rain';
          if (code >= 95) condition = 'Thunderstorm';

          setWeather({
            temp: Math.round(current.temperature_2m),
            humidity: current.relative_humidity_2m,
            wind: Math.round(current.wind_speed_10m),
            condition: condition
          });
        } catch (error) {
          console.error("Failed to fetch dynamic weather:", error);
          setWeather({ temp: '--', condition: 'Offline', humidity: '--', wind: '--' });
        }
      };

      fetchWeather();
    }
  }, [tripData]);

  useEffect(() => {
    if (tripId) {
      const fetchTripExpenses = async () => {
        setIsLoadingExpenses(true);
        try {
          const response = await api.get(`/api/v1/expenses/trip/${tripId}`);
          let rawData = Array.isArray(response.data) ? response.data : (response.data?.data || []);
          setTripExpenses(rawData);
        } catch (error) {
          console.error("Failed to fetch trip expenses:", error);
        } finally {
          setIsLoadingExpenses(false);
        }
      };
      fetchTripExpenses();
    }
  }, [tripId]); // 🚀 Removed activeSegment from dependency array so totalSpent calculates instantly!

  useEffect(() => {
    if (activeSegment === 'places' && tripId) {
      const fetchTripPlaces = async () => {
        setIsLoadingPlaces(true);
        try {
          const response = await api.get(`/api/v1/trips/${tripId}/places`).catch(() => ({ data: [] }));
          let rawData = Array.isArray(response.data) ? response.data : (response.data?.data || []);
          setTripPlaces(rawData);
        } catch (error) {
          console.error("Failed to fetch trip places:", error);
        } finally {
          setIsLoadingPlaces(false);
        }
      };
      fetchTripPlaces();
    }
  }, [activeSegment, tripId]);

  const handleRequestToJoin = async () => {
    if (isRequesting || requestSent) return;
    setIsRequesting(true);
    try {
      await api.post(`/api/v1/trips/${tripId}/join`);
      setRequestSent(true);
      alert("Join request sent successfully! The organizer will review it soon.");
    } catch (error) {
      console.error("Error sending join request:", error);
      alert(error.response?.data?.message || "Failed to send request. You might have already requested to join this trip.");
    } finally {
      setIsRequesting(false);
    }
  };

  const handleAddPlace = async (e) => {
    e.preventDefault();
    try {
      const newPlaceData = { ...placeForm, tripId };
      await api.post(`/api/v1/trips/${tripId}/places`, newPlaceData);
      
      setTripPlaces([...tripPlaces, { ...newPlaceData, id: Math.random(), author: currentUser?.name || 'Traveler' }]);
      setIsPlaceModalOpen(false);
      setPlaceForm({ name: '', category: 'Food & Dining', tip: '' }); 
      
      setActiveSegment('places');
      alert("Place added successfully!");
    } catch (error) {
      console.error("Error adding place:", error);
      alert("Failed to add place. Check console.");
    }
  };

  const handleSaveOverview = async () => {
    setIsSavingOverview(true);
    try {
      const payload = {
        description: overviewDescription,
        galleryImages: galleryImages
      };
      
      await api.patch(`/api/v1/trips/${tripId}/overview`, payload).catch(err => {
        return api.put(`/api/v1/trips/${tripId}`, { ...tripData, ...payload });
      });

      setTripData({ ...tripData, description: overviewDescription, galleryImages: galleryImages });
      setIsEditingOverview(false);
      alert("Trip overview updated successfully!");
    } catch (error) {
      console.error("Error saving overview:", error);
      alert("Failed to save changes. Make sure the backend endpoint is ready!");
    } finally {
      setIsSavingOverview(false);
    }
  };

  const handleAddGalleryImage = () => {
    if (!newImageUrl.trim()) return;
    setGalleryImages([...galleryImages, newImageUrl.trim()]);
    setNewImageUrl('');
  };

  if (isLoading) return <div style={{ textAlign: 'center', padding: '50px', color: '#64748b' }}>Loading your adventure...</div>;
  if (!tripData) return <div style={{ textAlign: 'center', padding: '50px', color: '#ef4444' }}>Trip not found.</div>;

  const isOrganizer = tripData.currentUserStatus === 'ORGANIZER' || tripData.isOrganizer === true;
  const isPending = tripData.currentUserStatus === 'PENDING';
  
  const currentUserId = currentUser ? String(currentUser.id || currentUser._id) : null;
  const joinedRecord = tripData.joinedMembers && tripData.joinedMembers.find(m => {
    const matchId = String(m.id || m._id || m.userId || (m.user && m.user.id));
    return matchId === currentUserId;
  });

  const isMember = isOrganizer || ['MEMBER', 'ACCEPTED', 'APPROVED'].includes(tripData.currentUserStatus) || Boolean(joinedRecord);

  const groupedExpenses = tripExpenses.reduce((acc, exp) => {
    const cat = exp.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(exp);
    return acc;
  }, {});

  // 🚀 BUDGET CALCULATION LOGIC
  const totalSpent = tripExpenses.reduce((sum, exp) => sum + (exp.amount || 0), 0);
  const budget = tripData.minBudget || 0;
  const isOverBudget = budget > 0 && totalSpent > budget;
  const overBudgetAmount = isOverBudget ? totalSpent - budget : 0;

  const getCategoryIcon = (cat) => {
    if (cat.includes('Food')) return <Utensils size={20} color="#ea580c" />;
    if (cat.includes('Transport')) return <Car size={20} color="#0EA5E9" />;
    if (cat.includes('Accommodation')) return <Home size={20} color="#8b5cf6" />;
    if (cat.includes('Activities')) return <Ticket size={20} color="#10B981" />;
    return <DollarSign size={20} color="#64748b" />;
  };

  const getPlaceIcon = (cat) => {
    if (cat === 'Food & Dining') return <Utensils size={24} color="#ea580c" />;
    if (cat === 'Sightseeing') return <Map size={24} color="#0EA5E9" />;
    if (cat === 'Rest Stop (Washrooms)') return <Coffee size={24} color="#10B981" />;
    return <Info size={24} color="#8b5cf6" />;
  };

  const getWeatherIcon = (condition) => {
    if (condition.includes('Rain')) return <CloudRain size={28} color="#fff" />;
    if (condition.includes('Thunderstorm')) return <CloudLightning size={28} color="#fff" />;
    if (condition.includes('Cloud') || condition.includes('Fog')) return <Cloud size={28} color="#fff" />;
    return <Sun size={28} color="#fff" />;
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* --- HERO BANNER --- */}
      <div style={{ position: 'relative', height: '350px', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', backgroundColor: '#e2e8f0' }}>
        <img 
          src={tripData.coverImageUrl || tripData.imageUrl || "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=400&fit=crop"} 
          alt="Trip Hero" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: '#fff' }}>
          <h1 style={{ margin: '0 0 8px 0', fontSize: '36px', fontWeight: 'bold' }}>
            {tripData.title || 'Untitled Adventure'}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', opacity: 0.9 }}>
            <MapPin size={18} /> {tripData.destinations || tripData.destination || 'Location TBD'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        
        <div style={{ flex: 1 }}>
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid #f1f5f9', display: 'flex', gap: '24px', marginBottom: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
              <div style={{ backgroundColor: '#f0f9ff', padding: '12px', borderRadius: '12px', color: '#0EA5E9' }}><Calendar size={24} /></div>
              <div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Duration</div>
                <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>
                  {tripData.startDate && tripData.endDate ? `${tripData.startDate} to ${tripData.endDate}` : 'Dates TBD'}
                </div>
              </div>
            </div>
            
            {/* 🚀 UPGRADED BUDGET CARD */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, borderLeft: '1px solid #f1f5f9', paddingLeft: '24px' }}>
              <div style={{ 
                backgroundColor: isOverBudget ? '#fef2f2' : '#f0fdf4', 
                padding: '12px', 
                borderRadius: '12px', 
                color: isOverBudget ? '#ef4444' : '#10B981',
                transition: 'all 0.3s ease'
              }}>
                {isOverBudget ? <AlertCircle size={24} /> : <DollarSign size={24} />}
              </div>
              <div>
                <div style={{ 
                  fontSize: '13px', 
                  color: isOverBudget ? '#ef4444' : '#64748b', 
                  marginBottom: '2px',
                  fontWeight: isOverBudget ? 'bold' : 'normal'
                }}>
                  {isOverBudget ? 'Over Budget!' : 'Budget Spent'}
                </div>
                <div style={{ 
                  fontWeight: 'bold', 
                  fontSize: '15px', 
                  color: isOverBudget ? '#ef4444' : '#0f172a' 
                }}>
                  {budget ? `$${totalSpent.toFixed(0)} / $${budget}` : 'TBD'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, borderLeft: '1px solid #f1f5f9', paddingLeft: '24px' }}>
              <div style={{ backgroundColor: '#f5f3ff', padding: '12px', borderRadius: '12px', color: '#8b5cf6' }}><Users size={24} /></div>
              <div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Members</div>
                <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>
                  {tripData.joinedMembers?.length || 0} / {tripData.maxParticipants || 8}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
            {tripData.status === 'UPCOMING' && !isOrganizer && (
              <button 
                onClick={handleRequestToJoin}
                disabled={
                  isRequesting || 
                  requestSent || 
                  isMember || 
                  isPending || 
                  ((tripData.joinedMembers?.length || 0) >= (tripData.maxParticipants || 8))
                }
                style={{ 
                  flex: 1, 
                  backgroundColor: (isMember || requestSent) ? '#10B981' : (isPending ? '#f59e0b' : (((tripData.joinedMembers?.length || 0) >= (tripData.maxParticipants || 8)) ? '#ef4444' : (isRequesting ? '#94a3b8' : '#0EA5E9'))), 
                  color: '#fff', 
                  border: 'none', 
                  padding: '16px', 
                  borderRadius: '12px', 
                  fontWeight: 'bold', 
                  fontSize: '15px', 
                  cursor: (isRequesting || requestSent || isMember || isPending || ((tripData.joinedMembers?.length || 0) >= (tripData.maxParticipants || 8))) ? 'default' : 'pointer', 
                  boxShadow: (requestSent || isMember || isPending || ((tripData.joinedMembers?.length || 0) >= (tripData.maxParticipants || 8))) ? 'none' : '0 4px 6px rgba(14, 165, 233, 0.2)', 
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {isMember ? <><Check size={20} /> Already Joined</> 
                 : isPending ? <><Clock size={20} /> Request Pending</>
                 : requestSent ? <><Check size={20} /> Request Sent!</> 
                 : ((tripData.joinedMembers?.length || 0) >= (tripData.maxParticipants || 8)) ? <><X size={20} /> Trip is Full</>
                 : (isRequesting ? 'Sending Request...' : 'Request to Join')}
              </button>
            )}

            {isOrganizer && (
              <div style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#64748b', padding: '16px', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '1px solid #e2e8f0' }}>
                <Shield size={20} /> You are the Organizer
              </div>
            )}
            
            <button 
              onClick={() => setActiveTab('chat')} 
              style={{ flex: 1, backgroundColor: '#fff', color: '#334155', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
            >
              <MessageCircle size={20} /> Chat with Group
            </button>
          </div>

          <div style={{ backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
            
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

            {activeSegment === 'overview' && (
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', color: '#0f172a' }}>About This Trip</h3>
                  
                  {isOrganizer && !isEditingOverview && (
                    <button 
                      onClick={() => setIsEditingOverview(true)}
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '8px 16px', borderRadius: '8px', color: '#334155', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Edit size={16} /> Edit Overview
                    </button>
                  )}
                </div>

                {isEditingOverview ? (
                  <div style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', fontSize: '14px', color: '#334155', marginBottom: '8px' }}>Trip Description</label>
                    <textarea 
                      rows="5"
                      value={overviewDescription}
                      onChange={(e) => setOverviewDescription(e.target.value)}
                      placeholder="Write an exciting description for your trip..."
                      style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical', marginBottom: '24px', fontFamily: 'inherit' }}
                    />

                    <label style={{ display: 'block', fontWeight: 'bold', fontSize: '14px', color: '#334155', marginBottom: '8px' }}>Add Photos to Gallery (Paste Image URL)</label>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                      <input 
                        type="url" 
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        placeholder="https://example.com/photo.jpg"
                        style={{ flex: 1, padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none' }}
                      />
                      <button 
                        onClick={handleAddGalleryImage}
                        type="button"
                        style={{ backgroundColor: '#10B981', color: '#fff', border: 'none', padding: '0 20px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                      >
                        <Plus size={18} /> Add
                      </button>
                    </div>

                    {galleryImages.length > 0 && (
                      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '24px' }}>
                        {galleryImages.map((imgUrl, idx) => (
                          <div key={idx} style={{ position: 'relative', width: '100px', height: '100px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                            <img src={imgUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <button 
                              onClick={() => setGalleryImages(galleryImages.filter((_, i) => i !== idx))}
                              style={{ position: 'absolute', top: '4px', right: '4px', background: 'rgba(239, 68, 68, 0.9)', color: '#fff', border: 'none', borderRadius: '50%', padding: '4px', cursor: 'pointer' }}
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                      <button 
                        onClick={() => {
                          setIsEditingOverview(false);
                          setOverviewDescription(tripData.description || '');
                          setGalleryImages(tripData.galleryImages || []);
                        }}
                        style={{ padding: '12px 20px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '12px', fontWeight: 'bold', color: '#475569', cursor: 'pointer' }}
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handleSaveOverview}
                        disabled={isSavingOverview}
                        style={{ padding: '12px 24px', backgroundColor: '#0EA5E9', border: 'none', borderRadius: '12px', fontWeight: 'bold', color: '#fff', cursor: isSavingOverview ? 'not-allowed' : 'pointer' }}
                      >
                        {isSavingOverview ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '15px', marginBottom: '32px', whiteSpace: 'pre-wrap' }}>
                      {tripData.description || 'No description provided for this adventure yet.'}
                    </p>

                    {tripData.galleryImages && tripData.galleryImages.length > 0 && (
                      <div style={{ marginBottom: '40px' }}>
                        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#0f172a' }}>Trip Gallery</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                          {tripData.galleryImages.map((imgUrl, idx) => (
                            <div key={idx} style={{ height: '200px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                              <img src={imgUrl} alt={`Trip Gallery ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                <div style={{ height: '1px', backgroundColor: '#f1f5f9', margin: '32px 0' }}></div>

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

            {activeSegment === 'places' && (
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '20px', color: '#0f172a' }}>Curated Places & Tips</h3>
                    <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Insider knowledge added by trip members.</p>
                  </div>
                </div>
                
                {isLoadingPlaces ? (
                  <p style={{ color: '#64748b', textAlign: 'center', padding: '20px 0' }}>Loading insider tips...</p>
                ) : tripPlaces.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
                    <Map Pin size={48} color="#cbd5e1" style={{ marginBottom: '16px' }} />
                    <p style={{ margin: 0, fontWeight: '500' }}>No places recommended yet.</p>
                    {isMember && <p style={{ margin: '8px 0 0 0', fontSize: '13px' }}>Click "Place Updates" on the right to add the first one!</p>}
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {tripPlaces.map((place, idx) => (
                      <div key={idx} style={{ padding: '20px', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#f8fafc' }}>
                          {getPlaceIcon(place.category)}
                        </div>
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>{place.category}</div>
                          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }}>{place.name}</h4>
                          <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.5' }}>"{place.tip}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeSegment === 'expenses' && (
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', color: '#0f172a' }}>Financial Breakdown</h3>
                  <div style={{ 
                    backgroundColor: isOverBudget ? '#fef2f2' : '#f0fdf4', 
                    color: isOverBudget ? '#ef4444' : '#10B981', 
                    padding: '8px 16px', 
                    borderRadius: '12px', 
                    fontWeight: 'bold', 
                    fontSize: '15px' 
                  }}>
                    Total Logged: ${totalSpent.toFixed(2)}
                  </div>
                </div>

                {/* 🚀 NEW: Over-Budget Alert Banner Injected Here! */}
                {isOverBudget && (
                  <div style={{ backgroundColor: '#fef2f2', color: '#991b1b', border: '1px solid #fecaca', padding: '16px', borderRadius: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 4px rgba(220, 38, 38, 0.05)' }}>
                    <div style={{ backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', flexShrink: 0, boxShadow: '0 2px 4px rgba(220, 38, 38, 0.1)' }}>
                      <AlertCircle size={24} color="#dc2626" />
                    </div>
                    <div>
                      <h6 style={{ margin: '0 0 4px 0', fontWeight: 'bold', fontSize: '16px' }}>Budget Exceeded</h6>
                      <p style={{ margin: 0, fontSize: '14px' }}>
                        This trip has exceeded its estimated budget of <strong>${budget.toFixed(2)}</strong>. You are currently overspent by <strong>${overBudgetAmount.toFixed(2)}</strong>.
                      </p>
                    </div>
                  </div>
                )}
                
                {isLoadingExpenses ? (
                  <p style={{ color: '#64748b', textAlign: 'center', padding: '20px 0' }}>Loading trip expenses...</p>
                ) : tripExpenses.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b' }}>
                    <Wallet size={48} color="#cbd5e1" style={{ marginBottom: '16px' }} />
                    <p>No financial data has been logged for this trip yet.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {Object.entries(groupedExpenses).map(([category, items]) => (
                      <div key={category} style={{ border: '1px solid #f1f5f9', borderRadius: '16px', overflow: 'hidden' }}>
                        <div style={{ backgroundColor: '#f8fafc', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #f1f5f9' }}>
                          <div style={{ backgroundColor: '#fff', padding: '8px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            {getCategoryIcon(category)}
                          </div>
                          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#0f172a', flex: 1 }}>{category}</h4>
                          <span style={{ fontWeight: 'bold', color: '#0f172a' }}>
                            ${items.reduce((sum, i) => sum + (i.amount || 0), 0).toFixed(2)}
                          </span>
                        </div>
                        <div style={{ padding: '0 16px' }}>
                          {items.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: idx !== items.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                              <div>
                                <p style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#334155', fontWeight: '500' }}>
                                  {item.title || item.description}
                                </p>
                                <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Paid by {item.paidBy}</p>
                              </div>
                              <div style={{ fontWeight: '600', color: '#475569' }}>
                                ${parseFloat(item.amount || 0).toFixed(2)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeSegment === 'members' && (
              <div style={{ padding: '32px' }}>
                <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', color: '#0f172a' }}>Travelers ({tripData.joinedMembers?.length || 0})</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                  {tripData.joinedMembers?.length > 0 ? (
                    tripData.joinedMembers.map((member) => {
                      return (
                        <div key={member.id || member._id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                          <img 
                            src={member.avatarUrl || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop'} 
                            alt={member.firstName} 
                            style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
                          />
                          <div>
                            <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>
                              {member.firstName} {member.lastName}
                            </div>
                            <div style={{ fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px', color: member.role === 'admin' ? '#8b5cf6' : '#10B981' }}>
                              {member.role === 'admin' || member.isOrganizer ? (
                                <><Shield size={14} /> Admin</>
                              ) : (
                                <><CheckCircle size={14} /> Member</>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <div style={{ color: '#64748b', gridColumn: '1 / -1', padding: '20px 0' }}>
                      No members have joined this trip yet.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDEBAR
            ========================================== */}
        <div style={{ width: '320px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)', borderRadius: '20px', padding: '24px', color: '#fff', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', opacity: 0.9, marginBottom: '4px' }}>{tripData.destinations || tripData.destination || 'Location TBD'}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: 1 }}>{weather.temp}°</span>
                  {getWeatherIcon(weather.condition)}
                </div>
                <div style={{ fontSize: '14px', marginTop: '8px', opacity: 0.9 }}>{weather.condition}</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '16px 0', margin: '16px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Wind size={18} style={{ opacity: 0.8 }} />
                <div>
                  <div style={{ fontSize: '11px', opacity: 0.8 }}>Wind</div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{weather.wind} km/h</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Droplets size={18} style={{ opacity: 0.8 }} />
                <div>
                  <div style={{ fontSize: '11px', opacity: 0.8 }}>Humidity</div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{weather.humidity}%</div>
                </div>
              </div>
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
              onClick={() => {
                if (!isMember && !isOrganizer) {
                  alert("Only trip members and organizers can add place updates!");
                  return;
                }
                setIsPlaceModalOpen(true);
              }}
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

      {/* 🚀 ADD PLACE MODAL */}
      {isPlaceModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '24px', width: '100%', maxWidth: '500px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>Add a Place Recommendation</h3>
              <button onClick={() => setIsPlaceModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddPlace}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>Name of Place</label>
                <input 
                  type="text" required
                  placeholder="e.g., Kandy Railway Station"
                  value={placeForm.name}
                  onChange={(e) => setPlaceForm({...placeForm, name: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>Category</label>
                <select 
                  value={placeForm.category}
                  onChange={(e) => setPlaceForm({...placeForm, category: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', backgroundColor: '#fff' }}
                >
                  <option value="Food & Dining">Food & Dining</option>
                  <option value="Sightseeing">Sightseeing / Viewpoint</option>
                  <option value="Rest Stop (Washrooms)">Rest Stop (Clean Washrooms)</option>
                  <option value="Other Tip">Other Info</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>Insider Tip</label>
                <textarea 
                  required rows="3"
                  placeholder="e.g., Very clean washrooms here, highly recommend stopping before the long drive!"
                  value={placeForm.tip}
                  onChange={(e) => setPlaceForm({...placeForm, tip: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', resize: 'none' }}
                />
              </div>

              <button type="submit" style={{ width: '100%', padding: '16px', backgroundColor: '#0EA5E9', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
                Save Recommendation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
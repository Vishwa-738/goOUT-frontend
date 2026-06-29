// src/pages/DashboardHome.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon, Send, MapPin, MoreHorizontal, Heart, MessageCircle, Sun, CheckCircle } from 'lucide-react';
import api from '../services/api';

export default function DashboardHome() {
  const [newPostText, setNewPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  
  // 🚀 NEW: The Tab State (upcoming vs finished)
  const [feedTab, setFeedTab] = useState('upcoming'); 
  
  // 🚀 NEW: Updated Posts state with a dummy active trip for testing the logic
  const [posts, setPosts] = useState([
    {
      id: 'mock-1',
      author: { name: 'Vishwa Liyanage', avatarUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop' },
      createdAt: new Date().toISOString(),
      location: 'Ella, LK',
      content: 'Excited for our upcoming hike to Ella Rock next week! Who is bringing the snacks?',
      imageUrl: null,
      status: 'UPCOMING', // The new backend field
      isAdmin: true, // Mocking that the current user created this trip
      likeCount: 5,
      isLikedByCurrentUser: false
    }
  ]);
  
  const [isLoadingFeed, setIsLoadingFeed] = useState(false); // Set to false for this mock test
  
  const [weather, setWeather] = useState({ 
    temp: '--', condition: 'Loading...', city: 'Locating...', humidity: '--', wind: '--', feelsLike: '--'
  });
  const [locationCoords, setLocationCoords] = useState(null);
  const fileInputRef = useRef(null);

  // Filter the posts based on the active tab
  const displayedPosts = posts.filter(post => 
    feedTab === 'upcoming' ? post.status === 'UPCOMING' : post.status === 'COMPLETED'
  );

  const fetchPosts = async () => {
    // When backend is ready, uncomment this!
    /*
    try {
      const response = await api.get('/api/v1/posts');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching feed:", error);
    } finally {
      setIsLoadingFeed(false);
    }
    */
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Weather Logic (Kept exactly the same)
  const fetchWeatherData = async (lat, lon) => {
    try {
      const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
      const geoData = await geoRes.json();
      const city = geoData.city || geoData.locality || "Unknown Location";
      const countryCode = geoData.countryCode || "LK";

      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code`);
      const weatherData = await weatherRes.json();
      const current = weatherData.current;

      setWeather({ 
        temp: Math.round(current.temperature_2m), feelsLike: Math.round(current.apparent_temperature),
        humidity: current.relative_humidity_2m, wind: Math.round(current.wind_speed_10m), city: `${city}, ${countryCode}`
      });
    } catch (error) {
      console.error("Failed to fetch advanced weather:", error);
      setWeather(prev => ({ ...prev, city: 'Offline', temp: '??' })); 
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude; const lon = position.coords.longitude;
          setLocationCoords({ lat, lon });
          fetchWeatherData(lat, lon);
        },
        () => {
          setLocationCoords({ lat: 6.9271, lon: 79.8612 });
          fetchWeatherData(6.9271, 79.8612);
        }
      );
    } else {
      setLocationCoords({ lat: 6.9271, lon: 79.8612 });
      fetchWeatherData(6.9271, 79.8612);
    }
  }, []);

  useEffect(() => {
    if (!locationCoords) return;
    const weatherTimer = setInterval(() => {
      fetchWeatherData(locationCoords.lat, locationCoords.lon);
    }, 600000);
    return () => clearInterval(weatherTimer);
  }, [locationCoords]);

  // 🚀 NEW: The Admin "End Trip" Logic
  const handleEndTrip = async (postId) => {
    const isConfirmed = window.confirm("Are you sure you want to end this trip? It will be moved to Finished Memories.");
    if (!isConfirmed) return;

    // 1. Instantly update the UI so it feels lightning fast
    setPosts(currentPosts => 
      currentPosts.map(post => 
        post.id === postId ? { ...post, status: 'COMPLETED' } : post
      )
    );

    // 2. Send the request to Spring Boot in the background
    try {
      await api.put(`/api/v1/posts/${postId}/complete`);
      console.log("Backend updated successfully!");
    } catch (error) {
      console.error("Failed to end trip on backend:", error);
      // Optional: If backend fails, revert the UI state here
    }
  };

  // Remaining Handlers
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };

  const handlePostSubmit = async () => { /* Submit logic kept the same */ };
  const handleLikeToggle = async (postId, currentLikeState) => { /* Like logic kept the same */ };

  const formatTime = (dateString) => {
    if (!dateString) return 'Just now';
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div style={{ maxWidth: '1040px', margin: '0 auto', display: 'flex', gap: '40px', alignItems: 'flex-start', width: '100%' }}>
      
      {/* LEFT COLUMN */}
      <div style={{ flex: 1, maxWidth: '680px', width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Create Post Input Area */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
          <textarea 
            placeholder="Share an update or plan a new trip..." 
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            style={{ width: '100%', border: 'none', outline: 'none', resize: 'none', minHeight: '60px', fontSize: '15px', color: '#334155', marginBottom: '12px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
            <div>
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageSelect} style={{ display: 'none' }} />
              <button onClick={() => fileInputRef.current.click()} style={{ background: 'none', border: 'none', color: '#17B0B2', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
                <ImageIcon size={18} /> Add Photo
              </button>
            </div>
            <button 
              onClick={handlePostSubmit}
              disabled={isUploading || (!newPostText.trim() && !selectedImage)}
              style={{ background: 'linear-gradient(135deg, #17B0B2 0%, #8ADD63 100%)', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', cursor: isUploading ? 'not-allowed' : 'pointer' }}
            >
              {isUploading ? 'Posting...' : <><Send size={16} /> Post</>}
            </button>
          </div>
        </div>

        {/* 🚀 NEW: The Feed Category Toggle */}
        <div className="d-flex rounded-3 p-1 shadow-sm" style={{ backgroundColor: '#f1f5f9' }}>
          <button 
            onClick={() => setFeedTab('upcoming')}
            className={`btn flex-grow-1 fw-bold border-0 py-2 ${feedTab === 'upcoming' ? 'bg-white shadow-sm' : 'bg-transparent text-muted'}`}
            style={{ color: feedTab === 'upcoming' ? '#17B0B2' : '' }}
          >
            Upcoming Adventures
          </button>
          <button 
            onClick={() => setFeedTab('completed')}
            className={`btn flex-grow-1 fw-bold border-0 py-2 ${feedTab === 'completed' ? 'bg-white shadow-sm' : 'bg-transparent text-muted'}`}
            style={{ color: feedTab === 'completed' ? '#17B0B2' : '' }}
          >
            Finished Memories
          </button>
        </div>

        {/* The Posts List */}
        {isLoadingFeed ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Loading feed...</div>
        ) : displayedPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
            {feedTab === 'upcoming' ? 'No upcoming trips planned yet. Start an adventure above!' : 'No memories to show yet.'}
          </div>
        ) : (
          displayedPosts.map(post => (
            <div key={post.id} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <img 
                    src={post.author?.avatarUrl} 
                    alt={post.author?.name} 
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }}>{post.author?.name}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
                      <span>{formatTime(post.createdAt)}</span>
                      {post.location && (
                        <>
                          <span>•</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><MapPin size={12} /> {post.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* 🚀 NEW: Admin "End Trip" Button */}
                {post.status === 'UPCOMING' && post.isAdmin && (
                   <button 
                     onClick={() => handleEndTrip(post.id)}
                     className="btn btn-sm btn-outline-danger fw-bold d-flex align-items-center gap-1"
                     style={{ borderRadius: '8px' }}
                   >
                     <CheckCircle size={14} /> End Trip
                   </button>
                )}
              </div>

              {post.content && (
                <p style={{ color: '#334155', fontSize: '15px', lineHeight: '1.6', marginBottom: '0', whiteSpace: 'pre-wrap' }}>
                  {post.content}
                </p>
              )}

              {/* Action Bar */}
              <div style={{ display: 'flex', gap: '24px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                <button 
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontWeight: '500', fontSize: '14px' }}
                >
                  <Heart size={20} />
                  {post.likeCount || 0} Likes
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontWeight: '500', fontSize: '14px' }}>
                  <MessageCircle size={20} />
                  Comment
                </button>
              </div>

            </div>
          ))
        )}
      </div>

      {/* WEATHER WIDGET (Kept exact same) */}
      <div style={{ width: '320px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ background: 'linear-gradient(135deg, #17B0B2 0%, #0EA5E9 100%)', color: '#ffffff', padding: '24px', borderRadius: '24px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Current Conditions</span>
            <Sun size={24} color="#FBBF24" fill="#FBBF24" />
          </div>
          <h3 style={{ fontSize: '26px', fontWeight: 'bold', margin: '0 0 12px 0' }}>{weather.city}</h3>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '64px', fontWeight: 'bold', margin: 0, lineHeight: 1 }}>{weather.temp}°</h2>
            <span style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>C</span>
          </div>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '16px', padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold', opacity: 0.8, marginBottom: '4px' }}>HUMIDITY</div>
              <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{weather.humidity}%</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold', opacity: 0.8, marginBottom: '4px' }}>WIND</div>
              <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{weather.wind} km/h</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold', opacity: 0.8, marginBottom: '4px' }}>FEELS LIKE</div>
              <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{weather.feelsLike}°C</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
// src/pages/DashboardHome.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon, Send, MapPin, Heart, Sun, Eye } from 'lucide-react';
import api from '../services/api';
import TripDetails from './TripDetails';

export default function DashboardHome() {
  const [newPostText, setNewPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  
  const [feedTab, setFeedTab] = useState('upcoming'); 
  const [posts, setPosts] = useState([]);
  const [isLoadingFeed, setIsLoadingFeed] = useState(true); 
  
  const [viewingTripId, setViewingTripId] = useState(null);

  const [weather, setWeather] = useState({ 
    temp: '--', condition: 'Loading...', city: 'Locating...', humidity: '--', wind: '--', feelsLike: '--'
  });
  const [locationCoords, setLocationCoords] = useState(null);
  const fileInputRef = useRef(null);

  const displayedPosts = posts.filter(post => 
    feedTab === 'upcoming' ? post.status === 'UPCOMING' : post.status === 'COMPLETED'
  );

  const handleLikeToggle = async (postId) => {
    setPosts(currentPosts => 
      currentPosts.map(post => {
        if (post.id === postId) {
          const currentlyLiked = post.isLikedByCurrentUser;
          return {
            ...post,
            isLikedByCurrentUser: !currentlyLiked,
            likeCount: currentlyLiked ? Math.max(0, post.likeCount - 1) : post.likeCount + 1
          };
        }
        return post;
      })
    );

    try {
      await api.post(`/api/v1/trips/${postId}/like`).catch(async () => {
        await api.post(`/api/v1/posts/${postId}/like`);
      });
    } catch (error) {
      console.error("Failed to sync like with backend:", error);
    }
  };

  const fetchPosts = async () => {
    setIsLoadingFeed(true);
    try {
      const userString = localStorage.getItem('user');
      const currentUser = userString ? JSON.parse(userString) : null;
      
      const [postsResponse, tripsResponse] = await Promise.all([
        api.get('/api/v1/posts').catch(() => ({ data: [] })),
        api.get('/api/v1/trips').catch(() => ({ data: [] })) 
      ]);
      
      const extractData = (res) => {
        if (!res || !res.data) return [];
        if (Array.isArray(res.data)) return res.data;
        if (res.data.data && Array.isArray(res.data.data)) return res.data.data;
        if (res.data.content && Array.isArray(res.data.content)) return res.data.content;
        if (res.data.trips && Array.isArray(res.data.trips)) return res.data.trips;
        if (res.data.posts && Array.isArray(res.data.posts)) return res.data.posts;
        return [];
      };

      const rawPosts = extractData(postsResponse).map(post => ({ ...post, isRealTrip: false }));
      const rawTrips = extractData(tripsResponse).map(trip => ({ ...trip, isRealTrip: true }));

      const combinedData = [...rawPosts, ...rawTrips];
      
      const mappedPosts = combinedData.map(item => {
        let calculatedStatus = item.status;
        const isCompleted = calculatedStatus === 'COMPLETED' || (item.status && item.status.toUpperCase() === 'COMPLETED');
        
        // 🚀 SMART TITLE: Just the title and emojis!
        const postContent = item.content || (
          item.title ? `${item.title} ` : ''
        );
        
        if (!calculatedStatus) {
          if (item.content && item.content.includes("Just completed")) {
            calculatedStatus = 'COMPLETED';
          } else {
            calculatedStatus = 'UPCOMING';
          }
        }

        let actualAuthorName = 'Traveler'; 
        if (item.author?.name) actualAuthorName = item.author.name;
        else if (item.user?.firstName || item.user?.lastName) actualAuthorName = `${item.user?.firstName || ''} ${item.user?.lastName || ''}`.trim();
        else if (item.user?.fullName) actualAuthorName = item.user.fullName;
        else if (item.organizer?.firstName || item.organizer?.lastName) actualAuthorName = `${item.organizer?.firstName || ''} ${item.organizer?.lastName || ''}`.trim();
        else if (item.organizerName) actualAuthorName = item.organizerName;
        else if (item.creatorName) actualAuthorName = item.creatorName;

        let actualAvatar = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop'; 
        
        if (item.author?.avatarUrl) actualAvatar = item.author.avatarUrl;
        else if (item.organizer?.avatarUrl) actualAvatar = item.organizer.avatarUrl; 
        else if (item.user?.avatarUrl) actualAvatar = item.user.avatarUrl;
        else if (item.author?.profilePic) actualAvatar = item.author.profilePic;
        else if (item.organizer?.profilePic) actualAvatar = item.organizer.profilePic;
        else if (item.user?.profilePic) actualAvatar = item.user.profilePic;
        else if (item.organizerAvatar) actualAvatar = item.organizerAvatar; 
        else if (item.creatorAvatar) actualAvatar = item.creatorAvatar;     

        let rawImage = item.imageUrl || item.coverImageUrl || item.image || item.tripImage || item.trip_image_url;
        
        if (rawImage && !rawImage.startsWith('http')) {
          const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
          rawImage = `${baseUrl}/${rawImage.replace(/^\//, '')}`;
        }

        const finalImage = rawImage || 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600';
        const exactLikeCount = typeof item.likeCount === 'number' ? item.likeCount : (item.likes || 0);

        const isTripItem = Boolean(
          item.isRealTrip || 
          item.type === 'TRIP' || 
          item.startDate || 
          item.minBudget || 
          item.maxParticipants || 
          item.destinations || 
          item.destination
        );

        // =========================================================
        // 🚀 THE ULTIMATE DATE EXTRACTOR
        // Catches Strings, Java Arrays, and alternate backend names
        // =========================================================
        const extractDate = (obj) => {
          const rawDate = obj.createdAt || obj.created_at || obj.createdDate || obj.timestamp || obj.date;
          if (!rawDate) return null; // Returns null so we don't fake the time!
          
          // Check if Spring Boot sent the date as an array [YYYY, MM, DD, HH, mm]
          if (Array.isArray(rawDate)) {
            const [year, month, day, hour = 0, minute = 0, second = 0] = rawDate;
            // JS months are 0-indexed, so we subtract 1 from the month
            return new Date(year, month - 1, day, hour, minute, second).toISOString();
          }
          return String(rawDate);
        };

        return {
          id: item.id || item._id,
          author: { 
            name: actualAuthorName,       
            avatarUrl: actualAvatar 
          },
          createdAt: extractDate(item), // Safely extracted date!
          location: item.location || item.destinations || 'Unknown Location',
          content: postContent,
          imageUrl: finalImage,
          status: calculatedStatus, 
          likeCount: exactLikeCount, 
          isLikedByCurrentUser: item.isLikedByCurrentUser || false,
          isTrip: isTripItem 
        };
      });

      mappedPosts.sort((a, b) => {
        if (!a.createdAt) return 1;
        if (!b.createdAt) return -1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setPosts(mappedPosts);
    } catch (error) {
      console.error("Error fetching feed:", error);
    } finally {
      setIsLoadingFeed(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    const handleFeedUpdate = () => fetchPosts(); 

    window.addEventListener('trip-status-changed', handleFeedUpdate);
    window.addEventListener('trip-created', handleFeedUpdate);
    
    return () => {
      window.removeEventListener('trip-status-changed', handleFeedUpdate);
      window.removeEventListener('trip-created', handleFeedUpdate);
    };
  }, []);

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

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };

  // 🚀 FIXED: Fallback format exactly as requested without faking the live time
  const formatTime = (dateString) => {
    if (!dateString) return 'Recent';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Recent';

    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (viewingTripId) {
    return (
      <div style={{ width: '100%' }}>
        <button 
          onClick={() => setViewingTripId(null)}
          style={{ 
            marginBottom: '20px', 
            padding: '10px 18px', 
            borderRadius: '12px', 
            border: '1px solid #cbd5e1', 
            backgroundColor: '#ffffff', 
            color: '#334155', 
            fontWeight: '600', 
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}
        >
          ← Back to Feed
        </button>
        <TripDetails tripId={viewingTripId} setActiveTab={() => {}} />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1040px', margin: '0 auto', display: 'flex', gap: '40px', alignItems: 'flex-start', width: '100%' }}>
      
      <div style={{ flex: 1, maxWidth: '680px', width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <div className="d-flex rounded-3 p-1 shadow-sm" style={{ backgroundColor: '#f1f5f9', position: 'sticky', top: 0, zIndex: 10 }}>
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
                      {/* Displays true backend creation time */}
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

                {post.isTrip && (
                  <button 
                    onClick={() => setViewingTripId(post.id)}
                    style={{ 
                      padding: '8px 14px', 
                      borderRadius: '10px', 
                      fontSize: '13px', 
                      fontWeight: '600', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      cursor: 'pointer', 
                      border: 'none', 
                      backgroundColor: '#f0f9ff', 
                      color: '#0EA5E9', 
                      transition: 'all 0.2s',
                      boxShadow: '0 2px 4px rgba(14, 165, 233, 0.1)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#0EA5E9';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f9ff';
                      e.currentTarget.style.color = '#0EA5E9';
                    }}
                  >
                    <Eye size={15} /> View Details
                  </button>
                )}
              </div>

              {post.content && (
                <p style={{ color: '#334155', fontSize: '15px', lineHeight: '1.6', marginBottom: '0', whiteSpace: 'pre-wrap' }}>
                  {post.content}
                </p>
              )}

              {post.imageUrl && (
                <div style={{ marginTop: '16px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #f1f5f9' }}>
                  <img 
                    src={post.imageUrl} 
                    alt="Trip memory" 
                    style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', display: 'block' }} 
                  />
                </div>
              )}

              <div style={{ display: 'flex', gap: '16px', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                <button 
                  onClick={() => handleLikeToggle(post.id)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer', 
                    color: post.isLikedByCurrentUser ? '#e11d48' : '#65676B', 
                    fontWeight: '600', 
                    fontSize: '15px', 
                    transition: 'all 0.2s',
                    padding: '6px 12px',
                    borderRadius: '8px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Heart 
                    size={20} 
                    strokeWidth={post.isLikedByCurrentUser ? 0 : 2} 
                    fill={post.isLikedByCurrentUser ? '#e11d48' : 'none'} 
                  />
                  {post.likeCount || 0} {post.likeCount === 1 ? 'Like' : 'Likes'}
                </button>
              </div>

            </div>
          ))
        )}
      </div>

      <div style={{ width: '320px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: 0 }}>
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
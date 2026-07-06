// src/pages/Profile.jsx
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Camera, X, Check, Activity as ActivityIcon, Navigation, Image as ImageIcon } from 'lucide-react'; 
import api from '../services/api'; 

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeProfileTab, setActiveProfileTab] = useState('experiences');
  const [isLoading, setIsLoading] = useState(true); 
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const [isLocating, setIsLocating] = useState(false);

  // 🚀 UPGRADED: State to hold ALL trips, so we can split them across tabs
  const [userTrips, setUserTrips] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [isLoadingExperiences, setIsLoadingExperiences] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'Loading...', 
    email: 'Loading...',
    location: '',
    bio: '',
    avatar: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop'
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get('/api/v1/users/me'); 
        const userData = response.data;

        setProfileData((prev) => ({
          ...prev,
          name: `${userData.firstName || ''} ${userData.lastName || ''}`.trim() || userData.fullName || 'Traveler',
          email: userData.email || prev.email,
          location: userData.location || '', 
          bio: userData.bio || 'Write a short bio about your travel style...',
          avatar: userData.avatarUrl || prev.avatar, 
        }));
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchExperiences = async () => {
      setIsLoadingExperiences(true);
      try {
        const response = await api.get('/api/v1/trips/my-trips');
        let rawData = [];
        if (Array.isArray(response.data)) rawData = response.data;
        else if (response.data?.data) rawData = response.data.data;
        else if (response.data?.content) rawData = response.data.content;

        // Store all trips for the Activity and My Trips tabs
        setUserTrips(rawData);

        // Filter out ONLY the completed trips for the Experiences tab
        const completedTrips = rawData.filter(trip => trip.status === 'COMPLETED');
        completedTrips.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
        
        setExperiences(completedTrips);
      } catch (err) {
        console.error("Error fetching experiences:", err);
      } finally {
        setIsLoadingExperiences(false);
      }
    };

    fetchExperiences();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); 
      const imageUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({ ...prev, avatar: imageUrl }));
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleAutoLocate = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
            const data = await res.json();
            
            const city = data.city || data.locality || "";
            const countryCode = data.countryCode || "";
            const locationString = city && countryCode ? `${city}, ${countryCode}` : "Location found!";
            
            setProfileData((prev) => ({ ...prev, location: locationString }));
          } catch (e) {
            console.error("Failed to reverse geocode location.");
            alert("Could not determine city name from GPS coordinates.");
          } finally {
            setIsLocating(false);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Location access denied or unavailable. Please type it manually.");
          setIsLocating(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setIsLocating(false);
    }
  };

  const handleSave = async () => {
    try {
      let finalAvatarUrl = profileData.avatar;

      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);
        
        const IMGBB_API_KEY = "e339fa4d4951e3f50756427d383d12a5"; 
        
        const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: "POST",
          body: formData,
        });
        
        const imgbbData = await imgbbResponse.json();
        
        if (imgbbData.success) {
          finalAvatarUrl = imgbbData.data.url; 
        } else {
          throw new Error("Failed to upload image to CDN");
        }
      }

      const payload = {
        bio: profileData.bio,
        location: profileData.location,
        avatarUrl: finalAvatarUrl
      };

      const response = await api.put('/api/v1/users/me', payload);
      const updatedUser = response.data;
      
      const newAvatarToUse = updatedUser.avatarUrl || finalAvatarUrl;

      setProfileData((prev) => ({
        ...prev,
        location: updatedUser.location || prev.location,
        bio: updatedUser.bio || prev.bio,
        avatar: newAvatarToUse
      }));

      const userString = localStorage.getItem('user');
      if (userString) {
        const localUser = JSON.parse(userString);
        localUser.profilePic = newAvatarToUse; 
        localUser.avatarUrl = newAvatarToUse;
        localStorage.setItem('user', JSON.stringify(localUser));
      }
      
      setSelectedFile(null); 
      setIsEditing(false);
      
      alert("Profile updated successfully!");
      window.location.reload();
      
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save changes. Check the console for details!");
    }
  };

  const getTabStyle = (tabName) => {
    const isActive = activeProfileTab === tabName;
    return {
      flex: 1,
      padding: '12px',
      border: 'none',
      background: isActive ? '#ffffff' : 'transparent',
      color: isActive ? '#0f172a' : '#64748b',
      fontWeight: isActive ? 'bold' : '500',
      borderRadius: '12px',
      boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    };
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading profile...</div>;
  }

  if (isEditing) {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif', color: '#0f172a' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Edit Profile</h2>
            <button 
              onClick={() => setIsEditing(false)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <X size={20} /> Cancel
            </button>
          </div>

          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                <img 
                  src={profileData.avatar} 
                  alt="Profile" 
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', opacity: '0.7' }} 
                />
                <button 
                  onClick={handleCameraClick}
                  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#0EA5E9', color: '#fff', border: 'none', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(14, 165, 233, 0.3)' }}
                >
                  <Camera size={24} />
                </button>
                <input 
                  type="file" 
                  accept="image/*" 
                  ref={fileInputRef} 
                  onChange={handleImageChange} 
                  style={{ display: 'none' }} 
                />
              </div>
              <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>Change Photo</span>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#334155', marginBottom: '8px' }}>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', backgroundColor: '#f8fafc' }} 
                  disabled
                />
                <span style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px', display: 'block' }}>Name updates must go through account settings.</span>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#334155', marginBottom: '8px' }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', backgroundColor: '#f8fafc' }} 
                  disabled
                />
                <span style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px', display: 'block' }}>Email cannot be changed.</span>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#334155', marginBottom: '8px' }}>Home Location</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <MapPin size={18} style={{ position: 'absolute', left: '14px', color: '#94a3b8' }} />
                  <input 
                    type="text" 
                    name="location"
                    list="suggested-locations"
                    value={profileData.location}
                    onChange={handleChange}
                    placeholder="e.g. Colombo, LK"
                    style={{ width: '100%', padding: '12px 110px 12px 42px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', transition: 'border-color 0.2s' }} 
                    onFocus={(e) => e.target.style.borderColor = '#0EA5E9'}
                    onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                  />
                  <button
                    type="button"
                    onClick={handleAutoLocate}
                    disabled={isLocating}
                    style={{ 
                      position: 'absolute', 
                      right: '6px', 
                      padding: '8px 12px', 
                      backgroundColor: '#f0f9ff', 
                      color: '#0EA5E9', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontSize: '12px', 
                      fontWeight: 'bold', 
                      cursor: isLocating ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => { if(!isLocating) e.currentTarget.style.backgroundColor = '#e0f2fe' }}
                    onMouseOut={(e) => { if(!isLocating) e.currentTarget.style.backgroundColor = '#f0f9ff' }}
                  >
                    {isLocating ? 'Locating...' : <><Navigation size={14} /> Locate Me</>}
                  </button>
                </div>
                <datalist id="suggested-locations">
                  <option value="Colombo, LK" />
                  <option value="Kandy, LK" />
                  <option value="Galle, LK" />
                  <option value="Nuwara Eliya, LK" />
                  <option value="Jaffna, LK" />
                  <option value="Gampaha, LK" />
                </datalist>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#334155', marginBottom: '8px' }}>Bio</label>
                <textarea 
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  placeholder="Avid traveler looking for my next adventure..."
                  rows="4"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', resize: 'none' }} 
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button 
                  onClick={handleSave}
                  style={{ backgroundColor: '#0EA5E9', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 24px', fontSize: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(14, 165, 233, 0.2)' }}
                >
                  <Check size={18} /> {selectedFile ? "Uploading & Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif', color: '#0f172a' }}>
      
      <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9', position: 'relative' }}>
        
        <button 
          onClick={() => setIsEditing(true)}
          style={{ position: 'absolute', top: '40px', right: '40px', backgroundColor: '#0EA5E9', color: '#ffffff', border: 'none', borderRadius: '24px', padding: '10px 20px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 4px rgba(14, 165, 233, 0.2)' }}
        >
          Edit Profile
        </button>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '150px', height: '150px' }}>
            <img 
              src={profileData.avatar} 
              alt="Profile" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', bottom: '5px', right: '5px', backgroundColor: '#0EA5E9', color: '#fff', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #fff' }}>
              <Camera size={16} />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>{profileData.name}</h1>
              <span style={{ backgroundColor: '#0EA5E9', color: '#fff', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={12} /> Verified
              </span>
            </div>
            
            <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '15px' }}>{profileData.email}</p>
            
            <div style={{ display: 'flex', gap: '24px', color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={16} /> {profileData.location || "Location not set"}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> Joined January 2026</div>
            </div>

            <p style={{ margin: 0, color: '#334155', lineHeight: '1.6' }}>{profileData.bio}</p>
          </div>
        </div>

      </div>

      <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', marginTop: '24px', padding: '24px', border: '1px solid #f1f5f9' }}>
        
        <div style={{ display: 'flex', backgroundColor: '#f8fafc', padding: '8px', borderRadius: '16px', marginBottom: '24px' }}>
          <button onClick={() => setActiveProfileTab('my-trips')} style={getTabStyle('my-trips')}>My Trips</button>
          <button onClick={() => setActiveProfileTab('experiences')} style={getTabStyle('experiences')}>Experiences</button>
          <button onClick={() => setActiveProfileTab('activity')} style={getTabStyle('activity')}>Activity</button>
        </div>
        
        <div>
          {/* EXPERIENCES TAB */}
          {activeProfileTab === 'experiences' && (
            <div>
              {isLoadingExperiences ? (
                <p style={{ textAlign: 'center', color: '#64748b', padding: '20px' }}>Loading your adventures...</p>
              ) : experiences.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
                  <ImageIcon size={48} color="#cbd5e1" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ margin: '0 0 8px 0', color: '#334155', fontSize: '18px' }}>No Experiences Yet</h3>
                  <p style={{ margin: 0 }}>Complete a trip to see your memories appear here!</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {experiences.map(trip => (
                    <div key={trip.id || trip._id} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '32px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div>
                          <h4 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: 'bold', color: '#0f172a' }}>{trip.title}</h4>
                          <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#64748b' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {trip.destinations || trip.destination}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {trip.endDate}</span>
                          </div>
                        </div>
                      </div>
                      <p style={{ color: '#334155', lineHeight: '1.6', marginBottom: '16px', fontSize: '15px' }}>
                        {trip.description || `Just completed an amazing trip to ${trip.destinations || trip.destination}!`}
                      </p>
                      <div style={{ height: '350px', backgroundColor: '#e2e8f0', borderRadius: '16px', overflow: 'hidden' }}>
                        <img 
                          src={trip.imageUrl || trip.coverImageUrl || "https://images.unsplash.com/photo-1546708973-b339540b5162?w=800"} 
                          alt={trip.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 🚀 UPGRADED MY TRIPS TAB: Shows active/upcoming trips! */}
          {activeProfileTab === 'my-trips' && (
            <div>
              {isLoadingExperiences ? (
                <p style={{ textAlign: 'center', color: '#64748b', padding: '20px' }}>Loading trips...</p>
              ) : userTrips.filter(t => t.status !== 'COMPLETED').length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
                  <MapPin size={48} color="#cbd5e1" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ margin: '0 0 8px 0', color: '#334155', fontSize: '18px' }}>No Active Trips</h3>
                  <p style={{ margin: 0 }}>You don't have any upcoming trips. Head over to Discover to start planning!</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                  {userTrips.filter(t => t.status !== 'COMPLETED').map(trip => (
                    <div key={trip.id || trip._id} style={{ padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                        <img src={trip.imageUrl || trip.coverImageUrl || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150"} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div>
                        <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }}>{trip.title}</h4>
                        <div style={{ fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={14} /> {trip.startDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 🚀 UPGRADED ACTIVITY TAB: Dynamically builds a timeline from trips! */}
          {activeProfileTab === 'activity' && (
            <div>
              {isLoadingExperiences ? (
                <p style={{ textAlign: 'center', color: '#64748b', padding: '20px' }}>Loading activity...</p>
              ) : userTrips.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
                  <ActivityIcon size={48} color="#cbd5e1" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ margin: '0 0 8px 0', color: '#334155', fontSize: '18px' }}>No Recent Activity</h3>
                  <p style={{ margin: 0 }}>Join a trip or share an experience to see your activity here.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingLeft: '8px', borderLeft: '2px solid #e2e8f0', marginLeft: '16px' }}>
                  {userTrips.slice(0, 8).map((trip, idx) => {
                    const isCompleted = trip.status === 'COMPLETED';
                    const actionText = isCompleted ? "Completed an adventure" : (trip.isOrganizer ? "Started planning" : "Joined a trip");
                    const iconColor = isCompleted ? "#8b5cf6" : (trip.isOrganizer ? "#10B981" : "#0EA5E9");
                    
                    return (
                      <div key={idx} style={{ position: 'relative', paddingLeft: '24px' }}>
                        {/* Timeline dot */}
                        <div style={{ position: 'absolute', left: '-35px', top: '0', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: iconColor, border: '4px solid #fff' }}></div>
                        <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                          <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#64748b' }}>{actionText}</p>
                          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }}>{trip.title}</h4>
                          <span style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginTop: '8px' }}>
                            {trip.createdAt ? new Date(trip.createdAt).toLocaleDateString() : 'Recently'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Camera, X, Check, Activity as ActivityIcon } from 'lucide-react';
import api from '../services/api'; 

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeProfileTab, setActiveProfileTab] = useState('experiences');
  const [isLoading, setIsLoading] = useState(true); 
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

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
          location: userData.location || 'Add your location...',
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

  // 🚀 UPDATED SAVE FUNCTION
  const handleSave = async () => {
    try {
      let finalAvatarUrl = profileData.avatar;

      // STEP 1: Upload to ImgBB
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

      // STEP 2: Send payload to backend
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

      // 🚀 STEP 3: UPDATE LOCAL STORAGE SO DASHBOARD TOP BAR CAN SEE IT!
      const userString = localStorage.getItem('user');
      if (userString) {
        const localUser = JSON.parse(userString);
        localUser.profilePic = newAvatarToUse; // Update the exact variable the Dashboard looks for
        localUser.avatarUrl = newAvatarToUse;
        localStorage.setItem('user', JSON.stringify(localUser));
      }
      
      setSelectedFile(null); 
      setIsEditing(false);
      
      alert("Profile updated successfully!");
      
      // 🚀 STEP 4: FORCE REFRESH TO INSTANTLY UPDATE THE TOP BAR
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
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#334155', marginBottom: '8px' }}>Location</label>
                <input 
                  type="text" 
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                  placeholder="e.g. Colombo, SL"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px' }} 
                />
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {profileData.location}</div>
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
          {activeProfileTab === 'experiences' && (
            <div>
              <p style={{ color: '#334155', lineHeight: '1.6', marginBottom: '16px' }}>Just witnessed the most breathtaking sunrise at Ella Rock! The hike was challenging but absolutely worth it.</p>
              <div style={{ height: '300px', backgroundColor: '#e2e8f0', borderRadius: '16px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?w=800&q=80" alt="Ella Rock" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          )}

          {activeProfileTab === 'my-trips' && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
              <MapPin size={48} color="#cbd5e1" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ margin: '0 0 8px 0', color: '#334155', fontSize: '18px' }}>No Trips Yet</h3>
              <p style={{ margin: 0 }}>You haven't created any trips. Head over to Discover to start planning!</p>
            </div>
          )}

          {activeProfileTab === 'activity' && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
              <ActivityIcon size={48} color="#cbd5e1" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ margin: '0 0 8px 0', color: '#334155', fontSize: '18px' }}>No Recent Activity</h3>
              <p style={{ margin: 0 }}>Join a trip or share an experience to see your activity here.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
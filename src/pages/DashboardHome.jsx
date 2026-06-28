// src/pages/DashboardHome.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon, Send, MapPin, MoreHorizontal, Heart, MessageCircle } from 'lucide-react';
import api from '../services/api';

export default function DashboardHome() {
  const [newPostText, setNewPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoadingFeed, setIsLoadingFeed] = useState(true);
  const fileInputRef = useRef(null);

  const fetchPosts = async () => {
    try {
      const response = await api.get('/api/v1/posts');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching feed:", error);
    } finally {
      setIsLoadingFeed(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handlePostSubmit = async () => {
    if (!newPostText.trim() && !selectedImage) return;

    setIsUploading(true);
    try {
      let uploadedImageUrl = null;

      if (selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage);
        
        // 🛑 PASTE YOUR IMGBB API KEY HERE 🛑
        const IMGBB_API_KEY = "e339fa4d4951e3f50756427d383d12a5"; 
        
        const imgResponse = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: "POST",
          body: formData,
        });
        const imgData = await imgResponse.json();
        if (imgData.success) {
          uploadedImageUrl = imgData.data.url;
        } else {
          throw new Error("Failed to upload image to CDN");
        }
      }

      const payload = {
        content: newPostText,
        location: 'Sri Lanka', 
        imageUrl: uploadedImageUrl
      };

      await api.post('/api/v1/posts', payload);
      await fetchPosts();
      
      setNewPostText('');
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to post:", error);
      alert("Failed to create post. Check the console.");
    } finally {
      setIsUploading(false);
    }
  };

  // 🚀 NEW: The Like Toggle Function with Optimistic UI!
  const handleLikeToggle = async (postId, currentLikeState) => {
    // 1. Optimistically update the UI instantly for a snappy feel
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLikedByCurrentUser: !currentLikeState,
          likeCount: currentLikeState ? (post.likeCount - 1) : (post.likeCount + 1)
        };
      }
      return post;
    }));

    // 2. Fire the toggle request to Methsara's backend
    try {
      await api.post(`/api/v1/posts/${postId}/like`);
    } catch (error) {
      console.error("Failed to toggle like:", error);
      // If it fails, silently revert the UI by re-fetching the real data
      fetchPosts(); 
    }
  };

  const formatTime = (dateString) => {
    if (!dateString) return 'Just now';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      
      {/* LEFT COLUMN: The Scrolling Feed */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Create Post Input Area */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
          <textarea 
            placeholder="Share your travel experience..." 
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            style={{ width: '100%', border: 'none', outline: 'none', resize: 'none', minHeight: '60px', fontSize: '15px', color: '#334155', marginBottom: '12px' }}
          />
          
          {selectedImage && (
            <div style={{ position: 'relative', marginBottom: '16px', display: 'inline-block' }}>
              <img src={URL.createObjectURL(selectedImage)} alt="Preview" style={{ height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
              <button onClick={() => setSelectedImage(null)} style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', fontSize: '12px' }}>✕</button>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
            <div>
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageSelect} style={{ display: 'none' }} />
              <button onClick={() => fileInputRef.current.click()} style={{ background: 'none', border: 'none', color: '#0EA5E9', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: '500', fontSize: '14px' }}>
                <ImageIcon size={18} /> Add Photo
              </button>
            </div>
            
            <button 
              onClick={handlePostSubmit}
              disabled={isUploading || (!newPostText.trim() && !selectedImage)}
              style={{ backgroundColor: '#0EA5E9', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', cursor: isUploading ? 'not-allowed' : 'pointer', opacity: isUploading ? 0.7 : 1 }}
            >
              {isUploading ? 'Posting...' : <><Send size={16} /> Post</>}
            </button>
          </div>
        </div>

        {/* The Posts List */}
        {isLoadingFeed ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Loading feed...</div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>No posts yet. Be the first to share an experience!</div>
        ) : (
          posts.map(post => (
            <div key={post.id} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <img 
                    src={post.author?.avatarUrl || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop'} 
                    alt={post.author?.name || 'Traveler'} 
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }}>{post.author?.name || 'Traveler'}</h4>
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
                <button style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {post.content && (
                <p style={{ color: '#334155', fontSize: '15px', lineHeight: '1.6', marginBottom: post.imageUrl ? '16px' : '0', whiteSpace: 'pre-wrap' }}>
                  {post.content}
                </p>
              )}

              {post.imageUrl && (
                <div style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
                  <img src={post.imageUrl} alt="Travel moment" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', display: 'block' }} />
                </div>
              )}

              {/* 🚀 NEW: Action Bar for Likes and Comments */}
              <div style={{ display: 'flex', gap: '24px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                <button 
                  onClick={() => handleLikeToggle(post.id, post.isLikedByCurrentUser)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer', 
                    color: post.isLikedByCurrentUser ? '#ef4444' : '#64748b', 
                    fontWeight: '500', 
                    fontSize: '14px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Heart size={20} fill={post.isLikedByCurrentUser ? '#ef4444' : 'none'} color={post.isLikedByCurrentUser ? '#ef4444' : '#64748b'} />
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

      {/* RIGHT COLUMN: Widgets */}
      <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ backgroundColor: '#00A3E1', color: '#ffffff', padding: '24px', borderRadius: '24px' }}>
          <span style={{ fontSize: '14px', opacity: 0.9 }}>Colombo, Sri Lanka</span>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', margin: '4px 0' }}>28°C</h2>
          <p style={{ fontSize: '13px', margin: 0 }}>Partly Cloudy</p>
        </div>
      </div>

    </div>
  );
}
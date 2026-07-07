// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Heart, Users, Map, Bell, CreditCard, Compass } from 'lucide-react'; 
import api from '../services/api';

import topBarBg from '../assets/Top bar image.svg';
import logo from '../assets/Full size logo.svg';
import heroBg from '../assets/hero-bg.jpg';

export default function Home() {
  const navigate = useNavigate();
  
  const [popularPosts, setPopularPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🚀 FETCH DYNAMIC POPULAR POSTS (STRICTLY LIVE DATA)
  useEffect(() => {
    const fetchTopPosts = async () => {
      try {
        const response = await api.get('/api/v1/posts/public/trending');
        
        let rawData = Array.isArray(response.data) ? response.data : (response.data?.data || response.data?.content || []);
        
        const sorted = rawData.sort((a, b) => (b.likeCount || b.likes || 0) - (a.likeCount || a.likes || 0)).slice(0, 3);
        
        const mapped = sorted.map(post => {
          let rawImg = post.imageUrl || post.coverImageUrl || post.image;
          if (rawImg && !rawImg.startsWith('http')) {
            const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
            rawImg = `${baseUrl}/${rawImg.replace(/^\//, '')}`;
          }

          return {
            name: post.location || post.destinations || post.title || 'Beautiful Destination',
            likes: post.likeCount || post.likes || 0,
            image: rawImg || 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600'
          };
        });

        setPopularPosts(mapped);
      } catch (error) {
        // 🚀 THE FIX: Removed all hardcoded fallback data. If it fails, it stays empty!
        console.error("Failed to load live trending posts:", error);
        setPopularPosts([]); 
      } finally {
        setIsLoading(false);
      }
    };
    fetchTopPosts();
  }, []);

  // 🚀 THE SCROLL REVEAL ENGINE
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: "0px 0px -50px 0px" 
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [popularPosts]); 

  return (
    <div className="min-vh-100 d-flex flex-column bg-white" style={{ overflowX: 'hidden' }}>
      
      {/* 🚀 ANIMATION CSS STYLES */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes cinematicZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
          }
          @keyframes softPulse {
            0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5); }
            70% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
          }
          .animate-fade-up {
            opacity: 0;
            animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .reveal {
            opacity: 0;
            transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .reveal.active {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          .reveal-up { transform: translateY(50px); }
          .reveal-left { transform: translateX(-50px); }
          .reveal-right { transform: translateX(50px); }
          .reveal-scale { transform: scale(0.85); }

          .hover-lift {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          }
          .hover-lift:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px -12px rgba(14, 165, 233, 0.2) !important;
          }
          .pulse-btn { animation: softPulse 2s infinite; }
          .delay-1 { transition-delay: 0.1s; animation-delay: 0.1s; }
          .delay-2 { transition-delay: 0.2s; animation-delay: 0.2s; }
          .delay-3 { transition-delay: 0.3s; animation-delay: 0.3s; }
          .delay-4 { transition-delay: 0.4s; animation-delay: 0.4s; }
        `}
      </style>

      {/* HEADER */}
      <header style={{
        backgroundImage: `url(${topBarBg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '12px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1020,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', width: '120px', justifyContent: 'center' }}>
          <img src={logo} alt="GoOut Logo" style={{ height: '60px', width: '100%', objectFit: 'contain', transform: 'scale(3.7)' }} />
        </Link>
        <div className="d-flex gap-3">
          <button 
            className="btn px-4 fw-bold rounded-pill" 
            style={{ color: '#0EA5E9', border: '2px solid #0EA5E9', backgroundColor: 'transparent', transition: 'all 0.2s' }}
            onMouseOver={(e) => { e.target.style.backgroundColor = '#f0f9ff'; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; }}
            onClick={() => navigate('/login')}
          >
            Log In
          </button>
          <button 
            className="btn text-white px-4 fw-bold rounded-pill shadow-sm hover-lift" 
            style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #17B0B2 100%)', border: 'none' }}
            onClick={() => navigate('/login')}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
     {/* HERO SECTION (Loads Instantly) */}
      <section style={{ position: 'relative', height: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          // 🚀 CHANGED: Using your local image variable instead of the URL
          backgroundImage: `url(${heroBg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'cinematicZoom 25s alternate infinite ease-in-out',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(14, 165, 233, 0.6) 100%)',
          zIndex: 1
        }}></div>

        <div className="container text-center text-white z-2 px-3">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span className="badge bg-white text-primary mb-4 px-3 py-2 rounded-pill animate-fade-up fw-bold shadow-sm" style={{ letterSpacing: '1px' }}>
            THE #1 TRAVEL APP IN SRI LANKA
            </span>
            <h1 className="display-2 fw-bold mb-4 animate-fade-up delay-1" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              Explore Sri Lanka Together.
            </h1>
            <p className="lead fs-4 mb-5 opacity-90 animate-fade-up delay-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Join solo travelers and adventurous groups discovering the pearl of the Indian Ocean. Share experiences, track expenses, and make memories that last a lifetime.
            </p>
            <div className="d-flex justify-content-center gap-3 animate-fade-up delay-3">
              <button 
                className="btn btn-lg bg-white fw-bold px-5 py-3 rounded-pill hover-lift" 
                style={{ color: '#0EA5E9', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                onClick={() => navigate('/login')}
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container py-5 my-5 overflow-hidden">
        <div className="text-center mb-5 reveal reveal-up">
          <h2 className="display-5 fw-bold text-dark mb-3">Everything You Need</h2>
          <p className="text-muted fs-5">Powerful tools to make group travel effortless.</p>
        </div>
        
        <div className="row g-4">
          {[
            { title: 'Find Groups', icon: <Users size={32} color="#0EA5E9"/>, desc: 'Connect with like-minded travelers heading your way.' },
            { title: 'Share Experiences', icon: <Map size={32} color="#17B0B2"/>, desc: 'Post stories, interactive maps, and photos to the feed.' },
            { title: 'Live Updates', icon: <Bell size={32} color="#F59E0B"/>, desc: 'Instant weather tracking and community notifications.' },
            { title: 'Split Expenses', icon: <CreditCard size={32} color="#10B981"/>, desc: 'Built-in shared ledgers so nobody overpays.' }
          ].map((feature, idx) => (
            <div key={idx} className={`col-12 col-md-6 col-lg-3 reveal reveal-up delay-${idx + 1}`}>
              <div className="card h-100 border-0 p-4 bg-light-subtle rounded-4 hover-lift" style={{ transition: 'all 0.4s ease' }}>
                <div className="mb-4 bg-white shadow-sm d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '64px', height: '64px' }}>
                  {feature.icon}
                </div>
                <h4 className="fw-bold mb-3 color-dark">{feature.title}</h4>
                <p className="text-muted mb-0 lh-lg">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DYNAMIC POPULAR DESTINATIONS */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-end mb-5 reveal reveal-left">
            <div>
              <h2 className="display-6 fw-bold text-dark mb-2">Trending Right Now</h2>
              <p className="text-muted fs-5 mb-0">The most loved destinations by the GoOut community.</p>
            </div>
          </div>
          
          <div className="row g-4">
            {isLoading ? (
              <div className="text-center py-5 text-muted w-100 reveal reveal-up">Loading top destinations...</div>
            ) : popularPosts.length === 0 ? (
              <div className="text-center py-5 w-100 reveal reveal-up" style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
                <Compass size={48} color="#cbd5e1" style={{ marginBottom: '16px' }} />
                <h4 className="fw-bold text-dark">No trending trips right now!</h4>
                <p className="text-muted mb-0">Be the first to share an amazing adventure with the community.</p>
              </div>
            ) : (
              popularPosts.map((dest, idx) => (
                <div key={idx} className={`col-12 col-md-4 reveal reveal-scale delay-${idx + 1}`}>
                  <div 
                    className="position-relative rounded-4 overflow-hidden hover-lift shadow" 
                    style={{ height: '350px', cursor: 'pointer' }}
                  >
                    <img src={dest.image} alt={dest.name} className="w-100 h-100 object-fit-cover" style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} onMouseOver={(e)=>e.target.style.transform='scale(1.15)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'} />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.85))', pointerEvents: 'none' }}></div>
                    <div className="position-absolute bottom-0 start-0 p-4 w-100 pointer-events-none">
                      <div className="d-flex justify-content-between align-items-end">
                        <h3 className="text-white fw-bold mb-0" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{dest.name}</h3>
                        <span className="badge bg-white text-danger fw-bold shadow-sm d-flex align-items-center gap-1 px-3 py-2 rounded-pill" style={{ fontSize: '14px' }}>
                          <Heart size={16} fill="currentColor" /> {dest.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section 
        className="text-white text-center py-5 px-3 position-relative overflow-hidden" 
        style={{ background: 'linear-gradient(135deg, #17B0B2 0%, #8ADD63 100%)' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', opacity: 0.5 }}></div>
        <div className="py-5 position-relative z-1 reveal reveal-up">
          <h2 className="display-4 fw-bold mb-3" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Ready to Start Your Adventure?</h2>
          <p className="fs-5 mb-5 opacity-90 delay-1">Join thousands of travelers exploring Sri Lanka together</p>
          <button 
            className="btn bg-white fw-bold btn-lg px-5 py-3 rounded-pill pulse-btn delay-2" 
            style={{ color: '#17B0B2', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }} 
            onClick={() => navigate('/login')}
          >
            Create Your Free Account
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white py-5 px-4 mt-auto overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-4 pe-md-5 reveal reveal-up">
              <h5 className="text-white fw-bold mb-3 d-flex align-items-center gap-2">
                <img src={logo} alt="GoOut Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
              </h5>
              <p className="text-white opacity-50 lh-lg">The premier social platform connecting solo travelers, families, and friends to explore the beauty of Sri Lanka without the stress of planning alone.</p>
            </div>
            <div className="col-6 col-md-2 offset-md-2 reveal reveal-left delay-1">
              <h6 className="text-white fw-bold mb-4 text-uppercase small tracking-wider opacity-75">Platform</h6>
              <ul className="list-unstyled d-flex flex-column gap-3 small">
                <li><span className="text-white text-decoration-none opacity-50 hover-lift" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Discover Trips</span></li>
                <li><span className="text-white text-decoration-none opacity-50 hover-lift" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>My Dashboard</span></li>
                <li><span className="text-white text-decoration-none opacity-50 hover-lift" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Create a Trip</span></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 reveal reveal-left delay-2">
              <h6 className="text-white fw-bold mb-4 text-uppercase small tracking-wider opacity-75">Company</h6>
              <ul className="list-unstyled d-flex flex-column gap-3 small">
                <li><span className="text-white opacity-50 hover-lift" style={{ cursor: 'pointer' }}>About Us</span></li>
                <li><span className="text-white opacity-50 hover-lift" style={{ cursor: 'pointer' }}>Contact Support</span></li>
                <li><span className="text-white opacity-50 hover-lift" style={{ cursor: 'pointer' }}>Careers</span></li>
              </ul>
            </div>
            <div className="col-12 col-md-2 reveal reveal-left delay-3">
              <h6 className="text-white fw-bold mb-4 text-uppercase small tracking-wider opacity-75">Legal</h6>
              <ul className="list-unstyled d-flex flex-column gap-3 small">
                <li><span className="text-white opacity-50 hover-lift" style={{ cursor: 'pointer' }}>Privacy Policy</span></li>
                <li><span className="text-white opacity-50 hover-lift" style={{ cursor: 'pointer' }}>Terms of Service</span></li>
              </ul>
            </div>
          </div>
          <hr className="border-white opacity-10 my-4 reveal reveal-up" />
          <div className="text-center small text-white opacity-50 reveal reveal-up">
            © 2026 GoOut. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
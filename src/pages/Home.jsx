// src/pages/Home.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

// 🚀 THE FIX 1: Import the exact header assets you use in the Dashboard
import topBarBg from '../assets/Top bar image.svg';
import logo from '../assets/Full size logo.svg';

function Home() {
  const navigate = useNavigate();

  const popularDestinations = [
    { name: 'Ella', activeTrips: 24, image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600&auto=format&fit=crop&q=80' },
    { name: 'Sigiriya', activeTrips: 18, image: 'https://images.unsplash.com/photo-1588598126710-53bc7f9273c0?w=600&auto=format&fit=crop&q=80' },
    { name: 'Mirissa', activeTrips: 32, image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80' }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      
      {/* 🚀 THE FIX 2: Replaced the standard navbar with your Dashboard Header layout */}
      <header style={{
        backgroundImage: `url(${topBarBg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid #f1f5f9',
        padding: '10px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1020
      }}>
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            width: '120px', 
            justifyContent: 'center' 
          }}
        >
          <img 
            src={logo} 
            alt="GoOut Logo" 
            style={{ 
              height: '60px', 
              width: '100%', 
              objectFit: 'contain',
              transform: 'scale(3.7)' 
            }} 
          />
        </Link>
        <div className="d-flex gap-3">
          <button 
            className="btn btn-outline-primary px-4 fw-bold rounded-3 bg-white" 
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button 
            className="btn text-white px-4 fw-bold rounded-3 shadow-sm" 
            style={{ backgroundColor: '#0EA5E9', border: 'none' }}
            onClick={() => navigate('/login')}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="text-white text-center d-flex align-items-center justify-content-center px-3"
        style={{
          background: `linear-gradient(rgba(14, 165, 233, 0.45), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <h1 className="display-3 fw-bold mb-3">Explore Sri Lanka Together</h1>
          <p className="lead fs-4 mb-4 opacity-90">
            Join solo travelers and groups discovering the pearl of the Indian Ocean. Share experiences, track expenses, and make memories.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button 
              className="btn btn-white btn-lg bg-white text-primary fw-bold px-4 shadow rounded-3 border-0" 
              onClick={() => navigate('/login')}
            >
              Get Started
            </button>
            <button 
              className="btn btn-outline-light btn-lg px-4 rounded-3" 
              onClick={() => navigate('/login')}
            >
              Discover Trips
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="container text-center py-5 my-4">
        <h2 className="fw-bold text-dark mb-5">Everything You Need for Group Travel</h2>
        <div className="row g-4">
          
          <div className="col-12 col-md-3">
            <div className="card h-100 border-0 p-4 shadow-sm bg-light-subtle rounded-4">
              <h5 className="fw-bold mb-2">Find Travel Groups</h5>
              <p className="text-muted small mb-0">Connect with like-minded travelers and join groups exploring Sri Lanka together.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card h-100 border-0 p-4 shadow-sm bg-light-subtle rounded-4">
              <h5 className="fw-bold mb-2">Share Experiences</h5>
              <p className="text-muted small mb-0">Post your travel stories, photos, and tips with the community.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card h-100 border-0 p-4 shadow-sm bg-light-subtle rounded-4">
              <h5 className="fw-bold mb-2">Live Travel Updates</h5>
              <p className="text-muted small mb-0">Get real-time weather, place recommendations, and travel alerts.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card h-100 border-0 p-4 shadow-sm bg-light-subtle rounded-4">
              <h5 className="fw-bold mb-2">Budget Tracking</h5>
              <p className="text-muted small mb-0">Track shared expenses and split costs seamlessly with your travel group.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center text-dark mb-5">Popular Destinations</h2>
          <div className="row g-4">
            {popularDestinations.map((dest, index) => (
              <div key={index} className="col-12 col-md-4">
                <div 
                  className="card border-0 rounded-4 shadow-sm overflow-hidden text-white d-flex align-items-end p-3 position-relative"
                  style={{
                    height: '280px',
                    background: `linear-gradient(transparent, rgba(0,0,0,0.85)), url('${dest.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="z-1">
                    <h4 className="fw-bold mb-1">{dest.name}</h4>
                    <span className="small text-warning">⭐ {dest.activeTrips} Active Trips</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 THE FIX 1: Seamless CTA Section - Removed the hard blue, added a dark glass overlay */}
      <section 
        className="text-white text-center py-5 px-3" 
        style={{ 
          /* The base is the same gradient as the footer so it matches perfectly */
          background: 'linear-gradient(135deg, #17B0B2 0%, #8ADD63 100%)',
          /* We add a subtle dark overlay so the CTA stands out from the footer links below */
          boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.1)' 
        }}
      >
        <div className="py-4">
          <h2 className="fw-bold mb-3">Ready to Start Your Adventure?</h2>
          <p className="fs-5 mb-4 opacity-90">Join thousands of travelers exploring Sri Lanka together</p>
          <button 
            className="btn btn-light fw-bold btn-lg px-5 shadow-sm rounded-3" 
            style={{ color: '#17B0B2' }} /* Matches the primary teal */
            onClick={() => navigate('/login')}
          >
            Join GoOut Today
          </button>
        </div>
      </section>

      {/* 🚀 THE FIX 2: Footer Layout - Matches the CTA gradient exactly without a harsh border */}
      <footer 
        className="text-white py-5 px-4 mt-auto" 
        style={{ background: 'linear-gradient(135deg, #17B0B2 0%, #8ADD63 100%)' }}
      >
        <div className="container">
          <div className="row g-4">
            
            <div className="col-12 col-md-3">
              <h5 className="text-white fw-bold mb-3 d-flex align-items-center gap-2">
                <span style={{ fontSize: '24px' }}>🌐</span> GoOut
              </h5>
              <p className="small text-white opacity-75">Connecting travelers across Sri Lanka</p>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="text-white fw-bold mb-3 text-uppercase small tracking-wider">Product</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li>
                  <span 
                    className="text-white text-decoration-none cursor-pointer opacity-75" 
                    onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.target.style.opacity = 1}
                    onMouseOut={(e) => e.target.style.opacity = 0.75}
                  >
                    Discover Trips
                  </span>
                </li>
                <li>
                  <span 
                    className="text-white text-decoration-none cursor-pointer opacity-75" 
                    onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.target.style.opacity = 1}
                    onMouseOut={(e) => e.target.style.opacity = 0.75}
                  >
                    Dashboard
                  </span>
                </li>
                <li>
                  <span 
                    className="text-white text-decoration-none cursor-pointer opacity-75" 
                    onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.target.style.opacity = 1}
                    onMouseOut={(e) => e.target.style.opacity = 0.75}
                  >
                    Create Trip
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="text-white fw-bold mb-3 text-uppercase small tracking-wider">Company</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li><span className="text-white opacity-75" style={{ cursor: 'pointer' }}>About Us</span></li>
                <li><span className="text-white opacity-75" style={{ cursor: 'pointer' }}>Contact</span></li>
                <li><span className="text-white opacity-75" style={{ cursor: 'pointer' }}>Careers</span></li>
              </ul>
            </div>

            <div className="col-12 col-md-3">
              <h6 className="text-white fw-bold mb-3 text-uppercase small tracking-wider">Legal</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li><span className="text-white opacity-75" style={{ cursor: 'pointer' }}>Privacy Policy</span></li>
                <li><span className="text-white opacity-75" style={{ cursor: 'pointer' }}>Terms of Service</span></li>
              </ul>
            </div>

          </div>

          <hr className="border-white opacity-25 my-4" />

          <div className="text-center small text-white fw-medium opacity-75">
            © 2026 GoOut. All rights reserved.
          </div>
        </div>
      </footer>

      

    </div>
  );
}

export default Home;
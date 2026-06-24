// src/pages/Home.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Popular destinations matching your Figma design cards
  const popularDestinations = [
    { name: 'Ella', activeTrips: 24, image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600&auto=format&fit=crop&q=80' },
    { name: 'Sigiriya', activeTrips: 18, image: 'https://images.unsplash.com/photo-1588598126710-53bc7f9273c0?w=600&auto=format&fit=crop&q=80' },
    { name: 'Mirissa', activeTrips: 32, image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80' }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      
      {/* 1. Header Navigation */}
      <header className="navbar navbar-light bg-white border-bottom px-4 py-3 sticky-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand text-decoration-none d-flex align-items-center gap-2" to="/">
            <span style={{ 
              color: '#0EA5E9', 
              fontWeight: '900', 
              fontSize: '24px', 
              letterSpacing: '-1px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '26px' }}>🌐</span> GoOut
            </span>
          </Link>
          <div className="d-flex gap-2">
            <button 
              className="btn btn-outline-primary px-4 fw-semibold rounded-2" 
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button 
              className="btn btn-primary px-4 fw-semibold rounded-2" 
              onClick={() => navigate('/login')}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
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

      {/* 3. Features Grid Section */}
      <section className="container text-center py-5 my-4">
        <h2 className="fw-bold text-dark mb-5">Everything You Need for Group Travel</h2>
        <div className="row g-4">
          
          <div className="col-12 col-md-3">
            <div className="card h-100 border-0 p-4 shadow-sm bg-light-subtle rounded-4">
              <div className="fs-1 text-primary mb-2">👥</div>
              <h5 className="fw-bold mb-2">Find Travel Groups</h5>
              <p className="text-muted small mb-0">Connect with like-minded travelers and join groups exploring Sri Lanka together.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card h-100 border-0 p-4 shadow-sm bg-light-subtle rounded-4">
              <div className="fs-1 text-primary mb-2">📍</div>
              <h5 className="fw-bold mb-2">Share Experiences</h5>
              <p className="text-muted small mb-0">Post your travel stories, photos, and tips with the community.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card h-100 border-0 p-4 shadow-sm bg-light-subtle rounded-4">
              <div className="fs-1 text-primary mb-2">📈</div>
              <h5 className="fw-bold mb-2">Live Travel Updates</h5>
              <p className="text-muted small mb-0">Get real-time weather, place recommendations, and travel alerts.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card h-100 border-0 p-4 shadow-sm bg-light-subtle rounded-4">
              <div className="fs-1 text-primary mb-2">👛</div>
              <h5 className="fw-bold mb-2">Budget Tracking</h5>
              <p className="text-muted small mb-0">Track shared expenses and split costs seamlessly with your travel group.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Popular Destinations Section */}
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

      {/* 5. CTA Bottom Section */}
      <section className="text-white text-center py-5 px-3" style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)' }}>
        <div className="py-4">
          <h2 className="fw-bold mb-3">Ready to Start Your Adventure?</h2>
          <p className="fs-5 mb-4 opacity-90">Join thousands of travelers exploring Sri Lanka together</p>
          <button 
            className="btn btn-light text-primary fw-bold btn-lg px-5 shadow-sm rounded-3" 
            onClick={() => navigate('/login')}
          >
            Join GoOut Today
          </button>
        </div>
      </section>

      {/* 6. Footer Layout Section */}
      <footer className="bg-dark text-white-50 py-5 px-4 mt-auto">
        <div className="container">
          <div className="row g-4">
            
            <div className="col-12 col-md-3">
              <h5 className="text-white fw-bold mb-3 d-flex align-items-center gap-2">
                <span className="text-primary">🌐</span> GoOut
              </h5>
              <p className="small text-white-50">Connecting travelers across Sri Lanka</p>
            </div>

            {/* Product Column - Now routing directly to Login */}
            <div className="col-6 col-md-3">
              <h6 className="text-white fw-bold mb-3 text-uppercase small tracking-wider">Product</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li>
                  <span 
                    className="text-white-50 text-decoration-none hover-white cursor-pointer" 
                    onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer' }}
                  >
                    Discover Trips
                  </span>
                </li>
                <li>
                  <span 
                    className="text-white-50 text-decoration-none hover-white cursor-pointer" 
                    onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer' }}
                  >
                    Dashboard
                  </span>
                </li>
                <li>
                  <span 
                    className="text-white-50 text-decoration-none hover-white cursor-pointer" 
                    onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer' }}
                  >
                    Create Trip
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="text-white fw-bold mb-3 text-uppercase small tracking-wider">Company</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li><span className="text-white-50">About Us</span></li>
                <li><span className="text-white-50">Contact</span></li>
                <li><span className="text-white-50">Careers</span></li>
              </ul>
            </div>

            <div className="col-12 col-md-3">
              <h6 className="text-white fw-bold mb-3 text-uppercase small tracking-wider">Legal</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li><span className="text-white-50">Privacy Policy</span></li>
                <li><span className="text-white-50">Terms of Service</span></li>
              </ul>
            </div>

          </div>

          <hr className="border-secondary opacity-25 my-4" />

          <div className="text-center small text-white-50">
            © 2026 GoOut. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
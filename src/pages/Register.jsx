// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    travelerType: 'Solo Traveler'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Registering user data:', formData);
    // After successful mock registration, send them to the login page
    navigate('/login');
  };

  return (
    <div className="container-fluid min-vh-100 p-0 d-flex bg-white">
      <div className="row g-0 w-100">
        
        {/* Left Side: Premium GoOut Branding Pane */}
        <div 
          className="col-12 col-md-6 d-none d-md-flex flex-column align-items-center justify-content-center text-white p-5 position-relative text-center"
          style={{
            background: `linear-gradient(135deg, rgba(14, 165, 233, 0.8), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="position-relative z-1">
            <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{ width: '80px', height: '80px' }}>
              <span className="fs-1">🌐</span>
            </div>
            <h1 className="display-4 fw-bold mb-2" style={{ letterSpacing: '-1px' }}>GoOut</h1>
            <p className="lead fs-5 opacity-90">Join the adventure today</p>
          </div>
        </div>

        {/* Right Side: Form Content Pane */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-4 p-sm-5 bg-light">
          <div className="w-100" style={{ maxWidth: '420px' }}>
            
            {/* Main Form White Card Container */}
            <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
              
              {/* Toggle Switch Tabs Header */}
              <div className="bg-light p-1 rounded-3 d-flex mb-4">
                <button 
                  type="button" 
                  className="btn btn-light text-muted flex-grow-1 py-2 fw-semibold rounded-2 border-0 small"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
                <button type="button" className="btn btn-white bg-white shadow-sm flex-grow-1 py-2 fw-semibold rounded-2 text-dark small">
                  Register
                </button>
              </div>

              {error && (
                <div className="alert alert-danger py-2 text-center small border-0 mb-3" role="alert">
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Full Name Field Container */}
                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">👤</span>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control bg-light border-start-0 ps-0"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Email Field Container */}
                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">Email</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">✉️</span>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light border-start-0 ps-0"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Password Field Container */}
                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">🔒</span>
                    <input
                      type="password"
                      name="password"
                      className="form-control bg-light border-start-0 ps-0"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Confirm Password Field Container */}
                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">🔒</span>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control bg-light border-start-0 ps-0"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Traveler Type Radio Options */}
                <div className="mb-4">
                  <label className="form-label small fw-bold text-dark d-block mb-2">I am a</label>
                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="travelerType"
                        id="soloTraveler"
                        value="Solo Traveler"
                        checked={formData.travelerType === 'Solo Traveler'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label text-secondary small fw-semibold" htmlFor="soloTraveler">
                        Solo Traveler
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="travelerType"
                        id="groupTraveler"
                        value="Group Traveler"
                        checked={formData.travelerType === 'Group Traveler'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label text-secondary small fw-semibold" htmlFor="groupTraveler">
                        Group Traveler
                      </label>
                    </div>
                  </div>
                </div>

                {/* Primary Button styled to match GoOut branding */}
                <button type="submit" className="btn w-100 py-2 fw-semibold shadow-sm mb-2 rounded-3 text-white" style={{ backgroundColor: '#0EA5E9', border: 'none' }}>
                  Create Account
                </button>
              </form>
            </div>

            {/* Terms and Privacy Footer Subtext */}
            <p className="text-center text-muted small mt-4 px-3 mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
              By continuing, you agree to our <span style={{ color: '#0EA5E9', fontWeight: '600', cursor: 'pointer' }}>Terms of Service</span> and <span style={{ color: '#0EA5E9', fontWeight: '600', cursor: 'pointer' }}>Privacy Policy</span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;
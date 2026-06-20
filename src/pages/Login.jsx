// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    console.log('Logging in with:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="container-fluid min-vh-100 p-0 d-flex bg-white">
      <div className="row g-0 w-100">
        
        {/* Left Side: Branding Banner Pane */}
        <div 
          className="col-12 col-md-6 d-none d-md-flex flex-column align-items-center justify-content-center text-white p-5 position-relative text-center"
          style={{
            background: `linear-gradient(135deg, rgba(2, 179, 155, 0.75), rgba(13, 110, 253, 0.75)), url('https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="position-relative z-1">
            {/* Compass / Location Pin SVG Placeholder */}
            <div className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{ width: '80px', height: '80px' }}>
              <span className="fs-1">🧭</span>
            </div>
            <h1 className="display-4 fw-bold mb-2">TripLink LK</h1>
            <p className="lead fs-5 opacity-90">Your journey begins here</p>
          </div>
        </div>

        {/* Right Side: Form Content Pane */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-4 p-sm-5 bg-light">
          <div className="w-100" style={{ maxWidth: '420px' }}>
            
            {/* Main Form White Card Container */}
            <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
              
              {/* Toggle Switch Tabs Header */}
              <div className="bg-light p-1 rounded-3 d-flex mb-4">
                <button type="button" className="btn btn-white bg-white shadow-sm flex-grow-1 py-2 fw-semibold rounded-2 text-dark small">
                  Login
                </button>
                <button 
                  type="button" 
                  className="btn btn-light text-muted flex-grow-1 py-2 fw-semibold rounded-2 border-0 small"
                  onClick={() => navigate('/register')}
                >
                  Register
                </button>
              </div>

              {error && (
                <div className="alert alert-danger py-2 text-center small border-0 mb-3" role="alert">
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
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
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Aux Options Checklist */}
                <div className="d-flex justify-content-between align-items-center mb-4 small">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label text-muted" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <span className="text-primary cursor-pointer fw-semibold text-decoration-none">Forgot password?</span>
                </div>

                {/* Primary Button */}
                <button type="submit" className="btn btn-primary w-100 py-2.5 fw-semibold shadow-sm mb-2 rounded-3">
                  Sign In
                </button>
              </form>
            </div>

            {/* Terms and Privacy Footer Subtext */}
            <p className="text-center text-muted small mt-4 px-3 mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
              By continuing, you agree to our <span className="text-primary text-decoration-none fw-semibold">Terms of Service</span> and <span className="text-primary text-decoration-none fw-semibold">Privacy Policy</span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
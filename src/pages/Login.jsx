// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // IMPORT YOUR AUTH CONTEXT HERE!
import logo from '../assets/logo.svg';
import loginBg from '../assets/login-bg.png';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // GRAB THE REAL LOGIN FUNCTION!
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // MAKE SURE THIS IS ASYNC NOW
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const targetEmail = formData.email.trim();
    const targetPassword = formData.password.trim();

    if (!targetEmail || !targetPassword) {
      setError('Please fill in all fields.');
      return;
    }

    // FIRE THE REAL API REQUEST!
    const result = await login(targetEmail, targetPassword);
    
    if (result.success) {
      // If the backend says OK, go to the dashboard!
      navigate('/dashboard');
    } else {
      // If the backend rejects it, show the error message from the server
      setError(result.message);
    }
  };

  return (
    <div className="container-fluid min-vh-100 p-0 d-flex bg-white">
      <div className="row g-0 w-100">
        
        {/* Left Side: Premium GoOut Branding Pane */}
        <div 
          className="col-12 col-md-6 d-none d-md-flex flex-column align-items-center justify-content-center text-white p-5 position-relative text-center"
          style={{
  background: `url(${loginBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
        >
          {/* LOGO CONTAINER: Now clickable to return to the landing page! */}
<div 
  className="position-relative z-1" 
  onClick={() => navigate('/')} 
  style={{ cursor: 'pointer', transition: 'transform 0.2s ease-in-out' }}
  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  <img 
    src={logo} 
    alt="GoOut Logo" 
    style={{ width: '600px', height: 'auto', objectFit: 'contain' }} 
  />
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
                  <span style={{ color: '#0EA5E9', cursor: 'pointer', fontWeight: '600' }}>Forgot password?</span>
                </div>

                {/* Primary Button */}
                <button type="submit" className="btn w-100 py-2 fw-semibold shadow-sm mb-2 rounded-3 text-white" style={{ backgroundColor: '#0EA5E9', border: 'none' }}>
                  Sign In
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

export default Login;
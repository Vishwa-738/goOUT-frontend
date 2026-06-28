// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; 

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

  const handleSubmit = async (e) => {
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

    // 🚀 NEW: Split the single Full Name into First and Last Name
    const nameParts = formData.fullName.trim().split(' ');
    const firstName = nameParts[0]; // Gets the first word
    const lastName = nameParts.slice(1).join(' '); // Gets everything else, or remains blank if they only typed one word

    try {
      // 🚀 NEW: Send exactly what Methsara's Java backend demands
      await api.post('/api/v1/auth/register', {
        firstName: firstName,
        lastName: lastName,
        email: formData.email,
        password: formData.password,
        travelerType: formData.travelerType
      });

      alert("Account created successfully! Please login.");
      navigate('/login');
      
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Registration failed. Try again.');
    }
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
            
            <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
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
                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">👤</span>
                    <input type="text" name="fullName" className="form-control bg-light border-start-0 ps-0" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">Email</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">✉️</span>
                    <input type="email" name="email" className="form-control bg-light border-start-0 ps-0" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">🔒</span>
                    <input type="password" name="password" className="form-control bg-light border-start-0 ps-0" placeholder="Create a password" value={formData.password} onChange={handleChange} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">🔒</span>
                    <input type="password" name="confirmPassword" className="form-control bg-light border-start-0 ps-0" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} />
                  </div>
                </div>

                <button type="submit" className="btn w-100 py-2 fw-semibold shadow-sm mb-2 rounded-3 text-white" style={{ backgroundColor: '#0EA5E9', border: 'none' }}>
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
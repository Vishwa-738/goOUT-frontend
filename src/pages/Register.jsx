// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; 
import logo from '../assets/logo.svg';
import loginBg from '../assets/login-bg.png';
// 🚀 THE FIX: Import your new right-side background image!
import loginBackdrop from '../assets/login backdrop.svg'; // Adjust to .jpg if needed

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

    const nameParts = formData.fullName.trim().split(' ');
    const firstName = nameParts[0]; 
    const lastName = nameParts.slice(1).join(' '); 

    try {
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
      <style>
        {`
          .glass-input::placeholder {
            color: rgba(255, 255, 255, 0.7) !important;
          }
          .glass-input:focus {
            background-color: transparent !important;
            color: white !important;
            box-shadow: none !important;
            outline: none !important;
          }
        `}
      </style>

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

        {/* 🚀 THE FIX: Right Side - Applied the new login backdrop image with a dark overlay */}
        <div 
          className="col-12 col-md-6 d-flex align-items-center justify-content-center p-4 p-sm-5 position-relative"
          style={{ 
            background: `linear-gradient(rgba(6, 95, 70, 0.7), rgba(15, 23, 42, 0.8)), url('${loginBackdrop}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
        >
          <div className="w-100" style={{ maxWidth: '420px' }}>
            
            <div 
              className="card shadow-lg border-0 rounded-4 p-4"
              style={{ background: 'linear-gradient(135deg, #17B0B2 0%, #8ADD63 100%)' }}
            >
              
              <div className="p-1 rounded-3 d-flex mb-4" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}>
                <button 
                  type="button" 
                  className="btn text-white flex-grow-1 py-2 fw-semibold rounded-2 border-0 small"
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
                  <label className="form-label small fw-bold text-white mb-1">Full Name</label>
                  <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                    <span className="me-2" style={{ opacity: 0.8 }}>👤</span>
                    <input type="text" name="fullName" className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-white mb-1">Email</label>
                  <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                    <span className="me-2" style={{ opacity: 0.8 }}>✉️</span>
                    <input type="email" name="email" className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-white mb-1">Password</label>
                  <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                    <span className="me-2" style={{ opacity: 0.8 }}>🔒</span>
                    <input type="password" name="password" className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input" placeholder="Create a password" value={formData.password} onChange={handleChange} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-white mb-1">Confirm Password</label>
                  <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                    <span className="me-2" style={{ opacity: 0.8 }}>🔒</span>
                    <input type="password" name="confirmPassword" className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} />
                  </div>
                </div>

                <button type="submit" className="btn w-100 py-2 fw-bold shadow-sm mb-2 rounded-3 text-dark mt-3" style={{ backgroundColor: '#ffffff', border: 'none' }}>
                  Create Account
                </button>
              </form>
            </div>
            
            <p className="text-center text-white small mt-4 px-3 mb-0 opacity-75" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
              By continuing, you agree to our <span style={{ color: '#ffffff', fontWeight: 'bold', cursor: 'pointer' }}>Terms of Service</span> and <span style={{ color: '#ffffff', fontWeight: 'bold', cursor: 'pointer' }}>Privacy Policy</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
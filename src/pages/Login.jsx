// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import logo from '../assets/logo.svg';
import loginBg from '../assets/login-bg.png';
// 🚀 THE FIX: Import your new right-side background image!
import loginBackdrop from '../assets/login backdrop.svg'; // Adjust to .jpg if needed

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const targetEmail = formData.email.trim();
    const targetPassword = formData.password.trim();

    if (!targetEmail || !targetPassword) {
      setError('Please fill in all fields.');
      return;
    }

    const result = await login(targetEmail, targetPassword);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
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
                <button type="button" className="btn btn-white bg-white shadow-sm flex-grow-1 py-2 fw-semibold rounded-2 text-dark small">
                  Login
                </button>
                <button 
                  type="button" 
                  className="btn text-white flex-grow-1 py-2 fw-semibold rounded-2 border-0 small"
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
                <div className="mb-3">
                  <label className="form-label small fw-bold text-white mb-1">Email</label>
                  <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                    
                    <input
                      type="email"
                      name="email"
                      className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-white mb-1">Password</label>
                  <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                  
                    <input
                      type="password"
                      name="password"
                      className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4 small mt-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label text-white opacity-75" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <span style={{ color: '#ffffff', cursor: 'pointer', fontWeight: 'bold' }}>Forgot password?</span>
                </div>

                <button type="submit" className="btn w-100 py-2 fw-bold shadow-sm mb-2 rounded-3 text-dark mt-2" style={{ backgroundColor: '#ffffff', border: 'none' }}>
                  Sign In
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

export default Login;
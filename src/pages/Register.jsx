// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; 
import logo from '../assets/logo.svg';
import loginBg from '../assets/login-bg.png';
import loginBackdrop from '../assets/login backdrop.svg'; 

function Register() {
  const navigate = useNavigate();
  
  // 🚀 NEW: State to track which step of the registration we are on
  const [step, setStep] = useState(1); // 1 = Details form, 2 = OTP form
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  // --- STEP 1: Submit Details & Request OTP ---
  const handleRegisterSubmit = async (e) => {
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
    const lastName = nameParts.slice(1).join(' ') || ''; 

    setIsLoading(true);
    try {
      // Send data to backend to trigger the creation of the unverified user and send the email
      await api.post('/api/v1/auth/register', {
        firstName: firstName,
        lastName: lastName,
        email: formData.email,
        password: formData.password,
        travelerType: formData.travelerType
      });

      // 🚀 THE FIX: Instead of navigating, switch to the OTP UI!
      setStep(2); 
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Registration failed. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // --- STEP 2: Verify the OTP ---
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Send the code back to the server to verify the email
      const response = await api.post('/api/v1/auth/verify', { 
        email: formData.email, 
        otp: otp 
      });
      
      // 🚀 THE UPGRADE: Grab the JWT token from Methsara's response
      const token = response.data.token || response.data.jwt; 
      const user = response.data.user; // If he returns the user object too
      
      if (token) {
        // Save auth data and auto-login!
        localStorage.setItem('token', token);
        if (user) localStorage.setItem('user', JSON.stringify(user));
        
        alert("Email verified! Welcome to GoOUT. 🌍");
        navigate('/dashboard'); // Skip the login page entirely!
      } else {
        // Fallback just in case
        alert("Email verified successfully! Please login.");
        navigate('/login');
      }
      
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Invalid verification code. Please check your email.');
    } finally {
      setIsLoading(false);
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

        {/* Right Side: Registration / OTP Form */}
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
              style={{ background: 'linear-gradient(135deg, #17B0B2 0%, #8ADD63 100%)', transition: 'all 0.3s ease' }}
            >
              
              {/* Only show the Login/Register toggle tabs if we are on Step 1 */}
              {step === 1 && (
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
              )}

              {error && (
                <div className="alert alert-danger py-2 text-center small border-0 mb-3" role="alert">
                  ⚠️ {error}
                </div>
              )}

              {/* Dynamic Form Rendering Based on Step */}
              {step === 1 ? (
                /* --- STEP 1: REGISTRATION DETAILS --- */
                <form onSubmit={handleRegisterSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-white mb-1">Full Name</label>
                    <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                      <input type="text" name="fullName" className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} disabled={isLoading} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-bold text-white mb-1">Email</label>
                    <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                      <input type="email" name="email" className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input" placeholder="Enter your email" value={formData.email} onChange={handleChange} disabled={isLoading} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-bold text-white mb-1">Password</label>
                    <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                      <input type="password" name="password" className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input" placeholder="Create a password" value={formData.password} onChange={handleChange} disabled={isLoading} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-bold text-white mb-1">Confirm Password</label>
                    <div className="d-flex align-items-center rounded-3 px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                      <input type="password" name="confirmPassword" className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} disabled={isLoading} />
                    </div>
                  </div>

                  <button type="submit" disabled={isLoading} className="btn w-100 py-2 fw-bold shadow-sm mb-2 rounded-3 text-dark mt-3" style={{ backgroundColor: '#ffffff', border: 'none' }}>
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>
              ) : (
                /* --- STEP 2: OTP VERIFICATION --- */
                <form onSubmit={handleOtpSubmit} className="py-3">
                  <div className="text-center text-white mb-4">
                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>📬</div>
                    <h4 className="fw-bold mb-2">Check your email</h4>
                    <p className="small mb-0" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      We sent a 6-digit verification code to<br/>
                      <strong style={{ fontSize: '15px' }}>{formData.email}</strong>
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center rounded-3 px-3 py-3" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                      <input 
                        type="text" 
                        className="form-control border-0 p-0 shadow-none text-white bg-transparent glass-input text-center fw-bold" 
                        placeholder="------" 
                        maxLength="6"
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                        disabled={isLoading}
                        style={{ fontSize: '24px', letterSpacing: '12px' }}
                      />
                    </div>
                  </div>

                  <button type="submit" disabled={isLoading || otp.length < 6} className="btn w-100 py-3 fw-bold shadow-sm mb-4 rounded-3 text-dark" style={{ backgroundColor: '#ffffff', border: 'none', fontSize: '16px' }}>
                    {isLoading ? 'Verifying...' : 'Verify Email'}
                  </button>

                  <div className="text-center">
                     <button type="button" onClick={() => setStep(1)} className="btn btn-link text-white small p-0 text-decoration-none" style={{ opacity: 0.8 }}>
                       ← Wrong email address? Go back
                     </button>
                  </div>
                </form>
              )}

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
// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top px-4 py-3" style={{ height: '70px' }}>
      <div className="container-fluid p-0">
        
        {/* Brand Link pointing back to public landing page (/) */}
        <Link className="navbar-brand fw-bold text-dark d-flex align-items-center gap-2 fs-4" to="/">
          <span className="text-primary">🧭</span> TripLink LK
        </Link>

        {/* Global Search Bar centered matching Figma */}
        <div className="d-none d-md-flex mx-auto" style={{ width: '450px' }}>
          <div className="input-group bg-light rounded-pill px-3 py-1 border">
            <span className="input-group-text bg-transparent border-0 text-muted">🔍</span>
            <input 
              type="text" 
              className="form-control bg-transparent border-0 small" 
              placeholder="Search trips, destinations, travelers..." 
            />
          </div>
        </div>

        {/* User Action Items Right Aligned */}
        <div className="d-flex align-items-center gap-3">
          {/* Notification bell icon */}
          <button className="btn btn-link text-secondary p-1 position-relative border-0">
            🔔
            <span className="position-absolute top-1 start-1 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
          </button>
          
          {/* Profile Quick-Link Avatar */}
          <div 
            className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold cursor-pointer" 
            style={{ width: '38px', height: '38px' }}
            onClick={() => navigate('/profile')}
          >
            V
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
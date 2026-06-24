// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
      <div className="container-fluid">
        {/* Application Logo Branding Brand Framework Links */}
        <Link className="navbar-brand fw-bold fs-4 text-primary" to="/dashboard">
          go<span className="text-white">OUT</span>
        </Link>

        {/* Responsive Mobile Menu Toggle Toggle Triggers */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Global Nav Bar Content Actions Context Alignments */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          {user && (
            <div className="d-flex align-items-center gap-3">
              <span className="text-light opacity-75">
                Welcome, <strong className="text-white">{user.name || 'Explorer'}</strong>
              </span>
              
              <button 
                onClick={logout} 
                className="btn btn-outline-danger btn-sm fw-semibold rounded-pill px-3"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
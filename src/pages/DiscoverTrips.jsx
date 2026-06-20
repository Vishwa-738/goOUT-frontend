// src/pages/Discover.jsx
import React, { useState } from 'react';

function Discover() {
  // Input tracking states for search fields
  const [destination, setDestination] = useState('any');
  const [budgetRange, setBudgetRange] = useState('any');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Local state representing the marketplace trips list mapping MongoDB String IDs
  const [trips] = useState([
    {
      tripId: "65ab3a111234567890abcdef", // Strict String ObjectID assignment mapping backend database contract
      title: 'Cultural Triangle Adventure',
      location: 'Sigiriya & Dambulla',
      dates: 'Jun 15 - Jun 20, 2026',
      budget: '$350 - $450',
      organizer: 'Raj Patel',
      joinedCount: 4,
      maxCapacity: 8,
      image: 'https://images.unsplash.com/photo-1588598126710-53bc7f9273c0?w=600&auto=format&fit=crop&q=80'
    },
    {
      tripId: "65ab3b221234567890abcdef",
      title: 'Ella Hiking Expedition',
      location: 'Ella & Badulla',
      dates: 'Jun 18 - Jun 22, 2026',
      budget: '$250 - $350',
      organizer: 'Sarah Kumar',
      joinedCount: 6,
      maxCapacity: 10,
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600&auto=format&fit=crop&q=80'
    },
    {
      tripId: "65ab3c331234567890abcdef",
      title: 'Whale Watching & Beach Bliss',
      location: 'Mirissa & Weligama',
      dates: 'Jun 10 - Jun 15, 2026',
      budget: '$400 - $500',
      organizer: 'Emma Wilson',
      joinedCount: 3,
      maxCapacity: 6,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80'
    }
  ]);

  // Handler for querying the data matching endpoint contracts
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Triggering fetch query request against endpoint path: http://localhost:8080/api/v1/trips");
    console.log("Passing Criteria Params:", { destination, budgetRange, startDate, endDate });
  };

  return (
    <div className="container-fluid px-0 py-2">
      
      {/* Title Segment */}
      <div className="mb-4">
        <h2 className="fw-bold text-dark mb-1" style={{ fontSize: '2.2rem', letterSpacing: '-0.5px' }}>Discover Trips</h2>
        <p className="text-secondary" style={{ fontSize: '1.05rem' }}>Find the perfect travel group and explore Sri Lanka together</p>
      </div>

      {/* Modern Filter Engine Card Box */}
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <form onSubmit={handleSearchSubmit}>
          <div className="row g-3">
            
            <div className="col-12 col-md-3">
              <label className="form-label small fw-bold text-secondary mb-1">Destination</label>
              <select 
                className="form-select bg-light border-0 py-2 px-3 text-muted rounded-3 shadow-none" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="any">Any destination</option>
                <option value="sigiriya">Sigiriya</option>
                <option value="ella">Ella</option>
                <option value="mirissa">Mirissa</option>
              </select>
            </div>

            <div className="col-12 col-md-3">
              <label className="form-label small fw-bold text-secondary mb-1">Budget Range</label>
              <select 
                className="form-select bg-light border-0 py-2 px-3 text-muted rounded-3 shadow-none" 
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
              >
                <option value="any">Any budget</option>
                <option value="low">$100 - $300</option>
                <option value="mid">$300 - $500</option>
              </select>
            </div>

            <div className="col-12 col-md-3">
              <label className="form-label small fw-bold text-secondary mb-1">Start Date</label>
              <input 
                type="date" 
                className="form-control bg-light border-0 py-2 px-3 text-muted rounded-3 shadow-none"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-3">
              <label className="form-label small fw-bold text-secondary mb-1">End Date</label>
              <input 
                type="date" 
                className="form-control bg-light border-0 py-2 px-3 text-muted rounded-3 shadow-none"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

          </div>

          <div className="mt-3 pt-1">
            <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 rounded-pill shadow-sm" style={{ backgroundColor: '#14a3e4', borderColor: '#14a3e4' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Search Trips
            </button>
          </div>
        </form>
      </div>

      {/* Dynamic Promo CTA Banner */}
      <div className="card border-0 text-white p-4 mb-5 rounded-4 shadow-sm" style={{ backgroundColor: '#1cbd74' }}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <h4 className="fw-bold mb-1">Can't find the perfect trip?</h4>
            <p className="mb-0 opacity-90">Create your own and invite others to join your adventure</p>
          </div>
          <button className="btn btn-light fw-bold px-4 py-2.5 rounded-3 border-0 bg-white" style={{ color: '#1cbd74' }}>
            Create New Trip
          </button>
        </div>
      </div>

      {/* Discovery Marketplace Trip Cards Grid */}
      <div className="row g-4">
        {trips.map((trip) => (
          <div key={trip.tripId} className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden bg-white">
              
              {/* Card Banner Image Wrapper with Floating Badge */}
              <div className="position-relative" style={{ height: '200px' }}>
                <img 
                  src={trip.image} 
                  alt={trip.title} 
                  className="w-100 h-100 object-fit-cover"
                />
                <span 
                  className="position-absolute top-0 end-0 bg-white text-primary fw-bold px-3 py-1.5 m-3 rounded-pill shadow-sm small"
                  style={{ fontSize: '0.825rem', color: '#14a3e4' }}
                >
                  {trip.joinedCount}/{trip.maxCapacity} joined
                </span>
              </div>

              {/* Context Details Body */}
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '1.2rem', letterSpacing: '-0.2px' }}>
                  {trip.title}
                </h5>
                
                {/* Information Metadata Stack */}
                <div className="d-flex flex-column gap-2.5 mb-4 text-secondary small">
                  <div className="d-flex align-items-center gap-2.5">
                    <span style={{ fontSize: '1rem', color: '#14a3e4' }}>📍</span>
                    <span className="fw-medium text-muted">{trip.location}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2.5">
                    <span style={{ fontSize: '1rem', color: '#14a3e4' }}>📅</span>
                    <span className="fw-medium text-muted">{trip.dates}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2.5">
                    <span className="fw-bold fs-6" style={{ color: '#1cbd74', width: '16px', display: 'inline-block' }}>$</span>
                    <span className="fw-bold text-dark">{trip.budget}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2.5">
                    <span style={{ fontSize: '1rem', color: '#14a3e4' }}>👤</span>
                    <span className="text-muted">Organized by <strong className="text-dark fw-semibold">{trip.organizer}</strong></span>
                  </div>
                </div>

                {/* Primary Interaction Button */}
                <button className="btn btn-primary w-100 py-2.5 fw-semibold mt-auto rounded-3 border-0" style={{ backgroundColor: '#14a3e4' }}>
                  View Details
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Discover;
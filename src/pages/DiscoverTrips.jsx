// src/pages/Discover.jsx
import React from 'react';

function Discover() {
  // Mock data matching the exact trips from your Figma screenshots (image_0b344b.png & image_0b340d.png)
  const trips = [
    {
      id: 1,
      title: 'Cultural Triangle Adventure',
      location: 'Sigiriya & Dambulla',
      dates: 'Jun 15 - Jun 20, 2026',
      budget: '$350 - $450',
      organizer: 'Raj Patel',
      joinedText: '4/8 joined',
      image: 'https://images.unsplash.com/photo-1588598126710-53bc7f9273c0?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Ella Hiking Expedition',
      location: 'Ella & Badulla',
      dates: 'Jun 18 - Jun 22, 2026',
      budget: '$250 - $350',
      organizer: 'Sarah Kumar',
      joinedText: '6/10 joined',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Whale Watching & Beach Bliss',
      location: 'Mirissa & Weligama',
      dates: 'Jun 10 - Jun 15, 2026',
      budget: '$400 - $500',
      organizer: 'Emma Wilson',
      joinedText: '3/6 joined',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Hill Country Tea Trails',
      location: 'Nuwara Eliya',
      dates: 'Jun 22 - Jun 26, 2026',
      budget: '$280 - $380',
      organizer: 'Priya Sharma',
      joinedText: '7/12 joined',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Ancient Temples Tour',
      location: 'Anuradhapura',
      dates: 'Jun 17 - Jun 21, 2026',
      budget: '$220 - $320',
      organizer: 'Tom Harrison',
      joinedText: '3/8 joined',
      image: 'https://images.unsplash.com/photo-1625736113111-e63d3957eb03?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="container-fluid px-0 py-2">
      
      {/* Page Title Header Section */}
      <div className="mb-4">
        <h2 className="fw-bold text-dark mb-1" style={{ fontSize: '2.2rem', letterSpacing: '-0.5px' }}>Discover Trips</h2>
        <p className="text-secondary" style={{ fontSize: '1.05rem' }}>Find the perfect travel group and explore Sri Lanka together</p>
      </div>

      {/* Modern Filter Engine Shell Box matching image_0b3467.png */}
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <div className="row g-3">
          
          {/* Destination Dropdown selection */}
          <div className="col-12 col-md-3">
            <label className="form-label small fw-bold text-secondary mb-1">Destination</label>
            <select className="form-select bg-light border-0 py-2 px-3 text-muted rounded-3" defaultValue="any">
              <option value="any">Any destination</option>
              <option value="sigiriya">Sigiriya</option>
              <option value="ella">Ella</option>
              <option value="mirissa">Mirissa</option>
            </select>
          </div>

          {/* Budget Filter */}
          <div className="col-12 col-md-3">
            <label className="form-label small fw-bold text-secondary mb-1">Budget Range</label>
            <select className="form-select bg-light border-0 py-2 px-3 text-muted rounded-3" defaultValue="any">
              <option value="any">Any budget</option>
              <option value="budget1">$100 - $300</option>
              <option value="budget2">$300 - $500</option>
            </select>
          </div>

          {/* Start Date selection calendar */}
          <div className="col-12 col-md-3">
            <label className="form-label small fw-bold text-secondary mb-1">Start Date</label>
            <input type="date" className="form-control bg-light border-0 py-2 px-3 text-muted rounded-3" />
          </div>

          {/* End Date selection calendar */}
          <div className="col-12 col-md-3">
            <label className="form-label small fw-bold text-secondary mb-1">End Date</label>
            <input type="date" className="form-control bg-light border-0 py-2 px-3 text-muted rounded-3" />
          </div>

        </div>

        {/* Form Submission Query Action Trigger */}
        <div className="mt-3 pt-1">
          <button className="btn btn-primary px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 rounded-pill">
            <span>🔍</span> Search Trips
          </button>
        </div>
      </div>

      {/* CTA Ad Banner section matching image_0b3467.png */}
      <div className="card border-0 text-white p-4 mb-5 rounded-4 shadow-sm" style={{ background: 'linear-gradient(90deg, #00c6ff, #0072ff)' }}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <h4 className="fw-bold mb-1">Can't find the perfect trip?</h4>
            <p className="mb-0 opacity-90">Create your own and invite others to join your adventure</p>
          </div>
          <button className="btn btn-light text-primary fw-bold px-4 py-2.5 rounded-3 border-0 bg-white">
            Create New Trip
          </button>
        </div>
      </div>

      {/* Product Discovery Grid Column layout */}
      <div className="row g-4">
        {trips.map((trip) => (
          <div key={trip.id} className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden bg-white custom-trip-card">
              
              {/* Card Banner Image Wrapper with Floating Badge */}
              <div className="position-relative" style={{ height: '200px' }}>
                <img 
                  src={trip.image} 
                  alt={trip.title} 
                  className="w-100 h-100 object-fit-cover"
                />
                <span 
                  className="position-absolute top-0 end-0 bg-white text-primary fw-bold px-3 py-1.5 m-3 rounded-pill shadow-sm small"
                  style={{ fontSize: '0.825rem' }}
                >
                  {trip.joinedText}
                </span>
              </div>

              {/* Core Context Details */}
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '1.2rem', letterSpacing: '-0.2px' }}>
                  {trip.title}
                </h5>
                
                {/* Information Metadata stack with custom modern icons */}
                <div className="d-flex flex-column gap-2.5 mb-4 text-secondary small">
                  <div className="d-flex align-items-center gap-2.5">
                    <span className="text-primary fs-6">📍</span>
                    <span className="fw-medium">{trip.location}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2.5">
                    <span className="text-primary fs-6">📅</span>
                    <span className="fw-medium">{trip.dates}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2.5">
                    <span className="text-success fs-6 fw-bold">$</span>
                    <span className="fw-bold text-dark">{trip.budget}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2.5">
                    <span className="text-primary fs-6">👤</span>
                    <span>Organized by <strong className="text-dark fw-semibold">{trip.organizer}</strong></span>
                  </div>
                </div>

                {/* Primary Interaction Call-to-action button */}
                <button className="btn btn-primary w-100 py-2.5 fw-semibold mt-auto rounded-3">
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
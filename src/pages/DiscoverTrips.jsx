// src/pages/DiscoverTrips.jsx
import React from 'react';
import { MapPin, Calendar, DollarSign, User, Search } from 'lucide-react';

export default function DiscoverTrips({ setActiveTab }) {
  // Mock data matching your Figma design perfectly
  const trips = [
    { 
      id: 1, 
      title: 'Cultural Triangle Adventure', 
      location: 'Sigiriya & Dambulla', 
      dates: 'Jun 15 - Jun 20, 2026', 
      budget: '$350 - $450', 
      organizer: 'Raj Patel', 
      joined: '4/8', 
      image: 'https://images.unsplash.com/photo-1588598126710-53bc7f9273c0?w=600&h=400&fit=crop' 
    },
    { 
      id: 2, 
      title: 'Ella Hiking Expedition', 
      location: 'Ella & Badulla', 
      dates: 'Jun 18 - Jun 22, 2026', 
      budget: '$250 - $350', 
      organizer: 'Sarah Kumar', 
      joined: '6/10', 
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=600&h=400&fit=crop' 
    },
    { 
      id: 3, 
      title: 'Whale Watching & Beach Bliss', 
      location: 'Mirissa & Weligama', 
      dates: 'Jun 10 - Jun 15, 2026', 
      budget: '$400 - $500', 
      organizer: 'Emma Wilson', 
      joined: '3/6', 
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop' 
    },
    { 
      id: 4, 
      title: 'Temple City Exploration', 
      location: 'Kandy', 
      dates: 'Jun 12 - Jun 16, 2026', 
      budget: '$200 - $300', 
      organizer: 'David Chen', 
      joined: '5/8', 
      image: 'https://images.unsplash.com/photo-1620619896489-32207de630dc?w=600&h=400&fit=crop' 
    },
    { 
      id: 5, 
      title: 'Coastal Fort Adventure', 
      location: 'Galle', 
      dates: 'Jun 20 - Jun 24, 2026', 
      budget: '$300 - $400', 
      organizer: 'Lisa Anderson', 
      joined: '2/6', 
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=600&h=400&fit=crop' 
    },
    { 
      id: 6, 
      title: 'Wildlife Safari Experience', 
      location: 'Yala National Park', 
      dates: 'Jun 25 - Jun 28, 2026', 
      budget: '$500 - $650', 
      organizer: 'Michael Brooks', 
      joined: '4/8', 
      image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&h=400&fit=crop' 
    }
  ];

  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 8px 0' }}>Discover Trips</h1>
        <p style={{ color: '#64748b', fontSize: '16px', margin: 0 }}>Find the perfect travel group and explore Sri Lanka together</p>
      </div>

      {/* Filter Bar */}
      <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', marginBottom: '32px' }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>Destination</label>
          <select style={{ width: '100%', padding: '12px 16px', borderRadius: '24px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', outline: 'none', color: '#475569', appearance: 'none' }}>
            <option>Any destination</option>
            <option>Ella</option>
            <option>Mirissa</option>
            <option>Sigiriya</option>
          </select>
        </div>
        
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>Budget Range</label>
          <select style={{ width: '100%', padding: '12px 16px', borderRadius: '24px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', outline: 'none', color: '#475569', appearance: 'none' }}>
            <option>Any budget</option>
            <option>Under $300</option>
            <option>$300 - $600</option>
          </select>
        </div>

        <div style={{ flex: 1, minWidth: '150px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>Start Date</label>
          <input type="date" style={{ width: '100%', padding: '11px 16px', borderRadius: '24px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', outline: 'none', color: '#475569' }} />
        </div>

        <div style={{ flex: 1, minWidth: '150px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>End Date</label>
          <input type="date" style={{ width: '100%', padding: '11px 16px', borderRadius: '24px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', outline: 'none', color: '#475569' }} />
        </div>

        <button style={{ backgroundColor: '#0EA5E9', color: '#fff', border: 'none', borderRadius: '24px', padding: '12px 24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', height: '44px' }}>
          <Search size={18} /> Search Trips
        </button>
      </div>

      {/* CTA Banner */}
      <div style={{ backgroundColor: '#10B981', borderRadius: '16px', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Can't find the perfect trip?</h3>
          <p style={{ color: '#d1fae5', margin: 0, fontSize: '15px' }}>Create your own and invite others to join your adventure</p>
        </div>
        {/* Change the button inside the CTA Banner to this: */}
<button 
  onClick={() => setActiveTab('create-trip')}
  style={{ backgroundColor: '#fff', color: '#10B981', border: 'none', padding: '12px 24px', borderRadius: '24px', fontWeight: 'bold', cursor: 'pointer' }}
>
  Create New Trip
</button>
      </div>

      {/* Trips Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {trips.map(trip => (
          <div key={trip.id} style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            
            {/* Image & Badge */}
            <div style={{ position: 'relative', height: '200px' }}>
              <img src={trip.image} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(255,255,255,0.95)', color: '#0EA5E9', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                {trip.joined} joined
              </div>
            </div>

            {/* Card Content */}
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 16px 0' }}>{trip.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                  <MapPin size={16} color="#0EA5E9" /> {trip.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                  <Calendar size={16} color="#0EA5E9" /> {trip.dates}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                  <DollarSign size={16} color="#10B981" /> {trip.budget}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                  <User size={16} color="#0EA5E9" /> Organized by {trip.organizer}
                </div>
              </div>

              {/* Updated Button to trigger routing */}
              <button 
                onClick={() => setActiveTab('trip-details')}
                style={{ width: '100%', backgroundColor: '#0EA5E9', color: '#fff', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}
              >
                View Details
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
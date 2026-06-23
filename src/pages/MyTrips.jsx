import React, { useState } from 'react';
import { Calendar, MapPin, Users, DollarSign, Plus, Eye, Edit2, UserCheck, Trash2 } from 'lucide-react';
import TripDetails from './Tripdetails'; // Import the new details container!

export default function MyTrips() {
  const [viewingDetails, setViewingDetails] = useState(false);

  // If "View Details" is clicked, render the TripDetails screen instead
  if (viewingDetails) {
    return <TripDetails onBack={() => setViewingDetails(false)} />;
  }

  const stats = [
    { label: 'Total Trips', count: 3, color: '#00A3E1' },
    { label: 'Active Trips', count: 2, color: '#2ECC71' },
    { label: 'Members Joined', count: 17, color: '#9B5DE5' },
  ];

  const trips = [
    {
      id: 1,
      title: 'Cultural Triangle Adventure',
      location: 'Sigiriya & Dambulla',
      dates: 'Jun 15 - Jun 20, 2026',
      cost: '$350 - $450',
      members: '4/8 Members',
      pendingRequests: 3,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1588598126702-bc327fb2ccbe?w=600'
    },
    {
      id: 2,
      title: 'Ella Hiking Expedition',
      location: 'Ella & Badulla',
      dates: 'Jun 18 - Jun 22, 2026',
      cost: '$250 - $350',
      members: '6/10 Members',
      pendingRequests: 2,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600'
    },
    {
      id: 3,
      title: 'Hill Country Tea Trails',
      location: 'Nuwara Eliya',
      dates: 'May 22 - May 26, 2026',
      cost: '$280 - $380',
      members: '7/12 Members',
      pendingRequests: 0,
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=600'
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1e293b' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 6px 0' }}>My Trips</h1>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Manage your created trips and track members</p>
        </div>
        <button style={{ backgroundColor: '#00A3E1', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '10px 20px', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Plus size={16} /> Create New Trip
        </button>
      </div>

      {/* METRICS STATS ROW */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{ flex: 1, backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #f1f5f9' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: stat.color, color: '#ffffff', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold' }}>
              {stat.count}
            </div>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>{stat.count}</h3>
              <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TRIP CARDS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {trips.map((trip) => (
          <div key={trip.id} style={{ backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #f1f5f9', display: 'flex', overflow: 'hidden' }}>
            <div style={{ width: '300px', height: '220px', position: 'relative', flexShrink: 0 }}>
              <img src={trip.image} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: trip.status === 'Active' ? '#2ECC71' : '#64748b', color: '#ffffff', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>{trip.status}</span>
            </div>

            <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 12px 0' }}>{trip.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '13px' }}><MapPin size={16} style={{ color: '#00A3E1' }} /> {trip.location}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '13px' }}><Calendar size={16} style={{ color: '#00A3E1' }} /> {trip.dates}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '13px' }}><DollarSign size={16} style={{ color: '#2ECC71' }} /> {trip.cost}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '13px' }}><Users size={16} style={{ color: '#00A3E1' }} /> {trip.members}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                {/* TRIGER DYNAMIC NAVIGATION STATE ON CLICK */}
                <button 
                  onClick={() => setViewingDetails(true)}
                  style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', border: 'none', backgroundColor: '#00A3E1', color: '#ffffff' }}
                >
                  <Eye size={14} /> View Details
                </button>
                <button style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', backgroundColor: '#ffffff', color: '#334155', border: '1px solid #cbd5e1' }}><Edit2 size={14} /> Edit</button>
                {trip.pendingRequests > 0 && (
                  <button style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', backgroundColor: '#ffffff', color: '#2ECC71', border: '1px solid #2ECC71' }}><UserCheck size={14} /> Manage Requests ({trip.pendingRequests})</button>
                )}
                <button style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', backgroundColor: '#ffffff', color: '#EF4444', border: '1px solid #FCA5A5', marginLeft: 'auto' }}><Trash2 size={14} /> Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
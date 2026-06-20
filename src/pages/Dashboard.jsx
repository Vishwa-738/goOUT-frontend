// src/pages/Dashboard.jsx
import React from 'react';

function Dashboard() {
  const travelPosts = [
    {
      id: 1,
      author: 'Sarah Kumar',
      timeAgo: '2 hours ago',
      location: 'Ella, Sri Lanka',
      content: "Just witnessed the most breathtaking sunrise at Ella Rock! The hike was challenging but absolutely worth it. If you're planning to visit, start early around 5 AM to catch the sunrise. 🌄",
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
      likes: 124,
      comments: 18
    }
  ];

  return (
    <div className="container-fluid px-0">
      <div className="row g-4">
        
        {/* LEFT COLUMN: Main Community Feed */}
        <div className="col-12 col-lg-9">
          
          {/* Create Post Card */}
          <div className="card shadow-sm border-0 rounded-4 p-3 mb-4 bg-white">
            <div className="d-flex gap-3 align-items-center mb-3">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '42px', height: '42px', minWidth: '42px' }}>
                V
              </div>
              <input 
                type="text" 
                className="form-control bg-light border-0 py-2.5 px-3 rounded-3 fs-6" 
                placeholder="Share your travel experience..." 
              />
            </div>
            <div className="d-flex justify-content-between align-items-center border-top pt-2">
              <div className="d-flex gap-2">
                <button className="btn btn-light btn-sm text-secondary fw-semibold px-3 rounded-2">🖼️ Photo</button>
                <button className="btn btn-light btn-sm text-secondary fw-semibold px-3 rounded-2">📍 Location</button>
              </div>
              <button className="btn btn-primary btn-sm px-4 fw-semibold rounded-2">Post</button>
            </div>
          </div>

          {/* Social Feed Post */}
          {travelPosts.map((post) => (
            <div key={post.id} className="card shadow-sm border-0 rounded-4 p-4 mb-4 bg-white">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '42px', height: '42px' }}>
                  S
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-0">{post.author}</h6>
                  <small className="text-muted">{post.timeAgo} • 📍 {post.location}</small>
                </div>
              </div>

              <p className="text-dark fs-6 mb-3" style={{ lineHeight: '1.5' }}>{post.content}</p>

              <div className="rounded-4 overflow-hidden mb-3 shadow-sm">
                <img src={post.image} alt={post.location} className="w-100 object-fit-cover" style={{ maxHeight: '400px' }} />
              </div>

              <div className="d-flex gap-4 border-top pt-2.5 text-muted small fw-semibold">
                <div className="cursor-pointer">❤️ {post.likes}</div>
                <div className="cursor-pointer">💬 {post.comments} Comments</div>
                <div className="cursor-pointer">🔗 Share</div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Sidebar Widgets Panel */}
        <div className="col-12 col-lg-3">
          
          {/* Weather Applet Widget */}
          <div className="card border-0 rounded-4 p-3 text-white mb-4 shadow-sm" style={{ backgroundColor: '#14a3e4' }}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              <span className="fw-bold" style={{ fontSize: '0.95rem' }}>Weather</span>
            </div>
            
            <div className="position-relative mb-2">
              <span className="opacity-95 d-block mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Colombo, Sri Lanka</span>
              <div className="d-flex align-items-center justify-content-between">
                <span className="fw-bold" style={{ fontSize: '2.5rem', lineHeight: '1' }}>28°</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              </div>
              <p className="fw-semibold mt-1 mb-2" style={{ fontSize: '0.9rem' }}>Partly Cloudy</p>
            </div>

            <hr className="border-white opacity-25 my-2" />
            
            <div className="d-flex justify-content-start gap-4 py-1">
              <div className="d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.8 18a2.5 2.5 0 1 0-2.5-2.5"/><path d="M5.7 12H19a2 2 0 1 0-2-2"/><path d="M2 8h15a2.5 2.5 0 1 1-2.5 2.5"/></svg>
                <div>
                  <small className="d-block text-white-50 lh-1 mb-0.5" style={{ fontSize: '0.7rem' }}>Wind</small>
                  <span className="fw-bold" style={{ fontSize: '0.9rem' }}>12 km/h</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z"/></svg>
                <div>
                  <small className="d-block text-white-50 lh-1 mb-0.5" style={{ fontSize: '0.7rem' }}>Humidity</small>
                  <span className="fw-bold" style={{ fontSize: '0.9rem' }}>75%</span>
                </div>
              </div>
            </div>

            <hr className="border-white opacity-25 my-2" />

            <div className="d-flex justify-content-between align-items-center text-center mt-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                <div key={day} className="d-flex flex-column gap-1">
                  <span className="text-white-50 fw-semibold" style={{ fontSize: '0.7rem' }}>{day}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto opacity-75"><path d="M17.5 19A3.5 3.5 0 0 0 13 15.7a5 5 0 0 0-9.6 1.3A3.5 3.5 0 0 0 3.5 24h14a3.5 3.5 0 0 0 0-7z"/></svg>
                  <span className="fw-bold" style={{ fontSize: '0.75rem' }}>27°</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Travel Stats Widget - Updated matching image_0b9da4.png */}
          <div className="card shadow-sm border-0 rounded-4 p-3 bg-white mb-4">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '1.15rem' }}>Travel Stats</h6>
            <div className="d-flex flex-column gap-3">
              
              {/* Active Trips */}
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-4 d-flex align-items-center justify-content-center text-white shadow-sm" style={{ width: '42px', height: '42px', backgroundColor: '#3b82f6', minWidth: '42px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-0 text-dark" style={{ lineHeight: '1.1', fontSize: '1.25rem' }}>24</h5>
                  <small className="text-muted" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Active Trips</small>
                </div>
              </div>
              
              {/* Total Travelers */}
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-4 d-flex align-items-center justify-content-center text-white shadow-sm" style={{ width: '42px', height: '42px', backgroundColor: '#10b981', minWidth: '42px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-0 text-dark" style={{ lineHeight: '1.1', fontSize: '1.25rem' }}>1.2K</h5>
                  <small className="text-muted" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Total Travelers</small>
                </div>
              </div>

              {/* Avg Budget Element (NEW) */}
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-4 d-flex align-items-center justify-content-center text-white shadow-sm fw-bold fs-5" style={{ width: '42px', height: '42px', backgroundColor: '#a855f7', minWidth: '42px' }}>
                  $
                </div>
                <div>
                  <h5 className="fw-bold mb-0 text-dark" style={{ lineHeight: '1.1', fontSize: '1.25rem' }}>$450</h5>
                  <small className="text-muted" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Avg. Budget</small>
                </div>
              </div>

            </div>
          </div>

          {/* Trending Destinations Widget - Updated matching image_0b9da4.png */}
          <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
            <h5 className="fw-bold text-dark mb-4" style={{ fontSize: '1.35rem', letterSpacing: '-0.3px' }}>Trending Destinations</h5>
            <div className="d-flex flex-column gap-4">
              {[
                { rank: 1, name: 'Ella', counts: '142 travelers', trend: '+12%', bg: 'linear-gradient(135deg, #02b39b, #0d6efd)' },
                { rank: 2, name: 'Sigiriya', counts: '98 travelers', trend: '+8%', bg: 'linear-gradient(135deg, #02b39b, #0d6efd)' },
                { rank: 3, name: 'Mirissa', counts: '186 travelers', trend: '+15%', bg: 'linear-gradient(135deg, #02b39b, #0d6efd)' }
              ].map((item) => (
                <div key={item.rank} className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    {/* Rounded Square Badge */}
                    <div 
                      className="text-white d-flex align-items-center justify-content-center fw-bold rounded-3" 
                      style={{ width: '40px', height: '40px', background: item.bg, fontSize: '1.1rem' }}
                    >
                      {item.rank}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '1rem' }}>{item.name}</h6>
                      <small className="text-muted style-text" style={{ fontSize: '0.85rem' }}>{item.counts}</small>
                    </div>
                  </div>
                  {/* Green Vector Trend Metric Arrow Line */}
                  <span className="text-success small fw-bold d-flex align-items-center gap-1" style={{ fontSize: '0.9rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    {item.trend}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
// src/pages/ExpenseTracker.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import api from '../services/api';

export default function ExpenseTracker({ tripId, tripName, setActiveTab }) {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // 🚀 NEW: State to hold Methsara's auto-calculated math
  const [dashboardStats, setDashboardStats] = useState({
    totalExpenses: 0,
    totalTravelers: 0,
    perPerson: 0
  });

  // Input Form State
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [paidBy, setPaidBy] = useState('');

  // 1. READ: Fetch expenses from the updated backend URL
  const fetchExpenses = async () => {
    setIsLoading(true);
    try {
      // 🚀 THE FIX: Updated to match Methsara's new URL structure
      const response = await api.get(`/api/v1/expenses/trip/${tripId}`);
      
      let rawData = [];
      if (Array.isArray(response.data)) rawData = response.data;
      else if (response.data && response.data.data) rawData = response.data.data;
      
      setExpenses(rawData);
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 🚀 2. READ: Fetch the pre-calculated math from the Bonus endpoint
  const fetchDashboardStats = async () => {
    try {
      const response = await api.get(`/api/v1/expenses/trip/${tripId}/dashboard`);
      if (response.data) {
        setDashboardStats(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard stats:", error);
    }
  };

  useEffect(() => {
    if (tripId) {
      fetchExpenses();
      fetchDashboardStats(); // Fetch the math stats when the trip loads
    }
  }, [tripId]);

  // 3. CREATE: Send a new expense to the backend
  const handleAddExpense = async (e) => {
    e.preventDefault();
    
    try {
      const payload = {
        tripId: tripId,
        title: description, 
        amount: parseFloat(amount),
        category: category,
        paidBy: paidBy
      };

      await api.post('/api/v1/expenses', payload);
      
      // Clear the form fields
      setDescription('');
      setAmount('');
      setCategory('');
      setPaidBy('');

      // Refresh BOTH the list and the math totals instantly!
      fetchExpenses();
      fetchDashboardStats();

    } catch (error) {
      console.error("Error creating expense:", error);
      alert("Failed to save the expense. Check the console!");
    }
  };

  // 4. FRONTEND MATH: We still need to calculate Category widths for the progress bars
  const uniqueCategories = new Set(expenses.map(e => e.category)).size;
  
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
    return acc;
  }, {});

  const getCategoryWidth = (catAmount) => {
    if (!dashboardStats.totalExpenses || !catAmount) return '0%';
    return `${(catAmount / dashboardStats.totalExpenses) * 100}%`;
  };

  return (
    <div className="container-fluid px-0 py-2">
      
      {/* HEADER & BACK BUTTON */}
      <div className="mb-4">
        <button 
          onClick={() => setActiveTab('expenses')}
          style={{ background: 'none', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', marginBottom: '16px', padding: 0, fontWeight: '500' }}
        >
          <ArrowLeft size={16} /> Back to Trips
        </button>
        <h2 className="fw-bold text-dark mb-1" style={{ fontSize: '2.2rem', letterSpacing: '-0.5px' }}>
          {tripName || 'Expense'} Tracker
        </h2>
        <p className="text-secondary" style={{ fontSize: '1.05rem' }}>Track and split trip expenses with your travel group</p>
      </div>

      {/* TOP STATISTICS CARDS (Now powered by the backend bonus endpoint!) */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 text-white p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#14a3e4' }}>
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-3 bg-white bg-opacity-25 p-3 fs-3 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>$</div>
              <div>
                <span className="small opacity-90 d-block mb-1">Total Expenses</span>
                <h3 className="fw-bold mb-0">${(dashboardStats.totalExpenses || 0).toFixed(2)}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 text-white p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#1cbd74' }}>
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-3 bg-white bg-opacity-25 p-3 fs-3 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>👥</div>
              <div>
                <span className="small opacity-90 d-block mb-1">Per Person (Avg)</span>
                <h3 className="fw-bold mb-0">${(dashboardStats.perPerson || 0).toFixed(2)}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 text-white p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#8a3ffc' }}>
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-3 bg-white bg-opacity-25 p-3 fs-3 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>📊</div>
              <div>
                <span className="small opacity-90 d-block mb-1">Categories</span>
                <h3 className="fw-bold mb-0">{uniqueCategories}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        
        {/* LEFT COLUMN: INPUT FORM */}
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <h4 className="fw-bold text-dark mb-4" style={{ fontSize: '1.3rem' }}>Add Expense</h4>
            
            <form onSubmit={handleAddExpense}>
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary mb-1">Description *</label>
                <input 
                  type="text" 
                  className="form-control bg-light border-0 py-2.5 px-3 text-dark rounded-3 shadow-none" 
                  placeholder="e.g., Hotel booking"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required 
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary mb-1">Amount (USD) *</label>
                <input 
                  type="number" 
                  className="form-control bg-light border-0 py-2.5 px-3 text-dark rounded-3 shadow-none" 
                  placeholder="e.g., 100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required 
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary mb-1">Category *</label>
                <select 
                  className="form-select bg-light border-0 py-2.5 px-3 text-muted rounded-3 shadow-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select category</option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Transport">Transport</option>
                  <option value="Activities">Activities</option>
                  <option value="Food">Food</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-secondary mb-1">Paid By *</label>
                <input 
                  type="text" 
                  className="form-control bg-light border-0 py-2.5 px-3 text-dark rounded-3 shadow-none" 
                  placeholder="e.g., Vishwa"
                  value={paidBy}
                  onChange={(e) => setPaidBy(e.target.value)}
                  required 
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2.5 fw-semibold border-0 rounded-3 text-white" style={{ backgroundColor: '#14a3e4' }}>
                Add Expense
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-12 col-lg-8">
          
          {/* PROGRESS BARS */}
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
            <h4 className="fw-bold text-dark mb-4" style={{ fontSize: '1.3rem' }}>Expenses by Category</h4>
            
            <div className="d-flex flex-column gap-4">
              {['Accommodation', 'Transport', 'Activities', 'Food'].map((cat) => (
                <div key={cat}>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-semibold text-dark">{cat}</span>
                    <span className="fw-bold text-primary" style={{ color: '#14a3e4' }}>
                      ${(categoryTotals[cat] || 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="progress rounded-pill" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar rounded-pill" 
                      role="progressbar" 
                      style={{ width: getCategoryWidth(categoryTotals[cat]), backgroundColor: '#14a3e4', transition: 'width 0.5s ease-in-out' }} 
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LEDGER TABLE */}
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <h4 className="fw-bold text-dark mb-4" style={{ fontSize: '1.3rem' }}>All Expenses</h4>
            
            {isLoading ? (
              <div className="text-center text-secondary py-5">Loading expenses...</div>
            ) : expenses.length === 0 ? (
              <div className="text-center text-secondary py-5">No expenses recorded yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle border-0 mb-0">
                  <thead>
                    <tr className="text-secondary small fw-semibold border-bottom">
                      <th className="pb-3 border-0" style={{ minWidth: '220px' }}>Description</th>
                      <th className="pb-3 border-0">Category</th>
                      <th className="pb-3 border-0">Paid By</th>
                      <th className="pb-3 border-0">Date</th>
                      <th className="pb-3 border-0 text-end">Amount</th>
                      <th className="pb-3 border-0 text-center" style={{ minWidth: '90px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((item) => (
                      <tr key={item.id || item.expenseId || Math.random()} className="border-bottom text-dark" style={{ fontSize: '0.95rem' }}>
                        <td className="py-3 border-0 fw-medium">{item.title || item.description}</td>
                        <td className="py-3 border-0">
                          <span className={`badge rounded-pill px-2.5 py-1.5 fw-semibold ${
                            item.category === 'Accommodation' ? 'bg-primary bg-opacity-10 text-primary' :
                            item.category === 'Transport' ? 'bg-info bg-opacity-10 text-info' :
                            item.category === 'Activities' ? 'bg-warning bg-opacity-10 text-warning' :
                            'bg-danger bg-opacity-10 text-danger'
                          }`}>
                            {item.category || 'Other'}
                          </span>
                        </td>
                        <td className="py-3 border-0 text-secondary">{item.paidBy}</td>
                        <td className="py-3 border-0 text-secondary">
                          {item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Today'}
                        </td>
                        <td className="py-3 border-0 text-end fw-bold">${(item.amount || 0).toFixed(2)}</td>
                        <td className="py-3 border-0 text-center">
                          <div className="d-flex align-items-center justify-content-center gap-2">
                            <button type="button" className="btn btn-link p-1 text-secondary shadow-none border-0">📝</button>
                            <button type="button" className="btn btn-link p-1 text-danger shadow-none border-0">🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
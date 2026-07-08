// src/pages/ExpenseTracker.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sigma, User, Grid, Globe, AlertCircle } from 'lucide-react';
import api from '../services/api';

import bg1 from '../assets/card-bg-1.png';
import bg2 from '../assets/card-bg-2.png';
import bg3 from '../assets/card-bg-3.png';

export default function ExpenseTracker({ tripId, tripName, setActiveTab }) {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [dashboardStats, setDashboardStats] = useState({
    totalExpenses: 0,
    totalTravelers: 0,
    perPerson: 0
  });

  const [tripMembers, setTripMembers] = useState([]);
  const [tripBudget, setTripBudget] = useState(0);

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [paidBy, setPaidBy] = useState(''); 

  const [currency, setCurrency] = useState('LKR'); 
  
  const currencySymbols = {
    LKR: 'Rs ',
    USD: '$',
    EUR: '€',
    GBP: '£',
    AUD: 'A$'
  };
  const sym = currencySymbols[currency] || '$';

  //  1. EXCHANGE RATES (Relative to USD = 1.0 Base)
  const exchangeRates = {
    USD: 1.0,
    LKR: 305.0, // $1 USD = 305 LKR
    EUR: 0.92,  // $1 USD = 0.92 EUR
    GBP: 0.79,  // $1 USD = 0.79 GBP
    AUD: 1.52   // $1 USD = 1.52 AUD
  };

  //  2. HELPER FUNCTION TO SCALE & FORMAT CURRENCY DYNAMICALLY
  const formatAmount = (baseAmount) => {
    const rate = exchangeRates[currency] || 1.0;
    const converted = (Number(baseAmount) || 0) * rate;
    return `${sym}${converted.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const fetchExpenses = async () => {
    setIsLoading(true);
    try {
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

  const fetchTripDetails = async () => {
    try {
      const response = await api.get(`/api/v1/trips/${tripId}`);
      const data = response.data;
      
      let rawBudget = data.minBudget || data.budget || 0;
      
      //  NORMALIZE BUDGET: If the trip budget was saved in LKR (or is a large number > 5000),
      // convert it back to USD Base so our exchange multiplier scales it correctly!
      if (data.budgetCurrency && exchangeRates[data.budgetCurrency]) {
        rawBudget = rawBudget / exchangeRates[data.budgetCurrency];
      } else if (rawBudget > 5000 && !data.budgetCurrency) {
        // Safe fallback: if budget is stored as 12000 without currency metadata, assume LKR -> USD
        rawBudget = rawBudget / 305.0;
      }
      
      setTripBudget(rawBudget);
      
      let membersList = [];
      if (data.organizer) membersList.push(data.organizer);
      
      if (data.joinedMembers) {
        const orgId = data.organizer?.id || data.organizer?._id;
        const others = data.joinedMembers.filter(m => (m.id || m._id) !== orgId);
        membersList = [...membersList, ...others];
      }
      
      setTripMembers(membersList);
    } catch (error) {
      console.error("Failed to fetch trip details:", error);
    }
  };

  useEffect(() => {
    if (tripId) {
      fetchExpenses();
      fetchDashboardStats(); 
      fetchTripDetails(); 
    }
  }, [tripId]);

  const handleAddExpense = async (e) => {
    e.preventDefault();
    try {
      //  1. NORMALIZE INPUT: Convert whatever currency they typed back to USD Base!
      const rate = exchangeRates[currency] || 1.0;
      const normalizedAmountInUSD = parseFloat(amount) / rate;

      const payload = {
        tripId: tripId,
        title: description, 
        amount: normalizedAmountInUSD, // Always save as base USD to DB
        category: category,
        paidBy: paidBy,
        originalCurrency: currency, // Optional: keep track of what they typed
        originalAmount: parseFloat(amount)
      };
      
      await api.post('/api/v1/expenses', payload);
      setDescription('');
      setAmount('');
      setCategory('');
      setPaidBy('');
      fetchExpenses();
      fetchDashboardStats();
    } catch (error) {
      console.error("Error creating expense:", error);
      alert("Failed to save the expense. Check the console!");
    }
  };

  const getMemberName = (idOrName) => {
    const member = tripMembers.find(m => String(m.id || m._id) === String(idOrName));
    return member ? `${member.firstName} ${member.lastName}` : idOrName;
  };

  const uniqueCategories = new Set(expenses.map(e => e.category)).size;
  
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
    return acc;
  }, {});

  const getCategoryWidth = (catAmount) => {
    if (!dashboardStats.totalExpenses || !catAmount) return '0%';
    return `${(catAmount / dashboardStats.totalExpenses) * 100}%`;
  };

  const isOverBudget = tripBudget > 0 && dashboardStats.totalExpenses > tripBudget;
  const overBudgetAmount = isOverBudget ? dashboardStats.totalExpenses - tripBudget : 0;

  return (
    <div className="container-fluid px-0 py-2">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <button 
            onClick={() => setActiveTab('expenses')}
            style={{ background: 'none', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', marginBottom: '16px', padding: 0, fontWeight: '500' }}
          >
            <ArrowLeft size={16} /> Back to Trips
          </button>
          
          <div className="d-flex align-items-center gap-3 mb-1">
            <h2 className="fw-bold text-dark mb-0" style={{ fontSize: '2.2rem', letterSpacing: '-0.5px' }}>
              {tripName || 'Expense'} Tracker
            </h2>
          </div>
          <p className="text-secondary" style={{ fontSize: '1.05rem', marginTop: '8px' }}>Track and split trip expenses with your travel group</p>
        </div>

        <div className="d-flex align-items-center gap-2 bg-white px-3 py-2 rounded-pill shadow-sm border" style={{ borderColor: '#f1f5f9' }}>
          <Globe size={18} color="#64748b" />
          <select 
            className="form-select border-0 shadow-none fw-bold text-dark p-0 pe-4"
            style={{ cursor: 'pointer', backgroundColor: 'transparent', outline: 'none' }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="LKR">LKR (Rs)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="AUD">AUD (A$)</option>
          </select>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 text-white p-4 rounded-4 shadow-sm" style={{ 
            backgroundColor: isOverBudget ? '#ef4444' : '#14a3e4', 
            backgroundImage: `url(${bg1})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '120px',
            transition: 'background-color 0.3s ease'
          }}>
            <div className="d-flex align-items-center gap-3 h-100">
              <Sigma size={48} color="#ffffff" />
              <div>
                <span className="small opacity-90 d-block mb-1">Total Expenses</span>
                {/*  DYNAMICALLY SCALED TOTAL EXPENSES */}
                <h3 className="fw-bold mb-0">{formatAmount(dashboardStats.totalExpenses)}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 text-white p-4 rounded-4 shadow-sm" style={{ 
            backgroundColor: '#1cbd74', 
            backgroundImage: `url(${bg2})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '120px'
          }}>
            <div className="d-flex align-items-center gap-3 h-100">
              <User size={48} color="#ffffff" />
              <div>
                <span className="small opacity-90 d-block mb-1">Per Person (Avg)</span>
                {/*  DYNAMICALLY SCALED PER PERSON AVERAGE */}
                <h3 className="fw-bold mb-0">{formatAmount(dashboardStats.perPerson)}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 text-white p-4 rounded-4 shadow-sm" style={{ 
            backgroundColor: '#8a3ffc', 
            backgroundImage: `url(${bg3})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '120px'
          }}>
            <div className="d-flex align-items-center gap-3 h-100">
              <Grid size={48} color="#ffffff" />
              <div>
                <span className="small opacity-90 d-block mb-1">Categories</span>
                <h3 className="fw-bold mb-0">{uniqueCategories}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  DYNAMICALLY SCALED OVER-BUDGET ALERT BANNER */}
      {isOverBudget && (
        <div className="alert border-0 rounded-4 mb-4 d-flex align-items-center gap-3 shadow-sm" style={{ backgroundColor: '#fef2f2', color: '#991b1b', border: '1px solid #fecaca' }}>
          <div className="bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', boxShadow: '0 2px 4px rgba(220, 38, 38, 0.1)' }}>
            <AlertCircle size={24} color="#dc2626" />
          </div>
          <div>
            <h6 className="fw-bold mb-1" style={{ fontSize: '1.05rem' }}>Budget Exceeded</h6>
            <p className="mb-0" style={{ fontSize: '0.95rem' }}>
              Your group has exceeded the estimated trip budget of <strong>{formatAmount(tripBudget)}</strong>. You are currently overspent by <strong>{formatAmount(overBudgetAmount)}</strong>.
            </p>
          </div>
        </div>
      )}

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <h4 className="fw-bold text-dark mb-4" style={{ fontSize: '1.3rem' }}>Add Expense</h4>
            
            <form onSubmit={handleAddExpense}>
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary mb-1">Details (Where & What?) *</label>
                <input 
                  type="text" 
                  className="form-control bg-light border-0 py-2.5 px-3 text-dark rounded-3 shadow-none" 
                  placeholder="e.g., Dinner at Kandy Seafood, or 10-Seater Van Rental"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required 
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary mb-1">Amount ({currency}) *</label>
                <input 
                  type="number" 
                  className="form-control bg-light border-0 py-2.5 px-3 text-dark rounded-3 shadow-none" 
                  placeholder="e.g., 1500"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required 
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary mb-1">Category *</label>
                <select 
                  className="form-select bg-light border-0 py-2.5 px-3 text-dark rounded-3 shadow-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select category</option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Transport">Transport (Car, Van, Train)</option>
                  <option value="Activities">Activities & Tickets</option>
                  <option value="Food">Food & Dining</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-secondary mb-1">Paid By *</label>
                <select 
                  className="form-select bg-light border-0 py-2.5 px-3 text-dark rounded-3 shadow-none"
                  value={paidBy}
                  onChange={(e) => setPaidBy(e.target.value)}
                  required
                >
                  <option value="">Select who paid...</option>
                  {tripMembers.map(member => (
                    <option key={member.id || member._id} value={member.id || member._id}>
                      {member.firstName} {member.lastName}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn w-100 py-2.5 fw-semibold border-0 rounded-3 text-white" style={{ backgroundColor: '#0EA5E9' }}>
                Add Expense
              </button>
            </form>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
            <h4 className="fw-bold text-dark mb-4" style={{ fontSize: '1.3rem' }}>Expenses by Category</h4>
            
            <div className="d-flex flex-column gap-4">
              {['Accommodation', 'Transport', 'Activities', 'Food'].map((cat) => (
                <div key={cat}>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-semibold text-dark">{cat}</span>
                    {/*  DYNAMICALLY SCALED CATEGORY PROGRESS TEXT */}
                    <span className="fw-bold" style={{ color: '#0EA5E9' }}>
                      {formatAmount(categoryTotals[cat])}
                    </span>
                  </div>
                  <div className="progress rounded-pill" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar rounded-pill" 
                      role="progressbar" 
                      style={{ width: getCategoryWidth(categoryTotals[cat]), backgroundColor: '#0EA5E9', transition: 'width 0.5s ease-in-out' }} 
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                            (item.category || '').includes('Accommodation') ? 'bg-primary bg-opacity-10 text-primary' :
                            (item.category || '').includes('Transport') ? 'bg-info bg-opacity-10 text-info' :
                            (item.category || '').includes('Activities') ? 'bg-warning bg-opacity-10 text-warning' :
                            'bg-danger bg-opacity-10 text-danger'
                          }`}>
                            {item.category || 'Other'}
                          </span>
                        </td>
                        <td className="py-3 border-0 text-secondary">{getMemberName(item.paidBy)}</td>
                        <td className="py-3 border-0 text-secondary">
                          {item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Today'}
                        </td>
                        {/* 🚀 DYNAMICALLY SCALED TABLE ITEM AMOUNT */}
                        <td className="py-3 border-0 text-end fw-bold">{formatAmount(item.amount)}</td>
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
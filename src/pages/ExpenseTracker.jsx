// src/pages/ExpenseTracker.jsx
import React, { useState } from 'react';

function ExpenseTracker() {
  // Input form field states
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [paidBy, setPaidBy] = useState('');

  // Local mock state array utilizing String IDs to line up with MongoDB expectations[cite: 2]
  const [expenses, setExpenses] = useState([
    {
      expenseId: "65ab3d111234567890abcdef", 
      description: 'Heritance Kandalama Hotel (3 nights)',
      category: 'Accommodation',
      paidBy: 'Raj Patel',
      date: 'Jun 15, 2026',
      amount: 360,
      perPerson: 90.00
    },
    {
      expenseId: "65ab3d221234567890abcdef",
      description: 'Van rental to Sigiriya',
      category: 'Transport',
      paidBy: 'Sarah Kumar',
      date: 'Jun 15, 2026',
      amount: 80,
      perPerson: 20.00
    },
    {
      expenseId: "65ab3d331234567890abcdef",
      description: 'Sigiriya entrance tickets',
      category: 'Activities',
      paidBy: 'Emma Wilson',
      date: 'Jun 16, 2026',
      amount: 120,
      perPerson: 30.00
    },
    {
      expenseId: "65ab3d441234567890abcdef",
      description: 'Lunch at Mango Mango',
      category: 'Food',
      paidBy: 'David Chen',
      date: 'Jun 16, 2026',
      amount: 72,
      perPerson: 18.00
    },
    {
      expenseId: "65ab3d551234567890abcdef",
      description: 'Dambulla Cave Temple tickets',
      category: 'Activities',
      paidBy: 'Raj Patel',
      date: 'Jun 17, 2026',
      amount: 40,
      perPerson: 10.00
    }
  ]);

  // Handle form submission to point to Methsara's backend endpoints later[cite: 2]
  const handleAddExpense = (e) => {
    e.preventDefault();
    console.log("Submitting new expense element to core network pipeline.");
    console.log("Form Payload values:", { description, amount: parseFloat(amount), category, paidBy });
  };

  return (
    <div className="container-fluid px-0 py-2">
      
      {/* Header Info */}
      <div className="mb-4">
        <h2 className="fw-bold text-dark mb-1" style={{ fontSize: '2.2rem', letterSpacing: '-0.5px' }}>Expense Tracker</h2>
        <p className="text-secondary" style={{ fontSize: '1.05rem' }}>Track and split trip expenses with your travel group</p>
      </div>

      {/* Top Total Statistics Cards Dashboard Grid */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 text-white p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#14a3e4' }}>
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-3 bg-white bg-opacity-25 p-3 fs-3 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>$</div>
              <div>
                <span className="small opacity-90 d-block mb-1">Total Expenses</span>
                <h3 className="fw-bold mb-0">$672</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 text-white p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#1cbd74' }}>
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-3 bg-white bg-opacity-25 p-3 fs-3 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>👥</div>
              <div>
                <span className="small opacity-90 d-block mb-1">Per Person</span>
                <h3 className="fw-bold mb-0">$168</h3>
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
                <h3 className="fw-bold mb-0">4</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form and Presentation Layout Break split */}
      <div className="row g-4">
        
        {/* Left Input Form Column block */}
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
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-secondary mb-1">Paid By *</label>
                <select 
                  className="form-select bg-light border-0 py-2.5 px-3 text-muted rounded-3 shadow-none"
                  value={paidBy}
                  onChange={(e) => setPaidBy(e.target.value)}
                  required
                >
                  <option value="">Select member</option>
                  <option value="Raj Patel">Raj Patel</option>
                  <option value="Sarah Kumar">Sarah Kumar</option>
                  <option value="Emma Wilson">Emma Wilson</option>
                  <option value="David Chen">David Chen</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2.5 fw-semibold border-0 rounded-3 text-white" style={{ backgroundColor: '#14a3e4' }}>
                Add Expense
              </button>
            </form>
          </div>
        </div>

        {/* Right Categories Bars and Details Grid Table stack */}
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
            <h4 className="fw-bold text-dark mb-4" style={{ fontSize: '1.3rem' }}>Expenses by Category</h4>
            
            <div className="d-flex flex-column gap-4">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="fw-semibold text-dark">Accommodation</span>
                  <span className="fw-bold text-primary" style={{ color: '#14a3e4' }}>$360</span>
                </div>
                <div className="progress rounded-pill" style={{ height: '8px' }}>
                  <div className="progress-bar rounded-pill" role="progressbar" style={{ width: '53.5%', backgroundColor: '#14a3e4' }} aria-valuenow="360" aria-valuemin="0" aria-valuemax="672"></div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="fw-semibold text-dark">Transport</span>
                  <span className="fw-bold text-primary" style={{ color: '#14a3e4' }}>$80</span>
                </div>
                <div className="progress rounded-pill" style={{ height: '8px' }}>
                  <div className="progress-bar rounded-pill" role="progressbar" style={{ width: '12%', backgroundColor: '#14a3e4' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="672"></div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="fw-semibold text-dark">Activities</span>
                  <span className="fw-bold text-primary" style={{ color: '#14a3e4' }}>$160</span>
                </div>
                <div className="progress rounded-pill" style={{ height: '8px' }}>
                  <div className="progress-bar rounded-pill" role="progressbar" style={{ width: '23.8%', backgroundColor: '#14a3e4' }} aria-valuenow="160" aria-valuemin="0" aria-valuemax="672"></div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="fw-semibold text-dark">Food</span>
                  <span className="fw-bold text-primary" style={{ color: '#14a3e4' }}>$72</span>
                </div>
                <div className="progress rounded-pill" style={{ height: '8px' }}>
                  <div className="progress-bar rounded-pill" role="progressbar" style={{ width: '10.7%', backgroundColor: '#14a3e4' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="672"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ledger Table Section */}
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <h4 className="fw-bold text-dark mb-4" style={{ fontSize: '1.3rem' }}>All Expenses</h4>
            
            <div className="table-responsive">
              <table className="table align-middle border-0 mb-0">
                <thead>
                  <tr className="text-secondary small fw-semibold border-bottom">
                    <th className="pb-3 border-0" style={{ minWidth: '220px' }}>Description</th>
                    <th className="pb-3 border-0">Category</th>
                    <th className="pb-3 border-0">Paid By</th>
                    <th className="pb-3 border-0">Date</th>
                    <th className="pb-3 border-0 text-end">Amount</th>
                    <th className="pb-3 border-0 text-end">Per Person</th>
                    <th className="pb-3 border-0 text-center" style={{ minWidth: '90px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((item) => (
                    <tr key={item.expenseId} className="border-bottom text-dark" style={{ fontSize: '0.95rem' }}>
                      <td className="py-3 border-0 fw-medium">{item.description}</td>
                      <td className="py-3 border-0">
                        <span className={`badge rounded-pill px-2.5 py-1.5 fw-semibold ${
                          item.category === 'Accommodation' ? 'bg-primary bg-opacity-10 text-primary' :
                          item.category === 'Transport' ? 'bg-info bg-opacity-10 text-info' :
                          item.category === 'Activities' ? 'bg-warning bg-opacity-10 text-warning' :
                          'bg-danger bg-opacity-10 text-danger'
                        }`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="py-3 border-0 text-secondary">{item.paidBy}</td>
                      <td className="py-3 border-0 text-secondary">{item.date}</td>
                      <td className="py-3 border-0 text-end fw-bold">${item.amount}</td>
                      <td className="py-3 border-0 text-end fw-semibold text-success">${item.perPerson.toFixed(2)}</td>
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

          </div>
        </div>

      </div>

    </div>
  );
}

export default ExpenseTracker;
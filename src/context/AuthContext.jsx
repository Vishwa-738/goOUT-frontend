// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api'; // This brings in your perfectly configured Axios instance!

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if a user session already exists when the application initializes
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse saved user credentials session data", e);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // ==========================================
  // REAL API LOGIN HANDLER
  // ==========================================
  const login = async (email, password) => {
    try {
      // 1. Send the login request to the live Spring Boot backend
      const response = await api.post('/api/v1/auth/login', { email, password });
      
      // 2. Extract the token directly from response.data!
      const token = response.data; 
      
      // Note: Since the backend only sends the token string, we just save the email for the UI.
      const userData = { email }; 

      // 3. Save to localStorage so you stay logged in after a refresh
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // 4. Update the React context state
      setUser(userData);

      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, message: error.response?.data?.message || "Login failed. Check your credentials." };
    }
  };

  // Logout handler: Flushes out authorization parameters from context and browser storage
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom hook for rapid consumption across components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be utilized within an active AuthProvider wrapper framework scope');
  }
  return context;
}
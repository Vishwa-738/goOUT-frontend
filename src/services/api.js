// src/services/api.js
import axios from 'axios';

// Automatically detect the environment:
// 1. If VITE_API_BASE_URL is explicitly set in an .env file, use it.
// 2. If running locally (import.meta.env.DEV is true), default to localhost:8080.
// 3. Otherwise (production/cloud build), default to your live Render backend.
const BASE_URL = 'https://uneatable-viewable-suitable.ngrok-free.dev';
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Keeps ngrok warning bypass just in case you ever test with ngrok again
    'ngrok-skip-browser-warning': 'true' 
  },
  withCredentials: true // Important if your backend uses session cookies or Spring Security CORS
});

// Request Interceptor: Automatically attach JWT Token if logged in
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || localStorage.getItem('jwt_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle global errors (like 401 Unauthorized or 403 Forbidden)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized! You may need to log in again.");
      // Optional: Redirect to login or clear token if session expired
      // localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default api;
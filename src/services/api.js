// src/services/api.js
import axios from 'axios';

// 🚀 NGROK URL: Pointing to Methsara's local Spring Boot backend
const BASE_URL = 'https://another-freezing-glimmer.ngrok-free.dev/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // 🌟 THE MAGIC FIX: This tells Ngrok to skip the HTML warning page!
    'ngrok-skip-browser-warning': 'true' 
  },
  withCredentials: true 
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

// Response Interceptor: Handle global errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized! You may need to log in again.");
    }
    return Promise.reject(error);
  }
);

export default api;
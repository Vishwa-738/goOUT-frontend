// src/services/api.js
import axios from 'axios';

// 🚀 STRICTLY LOCAL: Pointing directly to your local Spring Boot backend on port 8080
const BASE_URL = 'https://uneatable-viewable-suitable.ngrok-free.dev/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
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
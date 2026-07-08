import axios from 'axios';

// Create a configured Axios instance
const API = axios.create({
  // Using Vite's environment variables. 
  // If the env variable isn't set, it safely falls back to the local backend port.
  // Force it to use the live backend instead of localhost!
baseURL: import.meta.env.VITE_API_BASE_URL || 'https://goout-br62.onrender.com',  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor to automatically attach the JWT token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // 🚀 The exact line Methsara provided to bypass the Ngrok warning block!
  config.headers['ngrok-skip-browser-warning'] = 'true';
  
  return config;
});

export default API;
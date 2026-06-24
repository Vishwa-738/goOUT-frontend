import axios from 'axios';

// Create a configured Axios instance
const API = axios.create({
  // Using Vite's environment variables. 
  // If the env variable isn't set, it safely falls back to the local backend port.
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor to automatically attach the JWT token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
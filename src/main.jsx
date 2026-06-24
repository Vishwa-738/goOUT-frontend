import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. Import your AuthProvider here!
import { AuthProvider } from './context/AuthContext' 

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap your entire App inside the AuthProvider umbrella */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
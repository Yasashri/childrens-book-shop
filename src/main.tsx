import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster 
      position="top-center"
      toastOptions={{
        style: {
          background: '#FFF9E6',
          border: '2px solid #FFD93D',
          borderRadius: '1rem',
          fontFamily: 'Nunito, sans-serif',
        },
      }}
    />
  </StrictMode>,
)

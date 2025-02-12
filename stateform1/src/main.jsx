import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Resume from './Components/resume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Resume/>
  </StrictMode>,
)

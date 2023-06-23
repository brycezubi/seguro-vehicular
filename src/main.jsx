import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CotizadorProvider } from './context/CotizadorContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CotizadorProvider>
    <App />
  </CotizadorProvider>
)

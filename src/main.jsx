import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AlpacaContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <AlpacaContextProvider>
    
      <App />
  </AlpacaContextProvider >
</React.StrictMode>,
)

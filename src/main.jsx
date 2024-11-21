import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchState from './Context/SearchState.jsx'

createRoot(document.getElementById('root')).render(
 
    <SearchState>
        <App />
    </SearchState>
 
)

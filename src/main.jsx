import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from '../src/contexts/User.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <UserProvider>
        <App />
    </UserProvider>

)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Routes from './routes/routes.js'
import Menu from './Pages/Menu.jsx'
import Home from './Pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </BrowserRouter>


);




 


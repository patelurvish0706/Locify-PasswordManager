import React from 'react'
import { useState } from 'react'
import './App.css'

import Register from './components/Register'
import Login from './components/Login'
import AddSite from './components/AddSite'
import Verify from './components/Verify'
import SiteDetails from './components/SiteDetails'
import Home from './components/Home'
import { Routes, Route, Link } from 'react-router'

const App = () => {
  return (
    <>
      <div className="page">
        <div id="header">
          <p>🔐 Locify - A SafeCase for Password</p>
          <div id="links">
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
          </div>
        </div>

        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AddSite" element={<AddSite />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/SiteDetails" element={<SiteDetails />} />
        </Routes> */}

        <Login />
        <Home />
        <Register />
        <Login />
        <AddSite />
        <Verify />
        <SiteDetails />

        <div id="footer">
          <p>&copy; Locify - Secure Password Manager. 2025 - Urvish Patel</p>
        </div>
      </div>
    </>
  )
}

export default App

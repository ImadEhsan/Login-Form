

import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import SingleProduct from './screens/SingleProduct'
import Header from './components/Header'
import Aboutus from './screens/Aboutus'
import Contact from './screens/Contact'
import Login from './screens/Login'

import { ToastContainer } from 'react-toastify';
import Signup from './screens/Signup'
import ActivateAcoount from './screens/Dashboard/auth/ActivateAcoount'
import Dashboard from './screens/Dashboard/Dashboard'



function App() {
  return (

    <Router className="" >
      <ToastContainer/>
      {/* <Header />
      <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct/>} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/verification/:token" element={<ActivateAcoount />} />


      </Routes>
    </Router>

  )
}

export default App
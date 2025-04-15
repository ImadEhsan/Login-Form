


import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='bg-red-600 p-4'>

      <h1 className='text-center text-white text-5xl font-extrabold italic
      hover:text-gray-300 hover:animate-pulse'> Imad@React </h1>
      
    </div>

          <div className="bg-green-700 p-3 flex items-center gap-5 text-white">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/products"> Products </NavLink>
          <NavLink to="/aboutus"> About us </NavLink>
          <NavLink to="/contactus"> Contact us </NavLink>
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/signup"> Signup </NavLink>
          </div>



    </>
  )
}

export default Header

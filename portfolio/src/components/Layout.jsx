import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function Layout() {
  return (
    <div className='bg-black min-h-screen'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout       
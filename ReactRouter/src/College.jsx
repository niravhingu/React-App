import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


function College() {
  return (
    <>
    <div className='flex flex-col items-center justify-top gap-2 bg-white text-black w-screen'>
        <h1 className='text-3xl font-bold'>College Page</h1>
        <h2><button className='cursor-pointer'><NavLink to="/">Go To Back</NavLink></button></h2>
    </div>
    <div className='flex  justify-top gap-4 bg-white text-black ml-100'>
        <NavLink to="" className='text-blue-500 hover:underline'>Student</NavLink>
        <NavLink to="Department" className='text-blue-500 hover:underline'>Department</NavLink>
        <NavLink to="Details" className='text-blue-500 hover:underline'>Details</NavLink>
    </div>
    <div className='mt-10 text-center'>

        <Outlet />
    </div>
    
    </>
  )
}

export default College
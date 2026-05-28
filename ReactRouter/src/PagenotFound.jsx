import React from 'react'


function PagenotFound() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-4 bg-white text-black'>
        <img src="https://cdn-icons-png.flaticon.com/512/404/404586.png" alt="404" className='w-48' />
        <h1 className='text-3xl font-bold'>PagenotFound</h1>
        <h2 className='text-2xl'>404 Page</h2>

    </div>
  )
}

export default PagenotFound
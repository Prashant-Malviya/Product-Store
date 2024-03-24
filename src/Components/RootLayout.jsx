import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function RootLayout() {
  return (
    <div className='bg-black'>
      
      <Navbar />
      
      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default RootLayout

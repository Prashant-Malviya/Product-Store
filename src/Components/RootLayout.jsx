import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import store from '../store/store'

function RootLayout() {
  return (
    <div className='bg-black w-full h-screen'>
      <Provider store={store}>

      <Navbar />
      
      <main>
        <Outlet />
      </main>

      </Provider>

      

    </div>
  )
}

export default RootLayout

import { useState } from 'react'
import Products from './Components/Products'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './Components/RootLayout'
import Dashboard from './Components/Dashboard'
import Cart from './Components/Cart'


function App() {
  
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route index element={<Dashboard />} ></Route>
      <Route path="/cart" element={<Cart />}></Route>

    </Route>
  ))

  return (
   <>

    <RouterProvider router={router} />
    {/* <Products /> */}
   </>
  )
}

export default App

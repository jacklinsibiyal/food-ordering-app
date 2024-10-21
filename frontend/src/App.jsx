import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/cart/cart'
import placeorder from './pages/place order/placeorder'
const App = () => {
  return (
    <>
    <div className='app'> 
     <Navbar/>
     <Routes>
      < Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>} />
     </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App

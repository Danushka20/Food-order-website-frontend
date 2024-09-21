import React, { useState } from 'react'
import Navbar from './Compenent/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import Place from './pages/place order/place.jsx'
import Footer from './Compenent/Footer/Footer.jsx'
import Loginpopup from './Compenent/Loginpopup/Loginpopup.jsx'




const App = () => {

  const [showLogin,setShowLogin]=useState(false)

  return (
    <>
      {showLogin?<Loginpopup setShowLogin={setShowLogin} />:<></>}
      <div className='app'>

        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Place />} />


        </Routes>

      </div>
    <Footer/>
    </>
  )
}

export default App

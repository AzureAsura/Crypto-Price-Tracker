import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Coin from './pages/Coin/Coin.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <div className='min-h-screen text-white bg-gradient-to-br from-[#960200] to-[#1c1018]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
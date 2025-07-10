import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Result from './pages/result'
import Footer from './components/Footer'
import BuyCredit from './pages/BuyCredit'



const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* created 3 routes for 3 pages */}
      <NavBar />                         {/* so as it appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />  
      </Routes>
      <Footer />
    </div>
  )
}

export default App
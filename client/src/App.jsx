import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* created 3 routes for 3 pages */}
      <NavBar />                         {/* so as it appears on all pages */}
      
      <Routes>
        <Route path="/" element={<Home></Home>} /> 
        <Route path="/buy" element={<div>Buy Credit</div>} />
        <Route path="/result" element={<div>Result</div>} />
      </Routes>
    </div>
  )
}

export default App
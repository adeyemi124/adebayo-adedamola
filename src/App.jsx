import React from 'react'
import Homepage from './components/Homepage'
import Gallery from './components/Gallery'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
  <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </>
      
  )
}

export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Tools from './pages/Tools'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

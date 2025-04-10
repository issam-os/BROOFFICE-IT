import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = () => <h1>Bienvenue sur BROOFFICE IT 📚💻</h1>

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

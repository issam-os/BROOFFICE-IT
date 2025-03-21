import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Books from './screens/Books';
import ITTools from "./screens/ITTools";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/it-tools" element={<ITTools />} />
      </Routes>
    </Router>
  );
}

export default App;

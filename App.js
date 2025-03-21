import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Books from './screens/Books';
import Tools from './screens/Tools';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;

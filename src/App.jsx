import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';




function App() {
  return (
    <Router>
      <div> {/* Adjust the padding value as needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/blogs" element={<Blogs />} />
          <Route path="/events/blogs/(:id)" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
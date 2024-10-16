import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Loading from './components/loading';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Products from './components/Products';
import Safety from './components/Safety';
import Support from './components/Support';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [])

  return (
    <Router>
      {loading ? (<Loading />) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/support" element={<Support />} />

          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;

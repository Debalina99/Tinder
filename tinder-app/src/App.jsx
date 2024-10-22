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
import PrivateRoute from './components/PrivateRoute';
import Feed from './components/Feed';
import Welcome from './components/Welcome';
import EditProfile from './components/EditProfile';
import Logout from './components/Logout';

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
            <Route path="/feed" element={<PrivateRoute><Feed/></PrivateRoute>} />
            <Route path="/welcome" element={<PrivateRoute><Welcome/></PrivateRoute>} />
            <Route path="/profile/edit" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
            <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;

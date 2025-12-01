import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
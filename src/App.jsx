import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import ScrollOnTop from './ScrollOnTop';



const App = () => {
  return (
    <div className="xl:container xl:mx-auto">
      <Router >
      <Navbar />
      <ScrollOnTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
};

export default App;

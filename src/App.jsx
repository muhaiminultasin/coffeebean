import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Footer from './Components/Footer';
import Order from './Pages/Order';
import ScrollOnTop from './ScrollOnTop';
import Dish from './Pages/Dish';
import DishDetails from './Pages/DishDetails';



const App = () => {
  return (
    <div className=" bg-[#130F0C]">
      <Router >
      <Navbar />
      <ScrollOnTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/dish/:id" element={<DishDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
};

export default App;

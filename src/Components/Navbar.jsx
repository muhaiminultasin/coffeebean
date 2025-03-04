import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full xl:container z-50">
      <div className=" flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="text-xl font-bold">The Coffee Bean</div>
        
        {/* Navigation List */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className=" font-medium text-gray-700 hover:text-gray-900">Home</NavLink>
          <NavLink to="/about" className=" font-medium text-gray-700 hover:text-gray-900">About</NavLink>
          <NavLink to="/contact" className=" font-medium text-gray-700 hover:text-gray-900">Contact</NavLink>
        </div>
        
        {/* Icons Section */}
        <div className="hidden md:flex space-x-4">
          <button className="p-2 bg-gray-200 rounded-full">🔍</button>
          <button className="p-2 bg-gray-200 rounded-full">🔔</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <NavLink to="/" className="block p-4 border-b text-gray-700 hover:text-gray-900">Home</NavLink>
          <NavLink to="/about" className="block p-4 border-b text-gray-700 hover:text-gray-900">About</NavLink>
          <NavLink to="/services" className="block p-4 border-b text-gray-700 hover:text-gray-900">Services</NavLink>
          <NavLink to="/contact" className="block p-4 border-b text-gray-700 hover:text-gray-900">Contact</NavLink>
          <div className="flex justify-center space-x-4 p-4">
            <button className="p-2 bg-gray-200 rounded-full">🔍</button>
            <button className="p-2 bg-gray-200 rounded-full">🔔</button>
          </div>
        </div>
      )}
    </nav>
  );
}

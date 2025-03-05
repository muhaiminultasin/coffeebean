import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed w-full xl:container z-50">
      <div className=" flex justify-between items-center p-4">
        {/* Logo Section */}
        <div onClick={() => {navigate("/")}} className="text-xl font-bold cursor-pointer">The Coffee Bean</div>
        
        {/* Navigation List */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className=" font-medium text-gray-700 hover:text-gray-900">Home</NavLink>
          <NavLink to="/about" className=" font-medium text-gray-700 hover:text-gray-900">About</NavLink>
          <NavLink to="/contact" className=" font-medium text-gray-700 hover:text-gray-900">Contact</NavLink>
        </div>
        
        {/* Icons Section */}
        <ul className="hidden md:flex justify-center space-x-4 p-4  ">
            <li className="cursor-pointer"><a href="https://www.facebook.com/muhaiminultasin" target="_blank"><FaFacebookF/></a></li>
            <li className="cursor-pointer"><a href="https://www.linkedin.com/in/tasinmuhaiminul1/" target="_blank"><FaLinkedinIn/></a></li>
          </ul>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <NavLink onClick={() => {setIsOpen(!isOpen)}} to="/" className="block p-4 border-b text-gray-700 hover:text-gray-900">Home</NavLink>
          <NavLink onClick={() => {setIsOpen(!isOpen)}} to="/about" className="block p-4 border-b text-gray-700 hover:text-gray-900">About</NavLink>
          <NavLink onClick={() => {setIsOpen(!isOpen)}} to="/contact" className="block p-4 border-b text-gray-700 hover:text-gray-900">Contact</NavLink>
          <ul className="flex justify-center space-x-4 p-4">
            <li>fb</li>
            <li>lnkdn</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

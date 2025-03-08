import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full xl:container z-50">
      <div className="flex justify-between items-center p-4">
        {/* Logo Section */}
        <div onClick={() => { navigate("/"); }} className="text-xl font-bold cursor-pointer">
          The Coffee Bean
        </div>

        {/* Navigation List */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="font-medium text-gray-700 hover:text-gray-900">Home</NavLink>
          <NavLink to="/menu" className="font-medium text-gray-700 hover:text-gray-900">Menu</NavLink>
          <NavLink to="/dish" className="font-medium text-gray-700 hover:text-gray-900">Dishes</NavLink>
          <NavLink to="/order" className="font-medium text-gray-700 hover:text-gray-900">Order</NavLink>
          <NavLink to="/about" className="font-medium text-gray-700 hover:text-gray-900">About</NavLink>
        </div>

        {/* Icons Section */}
        <ul className="hidden md:flex justify-center space-x-4 p-4">
          <li className="cursor-pointer">
            <a href="https://www.facebook.com/muhaiminultasin" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.linkedin.com/in/tasinmuhaiminul1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden transition-all delay-700" onClick={toggleNav}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden bg-white shadow-md transform transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <NavLink onClick={closeNav} to="/" className="block p-4 border-b text-gray-700 hover:text-gray-900">Home</NavLink>
          <NavLink onClick={closeNav} to="/menu" className="block p-4 border-b text-gray-700 hover:text-gray-900">Menu</NavLink>
          <NavLink onClick={closeNav} to="/dish" className="block p-4 border-b text-gray-700 hover:text-gray-900">Dishes</NavLink>
          <NavLink onClick={closeNav} to="/order" className="block p-4 border-b text-gray-700 hover:text-gray-900">Order</NavLink>
          <NavLink onClick={closeNav} to="/about" className="block p-4 border-b text-gray-700 hover:text-gray-900">About</NavLink>
          <ul className="flex justify-center space-x-4 p-4">
            <li>
              <a href="https://www.facebook.com/muhaiminultasin" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tasinmuhaiminul1/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

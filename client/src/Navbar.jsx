import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-pink-700 text-white shadow-md">
      <Link to="/" 
  className="text-4xl font-semibold text-white mb-1"
  style={{ fontFamily: "'Playfair Display', serif" }}>
    Heaven&apos;s Copy
 </Link>

      <ul className="flex space-x-6 text-sm font-medium">
        <li>
          <Link to="/UserLogin" className="hover:text-pink-200 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Stories" className="hover:text-pink-200 transition-colors duration-200">
            Stories
          </Link>
        </li>
          <li>
             <Link to="/About" className="hover:text-pink-200 transition-colors duration-200">
            AboutUs
          </Link>
          </li>

             <li>
             <Link to="/UserProfile" className="hover:text-pink-200 transition-colors duration-200">
            My Profile
          </Link>
          </li>

            <li>
             <Link to="/Contact" className="hover:text-pink-200 transition-colors duration-200">
           Contact
          </Link>
          </li>

      </ul>
    </nav>
  );
};

export default Navbar;

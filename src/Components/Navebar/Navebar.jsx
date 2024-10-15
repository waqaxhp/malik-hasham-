
import React, { useState } from "react";
import Logo from "../Assets/MALIK LOGO BIG.png";
import "./Navebar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const [activeLink, setActiveLink] = useState("Home"); // Track active link
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // State for Resources dropdown

  // Toggle for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle for Resources dropdown
  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  // Function to set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="p-4 nav-bar">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="logo-com" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Services", "Projects", "Consulting"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`} // Anchor link to sections
              className={`text-white hover:text-yellow-500 transition duration-300 ease-in-out ${
                activeLink === link ? "text-yellow-500 font-bold" : ""
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}

          {/* Dropdown for Resources */}
          <div className="relative group">
            <button
              className="text-white hover:text-yellow-500 flex items-center transition duration-300 ease-in-out"
              onClick={toggleResources}
            >
              More <span className="ml-1">▼</span>
            </button>
            {/* Dropdown content */}
            <div
              className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${
                isResourcesOpen ? "block" : "hidden"
              }`}
            >
              <a
                href="#quality"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                onClick={() => handleLinkClick("Quality")}
              >
                Quality
              </a>
              <a
                href="#consultants"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                onClick={() => handleLinkClick("Consultants")}
              >
                Consultants
              </a>
              <a
                href="#contactUs"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                onClick={() => handleLinkClick("ContactUs")}
              >
                Contact Us
              </a>
              <a
                href="#findUs"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                onClick={() => handleLinkClick("ContactUs")}
              >
                Find Us
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        {["Home", "Services", "Projects", "Consulting"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`block px-4 py-2 text-white hover:bg-teal-600 transition duration-300 ease-in-out ${
              activeLink === link ? "bg-yellow-500" : ""
            }`}
            onClick={() => {
              handleLinkClick(link);
              toggleMenu(); // Close menu on click
            }}
          >
            {link}
          </a>
        ))}

        {/* Resources dropdown for mobile */}
        <div className="block px-4 py-2 text-white hover:bg-teal-600">
          <button
            onClick={toggleResources}
            className="flex items-center w-full"
          >
            More <span className="ml-1">▼</span>
          </button>
          {isResourcesOpen && (
            <div className="bg-white shadow-lg rounded-lg">
              <a
                href="#quality"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                onClick={() => handleLinkClick("Quality")}
              >
                Quality
              </a>
              <a
                href="#consultants"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                onClick={() => handleLinkClick("Consultants")}
              >
                Consultants
              </a>
              <a
                href="#contactUs"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                onClick={() => handleLinkClick("ContactUs")}
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

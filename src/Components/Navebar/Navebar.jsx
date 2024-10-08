import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Import Link for navigation
import Logo from '../Assets/Navbar logo.png.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen)
  }

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <nav className="bg-teal-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mr-2" />
          <span className="text-white text-2xl font-bold">FinTax</span>
        </div>

        <div className="hidden md:flex space-x-6">
          {['Home', 'Services', 'Projects', 'Consulting', 'Pricing'].map(
            (link) => (
              <Link
                key={link}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className={`text-white hover:text-yellow-500 transition duration-300 ease-in-out ${
                  activeLink === link
                    ? 'text-yellow-500 font-bold'
                    : 'hover:underline'
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </Link>
            )
          )}

          <div className="relative group">
            <button
              className="text-white hover:text-yellow-500 flex items-center transition duration-300 ease-in-out"
              onClick={toggleResources}
            >
              Resources <span className="ml-1">▼</span>
            </button>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${
                isResourcesOpen ? 'block' : 'hidden'
              }`}
            >
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
              >
                Contact
              </Link>
              <Link
                to="/career"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
              >
                Career
              </Link>
            </div>
          </div>
        </div>

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
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        {['Home', 'Services', 'Projects', 'Consulting', 'Pricing'].map(
          (link) => (
            <Link
              key={link}
              to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
              className={`block px-4 py-2 text-white hover:bg-teal-600 transition duration-300 ease-in-out ${
                activeLink === link ? 'bg-yellow-500' : ''
              }`}
              onClick={() => {
                handleLinkClick(link)
                toggleMenu()
              }}
            >
              {link}
            </Link>
          )
        )}

        <div className="block px-4 py-2 text-white hover:bg-teal-600">
          <button
            onClick={toggleResources}
            className="flex items-center w-full"
          >
            Resources <span className="ml-1">▼</span>
          </button>
          {isResourcesOpen && (
            <div className="bg-white shadow-lg rounded-lg">
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
              >
                Contact
              </Link>
              <Link
                to="/career"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
              >
                Career
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

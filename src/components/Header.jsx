import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          BROOFFICE IT
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300'
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300'
            }
          >
            Livres
          </NavLink>
          <NavLink
            to="/tools"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300'
            }
          >
            Outils IT
          </NavLink>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none text-yellow-400"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-3">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? 'block text-yellow-400 font-semibold' : 'block hover:text-yellow-300'
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/books"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? 'block text-yellow-400 font-semibold' : 'block hover:text-yellow-300'
            }
          >
            Livres
          </NavLink>
          <NavLink
            to="/tools"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? 'block text-yellow-400 font-semibold' : 'block hover:text-yellow-300'
            }
          >
            Outils IT
          </NavLink>
        </div>
      )}
    </header>
  )
}

export default Header

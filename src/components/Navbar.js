import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, BookOpenIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpenIcon className="h-8 w-8 text-blue-600" />
            <Link to="/" className="ml-2 text-xl font-semibold">BiblioTech</Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Accueil</Link>
            <Link to="/books" className="text-gray-600 hover:text-blue-600">Livres</Link>
            <Link to="/categories" className="text-gray-600 hover:text-blue-600">Catégories</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">À propos</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
              <UserIcon className="h-5 w-5 inline-block mr-1" />
              Connexion
            </Link>
            <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Inscription
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Squares2X2Icon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Accueil</Link>
            <Link to="/books" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Livres</Link>
            <Link to="/categories" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Catégories</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">À propos</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 
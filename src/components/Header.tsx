
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-xl md:text-2xl font-bold text-wellness-violet">
                Adhi Mind Wellness Centre
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 font-medium ${
                isActive('/') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 font-medium ${
                isActive('/about') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors duration-200 font-medium ${
                isActive('/services') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              Services
            </Link>
            <Link
              to="/approach"
              className={`transition-colors duration-200 font-medium ${
                isActive('/approach') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              Approach
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-200 font-medium ${
                isActive('/contact') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-wellness-violet hover:bg-wellness-violet/90 text-white px-6 py-2 rounded-full transition-all duration-200">
                Book a Session
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-wellness-violet"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-left transition-colors duration-200 font-medium ${
                  isActive('/') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-left transition-colors duration-200 font-medium ${
                  isActive('/about') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-left transition-colors duration-200 font-medium ${
                  isActive('/services') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/approach"
                className={`text-left transition-colors duration-200 font-medium ${
                  isActive('/approach') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Approach
              </Link>
              <Link
                to="/contact"
                className={`text-left transition-colors duration-200 font-medium ${
                  isActive('/contact') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-wellness-violet hover:bg-wellness-violet/90 text-white px-6 py-2 rounded-full transition-all duration-200 w-fit">
                  Book a Session
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

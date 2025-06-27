
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleNavClick}>
              <img 
                src="/lovable-uploads/c7ed723a-aa7b-4557-81e4-e192a1dfb969.png" 
                alt="Adhi Mind Wellness Centre Logo" 
                className="h-12 md:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-center">
            <Link
              to="/"
              onClick={handleNavClick}
              className={`transition-colors duration-200 font-medium ${
                isActive('/') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={`transition-colors duration-200 font-medium ${
                isActive('/about') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={handleNavClick}
              className={`transition-colors duration-200 font-medium ${
                isActive('/services') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              Services
            </Link>
            <Link
              to="/approach"
              onClick={handleNavClick}
              className={`transition-colors duration-200 font-medium ${
                isActive('/approach') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              Approach
            </Link>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className={`transition-colors duration-200 font-medium ${
                isActive('/contact') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" onClick={handleNavClick}>
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
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-left transition-colors duration-200 font-medium ${
                  isActive('/about') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
                }`}
                onClick={handleNavClick}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-left transition-colors duration-200 font-medium ${
                  isActive('/services') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
                }`}
                onClick={handleNavClick}
              >
                Services
              </Link>
              <Link
                to="/approach"
                className={`text-left transition-colors duration-200 font-medium ${
                  isActive('/approach') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
                }`}
                onClick={handleNavClick}
              >
                Approach
              </Link>
              <Link
                to="/contact"
                className={`text-left transition-colors duration-200 font-medium ${
                  isActive('/contact') ? 'text-wellness-violet' : 'text-gray-700 hover:text-wellness-violet'
                }`}
                onClick={handleNavClick}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={handleNavClick}>
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

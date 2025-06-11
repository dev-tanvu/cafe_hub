import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { state, dispatch } = useCart();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Location', path: '/location' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-coffee-800/95 backdrop-blur-sm border-b border-coffee-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-coffee-300 rounded-lg group-hover:bg-coffee-300/80 transition-colors">
              <Coffee className="h-5 w-5 sm:h-6 sm:w-6 text-coffee-800" />
            </div>
            <span className="font-playfair font-bold text-lg sm:text-xl text-coffee-50">
              Colliers Cafe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-inter font-medium transition-colors hover:text-coffee-300 ${
                  isActive(item.path) 
                    ? 'text-coffee-300' 
                    : 'text-coffee-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-coffee-100 hover:text-coffee-300 transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-coffee-300 text-coffee-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {itemCount}
                </span>
              )}
            </button>

            <Link
              to="/menu"
              className="bg-coffee-300 text-coffee-800 px-4 lg:px-6 py-2 rounded-full font-inter font-semibold hover:bg-coffee-300/90 transition-all hover:scale-105 animate-glow text-sm lg:text-base"
            >
              Pre-Order Now
            </Link>
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleCart}
              className="relative p-2 text-coffee-100 hover:text-coffee-300 transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-coffee-300 text-coffee-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-coffee-100 hover:text-coffee-300 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-coffee-700 border-t border-coffee-600 animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md font-inter font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-coffee-600 text-coffee-300'
                      : 'text-coffee-100 hover:bg-coffee-600 hover:text-coffee-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/menu"
                onClick={() => setIsMenuOpen(false)}
                className="block mx-3 mt-4 bg-coffee-300 text-coffee-800 px-4 py-2 rounded-full font-inter font-semibold text-center hover:bg-coffee-300/90 transition-colors"
              >
                Pre-Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
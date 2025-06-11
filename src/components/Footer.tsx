import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-900 relative">
      <div className="absolute inset-0 bg-coffee-texture opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-coffee-300 rounded-lg">
                <Coffee className="h-6 w-6 text-coffee-800" />
              </div>
              <span className="font-playfair font-bold text-xl text-coffee-50">
                Brew Collective
              </span>
            </Link>
            <p className="font-inter text-coffee-200 mb-6 leading-relaxed">
              Handcrafted coffee experiences, one cup at a time. We believe in quality, community, and the perfect brew.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-300 hover:text-coffee-100 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-coffee-300 hover:text-coffee-100 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-coffee-300 hover:text-coffee-100 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg text-coffee-50 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Menu', path: '/menu' },
                { name: 'About Us', path: '/about' },
                { name: 'Location', path: '/location' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-inter text-coffee-200 hover:text-coffee-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-lg text-coffee-50 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-coffee-300 mt-0.5 flex-shrink-0" />
                <span className="font-inter text-coffee-200">
                  123 Coffee Street<br />
                  Downtown District<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-300 flex-shrink-0" />
                <span className="font-inter text-coffee-200">(555) 123-BREW</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-coffee-300 mt-0.5 flex-shrink-0" />
                <div className="font-inter text-coffee-200">
                  <div>Mon-Fri: 6:00 AM - 8:00 PM</div>
                  <div>Sat-Sun: 7:00 AM - 9:00 PM</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Loyalty Program */}
          <div>
            <h3 className="font-playfair font-semibold text-lg text-coffee-50 mb-6">Loyalty Program</h3>
            <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 border border-coffee-600/30">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-coffee-300 rounded-full flex items-center justify-center">
                  <Coffee className="h-4 w-4 text-coffee-800" />
                </div>
                <span className="font-inter font-semibold text-coffee-50">Brew Stars</span>
              </div>
              <p className="font-inter text-sm text-coffee-200 mb-4">
                Collect 10 stars, get your 11th coffee free!
              </p>
              <Link
                to="/menu"
                className="inline-block bg-coffee-300 text-coffee-800 px-4 py-2 rounded-full font-inter font-medium text-sm hover:bg-coffee-300/90 transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-coffee-300 text-sm mb-4 md:mb-0">
            © 2024 Brew Collective. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="font-inter text-coffee-300 hover:text-coffee-100 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-coffee-300 hover:text-coffee-100 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
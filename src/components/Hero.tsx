import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with coffee texture overlay */}
      <div className="absolute inset-0 bg-coffee-800">
        <div className="absolute inset-0 bg-hero-beans bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-coffee-texture"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-800/90 via-coffee-800/70 to-coffee-700/90"></div>
      </div>

      {/* Floating coffee beans animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-3 bg-coffee-600 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl text-coffee-50 mb-6 leading-tight">
            Order Your Cup,
            <span className="block text-coffee-300">Skip the Wait</span>
          </h1>
          
          <p className="font-inter text-lg md:text-xl text-coffee-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Handcrafted coffee, ready when you arrive — no delivery, just perfection waiting. 
            Experience the art of coffee with our premium pre-order service.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/menu"
              className="group bg-coffee-300 text-coffee-800 px-8 py-4 rounded-full font-inter font-bold text-lg hover:bg-coffee-300/90 transition-all duration-300 hover:scale-105 animate-glow flex items-center space-x-2"
            >
              <span>☕ Pre-Order Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group flex items-center space-x-3 text-coffee-200 hover:text-coffee-100 transition-colors">
              <div className="p-3 border-2 border-coffee-300 rounded-full group-hover:bg-coffee-300/10 transition-all">
                <Play className="h-6 w-6 text-coffee-300 ml-1" />
              </div>
              <span className="font-inter font-medium">How It Works</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-coffee-300 rounded-full p-1">
          <div className="w-1 h-3 bg-coffee-300 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
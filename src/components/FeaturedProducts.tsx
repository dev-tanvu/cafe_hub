import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { menuItems } from '../data/menuItems';

const FeaturedProducts: React.FC = () => {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <section className="py-20 bg-coffee-900 relative">
      <div className="absolute inset-0 bg-coffee-texture opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-coffee-50 mb-4">
            Top Picks Today
          </h2>
          <p className="font-inter text-lg text-coffee-200 max-w-2xl mx-auto">
            Discover our most beloved creations, handcrafted with passion and served with precision
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-coffee-700/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-coffee-700/70 transition-all duration-500 hover:scale-105 animate-float border border-coffee-600/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-800/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-coffee-800/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-coffee-300 fill-current" />
                  <span className="text-coffee-100 font-inter font-medium text-sm">{item.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair font-semibold text-xl text-coffee-50 mb-2">
                  {item.name}
                </h3>
                <p className="font-inter text-coffee-200 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-bold text-lg text-coffee-300">
                    ${item.price.toFixed(2)}
                  </span>
                  <button className="bg-coffee-300 text-coffee-800 p-2 rounded-full hover:bg-coffee-300/90 transition-colors group-hover:scale-110">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 bg-coffee-300 text-coffee-800 px-8 py-3 rounded-full font-inter font-semibold hover:bg-coffee-300/90 transition-all hover:scale-105"
          >
            <span>View Full Menu</span>
            <Plus className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
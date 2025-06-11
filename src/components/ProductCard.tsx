import React from 'react';
import { Star, Plus } from 'lucide-react';
import { MenuItem } from '../types';

interface ProductCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onAddToCart }) => {
  return (
    <div className="group bg-coffee-700/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-coffee-700/70 transition-all duration-500 hover:scale-105 border border-coffee-600/30 animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 sm:h-56 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-800/60 to-transparent"></div>
        <div className="absolute top-3 right-3 bg-coffee-800/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 sm:h-4 sm:w-4 text-coffee-300 fill-current" />
          <span className="text-coffee-100 font-inter font-medium text-xs sm:text-sm">{item.rating}</span>
        </div>
        <div className="absolute top-3 left-3 bg-coffee-300/90 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-coffee-800 font-inter font-bold text-xs sm:text-sm">{item.category}</span>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="font-playfair font-semibold text-lg sm:text-xl text-coffee-50 mb-2 line-clamp-1">
          {item.name}
        </h3>
        <p className="font-inter text-coffee-200 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                  i < Math.floor(item.rating)
                    ? 'text-coffee-300 fill-current'
                    : 'text-coffee-500'
                }`}
              />
            ))}
          </div>
          <span className="font-inter text-coffee-300 text-xs sm:text-sm ml-2">
            ({item.reviews})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="font-inter font-bold text-lg sm:text-xl text-coffee-300">
              ${item.price.toFixed(2)}
            </span>
            {item.sizes && item.sizes.length > 1 && (
              <span className="font-inter text-coffee-400 text-xs sm:text-sm ml-1">
                from
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-coffee-300 text-coffee-800 p-2 sm:p-3 rounded-full hover:bg-coffee-300/90 transition-all group-hover:scale-110 animate-glow focus:outline-none focus:ring-2 focus:ring-coffee-300 focus:ring-offset-2 focus:ring-offset-coffee-800"
          >
            <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
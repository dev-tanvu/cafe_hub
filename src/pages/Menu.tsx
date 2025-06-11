import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { menuItems, categories } from '../data/menuItems';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleAddToCart = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-coffee-900 pt-16">
      <div className="absolute inset-0 bg-coffee-texture opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl text-coffee-50 mb-4">
            Our Coffee Menu
          </h1>
          <p className="font-inter text-base sm:text-lg text-coffee-200 max-w-2xl mx-auto px-4">
            Every cup is crafted with precision and passion. Choose your perfect blend and customize it to your taste.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-400" />
              <input
                type="text"
                placeholder="Search coffee, pastries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-coffee-700/50 border border-coffee-600 rounded-full text-coffee-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-300 focus:border-transparent backdrop-blur-sm transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-coffee-300" />
                <span className="font-inter text-coffee-200 text-sm">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-2 rounded-full font-inter font-medium transition-all text-sm ${
                      selectedCategory === category
                        ? 'bg-coffee-300 text-coffee-800 scale-105'
                        : 'bg-coffee-700/50 text-coffee-200 hover:bg-coffee-600/50 border border-coffee-600 hover:scale-105'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ProductCard item={item} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 animate-fade-in">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-coffee-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 sm:h-12 sm:w-12 text-coffee-400" />
            </div>
            <h3 className="font-playfair font-semibold text-xl sm:text-2xl text-coffee-200 mb-2">
              No items found
            </h3>
            <p className="font-inter text-coffee-400 px-4">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Menu;
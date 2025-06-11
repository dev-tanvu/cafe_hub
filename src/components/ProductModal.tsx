import React, { useState } from 'react';
import { X, Plus, Star } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ item, isOpen, onClose }) => {
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [customizations, setCustomizations] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);

  React.useEffect(() => {
    if (item && isOpen) {
      setSelectedSize(item.sizes?.[0]?.name || '');
      setCustomizations({});
      setQuantity(1);
    }
  }, [item, isOpen]);

  if (!isOpen || !item) return null;

  const selectedSizeObj = item.sizes?.find(s => s.name === selectedSize);
  const currentPrice = selectedSizeObj?.price || item.price;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          item,
          size: selectedSize || undefined,
          customizations: Object.keys(customizations).length > 0 ? customizations : undefined
        }
      });
    }
    onClose();
    dispatch({ type: 'TOGGLE_CART' });
  };

  const handleCustomizationChange = (name: string, value: string) => {
    setCustomizations(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-coffee-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-coffee-600/30 animate-scale-in">
          {/* Header */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-800/60 to-transparent rounded-t-2xl"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-coffee-800/80 backdrop-blur-sm rounded-full hover:bg-coffee-700 transition-colors"
            >
              <X className="h-6 w-6 text-coffee-300" />
            </button>
            <div className="absolute top-4 left-4 bg-coffee-300/90 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-coffee-800 font-inter font-bold text-sm">{item.category}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-playfair font-bold text-2xl text-coffee-50 mb-2">
                  {item.name}
                </h2>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(item.rating)
                            ? 'text-coffee-300 fill-current'
                            : 'text-coffee-500'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-inter text-coffee-300 text-sm">
                    {item.rating} ({item.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-inter font-bold text-2xl text-coffee-300">
                  ${currentPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <p className="font-inter text-coffee-200 mb-6 leading-relaxed">
              {item.description}
            </p>

            {/* Size Selection */}
            {item.sizes && item.sizes.length > 1 && (
              <div className="mb-6">
                <h3 className="font-playfair font-semibold text-lg text-coffee-50 mb-3">
                  Size
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {item.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`p-3 rounded-xl border transition-all ${
                        selectedSize === size.name
                          ? 'bg-coffee-300 text-coffee-800 border-coffee-300'
                          : 'bg-coffee-700/50 text-coffee-200 border-coffee-600 hover:bg-coffee-600/50'
                      }`}
                    >
                      <div className="font-inter font-semibold">{size.name}</div>
                      <div className="text-sm">${size.price.toFixed(2)}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Customizations */}
            {item.customizations && item.customizations.map((customization) => (
              <div key={customization.name} className="mb-6">
                <h3 className="font-playfair font-semibold text-lg text-coffee-50 mb-3">
                  {customization.name}
                  {customization.priceModifier && (
                    <span className="text-coffee-300 text-sm ml-2">
                      (+${customization.priceModifier.toFixed(2)})
                    </span>
                  )}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {customization.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleCustomizationChange(customization.name, option)}
                      className={`p-3 rounded-xl border transition-all text-left ${
                        customizations[customization.name] === option
                          ? 'bg-coffee-300 text-coffee-800 border-coffee-300'
                          : 'bg-coffee-700/50 text-coffee-200 border-coffee-600 hover:bg-coffee-600/50'
                      }`}
                    >
                      <div className="font-inter font-medium">{option}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-playfair font-semibold text-lg text-coffee-50 mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 bg-coffee-700 hover:bg-coffee-600 rounded-full transition-colors"
                >
                  <Plus className="h-5 w-5 text-coffee-300 rotate-45" />
                </button>
                <span className="font-inter font-bold text-xl text-coffee-100 w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 bg-coffee-700 hover:bg-coffee-600 rounded-full transition-colors"
                >
                  <Plus className="h-5 w-5 text-coffee-300" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-coffee-300 text-coffee-800 py-4 rounded-full font-inter font-bold text-lg hover:bg-coffee-300/90 transition-all hover:scale-105 animate-glow"
            >
              Add {quantity} to Cart - ${(currentPrice * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
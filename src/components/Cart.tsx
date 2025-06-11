import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (cartId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
  };

  const removeItem = (cartId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={closeCart}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-coffee-800 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-coffee-700">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-coffee-300" />
              <h2 className="font-playfair font-bold text-xl text-coffee-50">
                Your Order
              </h2>
              <span className="bg-coffee-300 text-coffee-800 text-sm font-bold px-2 py-1 rounded-full">
                {state.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-coffee-700 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-coffee-300" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-coffee-600 mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-xl text-coffee-200 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-coffee-400 mb-6">
                  Add some delicious coffee to get started!
                </p>
                <Link
                  to="/menu"
                  onClick={closeCart}
                  className="inline-block bg-coffee-300 text-coffee-800 px-6 py-3 rounded-full font-inter font-semibold hover:bg-coffee-300/90 transition-colors"
                >
                  Browse Menu
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.cartId}
                    className="bg-coffee-700/50 backdrop-blur-sm rounded-xl p-4 border border-coffee-600/30 animate-fade-in"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-playfair font-semibold text-coffee-50 truncate">
                          {item.name}
                        </h4>
                        {item.selectedSize && (
                          <p className="text-coffee-300 text-sm">
                            Size: {item.selectedSize}
                          </p>
                        )}
                        {item.customizations && Object.keys(item.customizations).length > 0 && (
                          <div className="text-coffee-400 text-xs mt-1">
                            {Object.entries(item.customizations).map(([key, value]) => (
                              <span key={key} className="block">
                                {key}: {value}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-3">
                          <span className="font-inter font-bold text-coffee-300">
                            ${item.price.toFixed(2)}
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="p-1 hover:bg-coffee-600 rounded-full transition-colors"
                            >
                              <Minus className="h-4 w-4 text-coffee-300" />
                            </button>
                            <span className="font-inter font-semibold text-coffee-100 w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="p-1 hover:bg-coffee-600 rounded-full transition-colors"
                            >
                              <Plus className="h-4 w-4 text-coffee-300" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.cartId)}
                        className="p-2 hover:bg-coffee-600 rounded-full transition-colors"
                      >
                        <Trash2 className="h-4 w-4 text-coffee-400 hover:text-coffee-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-coffee-700 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-playfair font-semibold text-lg text-coffee-50">
                  Total
                </span>
                <span className="font-inter font-bold text-xl text-coffee-300">
                  ${state.total.toFixed(2)}
                </span>
              </div>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="w-full bg-coffee-300 text-coffee-800 py-3 rounded-full font-inter font-bold text-center hover:bg-coffee-300/90 transition-all hover:scale-105 animate-glow block"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
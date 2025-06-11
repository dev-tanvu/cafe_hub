import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, MenuItem } from '../types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { item: MenuItem; size?: string; customizations?: Record<string, string> } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { cartId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLOSE_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, size, customizations } = action.payload;
      const selectedSizeObj = item.sizes?.find(s => s.name === size);
      const selectedSizePrice = selectedSizeObj?.price || item.price;
      
      const cartId = `${item.id}-${size || 'default'}-${JSON.stringify(customizations || {})}`;
      const existingItem = state.items.find(cartItem => cartItem.cartId === cartId);

      let newItems: CartItem[];
      if (existingItem) {
        newItems = state.items.map(cartItem =>
          cartItem.cartId === cartId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        const newItem: CartItem = {
          ...item,
          quantity: 1,
          selectedSize: size,
          selectedSizePrice,
          customizations,
          cartId,
          price: selectedSizePrice
        };
        newItems = [...state.items, newItem];
      }

      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { ...state, items: newItems, total };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.cartId !== action.payload);
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { ...state, items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      const { cartId, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter(item => item.cartId !== cartId);
        const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return { ...state, items: newItems, total };
      }

      const newItems = state.items.map(item =>
        item.cartId === cartId ? { ...item, quantity } : item
      );
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { ...state, items: newItems, total };
    }

    case 'CLEAR_CART':
      return { ...state, items: [], total: 0 };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
    total: 0
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
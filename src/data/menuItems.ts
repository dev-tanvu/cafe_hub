import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Cappuccino',
    description: 'Rich espresso with steamed milk foam, perfectly balanced for morning perfection',
    price: 4.20,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Coffee',
    rating: 4.8,
    reviews: 342,
    sizes: [
      { name: 'Small', price: 4.20 },
      { name: 'Medium', price: 4.80 },
      { name: 'Large', price: 5.40 }
    ],
    customizations: [
      {
        name: 'Milk Type',
        options: ['Whole Milk', 'Oat Milk', 'Almond Milk', 'Soy Milk']
      },
      {
        name: 'Extra Shot',
        options: ['No', 'Yes'],
        priceModifier: 0.75
      }
    ]
  },
  {
    id: '2',
    name: 'House Blend Latte',
    description: 'Smooth espresso with velvety steamed milk, crafted with our signature house blend',
    price: 4.60,
    image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Coffee',
    rating: 4.6,
    reviews: 289,
    sizes: [
      { name: 'Small', price: 4.60 },
      { name: 'Medium', price: 5.20 },
      { name: 'Large', price: 5.80 }
    ]
  },
  {
    id: '3',
    name: 'Vanilla Macchiato',
    description: 'Espresso marked with steamed milk and a touch of vanilla sweetness',
    price: 5.10,
    image: 'https://images.pexels.com/photos/8129901/pexels-photo-8129901.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Coffee',
    rating: 4.7,
    reviews: 198,
    sizes: [
      { name: 'Small', price: 5.10 },
      { name: 'Medium', price: 5.70 },
      { name: 'Large', price: 6.30 }
    ]
  },
  {
    id: '4',
    name: 'Cold Brew Supreme',
    description: 'Slow-steeped for 20 hours, smooth and bold with chocolate undertones',
    price: 3.80,
    image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cold Brew',
    rating: 4.9,
    reviews: 156,
    sizes: [
      { name: 'Small', price: 3.80 },
      { name: 'Medium', price: 4.40 },
      { name: 'Large', price: 5.00 }
    ]
  },
  {
    id: '5',
    name: 'Artisan Croissant',
    description: 'Buttery, flaky pastry baked fresh daily with French butter',
    price: 3.20,
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pastries',
    rating: 4.5,
    reviews: 87,
  },
  {
    id: '6',
    name: 'Chocolate Muffin',
    description: 'Rich chocolate muffin with chocolate chips, perfect with your morning coffee',
    price: 2.80,
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pastries',
    rating: 4.3,
    reviews: 124,
  }
];

export const categories = [
  'All',
  'Coffee',
  'Cold Brew',
  'Pastries',
  'Snacks'
];
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  sizes?: Array<{
    name: string;
    price: number;
  }>;
  customizations?: Array<{
    name: string;
    options: string[];
    priceModifier?: number;
  }>;
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedSize?: string;
  selectedSizePrice?: number;
  customizations?: Record<string, string>;
  cartId: string;
}

export interface PreOrder {
  items: CartItem[];
  pickupTime: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  total: number;
  paymentMethod: 'now' | 'pickup';
  orderId: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}
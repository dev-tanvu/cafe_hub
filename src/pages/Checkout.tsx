import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, CreditCard, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    pickupDate: '',
    pickupTime: '',
    paymentMethod: 'now' as 'now' | 'pickup'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Name is required';
    }
    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = 'Phone number is required';
    }
    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.customerEmail)) {
      newErrors.customerEmail = 'Please enter a valid email';
    }
    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Pickup date is required';
    }
    if (!formData.pickupTime) {
      newErrors.pickupTime = 'Pickup time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const orderId = `BC${Date.now()}`;
    const orderData = {
      items: state.items,
      ...formData,
      total: state.total,
      orderId
    };

    // Store order data in localStorage for the thank you page
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    
    // Clear cart
    dispatch({ type: 'CLEAR_CART' });
    
    // Navigate to thank you page
    navigate('/thank-you');
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour <= 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayTime = new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        slots.push({ value: time, display: displayTime });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-coffee-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair font-bold text-3xl text-coffee-50 mb-4">
            Your cart is empty
          </h1>
          <p className="font-inter text-coffee-200 mb-8">
            Add some items to your cart before checking out.
          </p>
          <button
            onClick={() => navigate('/menu')}
            className="bg-coffee-300 text-coffee-800 px-8 py-3 rounded-full font-inter font-semibold hover:bg-coffee-300/90 transition-all"
          >
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-coffee-900 pt-16">
      <div className="absolute inset-0 bg-coffee-texture opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl text-coffee-50 mb-4">
            Complete Your Order
          </h1>
          <p className="font-inter text-lg text-coffee-200">
            Just a few more details and your coffee will be ready for pickup!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 border border-coffee-600/30">
            <h2 className="font-playfair font-bold text-2xl text-coffee-50 mb-6">
              Order Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="font-playfair font-semibold text-lg text-coffee-50 flex items-center">
                  <User className="h-5 w-5 mr-2 text-coffee-300" />
                  Contact Information
                </h3>
                
                <div>
                  <label className="block font-inter text-coffee-200 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-coffee-600/50 border rounded-xl text-coffee-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-300 transition-all ${
                      errors.customerName ? 'border-red-500' : 'border-coffee-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.customerName && (
                    <p className="text-red-400 text-sm mt-1">{errors.customerName}</p>
                  )}
                </div>

                <div>
                  <label className="block font-inter text-coffee-200 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-coffee-600/50 border rounded-xl text-coffee-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-300 transition-all ${
                      errors.customerPhone ? 'border-red-500' : 'border-coffee-500'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.customerPhone && (
                    <p className="text-red-400 text-sm mt-1">{errors.customerPhone}</p>
                  )}
                </div>

                <div>
                  <label className="block font-inter text-coffee-200 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-coffee-600/50 border rounded-xl text-coffee-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-300 transition-all ${
                      errors.customerEmail ? 'border-red-500' : 'border-coffee-500'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.customerEmail && (
                    <p className="text-red-400 text-sm mt-1">{errors.customerEmail}</p>
                  )}
                </div>
              </div>

              {/* Pickup Information */}
              <div className="space-y-4">
                <h3 className="font-playfair font-semibold text-lg text-coffee-50 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-coffee-300" />
                  Pickup Details
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-coffee-200 mb-2">Pickup Date</label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      min={today}
                      className={`w-full px-4 py-3 bg-coffee-600/50 border rounded-xl text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-300 transition-all ${
                        errors.pickupDate ? 'border-red-500' : 'border-coffee-500'
                      }`}
                    />
                    {errors.pickupDate && (
                      <p className="text-red-400 text-sm mt-1">{errors.pickupDate}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-inter text-coffee-200 mb-2">Pickup Time</label>
                    <select
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-coffee-600/50 border rounded-xl text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-300 transition-all ${
                        errors.pickupTime ? 'border-red-500' : 'border-coffee-500'
                      }`}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.display}
                        </option>
                      ))}
                    </select>
                    {errors.pickupTime && (
                      <p className="text-red-400 text-sm mt-1">{errors.pickupTime}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="font-playfair font-semibold text-lg text-coffee-50 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-coffee-300" />
                  Payment Method
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                    formData.paymentMethod === 'now' 
                      ? 'bg-coffee-300/20 border-coffee-300' 
                      : 'bg-coffee-600/30 border-coffee-500 hover:bg-coffee-600/50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="now"
                      checked={formData.paymentMethod === 'now'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="flex-1">
                      <div className="font-inter font-semibold text-coffee-100">Pay Now</div>
                      <div className="font-inter text-sm text-coffee-300">Secure online payment</div>
                    </div>
                  </label>

                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                    formData.paymentMethod === 'pickup' 
                      ? 'bg-coffee-300/20 border-coffee-300' 
                      : 'bg-coffee-600/30 border-coffee-500 hover:bg-coffee-600/50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pickup"
                      checked={formData.paymentMethod === 'pickup'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="flex-1">
                      <div className="font-inter font-semibold text-coffee-100">Pay at Pickup</div>
                      <div className="font-inter text-sm text-coffee-300">Cash or card in store</div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-coffee-300 text-coffee-800 py-4 rounded-full font-inter font-bold text-lg hover:bg-coffee-300/90 transition-all hover:scale-105 animate-glow"
              >
                Complete Order - ${state.total.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 border border-coffee-600/30 h-fit">
            <h2 className="font-playfair font-bold text-2xl text-coffee-50 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={item.cartId} className="flex items-start space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-playfair font-semibold text-coffee-50">{item.name}</h4>
                    {item.selectedSize && (
                      <p className="text-coffee-300 text-sm">Size: {item.selectedSize}</p>
                    )}
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-coffee-400 text-sm">Qty: {item.quantity}</span>
                      <span className="font-inter font-bold text-coffee-300">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-coffee-600 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-inter text-coffee-200">Subtotal</span>
                <span className="font-inter text-coffee-200">${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-inter text-coffee-200">Tax</span>
                <span className="font-inter text-coffee-200">${(state.total * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold border-t border-coffee-600 pt-2">
                <span className="font-playfair text-coffee-50">Total</span>
                <span className="font-inter text-coffee-300">${(state.total * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
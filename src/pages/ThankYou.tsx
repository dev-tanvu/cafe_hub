import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Phone, Mail, Calendar, Coffee } from 'lucide-react';
import { PreOrder } from '../types';

const ThankYou: React.FC = () => {
  const [orderData, setOrderData] = useState<PreOrder | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrder = localStorage.getItem('lastOrder');
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
    } else {
      // If no order data, redirect to menu
      navigate('/menu');
    }
  }, [navigate]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-coffee-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <Coffee className="h-16 w-16 text-coffee-300 mx-auto mb-4 animate-spin" />
          <p className="font-inter text-coffee-200">Loading your order details...</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-coffee-900 pt-16">
      <div className="absolute inset-0 bg-coffee-texture opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-coffee-50 mb-4">
            Order Confirmed!
          </h1>
          <p className="font-inter text-lg text-coffee-200 max-w-2xl mx-auto">
            Thank you for choosing Brew Collective! Your coffee is being prepared with care and will be ready for pickup at your selected time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 border border-coffee-600/30 animate-slide-up">
            <h2 className="font-playfair font-bold text-2xl text-coffee-50 mb-6 flex items-center">
              <Coffee className="h-6 w-6 mr-2 text-coffee-300" />
              Order Details
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-coffee-600">
                <span className="font-inter font-semibold text-coffee-200">Order ID</span>
                <span className="font-inter font-bold text-coffee-300">{orderData.orderId}</span>
              </div>

              <div className="flex justify-between items-center pb-2 border-b border-coffee-600">
                <span className="font-inter font-semibold text-coffee-200">Customer</span>
                <span className="font-inter text-coffee-300">{orderData.customerName}</span>
              </div>

              <div className="flex justify-between items-center pb-2 border-b border-coffee-600">
                <span className="font-inter font-semibold text-coffee-200">Payment</span>
                <span className="font-inter text-coffee-300 capitalize">
                  {orderData.paymentMethod === 'now' ? 'Paid Online' : 'Pay at Pickup'}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-3 mb-6">
              <h3 className="font-playfair font-semibold text-lg text-coffee-50">Your Items</h3>
              {orderData.items.map((item) => (
                <div key={item.cartId} className="flex items-center space-x-4 bg-coffee-600/30 rounded-lg p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-inter font-semibold text-coffee-100">{item.name}</h4>
                    {item.selectedSize && (
                      <p className="text-coffee-300 text-sm">Size: {item.selectedSize}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-inter text-coffee-300">Qty: {item.quantity}</p>
                    <p className="font-inter font-bold text-coffee-300">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-coffee-600 pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="font-playfair text-coffee-50">Total</span>
                <span className="font-inter text-coffee-300">${(orderData.total * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Pickup Information */}
          <div className="space-y-6">
            {/* Pickup Details */}
            <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 border border-coffee-600/30 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-playfair font-bold text-2xl text-coffee-50 mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-coffee-300" />
                Pickup Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-coffee-300" />
                  <div>
                    <p className="font-inter font-semibold text-coffee-100">Pickup Date</p>
                    <p className="font-inter text-coffee-300">{formatDate(orderData.pickupDate)}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-coffee-300" />
                  <div>
                    <p className="font-inter font-semibold text-coffee-100">Pickup Time</p>
                    <p className="font-inter text-coffee-300">{formatTime(orderData.pickupTime)}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-coffee-300 mt-0.5" />
                  <div>
                    <p className="font-inter font-semibold text-coffee-100">Location</p>
                    <p className="font-inter text-coffee-300">
                      123 Coffee Street<br />
                      Downtown District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 border border-coffee-600/30 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-playfair font-bold text-xl text-coffee-50 mb-4">
                Need Help?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-coffee-300" />
                  <span className="font-inter text-coffee-200">(555) 123-BREW</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-coffee-300" />
                  <span className="font-inter text-coffee-200">hello@brewcollective.com</span>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-coffee-300/10 backdrop-blur-sm rounded-2xl p-6 border border-coffee-300/30 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-playfair font-bold text-xl text-coffee-50 mb-4">
                What's Next?
              </h3>
              <ul className="space-y-2 font-inter text-coffee-200">
                <li className="flex items-start space-x-2">
                  <span className="text-coffee-300 mt-1">•</span>
                  <span>We'll start preparing your order 15 minutes before your pickup time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-coffee-300 mt-1">•</span>
                  <span>Head to our pickup counter when you arrive</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-coffee-300 mt-1">•</span>
                  <span>Show your order ID or provide your name</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-coffee-300 mt-1">•</span>
                  <span>Enjoy your perfectly crafted coffee!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-12 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Link
            to="/menu"
            className="inline-block bg-coffee-300 text-coffee-800 px-8 py-3 rounded-full font-inter font-semibold hover:bg-coffee-300/90 transition-all hover:scale-105"
          >
            Order Again
          </Link>
          <Link
            to="/location"
            className="inline-block border-2 border-coffee-300 text-coffee-300 px-8 py-3 rounded-full font-inter font-semibold hover:bg-coffee-300/10 transition-all"
          >
            Get Directions
          </Link>
        </div>

        {/* Confirmation Email Note */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="font-inter text-coffee-400 text-sm">
            A confirmation email has been sent to {orderData.customerEmail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
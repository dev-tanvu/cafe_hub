import React, { useState } from 'react';
import { Mail, Gift } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-16 bg-coffee-700 relative">
      <div className="absolute inset-0 bg-coffee-texture opacity-30"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-coffee-600/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-coffee-500/30">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-coffee-300 rounded-2xl">
              <Gift className="h-8 w-8 text-coffee-800" />
            </div>
          </div>
          
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-coffee-50 mb-4">
            Get Your First Cup at 10% Off
          </h2>
          <p className="font-inter text-lg text-coffee-200 mb-8 max-w-2xl mx-auto">
            Join our newsletter for exclusive offers, new menu updates, and coffee brewing tips from our master baristas.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-coffee-50 border border-coffee-300 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-coffee-300 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-coffee-300 text-coffee-800 px-6 py-3 rounded-full font-inter font-semibold hover:bg-coffee-300/90 transition-all hover:scale-105 whitespace-nowrap"
              >
                Claim Offer
              </button>
            </form>
          ) : (
            <div className="bg-coffee-300/10 border border-coffee-300/30 rounded-full px-6 py-3 max-w-md mx-auto">
              <p className="font-inter font-semibold text-coffee-300">
                ✨ Welcome aboard! Check your email for your discount code.
              </p>
            </div>
          )}

          <p className="font-inter text-sm text-coffee-300 mt-4">
            No spam, just great coffee content. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-coffee-800 relative">
      <div className="absolute inset-0 bg-coffee-texture opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-coffee-50 mb-4">
            What Our Customers Say
          </h2>
          <p className="font-inter text-lg text-coffee-200 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what coffee lovers are saying about their Brew Collective experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-coffee-700/70 transition-all duration-300 hover:scale-105 border border-coffee-600/30 animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-coffee-300 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-coffee-300 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="font-inter text-coffee-100 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-inter font-semibold text-coffee-50 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-coffee-300 text-xs">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-coffee-700/50 backdrop-blur-sm rounded-full px-6 py-3 border border-coffee-600/30">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-coffee-300 fill-current" />
              ))}
            </div>
            <span className="font-inter font-semibold text-coffee-50">4.8 out of 5</span>
            <span className="font-inter text-coffee-200">based on 1,200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
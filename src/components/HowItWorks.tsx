import React from 'react';
import { Coffee, Clock, MapPin } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Coffee,
      title: 'Choose Your Drink',
      description: 'Browse our carefully curated menu and select your perfect cup, with customizations to suit your taste.'
    },
    {
      icon: Clock,
      title: 'Pick Your Time',
      description: 'Select your preferred pickup time up to 24 hours in advance. We\'ll have it ready exactly when you want it.'
    },
    {
      icon: MapPin,
      title: 'Collect In-Store',
      description: 'Skip the line and collect your order from our dedicated pickup counter. Quality guaranteed, time saved.'
    }
  ];

  return (
    <section className="py-20 bg-coffee-50 relative">
      <div className="absolute inset-0 bg-coffee-texture opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-coffee-800 mb-4">
            How It Works
          </h2>
          <p className="font-inter text-lg text-coffee-600 max-w-2xl mx-auto">
            Three simple steps to coffee perfection. We've designed our process to save you time while never compromising on quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-coffee-300 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <step.icon className="h-10 w-10 text-coffee-800" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-coffee-800 text-coffee-50 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-playfair font-semibold text-xl text-coffee-800 mb-4">
                {step.title}
              </h3>
              <p className="font-inter text-coffee-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline connector for desktop */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-0.5 bg-coffee-300 opacity-30 z-0"></div>
      </div>
    </section>
  );
};

export default HowItWorks;
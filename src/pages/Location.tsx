import React from 'react';
import { MapPin, Clock, Phone, Mail, Car, Wifi, CreditCard } from 'lucide-react';

const Location: React.FC = () => {
  const hours = [
    { day: 'Monday - Friday', time: '6:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 9:00 PM' }
  ];

  const amenities = [
    { icon: Car, name: 'Free Parking' },
    { icon: Wifi, name: 'Free WiFi' },
    { icon: CreditCard, name: 'All Cards Accepted' }
  ];

  return (
    <div className="min-h-screen bg-coffee-900 pt-16">
      <div className="absolute inset-0 bg-coffee-texture opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-coffee-50 mb-6">
              Visit Our Coffee Haven
            </h1>
            <p className="font-inter text-lg text-coffee-200 max-w-2xl mx-auto">
              Located in the heart of downtown, we're more than just a coffee shop—we're your neighborhood gathering place.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Map */}
              <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-2 border border-coffee-600/30">
                <div className="bg-coffee-600 rounded-xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-coffee-300 mx-auto mb-4" />
                    <p className="font-inter text-coffee-200">Interactive Map</p>
                    <p className="font-inter text-sm text-coffee-400 mt-2">
                      Google Maps integration would be embedded here
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-8">
                {/* Address */}
                <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 border border-coffee-600/30">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-coffee-300 rounded-xl">
                      <MapPin className="h-6 w-6 text-coffee-800" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-xl text-coffee-50 mb-2">
                        Our Location
                      </h3>
                      <p className="font-inter text-coffee-200 leading-relaxed">
                        123 Coffee Street<br />
                        Downtown District<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 border border-coffee-600/30">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-coffee-300 rounded-xl">
                      <Clock className="h-6 w-6 text-coffee-800" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair font-semibold text-xl text-coffee-50 mb-4">
                        Opening Hours
                      </h3>
                      <div className="space-y-2">
                        {hours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="font-inter text-coffee-200">{schedule.day}</span>
                            <span className="font-inter font-medium text-coffee-300">{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 border border-coffee-600/30">
                  <h3 className="font-playfair font-semibold text-xl text-coffee-50 mb-4">
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
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
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-20 bg-coffee-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-3xl text-coffee-50 mb-4">
                What We Offer
              </h2>
              <p className="font-inter text-coffee-200">
                More than just great coffee, we provide a complete experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="text-center group animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-coffee-300 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <amenity.icon className="h-8 w-8 text-coffee-800" />
                  </div>
                  <h3 className="font-inter font-semibold text-coffee-50">
                    {amenity.name}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="font-inter text-coffee-200 mb-8 max-w-3xl mx-auto">
                We prepare every cup with care — just for you. Whether you're grabbing your morning coffee 
                or settling in for an afternoon of work, our space is designed to welcome you.
              </p>
              <a
                href="/menu"
                className="inline-flex items-center bg-coffee-300 text-coffee-800 px-8 py-3 rounded-full font-inter font-semibold hover:bg-coffee-300/90 transition-all hover:scale-105"
              >
                Pre-Order for Pickup
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Location;
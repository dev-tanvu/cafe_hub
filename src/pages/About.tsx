import React from 'react';
import { Award, Users, Coffee, Leaf } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Locally Sourced',
      description: 'We partner with local farms to bring you the freshest beans, supporting our community and ensuring quality.'
    },
    {
      icon: Award,
      title: 'Hand-Roasted Daily',
      description: 'Our master roasters craft small batches daily, ensuring every cup meets our exacting standards.'
    },
    {
      icon: Users,
      title: 'Expert Baristas',
      description: 'Our team of certified baristas brings years of experience and passion to every cup they create.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'From eco-friendly cups to ethical sourcing, we\'re committed to a sustainable coffee future.'
    }
  ];

  return (
    <div className="min-h-screen bg-coffee-900 pt-16">
      <div className="absolute inset-0 bg-coffee-texture opacity-20"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-playfair font-bold text-4xl md:text-5xl text-coffee-50 mb-6">
                  Crafting Coffee Culture Since 2018
                </h1>
                <p className="font-inter text-lg text-coffee-200 mb-8 leading-relaxed">
                  At Brew Collective, we believe coffee is more than just a beverage—it's a ritual, a moment of pause, and a connection to community. Every cup we serve is a testament to our commitment to quality, sustainability, and the art of coffee making.
                </p>
                <p className="font-inter text-lg text-coffee-200 leading-relaxed">
                  Our journey began with a simple mission: to create an exceptional coffee experience that respects both the craft and the customer's time. Today, we continue that mission with our innovative pre-order system, ensuring your perfect cup is ready when you are.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Coffee roasting"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-800/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-coffee-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair font-bold text-4xl text-coffee-50 mb-4">
                What Makes Us Different
              </h2>
              <p className="font-inter text-lg text-coffee-200 max-w-2xl mx-auto">
                Our commitment to excellence goes beyond just great coffee. Here's what sets us apart.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center group animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-20 h-20 bg-coffee-300 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-coffee-800" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-coffee-50 mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-coffee-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair font-bold text-4xl text-coffee-50 mb-4">
                Meet Our Coffee Experts
              </h2>
              <p className="font-inter text-lg text-coffee-200 max-w-2xl mx-auto">
                The passionate team behind every perfect cup, dedicated to bringing you the finest coffee experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Elena Rodriguez',
                  role: 'Head Roaster',
                  image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
                  bio: '15 years of roasting experience, certified Q Grader'
                },
                {
                  name: 'Marcus Chen',
                  role: 'Lead Barista',
                  image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
                  bio: 'Latte art champion, specialty coffee enthusiast'
                },
                {
                  name: 'Sarah Kim',
                  role: 'Coffee Curator',
                  image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
                  bio: 'Sources the finest beans from sustainable farms worldwide'
                }
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-coffee-700/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-coffee-700/70 transition-all duration-300 border border-coffee-600/30 animate-float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-playfair font-semibold text-xl text-coffee-50 mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter font-medium text-coffee-300 mb-3">
                    {member.role}
                  </p>
                  <p className="font-inter text-coffee-200 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-coffee-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair font-bold text-4xl text-coffee-50 mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="font-inter text-lg text-coffee-200 mb-8 max-w-2xl mx-auto">
              Join thousands of coffee lovers who trust us with their daily ritual. Pre-order your perfect cup today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="bg-coffee-300 text-coffee-800 px-8 py-3 rounded-full font-inter font-semibold hover:bg-coffee-300/90 transition-all hover:scale-105"
              >
                Browse Our Menu
              </a>
              <a
                href="/location"
                className="border-2 border-coffee-300 text-coffee-300 px-8 py-3 rounded-full font-inter font-semibold hover:bg-coffee-300/10 transition-all"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
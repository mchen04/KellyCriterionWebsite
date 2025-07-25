import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Professional Trader',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Kelly Stakes transformed my approach to position sizing. Instead of guessing, I now use mathematical precision. My bankroll has grown consistently over 8 months of use.'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Sports Analyst',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The Kelly Criterion was always intimidating until I found this app. Now I can quickly calculate optimal bet sizes and my win rate has improved dramatically.'
    },
    {
      name: 'David Park',
      role: 'Investment Manager',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'As someone who manages multiple portfolios, the preset feature is invaluable. I can switch between different risk profiles instantly. Best $1.99 I ever spent.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Professionals
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Kelly Stakes is helping traders, analysts, and smart bettors make better decisions every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-green-500 mb-4 opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join 10,000+ Users Making Smarter Decisions
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              From beginners learning probability theory to professional traders managing millions, 
              Kelly Stakes helps users at every level apply mathematical precision to their decision making.
            </p>
            <a 
              href="#download"
              className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
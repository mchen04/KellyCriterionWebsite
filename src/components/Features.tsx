import React from 'react';
import { Calculator, BookOpen, Globe, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Smart Kelly Calculator',
      description: 'Instant mathematical calculations using the proven Kelly Criterion formula for optimal position sizing.',
      color: 'text-green-500'
    },
    {
      icon: BookOpen,
      title: 'Preset Management',
      description: 'Save multiple betting profiles and bankroll configurations for different strategies and scenarios.',
      color: 'text-blue-500'
    },
    {
      icon: Globe,
      title: 'Multiple Odds Formats',
      description: 'Support for American, Decimal, and Fractional odds formats to match your preferred betting style.',
      color: 'text-orange-500'
    },
    {
      icon: Lock,
      title: '100% Private',
      description: 'All calculations performed on-device. No data collection, no tracking, complete privacy guaranteed.',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional Tools for Smart Betting
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to implement the Kelly Criterion and manage your bankroll like a professional trader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
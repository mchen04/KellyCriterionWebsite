import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free with full calculator functionality. Upgrade only when you need multiple presets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-8 hover:border-green-500 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Free Forever</h3>
              <div className="text-4xl font-bold text-green-500 mb-2">$0</div>
              <p className="text-gray-400">Perfect for getting started</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">Full Kelly Calculator functionality</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">1 preset configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">All odds formats supported</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">100% private calculations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">No ads, no tracking</span>
              </li>
            </ul>

            <a 
              href="#download"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 block text-center"
            >
              Download Free
            </a>
          </div>

          <div className="bg-gray-900 border-2 border-orange-500 rounded-xl p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                <Star className="w-4 h-4" />
                <span>Popular</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Extra Presets</h3>
              <div className="text-4xl font-bold text-orange-500 mb-2">$1.99</div>
              <p className="text-gray-400">Per additional preset</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Everything in Free tier</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Unlimited additional presets</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Save different strategies</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Quick switching between setups</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">One-time purchase (no subscription)</span>
              </li>
            </ul>

            <a 
              href="#download"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 block text-center"
            >
              Start Free, Upgrade Later
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            <strong className="text-white">One-time purchase</strong> - No subscriptions, no hidden fees. 
            Buy additional presets only when you need them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
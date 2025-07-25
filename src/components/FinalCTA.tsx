import React from 'react';
import { Download, Star } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Calculate Smarter <span className="text-green-500">Position Sizes?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join thousands of professionals using Kelly Stakes to make mathematically optimal decisions. 
          Start free with full calculator functionality and upgrade only when you need multiple presets.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="https://apps.apple.com/app/kelly-stakes"
            className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 flex items-center space-x-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-6 h-6" />
            <span>Download on App Store</span>
          </a>
          
          <div className="text-gray-400">
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-sm">4.8★ Rating • 10K+ Downloads</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-500">0</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Free to Start</h3>
            <p className="text-gray-400">Full calculator with 1 preset included</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-500">100%</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Private</h3>
            <p className="text-gray-400">All calculations on-device, no tracking</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-500">$1.99</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Extra Presets</h3>
            <p className="text-gray-400">One-time purchase, no subscriptions</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">What You Get Free:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span className="text-gray-300">Full Kelly Calculator</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span className="text-gray-300">All odds formats</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span className="text-gray-300">1 preset configuration</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span className="text-gray-300">100% private calculations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
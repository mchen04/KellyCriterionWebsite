import React from 'react';
import { Star, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Calculate Optimal <span className="text-green-500">Bet Sizes</span> with Kelly Stakes
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional bankroll management using the Kelly Criterion mathematical formula. 
              Maximize long-term growth while minimizing risk with precise position sizing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#download"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1"
              >
                Download on App Store
              </a>
              <a 
                href="#how-it-works"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Learn How It Works
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">4.8★ Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">100% Private</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-gray-300">10K+ Users</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gray-800 rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-900 rounded-2xl h-full p-6 flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-white font-bold text-lg mb-2">Kelly Calculator</h3>
                    <div className="w-full h-px bg-gray-700"></div>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div>
                      <label className="text-gray-400 text-sm">Bankroll ($)</label>
                      <div className="bg-gray-800 rounded-lg p-3 mt-1">
                        <span className="text-white font-mono text-lg">10,000</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-gray-400 text-sm">Win Probability</label>
                      <div className="bg-gray-800 rounded-lg p-3 mt-1">
                        <span className="text-white font-mono text-lg">55%</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-gray-400 text-sm">Odds (Decimal)</label>
                      <div className="bg-gray-800 rounded-lg p-3 mt-1">
                        <span className="text-white font-mono text-lg">2.10</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500 rounded-lg p-4 text-center">
                    <div className="text-white text-sm mb-1">Optimal Bet Size</div>
                    <div className="text-white font-mono text-2xl font-bold">$909</div>
                    <div className="text-green-100 text-xs">9.09% of bankroll</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
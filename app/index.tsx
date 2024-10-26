import React, { useState } from 'react';
import { Camera, Heart, Star, Zap } from 'lucide-react';

export default function HomePage() {
  const [activeCard, setActiveCard] = useState(0);

  const features = [
    { icon: Star, title: 'Feature One', description: 'Something amazing here' },
    { icon: Heart, title: 'Feature Two', description: 'Another cool thing' },
    { icon: Zap, title: 'Feature Three', description: 'Mind-blowing stuff' },
    { icon: Camera, title: 'Feature Four', description: 'Incredible feature' },
  ];

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="px-4 py-12 bg-gradient-to-br from-purple-500 to-blue-600">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Motiv
        </h1>
        <p className="text-lg text-white opacity-90">
          Your journey begins here
        </p>
      </div>

      {/* Feature Cards */}
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Discover Amazing Features
        </h2>
        
        <div className="flex flex-wrap gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`p-6 rounded-xl w-40 h-40 flex flex-col items-center justify-center transition-all ${
                  activeCard === index
                    ? 'bg-blue-500 scale-105'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <Icon
                  size={32}
                  color={activeCard === index ? '#ffffff' : '#1a1a1a'}
                />
                <span
                  className={`text-lg font-semibold mt-3 text-center ${
                    activeCard === index ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {feature.title}
                </span>
                <span
                  className={`text-sm mt-1 text-center ${
                    activeCard === index ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  {feature.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-4 py-12 bg-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Ready to get started?
        </h2>
        <button className="bg-blue-500 py-3 px-6 rounded-full mx-auto block hover:bg-blue-600 transition-colors">
          <span className="text-white font-semibold text-lg">
            Let's Go!
          </span>
        </button>
      </div>
    </div>
  );
}
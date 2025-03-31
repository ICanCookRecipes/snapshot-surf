
import React from 'react';

const BuyerFeatures: React.FC = () => {
  return (
    <section id="buyer" className="feature-section">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="feature-badge mb-4">ICanCook</div>
          <h2 className="feature-title">Buyer Features</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Browse unique dishes</h3>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">Browse healthier options</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">Buy dishes everyday</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">Build connections through food</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">More options, more healthy</h3>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">Anyone can Cook, Any given time</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">If you can't cook, just go to someone's house</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img 
              src="/lovable-uploads/f8f74adc-1858-47f9-b2ad-3aa9fa78b72d.png"
              alt="ICanCook App Buyer Interface"
              className="max-w-[80%] md:max-w-full h-auto relative z-10"
            />
            
            <div className="absolute top-0 right-0 md:-right-10 lg:-right-20 bg-white rounded-xl p-4 md:p-6 shadow-lg max-w-xs z-20 mt-4 md:mt-0">
              <div className="flex items-center mb-2">
                <span className="highlight-dot"></span>
                <h3 className="text-xl font-bold">Cheaper than restaurants</h3>
              </div>
              <p className="text-sm md:text-base">Since sellers can charge their own prices, and food is homemade, you will find prices much cheaper and healthier</p>
            </div>
            
            <div className="absolute top-1/3 right-0 md:-right-10 lg:-right-20 bg-white rounded-xl p-4 md:p-6 shadow-lg max-w-xs z-20 mt-24 md:mt-16">
              <div className="flex items-center mb-2">
                <span className="feature-icon green-dot"></span>
                <h3 className="text-xl font-bold">Homemade Food</h3>
              </div>
              <p className="text-sm md:text-base">Homemade food is much healthier and tastier, why not also be cheaper and build new connections!</p>
            </div>
            
            <div className="absolute bottom-0 right-0 md:-right-10 lg:-right-20 bg-white rounded-xl p-4 md:p-6 shadow-lg max-w-xs z-20 mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <span className="feature-icon red-dot"></span>
                <h3 className="text-xl font-bold">Support Local Chefs</h3>
              </div>
              <p className="text-sm md:text-base">Build connections with local chefs who can cook for you and list unique dishes on ICanCook</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right pr-8 mt-4">
        <span className="text-xl font-medium">Buyer Side</span>
      </div>
    </section>
  );
};

export default BuyerFeatures;

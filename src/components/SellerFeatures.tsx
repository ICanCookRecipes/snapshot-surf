
import React from 'react';

const SellerFeatures: React.FC = () => {
  return (
    <section id="seller" className="feature-section bg-gradient-hero">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 text-white">
          <div className="feature-badge mb-4">ICanCook</div>
          <h2 className="feature-title">Seller Features</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">Personal cooking schedule</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">Create and manage active listings</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">Update each orders status</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">View upcoming and past orders</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Revenue</h3>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">View current month earnings</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green-dot"></div>
              <p className="feature-text">Request quick payouts</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/cf22e33e-65fa-4afb-82e2-92553197ad97.png"
              alt="ICanCook App Seller Interface"
              className="max-w-[80%] md:max-w-full h-auto"
            />
            
            <div className="absolute top-0 right-0 md:-right-20 bg-white rounded-xl p-6 shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <span className="highlight-dot"></span>
                <h3 className="text-xl font-bold">Alerts</h3>
              </div>
              <p>Get notified every time your dish sells, so you can prepare.</p>
            </div>
            
            <div className="absolute top-1/3 right-0 md:-right-20 bg-white rounded-xl p-6 shadow-lg max-w-xs mt-8">
              <div className="flex items-center mb-2">
                <span className="feature-icon green-dot"></span>
                <h3 className="text-xl font-bold">Portable</h3>
              </div>
              <p>Take your store with you, click on 'Update' button to update your store to your phone's location and get new buyers</p>
            </div>
            
            <div className="absolute bottom-0 right-0 md:-right-20 bg-white rounded-xl p-6 shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <span className="feature-icon red-dot"></span>
                <h3 className="text-xl font-bold">Quick Payouts</h3>
              </div>
              <p>Request payouts anytime, simply click on the hyperlink on your dashboard to send a email to us.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right pr-8 mt-4 text-white">
        <span className="text-xl font-medium">Seller Side</span>
      </div>
    </section>
  );
};

export default SellerFeatures;


import React from 'react';

const DashboardSection: React.FC = () => {
  return (
    <section id="dashboard" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Complete Dashboard</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <div className="relative">
            <img 
              src="/lovable-uploads/2872aa48-35d0-42ea-890d-fc9fd6045257.png" 
              alt="Seller Dashboard" 
              className="w-full max-w-xs"
            />
            <div className="absolute top-1/2 -right-4 hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
          
          <div className="relative my-8 md:my-0">
            <img 
              src="/lovable-uploads/2872aa48-35d0-42ea-890d-fc9fd6045257.png" 
              alt="Active Listings" 
              className="w-full max-w-xs"
            />
            <div className="absolute top-1/2 -right-4 hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/2872aa48-35d0-42ea-890d-fc9fd6045257.png" 
              alt="Orders View" 
              className="w-full max-w-xs"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl mb-6">Download the app now and start your cooking journey!</p>
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
              </svg>
              App Store
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 16 7-2.5 7 2.5"></path>
                <path d="m5 16 3.333-10.333"></path>
                <path d="m19 16-3.334-10.333"></path>
                <path d="m8.333 5.667 7.334 2"></path>
              </svg>
              Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;

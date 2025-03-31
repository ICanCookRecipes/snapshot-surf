
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
          <div className="relative w-full max-w-md md:h-[800px] overflow-visible">
          <img 
              src="/lovable-uploads/dashboard5-portrait.png"
              alt="ICanCook App Seller Dashboard"
              className="max-w-[80%] md:max-w-full h-auto relative z-10 mx-auto rounded-xl shadow-lg"
            />

             {/* Connecting lines */}
            <div className="absolute top-[10%] left-[10%] md:left-[0%] w-[100px] md:w-[120px] h-[2px] bg-icancook-purple z-5"></div>
            <div className="absolute top-[40%] right-[10%] md:right-[0%] w-[100px] md:w-[120px] h-[2px] bg-icancook-red z-5"></div>
            <div className="absolute bottom-[25%] left-[10%] md:left-[0%] w-[100px] md:w-[120px] h-[2px] bg-icancook-green z-5"></div>
            
            {/* First card - Calendar Feature */}
                        <Card className="absolute top-[5%] left-[-20px] md:left-[-150px] max-w-[250px] z-20 feature-card transform hover:scale-105 transition-all">
                        <CardContent className="p-4">
                            <div className="flex items-center mb-2">
                              <span className="highlight-dot bg-icancook-purple"></span>
                              <h3 className="text-xl font-bold">Seller Dashboard</h3>
                            </div>
                            <Separator className="my-2 bg-icancook-purple/20" />
                            <p className="text-sm">Plan your meals with our intuitive calendar system that helps manage your cooking schedule</p>
                          </CardContent>
                        </Card>
                        
                        {/* Second card - Earnings */}
                        <Card className="absolute top-[35%] right-[-20px] md:right-[-150px] max-w-[250px] z-20 feature-card transform hover:scale-105 transition-all">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <span className="feature-icon red-dot"></span>
                  <h3 className="text-xl font-bold">Earnings Tracker</h3>
                </div>
                <Separator className="my-2 bg-icancook-red/20" />
                <p className="text-sm">
                  Track your monthly earnings from sales of your dishes and request payouts
                </p>
              </CardContent>
            </Card>
                        
                        {/* Third card - Active Listings */}
                        <Card className="absolute bottom-[10%] left-[-20px] md:left-[-150px] max-w-[250px] z-20 feature-card transform hover:scale-105 transition-all">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <span className="feature-icon green-dot"></span>
                  <h3 className="text-xl font-bold">Order Fulfillment</h3>
                </div>
                <Separator className="my-2 bg-icancook-green/20" />
                <p className="text-sm">
                  Easily fulfill your orders by changing status from Confirmed to Prepping to Ready
                </p>
              </CardContent>
            </Card>
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

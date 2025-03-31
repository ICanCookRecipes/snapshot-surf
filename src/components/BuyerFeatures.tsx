
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
          <div className="relative w-full max-w-md  md:h-[800px]">
            <img 
              src="/lovable-uploads/0c058e56-b517-4bd1-aee6-1a4ebc992589.png"
              alt="ICanCook App Seller Dashboard"
              className="max-w-[80%] md:max-w-full h-auto relative z-10 mx-auto rounded-xl shadow-lg"
            />
            
            {/* Connecting lines */}
            <div className="absolute top-[10%] left-[10%] md:left-[0%] w-[100px] md:w-[120px] h-[2px] bg-icancook-purple z-5"></div>
            <div className="absolute top-[40%] right-[10%] md:right-[0%] w-[100px] md:w-[120px] h-[2px] bg-icancook-red z-5"></div>
            <div className="absolute bottom-[25%] left-[10%] md:left-[0%] w-[100px] md:w-[120px] h-[2px] bg-icancook-green z-5"></div>
            
            {/* First card - Calendar Feature */}
            <Card className="absolute top-[5%] left-[-80px] md:left-[-150px] max-w-[250px] z-20 feature-card transform hover:scale-105 transition-all">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <span className="highlight-dot bg-icancook-purple"></span>
                  <h3 className="text-xl font-bold">Cooking Schedule</h3>
                </div>
                <Separator className="my-2 bg-icancook-purple/20" />
                <p className="text-sm">Plan your meals with our intuitive calendar system that helps manage your cooking schedule</p>
              </CardContent>
            </Card>
            
            {/* Second card - Earnings */}
            <Card className="absolute top-[35%] right-[-80px] md:right-[-150px] max-w-[250px] z-20 feature-card transform hover:scale-105 transition-all">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <span className="feature-icon red-dot"></span>
                  <h3 className="text-xl font-bold">Earnings Tracker</h3>
                </div>
                <Separator className="my-2 bg-icancook-red/20" />
                <p className="text-sm">Track your monthly earnings from purchases and place your orders for homemade meals</p>
              </CardContent>
            </Card>
            
            {/* Third card - Active Listings */}
            <Card className="absolute bottom-[20%] left-[-80px] md:left-[-150px] max-w-[250px] z-20 feature-card transform hover:scale-105 transition-all">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <span className="feature-icon green-dot"></span>
                  <h3 className="text-xl font-bold">Browse Listings</h3>
                </div>
                <Separator className="my-2 bg-icancook-green/20" />
                <p className="text-sm">Discover active food listings from local home chefs and place your orders for homemade meals</p>
              </CardContent>
            </Card>
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
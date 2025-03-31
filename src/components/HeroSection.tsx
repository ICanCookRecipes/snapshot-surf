import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative">
      <div className="container mx-auto px-4 py-20 md:py-0 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left z-10 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-white">
            <span className="text-black">ICanCook</span>
            <br />
            <span className="text-[#4a89dc]">App</span>
          </h1>
          <p className="text-white text-xl mb-8">
            Peer to Peer Food Marketplace for food lovers around the world.
          </p>
          <div className="flex gap-4">
            <a
              href="https://apps.apple.com/us/app/icancookfood/id6593659930"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-purple-800 hover:bg-gray-100">
                Download App
              </Button>
            </a>
            <a href="#referrals" className="text-lg font-medium hover:text-purple-600 transition-colors">
            <Button className="bg-white text-purple-800 hover:bg-gray-100">
              Referral
            </Button>
            </a>
          </div>
        </div>
        <div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative">
            <img
              src="/lovable-uploads/design.png"
              alt="Hero Image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


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
            <Button className="bg-white text-purple-800 hover:bg-gray-100">
              Download App
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="relative">
            <img 
              src="/lovable-uploads/9807a681-9492-453c-a006-45d79db1fe17.png"
              alt="ICanCook App with character"
              className="relative z-10 max-w-full h-auto"
            />
            <div className="absolute bottom-1/3 right-0 bg-yellow-100 rounded-full p-4 font-bold">
              <div className="text-3xl">7%</div>
              <div className="text-sm max-w-[150px] leading-tight">
                Earn 7% per transaction when you refer someone
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

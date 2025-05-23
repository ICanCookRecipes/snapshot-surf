
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import BuyerFeatures from '@/components/BuyerFeatures';
import SellerFeatures from '@/components/SellerFeatures';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <BuyerFeatures />
        <SellerFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

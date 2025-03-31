
import React from 'react';
import { Button } from '@/components/ui/button';

const NavBar: React.FC = () => {
  return (
    <nav className="container mx-auto py-4 flex justify-between items-center">
      <div className="text-3xl font-bold gradient-text">ICanCook</div>
      <div className="hidden md:flex gap-6 items-center">
        <a href="#buyer" className="text-lg font-medium hover:text-purple-600 transition-colors">For Buyers</a>
        <a href="#seller" className="text-lg font-medium hover:text-purple-600 transition-colors">For Sellers</a>
        <a href="#dashboard" className="text-lg font-medium hover:text-purple-600 transition-colors">Dashboard</a>
      </div>
      <a
                    href="https://apps.apple.com/us/app/icancookfood/id6593659930"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                          <Button className="bg-gradient-to-r from-icancook-red to-icancook-purple text-white">Download App</Button>
                  </a>
    </nav>
  );
};

export default NavBar;

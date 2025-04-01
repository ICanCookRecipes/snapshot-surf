
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const NavBar: React.FC = () => {
  const { currentUser } = useAuth();
  
  return (
    <nav className="container mx-auto py-4 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold gradient-text">ICanCook</Link>
      <div className="hidden md:flex gap-6 items-center">
        <a href="#buyer" className="text-lg font-medium hover:text-purple-600 transition-colors">For Buyers</a>
        <a href="#seller" className="text-lg font-medium hover:text-purple-600 transition-colors">For Sellers</a>
        <a href="#referrals" className="text-lg font-medium hover:text-purple-600 transition-colors">Referrals</a>
        <Link 
          to={currentUser ? "/dashboard" : "/auth"} 
          className="text-lg font-medium hover:text-purple-600 transition-colors"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to={currentUser ? "/dashboard" : "/auth"}
          className="md:hidden text-lg font-medium hover:text-purple-600 transition-colors"
        >
          Dashboard
        </Link>
        <a
          href="https://apps.apple.com/us/app/icancookfood/id6593659930"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-icancook-red to-icancook-purple text-white">Download App</Button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

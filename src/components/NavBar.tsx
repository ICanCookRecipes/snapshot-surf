
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const NavBar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  
  const getInitials = (email: string | null) => {
    if (!email) return "U";
    const parts = email.split('@');
    return parts[0].charAt(0).toUpperCase();
  };
  
  return (
    <nav className="container mx-auto py-4 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold gradient-text">ICanCook</Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="#buyer" className="text-lg font-medium hover:text-purple-600 transition-colors">For Buyers</a>
        <a href="#seller" className="text-lg font-medium hover:text-purple-600 transition-colors">For Sellers</a>
        <Link 
          to="/dashboard" 
          className="text-lg font-medium hover:text-purple-600 transition-colors"
        >
          Referral
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        {currentUser ? (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="rounded-full p-0 w-10 h-10">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-r from-icancook-red to-icancook-purple text-white">
                    {getInitials(currentUser.email)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2">
              <div className="space-y-3">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">Account</p>
                  <p className="text-xs text-muted-foreground truncate">{currentUser.email}</p>
                </div>
                <div className="border-t border-border"></div>
                <div className="grid">
                  <Link 
                    to="/dashboard" 
                    className="px-2 py-1.5 text-sm hover:bg-accent rounded-md"
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="px-2 py-1.5 text-sm text-left text-red-500 hover:bg-accent rounded-md"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <Link to="/auth">
            <Button variant="outline">Sign In</Button>
          </Link>
        )}
        
        <a
          href="https://apps.apple.com/us/app/icancookfood/id6593659930"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-icancook-red to-icancook-purple text-white">Download App</Button>
        </a>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <a href="#buyer" className="text-lg font-medium hover:text-purple-600 transition-colors py-2">
                  For Buyers
                </a>
                <a href="#seller" className="text-lg font-medium hover:text-purple-600 transition-colors py-2">
                  For Sellers
                </a>
                <Link 
                  to="/dashboard" 
                  className="text-lg font-medium hover:text-purple-600 transition-colors py-2"
                >
                  Referral
                </Link>
                {currentUser ? (
                  <Button 
                    variant="outline" 
                    onClick={handleLogout}
                    className="mt-4"
                  >
                    Log Out
                  </Button>
                ) : (
                  <Link to="/auth" className="mt-4">
                    <Button className="w-full">Sign In</Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

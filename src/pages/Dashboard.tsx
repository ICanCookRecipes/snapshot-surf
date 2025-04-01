
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  
  useEffect(() => {
    // If user is not logged in, redirect to auth page
    if (!currentUser) {
      navigate('/auth');
    }
  }, [currentUser, navigate]);
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  if (!currentUser) return null;
  
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {currentUser.displayName || currentUser.email}!</h1>
            <p className="text-muted-foreground">Manage your ICanCook experience here</p>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="outline"
            className="mt-4 md:mt-0"
          >
            Log out
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dashboard cards would go here */}
          <div className="bg-card rounded-lg shadow-sm p-6 border">
            <h3 className="text-xl font-medium mb-2">My Orders</h3>
            <p className="text-muted-foreground">View and manage your food orders</p>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-6 border">
            <h3 className="text-xl font-medium mb-2">My Listings</h3>
            <p className="text-muted-foreground">Manage your food listings</p>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-6 border">
            <h3 className="text-xl font-medium mb-2">Account Settings</h3>
            <p className="text-muted-foreground">Update your profile and preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

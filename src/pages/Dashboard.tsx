import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import ReferralCodeCard from '@/components/dashboard/ReferralCodeCard';
import StatsCards from '@/components/dashboard/StatsCards';
import TransactionList from '@/components/dashboard/TransactionList';
import { useToast } from '@/hooks/use-toast';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, logout, requiresEmailVerification } = useAuth();
  const { toast } = useToast();
  const [isPayoutLoading, setIsPayoutLoading] = useState(false);
  
  useEffect(() => {
    // If user is not logged in or requires email verification, redirect to auth page
    if (!currentUser) {
      navigate('/auth');
    } else if (requiresEmailVerification) {
      // If email verification is required, redirect to auth page
      navigate('/auth');
      toast({
        title: "Email Verification Required",
        description: "Please verify your email before accessing the dashboard.",
        variant: "destructive",
      });
    }
  }, [currentUser, navigate, requiresEmailVerification, toast]);
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleRequestPayout = () => {
    setIsPayoutLoading(true);
    
    // Simulate payout request
    setTimeout(() => {
      setIsPayoutLoading(false);
      toast({
        title: "Payout Request Submitted",
        description: "Your payout request has been submitted and will be processed within 3-5 business days.",
      });
    }, 1500);
  };
  
  if (!currentUser || requiresEmailVerification) return null;
  
  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {currentUser.displayName || currentUser.email}!</h1>
            <p className="text-muted-foreground">Manage your ICanCook referrals and earnings here</p>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="outline"
            className="mt-4 md:mt-0"
          >
            Log out
          </Button>
        </div>
        
        {/* Referral Code Card */}
        <ReferralCodeCard referralCode={currentUser.uid} />
        
        {/* Stats Cards */}
        <StatsCards />
        
        {/* Transactions List */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Transaction History</h2>
            <Button 
              onClick={handleRequestPayout} 
              className="bg-gradient-to-r from-icancook-red to-icancook-purple text-white"
              disabled={isPayoutLoading}
            >
              {isPayoutLoading ? "Processing..." : "Request Payout"}
            </Button>
          </div>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

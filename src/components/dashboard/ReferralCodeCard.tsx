
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ReferralCodeCardProps {
  referralCode: string;
}

const ReferralCodeCard: React.FC<ReferralCodeCardProps> = ({ referralCode }) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <Card className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">Your Referral Code</h2>
            <p className="text-sm text-muted-foreground mb-2">
              Share this code with friends and earn rewards when they sign up
            </p>
            <div className="px-4 py-2 bg-white dark:bg-black border rounded-md font-mono text-lg">
              {referralCode}
            </div>
          </div>
          <Button 
            onClick={handleCopy} 
            className="mt-4 md:mt-0 bg-gradient-to-r from-icancook-red to-icancook-purple text-white"
          >
            {copied ? "Copied!" : "Copy Code"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralCodeCard;

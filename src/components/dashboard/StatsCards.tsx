
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, DollarSign } from 'lucide-react';

const StatsCards: React.FC = () => {
  // Mock data - in a real app, this would come from an API or database
  const stats = {
    signups: 0, // Default to 0 as per requirement
    profits: 0.00
  };
  
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Total Referral Sign-ups</p>
              <h3 className="text-3xl font-bold">{stats.signups}</h3>
            </div>
            <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-950/50 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Current Profits</p>
              <h3 className="text-3xl font-bold">${stats.profits.toFixed(2)}</h3>
            </div>
            <div className="h-12 w-12 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;

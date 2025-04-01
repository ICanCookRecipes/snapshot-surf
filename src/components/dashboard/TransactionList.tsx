
import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
}

const TransactionList: React.FC = () => {
  // Mock data - in a real app, this would come from an API or database
  const transactions: Transaction[] = [
    {
      id: 't1',
      date: '2023-10-15',
      description: 'Referral Bonus - John Doe',
      amount: 5.00,
      status: 'completed'
    },
    {
      id: 't2',
      date: '2023-10-10',
      description: 'Payout Request',
      amount: -25.00,
      status: 'completed'
    },
    {
      id: 't3',
      date: '2023-10-05',
      description: 'Referral Bonus - Jane Smith',
      amount: 5.00,
      status: 'completed'
    },
    {
      id: 't4',
      date: '2023-09-28',
      description: 'Payout Processing',
      amount: -15.00,
      status: 'pending'
    },
  ];

  const getStatusClass = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100 dark:bg-green-950/30';
      case 'pending':
        return 'text-amber-600 bg-amber-100 dark:bg-amber-950/30';
      case 'failed':
        return 'text-red-600 bg-red-100 dark:bg-red-950/30';
      default:
        return '';
    }
  };

  return (
    <Card>
      <div className="rounded-md border">
        {transactions.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className={transaction.amount > 0 ? 'text-green-600' : ''}>
                    ${transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(transaction.status)}`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex items-center justify-center py-8 text-center text-muted-foreground">
            <p>No transactions yet</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TransactionList;

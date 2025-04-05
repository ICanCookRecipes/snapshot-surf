
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TermsAgreementProps {
  open: boolean;
  onAccept: () => void;
  onCancel: () => void;
}

const TermsAgreement: React.FC<TermsAgreementProps> = ({ 
  open, 
  onAccept, 
  onCancel 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAccept = () => {
    setIsLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false);
      onAccept();
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent className="sm:max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms and Agreement</DialogTitle>
          <DialogDescription>
            Please read the following terms and conditions carefully before proceeding.
          </DialogDescription>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-[50vh] border p-4 rounded-md">
          <h3 className="text-lg font-bold mb-2">ICanCook Terms of Service</h3>
          
          <p className="mb-4">
            Welcome to ICanCook! These Terms of Service ("Terms") govern your use of the ICanCook platform,
            including our website, mobile application, and all related services (collectively, the "Service").
          </p>
          
          <h4 className="font-bold mt-4 mb-2">1. Acceptance of Terms</h4>
          <p className="mb-4">
            By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy.
            If you do not agree to these Terms, you may not use the Service.
          </p>
          
          <h4 className="font-bold mt-4 mb-2">2. Description of Service</h4>
          <p className="mb-4">
            ICanCook is a platform that connects home chefs with hungry customers. Users can buy homemade meals
            from local chefs or sell their own culinary creations to others in their community.
          </p>
          
          <h4 className="font-bold mt-4 mb-2">3. User Accounts</h4>
          <p className="mb-4">
            To use certain features of the Service, you must register for an account. You agree to provide accurate,
            current, and complete information and to update such information to keep it accurate, current, and complete.
            You are responsible for safeguarding your account password and for all activities that occur under your account.
          </p>
          
          <h4 className="font-bold mt-4 mb-2">4. Referral Program</h4>
          <p className="mb-4">
            Users may participate in our referral program by sharing their unique referral code with others.
            When a new user signs up using your referral code, both you and the new user may receive benefits
            as described in our current referral program terms. ICanCook reserves the right to modify or terminate
            the referral program at any time.
          </p>
          
          <h4 className="font-bold mt-4 mb-2">5. Content and Conduct</h4>
          <p className="mb-4">
            Users are responsible for all content they submit, post, or display through the Service.
            You agree not to use the Service for any illegal purpose or in violation of any laws.
            ICanCook reserves the right to remove any content that violates these Terms or is otherwise objectionable.
          </p>
          
          <h4 className="font-bold mt-4 mb-2">6. Limitation of Liability</h4>
          <p className="mb-4">
            To the maximum extent permitted by law, ICanCook shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, including loss of profits, data, or goodwill,
            arising out of or in connection with these Terms or your use of the Service.
          </p>
          
          <h4 className="font-bold mt-4 mb-2">7. Changes to Terms</h4>
          <p className="mb-4">
            ICanCook reserves the right to modify these Terms at any time. We will provide notice of significant
            changes by posting the new Terms on the Service and updating the "Last Updated" date.
            Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h4 className="font-bold mt-4 mb-2">8. Governing Law</h4>
          <p className="mb-4">
            These Terms shall be governed by the laws of the jurisdiction in which ICanCook is based,
            without regard to its conflict of law provisions.
          </p>
          
          <p className="mt-6 font-bold">
            By clicking "I Accept" below, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>
        
        <DialogFooter className="flex gap-2 mt-4">
          <Button variant="outline" onClick={onCancel}>
            Decline
          </Button>
          <Button 
            className="bg-gradient-to-r from-icancook-red to-icancook-purple text-white"
            onClick={handleAccept}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "I Accept"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAgreement;

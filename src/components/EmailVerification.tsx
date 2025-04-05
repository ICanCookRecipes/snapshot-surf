
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { sendEmailVerification, reload } from 'firebase/auth';
import { Loader2, CheckCircle, Mail, AlertCircle, Clock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

interface EmailVerificationProps {
  onVerified: () => void;
  onBackToLogin: () => void;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({ onVerified, onBackToLogin }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const { toast } = useToast();
  
  // Initialize verification on component mount
  useEffect(() => {
    // Send verification email automatically when component mounts
    if (auth.currentUser && !auth.currentUser.emailVerified) {
      sendVerificationEmail();
    }
  }, []);
  
  // Check verification status every 3 seconds
  useEffect(() => {
    if (!auth.currentUser) return;
    
    const checkVerification = async () => {
      if (!auth.currentUser) return;
      
      try {
        setIsVerifying(true);
        // Refresh the user to check current state
        await reload(auth.currentUser);
        
        if (auth.currentUser.emailVerified) {
          toast({
            title: "Email Verified",
            description: "Your email has been verified successfully.",
          });
          onVerified();
        }
      } catch (error) {
        console.error("Error checking verification status:", error);
        setError((error as Error).message);
      } finally {
        setIsVerifying(false);
      }
    };
    
    const interval = setInterval(checkVerification, 3000);
    
    // Initial check
    checkVerification();
    
    return () => clearInterval(interval);
  }, [onVerified, toast]);
  
  // Cooldown timer
  useEffect(() => {
    if (!cooldownActive || cooldownTime <= 0) return;
    
    const interval = setInterval(() => {
      setCooldownTime(prevTime => {
        if (prevTime <= 1) {
          setCooldownActive(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [cooldownActive, cooldownTime]);
  
  const sendVerificationEmail = async () => {
    if (!auth.currentUser) return;
    
    try {
      setIsSending(true);
      setError(null);
      
      // Send verification without specifying a URL to avoid domain whitelisting issues
      await sendEmailVerification(auth.currentUser);
      
      toast({
        title: "Verification Email Sent",
        description: "Please check your inbox and click the verification link.",
      });
    } catch (error) {
      console.error("Error sending verification email:", error);
      const errorCode = (error as any).code;
      
      // Handle rate limiting error
      if (errorCode === 'auth/too-many-requests') {
        setError("Too many verification emails sent. Please wait a few minutes before trying again.");
        setCooldownActive(true);
        setCooldownTime(60); // 60 seconds cooldown
      } else {
        setError((error as Error).message);
      }
      
      toast({
        title: "Failed to Send Email",
        description: errorCode === 'auth/too-many-requests' 
          ? "Too many attempts. Please wait before trying again." 
          : (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };
  
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Verify Your Email</CardTitle>
          <CardDescription>
            We've sent a verification email to{" "}
            <span className="font-medium">{auth.currentUser?.email}</span>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="flex justify-center py-6">
            {isVerifying ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-12 w-12 animate-spin text-icancook-purple" />
                <p className="text-sm text-muted-foreground">Checking verification status...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-12 w-12 text-icancook-purple" />
                <p className="text-sm text-muted-foreground">
                  Please check your email and click the verification link
                </p>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-center text-muted-foreground">
              Didn't receive the email? Check your spam folder or click below to resend.
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={sendVerificationEmail}
                disabled={isSending || cooldownActive}
                className="w-full"
              >
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : cooldownActive ? (
                  <>
                    <Clock className="mr-2 h-4 w-4" />
                    Wait {cooldownTime}s
                  </>
                ) : (
                  "Resend Verification Email"
                )}
              </Button>
            </div>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button 
            variant="ghost" 
            onClick={onBackToLogin} 
            className="w-full"
          >
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EmailVerification;


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
  const [initialEmailSent, setInitialEmailSent] = useState(false);
  const { toast } = useToast();
  
  // Initialize verification status check on component mount
  useEffect(() => {
    // Check verification status only, don't send email automatically
    if (!auth.currentUser) return;
    checkVerificationStatus();
  }, []);
  
  // Initialize the cooldown from localStorage if it exists
  useEffect(() => {
    const storedCooldownEndTime = localStorage.getItem('verificationCooldownEnd');
    if (storedCooldownEndTime) {
      const endTime = parseInt(storedCooldownEndTime, 10);
      const now = Date.now();
      
      if (endTime > now) {
        // Cooldown is still active
        setCooldownActive(true);
        setCooldownTime(Math.ceil((endTime - now) / 1000));
      } else {
        // Cooldown has expired, clear it
        localStorage.removeItem('verificationCooldownEnd');
      }
    }
  }, []);
  
  // Check verification status every 3 seconds
  useEffect(() => {
    if (!auth.currentUser) return;
    
    const interval = setInterval(checkVerificationStatus, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // Cooldown timer
  useEffect(() => {
    if (!cooldownActive || cooldownTime <= 0) return;
    
    const interval = setInterval(() => {
      setCooldownTime(prevTime => {
        if (prevTime <= 1) {
          setCooldownActive(false);
          localStorage.removeItem('verificationCooldownEnd');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [cooldownActive, cooldownTime]);
  
  // Send verification email with improved cooldown handling
  const sendVerificationEmail = async () => {
    if (!auth.currentUser) return;
    
    try {
      setIsSending(true);
      setError(null);
      
      await sendEmailVerification(auth.currentUser);
      setInitialEmailSent(true);
      
      toast({
        title: "Verification Email Sent",
        description: "Please check your inbox and click the verification link.",
      });
    } catch (error) {
      console.error("Error sending verification email:", error);
      const errorCode = (error as any).code;
      
      // Handle rate limiting error
      if (errorCode === 'auth/too-many-requests') {
        // Set a 60 second cooldown
        setCooldownActive(true);
        setCooldownTime(60);
        
        // Store cooldown end time in localStorage
        const cooldownEndTime = Date.now() + (60 * 1000);
        localStorage.setItem('verificationCooldownEnd', cooldownEndTime.toString());
        
        setError("Too many verification emails sent. Please wait a minute before trying again.");
        
        toast({
          title: "Too Many Requests",
          description: "Please wait a minute before requesting another verification email.",
          variant: "destructive",
        });
      } else {
        setError((error as Error).message);
        
        toast({
          title: "Failed to Send Email",
          description: (error as Error).message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSending(false);
    }
  };
  
  const checkVerificationStatus = async () => {
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
    } finally {
      setIsVerifying(false);
    }
  };
  
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Verify Your Email</CardTitle>
          <CardDescription>
            {initialEmailSent ? (
              <>We've sent a verification email to <span className="font-medium">{auth.currentUser?.email}</span></>
            ) : (
              <>
                Click the button below to send a verification email to{" "}
                <span className="font-medium">{auth.currentUser?.email}</span>
              </>
            )}
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
            ) : initialEmailSent ? (
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-12 w-12 text-icancook-purple" />
                <p className="text-sm text-muted-foreground">
                  Please check your email and click the verification link
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-12 w-12 text-icancook-purple" />
                <p className="text-sm text-muted-foreground">
                  You need to verify your email address to continue
                </p>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            {!initialEmailSent ? (
              <Button
                onClick={sendVerificationEmail}
                disabled={isSending || cooldownActive}
                className="w-full"
              >
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Verification Email...
                  </>
                ) : cooldownActive ? (
                  <>
                    <Clock className="mr-2 h-4 w-4" />
                    Wait {cooldownTime}s
                  </>
                ) : (
                  "Send Verification Email"
                )}
              </Button>
            ) : (
              <div className="space-y-2">
                <p className="text-sm text-center text-muted-foreground">
                  Didn't receive the email? Check your spam folder or click below to resend.
                </p>
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
            )}
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

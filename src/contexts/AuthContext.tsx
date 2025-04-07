
import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User,
  signInWithPopup,
  sendEmailVerification
} from 'firebase/auth';
import { auth, googleProvider, appleProvider } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  requiresEmailVerification: boolean;
  setRequiresEmailVerification: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [requiresEmailVerification, setRequiresEmailVerification] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      
      if (user && !user.emailVerified && localStorage.getItem('needsEmailVerification') === 'true') {
        setRequiresEmailVerification(true);
      } else {
        setRequiresEmailVerification(false);
      }

      // Check if this is a new user login that requires terms acceptance
      if (user && !localStorage.getItem('termsAccepted')) {
        // Ensure terms agreement is required
        localStorage.setItem('termsRequiredButNotAccepted', 'true');
      }
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      if (auth.currentUser && !auth.currentUser.emailVerified) {
        setRequiresEmailVerification(true);
        localStorage.setItem('needsEmailVerification', 'true');
        
        toast({
          title: "Email Verification Required",
          description: "Please verify your email before accessing your account.",
        });
      } else {
        setRequiresEmailVerification(false);
        localStorage.removeItem('needsEmailVerification');
        
        toast({
          title: "Login Successful",
          description: "Welcome back to ICanCook!",
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorCode = (error as any).code;
      let description = (error as Error).message;
      
      if (errorCode === 'auth/invalid-credential') {
        description = "Invalid email or password. Please try again.";
      } else if (errorCode === 'auth/user-not-found') {
        description = "No account found with this email. Please register first.";
      } else if (errorCode === 'auth/wrong-password') {
        description = "Incorrect password. Please try again.";
      }
      
      toast({
        title: "Login Failed",
        description: description,
        variant: "destructive",
      });
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });
      
      await signInWithPopup(auth, googleProvider);
      toast({
        title: "Login Successful",
        description: "Welcome to ICanCook!",
      });
    } catch (error) {
      console.error('Google login error:', error);
      const errorCode = (error as any).code;
      
      let description = (error as Error).message;
      
      if (errorCode === 'auth/unauthorized-domain') {
        description = "This domain is not authorized for Google authentication. Please try email login instead, or use an authorized domain (localhost, icancookauth.firebaseapp.com).";
      }
      
      toast({
        title: "Google Login Failed",
        description: description,
        variant: "destructive",
      });
      throw error;
    }
  };

  const loginWithApple = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
      toast({
        title: "Login Successful",
        description: "Welcome to ICanCook using Apple!",
      });
    } catch (error) {
      console.error('Apple login error:', error);
      const errorMessage = (error as Error).message;
      toast({
        title: "Apple Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (userCredential.user) {
        setRequiresEmailVerification(true);
        localStorage.setItem('needsEmailVerification', 'true');
        
        try {
          await sendEmailVerification(userCredential.user);
          
          toast({
            title: "Registration Successful",
            description: "Please check your email to verify your account.",
          });
        } catch (verificationError) {
          console.error("Verification email error:", verificationError);
          const errorCode = (verificationError as any).code;
          
          if (errorCode === 'auth/too-many-requests') {
            toast({
              title: "Verification Email Will Be Sent",
              description: "Your account has been created. You can request a verification email on the next screen.",
            });
          } else {
            toast({
              title: "Account Created",
              description: "Your account was created, but we couldn't send a verification email. You can request one on the verification page.",
            });
          }
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      const errorCode = (error as any).code;
      let description = (error as Error).message;
      
      if (errorCode === 'auth/email-already-in-use') {
        description = "This email is already registered. Please login instead.";
      } else if (errorCode === 'auth/weak-password') {
        description = "Password is too weak. Please use a stronger password.";
      } else if (errorCode === 'auth/invalid-email') {
        description = "Invalid email address. Please check and try again.";
      }
      
      toast({
        title: "Registration Failed",
        description: description,
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setRequiresEmailVerification(false);
      localStorage.removeItem('needsEmailVerification');
      
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast({
        title: "Logout Failed",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  const value = {
    currentUser,
    loading,
    login,
    loginWithGoogle,
    loginWithApple,
    register,
    logout,
    requiresEmailVerification,
    setRequiresEmailVerification
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

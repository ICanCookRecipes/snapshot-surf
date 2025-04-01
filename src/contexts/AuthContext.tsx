import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User,
  signInWithPopup
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
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Successful",
        description: "Welcome back to ICanCook!",
      });
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  // Login with Google function
  const loginWithGoogle = async () => {
    try {
      // Enable popup redirects
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });
      
      await signInWithPopup(auth, googleProvider);
      toast({
        title: "Login Successful",
        description: "Welcome to ICanCook!",
      });
    } catch (error) {
      const errorMessage = (error as Error).message;
      const errorCode = (error as any).code;
      
      let description = errorMessage;
      
      // Special handling for unauthorized domain error
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

  // Login with Apple function using appleProvider
  const loginWithApple = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
      toast({
        title: "Login Successful",
        description: "Welcome to ICanCook using Apple!",
      });
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast({
        title: "Apple Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  // Register function
  const register = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Registration Successful",
        description: "Welcome to ICanCook!",
      });
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast({
        title: "Registration Failed",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth);
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
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

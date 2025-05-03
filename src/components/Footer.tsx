
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 gradient-text">ICanCook</h2>
            <p className="max-w-xs">Peer to Peer Food Marketplace for food lovers around the world.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Commented out menu items kept for future use */}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <p>© 2025 ICanCook. All rights reserved.</p>
            <a 
              href="/privacy_policy.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://x.com/ICanCookFood" rel="noopener noreferrer" target="_blank" className="hover:text-purple-400" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <p>© 2025 ICanCook. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="privacy_policy.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </a>
              
              <Dialog>
                <DialogTrigger className="text-white hover:text-purple-400 transition-colors cursor-pointer">
                  Safety Standards Policy
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold mb-4">Child Safety Standards Policy</DialogTitle>
                  </DialogHeader>
                  <div className="overflow-y-auto max-h-[70vh]">
                    <div className="space-y-4">
                      <section>
                        <h3 className="font-semibold text-lg mb-2">1. Prohibition of Child Sexual Abuse and Exploitation</h3>
                        <p>ICanCook explicitly prohibits any form of child sexual abuse and exploitation (CSAE) on our platform. This includes but is not limited to the creation, distribution, or possession of child sexual abuse material (CSAM), grooming behaviors, or any other conduct that may harm minors.</p>
                      </section>
                      
                      <section>
                        <h3 className="font-semibold text-lg mb-2">2. User Feedback Mechanism</h3>
                        <p>ICanCook provides an in-app mechanism for users to report concerns, submit feedback, or report violations of our policies, including any content or behavior that may harm minors. Users can flag concerning content directly through the app's reporting feature or contact our safety team at safety@icancook.com.</p>
                      </section>
                      
                      <section>
                        <h3 className="font-semibold text-lg mb-2">3. CSAM Response Protocol</h3>
                        <p>Upon obtaining actual knowledge of CSAM on our platform, ICanCook takes immediate and appropriate action, including but not limited to:</p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Immediate removal of the offending content</li>
                          <li>Reporting to relevant authorities</li>
                          <li>Termination of user accounts involved in the creation or distribution of such content</li>
                          <li>Preservation of evidence as required by law</li>
                        </ul>
                      </section>
                      
                      <section>
                        <h3 className="font-semibold text-lg mb-2">4. Compliance with Child Safety Laws</h3>
                        <p>ICanCook complies with all applicable child safety laws and regulations. We have established processes to report confirmed CSAM to the National Center for Missing and Exploited Children (NCMEC) in the United States and other relevant regional authorities worldwide. We cooperate fully with law enforcement investigations related to child safety matters.</p>
                      </section>
                      
                      <section>
                        <h3 className="font-semibold text-lg mb-2">5. Child Safety Point of Contact</h3>
                        <p>ICanCook has designated a child safety point of contact who is responsible for receiving notifications about potential CSAE content on our platform. This representative is positioned to speak to our enforcement procedures and take immediate action when required. For child safety concerns, please contact: childsafety@icancook.com</p>
                      </section>
                      
                      <section>
                        <h3 className="font-semibold text-lg mb-2">6. Ongoing Review and Improvement</h3>
                        <p>ICanCook is committed to the ongoing review and improvement of our child safety measures. We regularly update our detection systems, review our policies, and train our moderation team to ensure the highest standards of child protection on our platform.</p>
                      </section>
                      
                      <p className="italic mt-6">Last updated: May 4, 2025</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
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

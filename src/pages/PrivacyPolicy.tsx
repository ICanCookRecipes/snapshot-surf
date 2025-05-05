
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              At ICanCook, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our mobile application and website.
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the application.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Collection of Your Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect 
              via the Application includes:
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, shipping address, email address, and 
              telephone number, and demographic information, such as your age, gender, hometown, and interests, 
              that you voluntarily give to us when you register with the Application or when you choose to 
              participate in various activities related to the Application.
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the Application, such as your 
              native actions that are integral to the Application, as well as other interactions with the 
              Application and other users via server log files.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, 
              and customized experience. Specifically, we may use information collected about you via the 
              Application to:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Application.</li>
              <li>Generate a personal profile about you to make future visits to the Application more personalized.</li>
              <li>Increase the efficiency and operation of the Application.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Application.</li>
              <li>Notify you of updates to the Application.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
              <li>Perform other business activities as needed.</li>
              <li>Request feedback and contact you about your use of the Application.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information 
              may be disclosed as follows:
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, 
              to investigate or remedy potential violations of our policies, or to protect the rights, property, 
              and safety of others, we may share your information as permitted or required by any applicable 
              law, rule, or regulation.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> icancookfeedback@gmail.com
            </p>
          </section>

          <p className="text-sm text-gray-600 mt-8">Last updated: May 5, 2025</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

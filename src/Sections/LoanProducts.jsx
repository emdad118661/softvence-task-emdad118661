// src/sections/LoanProducts.jsx

import React from 'react';
 // আগের বানানো হেডলাইন
 // নতুন কার্ড কম্পোনেন্ট
import CenterHeadline from '../Components/CenterHeadline';
import LoanCard from '../Components/LoanCard';

// কার্ডগুলোর জন্য ডেটা। এখানে icon-এর জন্য placeholder link ব্যবহার করা হয়েছে।
const loanData = [
  {
    icon: 'https://i.ibb.co/qMsLfsQp/image-2.png', // Example Icon
    title: 'Fix and Flip',
    subtitle: 'Funding For Rehab + Purchase',
    features: [
      '$50,000 up to $3,000,000',
      'Interest Rate 10.5%-12.99%',
      'Origination Fee From 1.5%',
      'Up to 85% of Purchase and 100% of Rehab'
    ],
    variant: 'dark' // প্রথম কার্ডটি ডার্ক
  },
  {
    icon: 'https://i.ibb.co/dsmvCvVW/image-2.png', // Example Icon
    title: 'Rental Property',
    subtitle: '30 Year DSCR loans in Florida and Texas',
    features: [
      'Up to $1,500,000',
      'Interest Rate 6.75%-8.25%',
      'Origination Fee From 1.5%',
      'Up to 85% of LTV'
    ],
    variant: 'light' // দ্বিতীয় কার্ডটি লাইট
  },
  {
    icon: 'https://i.ibb.co/gZBsVVNp/image-2-1.png', // Example Icon
    title: 'Ground Up Construction',
    subtitle: 'Ground Up Construction loans in Florida and Texas',
    features: [
      'Up to $3,500,000',
      'Interest Rate 11.25%-13.25%',
      'Origination Fee From 1.5%',
      'Up to 80% of LTC'
    ],
    variant: 'light' // তৃতীয় কার্ডটি লাইট
  }
];


const LoanProducts = () => {
  return (
    // Responsive vertical padding
    <section className="py-12 md:py-16 max-w-[1420px] mx-auto">
      <div className="container px-4 mx-auto">
        <CenterHeadline title="Loan Products" />

        {/* 
          Responsive Grid Layout
          - Mobile-e 1 ta column thakbe (default)
          - Tablet-e (md) 2 ta column
          - Desktop-e (lg) 3 ta column
        */}
        <div className="grid grid-cols-1 gap-8 mt-10 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {loanData.map((data, index) => (
            <LoanCard key={index} cardData={data} variant={data.variant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanProducts;
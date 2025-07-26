import React from 'react';
import SlantedButtonGreen from '../Components/SlantedButtonGreen';

const HeroSection = () => {
    return (
        // bg image
        <div 
            className="relative w-full h-screen bg-center bg-cover"
            style={{ backgroundImage: `url('https://i.ibb.co/CsvCHFTL/Frame-8-2.png')` }}
        >
            
            
            {/* text and button */}
            <div className="relative z-10 flex flex-col justify-center h-[403px] ms-1 lg:ms-24 top-[150px] w-[700px]">
                <h1 className="text-[30px] md:text-[60px] font-extrabold text-[#165831] uppercase">
                    Florida and Texas <br /> Hard Money Lenders
                </h1>
                <p className="mt-6 text-[10px] md:text-[32px] font-semibold md:leading-[1.3]">
                    Fast Closing Fix and Flip and Rental Loans For <br /> Your Investment Properties.
                </p>
                <div className="mt-8">
                <SlantedButtonGreen title="GET APPROVED ONLINE"></SlantedButtonGreen>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
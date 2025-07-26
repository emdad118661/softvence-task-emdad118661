// src/components/LoanCard.jsx

import React from 'react';
import { BsCheck2Circle } from "react-icons/bs";;
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import SlantedButtonGreen from './SlantedButtonGreen';
import SlantedButton from './SlantedButton';

// cardData prop for the LoanCard component
// variant prop 
const LoanCard = ({ cardData, variant }) => {
    const { icon, title, subtitle, features } = cardData;

    // card style is chaging based on variant prop
    const isDark = variant === 'dark';
    const cardClasses = isDark ? 'bg-[#165831] text-white' : 'bg-white text-gray-800';
    const titleClasses = isDark ? 'text-white' : 'text-[#165831]';
    const subtitleClasses = isDark ? 'text-white' : 'text-[#165831]';

    return (
        // Main card container
        // relative ও overflow-hidden 
        <div className={`relative rounded-3xl shadow-xl overflow-hidden flex flex-col p-8 ${cardClasses}`}>

            {/* 1st green style */}
            <div className="absolute top-[-180px] left-[-10px] h-[200px] w-full bg-[#165831] transform rotate-[-5deg]"></div>

            {/* Card Body - flex-grow */}
            <div className="relative z-10 flex flex-col flex-grow">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white' : 'bg-[#165831]'}`}>
                        {/* img tag for icon */}
                        <img src={icon} alt={`${title} icon`} className="w-14 h-14" />
                    </div>
                </div>

                {/* Title and Subtitle */}
                <div className="text-center">
                    <h3 className={`text-[32px] font-bold ${titleClasses}`}>{title}</h3>
                    <p className={`mt-2 text-[16px] lg:w-[388px] font-medium ${subtitleClasses}`}>{subtitle}</p>
                </div>

                {/* Features List */}
                <ul className="my-6 space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <BsCheck2Circle className={`${isDark ? 'text-white' : 'text-[#165831]'}`} size={20} />
                            <span className={`${isDark ? 'text-white' : 'text-[#165831]'}`}>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Learn More Link */}
                <div className={`flex items-center gap-3 mb-8 ${isDark ? 'text-white' : 'text-[#165831]'}`}>
                    <IoInformationCircleOutline size={24} />
                    <a href="#" className="text-sm font-semibold underline">Learn More</a>
                </div>

                {/* Button - mt-auto  */}
                {isDark ? <SlantedButton title="GET APPROVED ONLINE"></SlantedButton> : <SlantedButtonGreen title="GET APPROVED ONLINE"></SlantedButtonGreen>}

                <div className="absolute bottom-[-222px] left-[50px] h-[200px] w-full bg-[#165831] transform rotate-[-7deg]"></div>
            </div>
        </div>
    );
};

export default LoanCard;
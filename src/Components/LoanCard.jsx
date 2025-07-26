// src/components/LoanCard.jsx

import React from 'react';
import { BsCheck2Circle } from "react-icons/bs";;
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import getApproved from "../assets/Button get-approved-online.png";
import getApprovedGreen from "../assets/Button get-approved-online-green.png";

// cardData prop-এ কার্ডের সব তথ্য আসবে
// variant prop দিয়ে আমরা নির্ধারণ করব কার্ডটি ডার্ক (সবুজ) নাকি লাইট (সাদা) হবে
const LoanCard = ({ cardData, variant }) => {
    const { icon, title, subtitle, features } = cardData;

    // ভ্যারিয়েন্টের ওপর ভিত্তি করে কার্ডের স্টাইল পরিবর্তন হবে
    const isDark = variant === 'dark';
    const cardClasses = isDark ? 'bg-[#165831] text-white' : 'bg-white text-gray-800';
    const titleClasses = isDark ? 'text-white' : 'text-[#165831]';
    const subtitleClasses = isDark ? 'text-white' : 'text-[#165831]';

    return (
        // Main card container
        // relative ও overflow-hidden দেওয়া হয়েছে যাতে কোণার ডিজাইনটি ঠিকমতো থাকে
        <div className={`relative rounded-3xl shadow-xl overflow-hidden flex flex-col p-8 ${cardClasses}`}>

            {/* ছবির ডিজাইন অনুযায়ী কোণার সবুজ অংশ */}
            <div className="absolute top-[-180px] left-[-10px] h-[200px] w-full bg-[#165831] transform rotate-[-5deg]"></div>

            {/* Card Body - flex-grow দিয়ে নিশ্চিত করা হয়েছে যে এটি সম্পূর্ণ জায়গা নেবে */}
            <div className="relative z-10 flex flex-col flex-grow">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white' : 'bg-[#165831]'}`}>
                        {/* আপনি এখানে img ট্যাগ বা অন্য কোনো আইকন লাইব্রেরি ব্যবহার করতে পারেন */}
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

                {/* Button - mt-auto দিয়ে এটিকে কার্ডের একদম নিচে পাঠানো হয়েছে */}
                {isDark ? <img src={getApproved} alt="" srcSet="" /> : <img src={getApprovedGreen} alt="" srcSet="" />}

                <div className="absolute bottom-[-210px] left-[50px] h-[200px] w-full bg-[#165831] transform rotate-[-7deg]"></div>
            </div>
        </div>
    );
};

export default LoanCard;
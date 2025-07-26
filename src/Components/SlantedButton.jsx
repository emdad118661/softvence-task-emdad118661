import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const SlantedButton = ({title}) => {
    return (
        // মূল <a> ট্যাগ: এর ব্যাকগ্রাউন্ড সবুজ। এটি কোনোভাবেই হেলানো নয়।
        // এটি flex কন্টেইনার হিসেবে কাজ করবে।
        <a
                    href="#"
                    className={`
                        relative inline-block h-[81px] w-auto
                        bg-white font-semibold uppercase rounded shadow-xl
                        transform -skew-x-[15deg]
                    `}
                >
                    {/* স্তর ২: সবুজ অংশ, যা একটি সাধারণ আয়তক্ষেত্র */}
                    <span
                        className="absolute z-10 h-[73px] -translate-y-1/2 bg-[#165831] rounded-md top-1/2 right-2 w-14"
                    ></span>
        
                    {/* স্তর ৩: কন্টেন্ট (টেক্সট ও আইকন), যা সোজা থাকবে */}
                    {/* === শুধু এই লাইনেই পরিবর্তন করা হয়েছে === */}
                    <div
                        className="
                            relative h-full w-full flex items-center
                            transform skew-x-[15deg] pl-6 pr-20 z-20
                        "
                    >
                        {/* টেক্সট অংশ */}
                        <span className="text-[#165831] text-xl font-semibold uppercase">
                            {title}
                        </span>
                        
                        {/* আইকন অংশ */}
                        <span className="absolute text-3xl text-white right-5">
                            <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                    </div>
                    <div className='absolute bottom-0 w-8 left-[-10.5px] h-[81px] bg-white skew-x-[15deg]'></div>
                </a>
    );
};

export default SlantedButton;
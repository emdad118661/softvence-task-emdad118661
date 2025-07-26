import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const SlantedButtonGreen = () => {
    return (
        // স্তর ১: মূল <a> ট্যাগ, যা সাদা এবং ডানদিকে হেলানো
        <a
            href="#"
            className={`
                relative mt-auto inline-block h-12 w-auto
                bg-[#165831] font-semibold uppercase rounded shadow-md
                transform -skew-x-[15deg]
            `}
        >
            {/* স্তর ২: সবুজ অংশ, যা একটি সাধারণ আয়তক্ষেত্র */}
            <span
                className="absolute z-10 h-10 -translate-y-1/2 bg-white rounded-md top-1/2 right-2 w-14"
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
                <span className="text-white">
                    Get Approved Online
                </span>
                
                {/* আইকন অংশ */}
                <span className="absolute text-3xl text-[#165831] right-5">
                    <MdOutlineKeyboardDoubleArrowRight />
                </span>
            </div>
        </a>
    );
};

export default SlantedButtonGreen;
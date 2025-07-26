import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const SlantedButton = () => {
    return (
        // মূল <a> ট্যাগ: এর ব্যাকগ্রাউন্ড সবুজ। এটি কোনোভাবেই হেলানো নয়।
        // এটি flex কন্টেইনার হিসেবে কাজ করবে।
        <a
            href="#"
            className={`
                mt-auto inline-flex h-12 items-stretch
                font-semibold uppercase rounded-lg shadow-md
                bg-[#165831] text-white overflow-hidden
            `}
        >
            {/* সাদা অংশ (টেক্সট সহ): এর ব্যাকগ্রাউন্ড সাদা এবং ডান ধারটি হেলানো */}
            <span
                className="
                    flex items-center pl-6 pr-10 bg-white text-[#165831]
                    
                    /* === এটাই মূল এবং সঠিক সমাধান: clip-path === */
                    /* এটি একটি বহুভুজ তৈরি করে যার শুধু ডান ধারটি হেলানো */
                    [clip-path:polygon(0_0,_100%_0,_calc(100%_-_24px)_100%,_0_100%)]
                "
            >
                Get Approved Online
            </span>

            {/* আইকন অংশ: এটি মূল <a> ট্যাগের সবুজ ব্যাকগ্রাউন্ডের উপরে থাকবে */}
            <span className="flex items-center px-4">
                <MdOutlineKeyboardDoubleArrowRight className="text-3xl" />
            </span>
        </a>
    );
};

export default SlantedButton;
import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const SlantedButtonGreen = ({title}) => {
    return (
        
        <a
            href="#"
            className={`
                relative inline-block h-[81px] w-auto
                bg-[#165831] font-semibold uppercase rounded shadow-xl
                transform -skew-x-[15deg]
            `}
        >
            {/* green rectangle */}
            <span
                className="absolute z-10 h-[73px] -translate-y-1/2 bg-white rounded-md top-1/2 right-2 w-14"
            ></span>

            {/* text and icon */}
            <div
                className="
                    relative h-full w-full flex items-center
                    transform skew-x-[15deg] pl-6 pr-20 z-20
                "
            >
                {/* text */}
                <span className="text-xl font-semibold text-white uppercase">
                    {title}
                </span>
                
                {/* icon */}
                <span className="absolute text-3xl text-[#165831] right-5">
                    <MdOutlineKeyboardDoubleArrowRight />
                </span>
            </div>
            <div className='absolute bottom-0 w-8 left-[-10.5px] h-[81px] bg-[#165831] skew-x-[15deg]'></div>
        </a>
    );
};

export default SlantedButtonGreen;
import React from 'react';
import SlantedButtonGreen from '../Components/SlantedButtonGreen';

const ReadyToStart = () => {
    return (
        <div
            className="relative w-full h-screen bg-center bg-cover"
            style={{ backgroundImage: `url('https://i.ibb.co/kswVTnJp/Frame-8-1.png')` }}
        >
            <div className="
                relative z-10 flex flex-col justify-center 
                h-auto md:h-[403px] 
                px-6 sm:px-8 md:ms-20 md:top-[150px] 
                w-full md:w-[700px]
                text-white
            ">
                <h1 className="text-3xl sm:text-4xl md:text-[60px] font-extrabold text-[#165831] uppercase text-center md:text-left leading-[1.2] md:leading-[1.3]">
                    READY TO GET <br className="hidden sm:block" />
                    <span className="block mt-2 md:mt-3">STARTED</span>
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-[24px] text-center md:text-left text-black">
                    With Ridge Street, obtaining a private mortgage loan is easier than you think!
                    You can get pre-approved online and a Term Sheet that Meet's your needs will be sent to you within the hour.
                </p>
                <div className="flex justify-center mt-6 sm:mt-8 md:justify-start">
                    <SlantedButtonGreen title="GET PRE-APPROVED ONLINE" />
                </div>
            </div>
        </div>
    );
};

export default ReadyToStart;
// src/Components/CenterHeadline.jsx

import React from 'react';

const CenterHeadline = ({ title }) => {
    return (
        <div className=''>
            {/* 
              - Mobile-e font size 36px (text-4xl) thakbe.
              - Medium screen (tablet) theke 56px hobe.
              - font-[700px] ekta bhul chilo, font-weight er jonno 'font-bold' use korte hoy.
            */}
            <h1 className='text-center text-4xl md:text-[56px] font-extrabold text-[#165831] uppercase'>
                {title}
            </h1>
        </div>
    );
};

export default CenterHeadline;
import React from 'react';
import map from '../assets/Map.png';
import viewLocations from "../assets/button-view-locations.png";

const WhereWeLend = () => {
    const sub = "Hard Money Loans | DSCR Loans";
    const btnContent = "VIEW ALL LOCATIONS";

    // style={{ backgroundImage: `url(...)` }} korle React e warning ashe na.
    const texasBg = { backgroundImage: `url('https://i.ibb.co/fY6hQRyN/Group-5.png')` };
    const floridaBg = { backgroundImage: `url('https://i.ibb.co/VcDvSddc/Frame-21.png')` };

    return (
        // FIX: Fixed height soriye vertical padding dewa holo.
        <div className="w-full text-white bg-[radial-gradient(circle,_#499668_0%,_#165831_100%)] lg:h-[1897px] py-16 lg:py-0">
            {/* FIX: Mobile er jonno padding komano holo, desktop e ager motoi thakbe. */}
            <div className='lg:pt-[120px] max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-10'>
                {/* FIX: Font size ebong text alignment responsive kora holo. */}
                <h1 className='font-extrabold uppercase text-4xl lg:text-[56px] text-center lg:text-left'>Where We Lend</h1>
                <p className='text-base lg:text-[24px] mt-4 text-center lg:mt-6 lg:text-left lg:leading-[1.5]'>
                    Ridge Street provides hard money loans to real estate investors in 35 states. <br /> We focus our efforts in
                    <span className='text-xl lg:text-[32px] font-extrabold'>Texas</span> and <span className='text-xl lg:text-[32px] font-extrabold'>Florida</span>.
                </p>

                {/* FIX: Map image ke responsive kora holo. */}
                <div className='flex justify-center mt-12 lg:mt-20'>
                    <img src={map} alt="Map of states where we lend" className='w-full' />
                </div>

                {/* FIX: Card container-ke mobile-e vertical (flex-col) and desktop-e horizontal (lg:flex-row) kora holo. */}
                <div className='flex flex-col items-center lg:flex-row lg:justify-center mt-12 lg:mt-20 gap-12 lg:gap-[200px]'>
                    
                    {/* --- Texas Card --- */}
                    <div
                        // FIX: Card size responsive kora holo. Desktop-e apnar dewa fixed size.
                        className="relative w-full max-w-md lg:w-[440px] lg:h-[560px] border-2 border-white rounded-tr-[60px] rounded-bl-[60px] bg-center bg-cover overflow-hidden"
                        style={texasBg}
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-[#60E697] to-black opacity-[70%]'></div>

                        {/* --- MOBILE/TABLET LAYOUT (Using Flexbox) --- */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 p-4 text-center lg:hidden">
                            <h3 className='text-5xl font-extrabold'>Texas</h3>
                            <p className='text-xl font-medium'>{sub}</p>
                            <button className='w-full h-16 max-w-xs text-lg font-bold bg-transparent border-2 border-white rounded-full'>{btnContent}</button>
                        </div>

                        {/* --- DESKTOP LAYOUT (Your original absolute positioning) --- */}
                        <div className='hidden lg:block'>
                            <h3 className='absolute top-[172px] left-[133.65px] text-[56px] font-extrabold'>Texas</h3>
                            <p className='absolute top-[250px] left-[28.65px] text-[24px] font-medium'>{sub}</p>
                            <button className='absolute bg-transparent top-[319px] left-[70.65px] rounded-[40px] text-[20px] font-bold border-2 border-white w-[300px] h-[70px]'>{btnContent}</button>
                        </div>
                    </div>

                    {/* --- Florida Card --- */}
                    <div
                        // FIX: Card size responsive kora holo.
                        className="relative w-full max-w-md lg:w-[440px] lg:h-[560px] border-2 border-white rounded-tl-[60px] rounded-br-[60px] bg-center bg-cover overflow-hidden"
                        style={floridaBg}
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-[#60E697] to-black opacity-[70%]'></div>

                        {/* --- MOBILE/TABLET LAYOUT (Using Flexbox) --- */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 p-4 text-center lg:hidden">
                            <h3 className='text-5xl font-extrabold'>Florida</h3>
                            <p className='text-xl font-medium'>{sub}</p>
                            <button className='w-full h-16 max-w-xs text-lg font-bold bg-transparent border-2 border-white rounded-full'>{btnContent}</button>
                        </div>

                        {/* --- DESKTOP LAYOUT (Your original absolute positioning) --- */}
                        <div className='hidden lg:block'>
                            <h3 className='absolute top-[172px] left-[133.65px] text-[56px] font-extrabold'>Florida</h3>
                            <p className='absolute top-[250px] left-[28.65px] text-[24px] font-medium'>{sub}</p>
                            <button className='absolute bg-transparent top-[319px] left-[70.65px] rounded-[40px] text-[20px] font-bold border-2 border-white w-[300px] h-[70px]'>{btnContent}</button>
                        </div>
                    </div>
                </div>

                {/* FIX: Button image ke responsive kora holo. */}
                <div className='flex justify-center pt-16 lg:pt-20'>
                    <img src={viewLocations} alt="View all locations" className='w-full max-w-md transition-opacity cursor-pointer hover:opacity-90' />
                </div>
            </div>
        </div>
    );
}

export default WhereWeLend;
import React from 'react';

const OtherResources = () => {
    const resources = [
        { id: 1, title: "Investor's Guide To Real Estate Wholetailing", description: "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.", date: "May 9, 2024", image: "https://i.ibb.co/VWRssxg3/Rectangle-14.png" },
        { id: 2, title: "Investor's Guide To Real Estate Wholetailing", description: "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.", date: "May 9, 2024", image: "https://i.ibb.co/NgjNt6fT/Frame-39470.png" },
        { id: 3, title: "Investor's Guide To Real Estate Wholetailing", description: "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.", date: "May 9, 2024", image: "https://i.ibb.co/60GMPz7v/Frame-39470-1.png" }
    ];

    return (
        // ১. ডেস্কটপের জন্য w-[1420px], h-[1118px] এবং py-[96px] ঠিক রাখা হয়েছে
        <div className='max-w-[1420px] mx-auto px-4 py-20 lg:w-[1420px] lg:h-[1118px] lg:py-[96px] lg:px-0'>
            {/* ২. হেডিং এবং বাটন সেকশন ডেস্কটপের জন্য ঠিক রাখা হয়েছে */}
            <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between'>
                {/* ৩. হেডিং-এর সাইজ এবং স্পেসিং ডেস্কটপের জন্য ঠিক রাখা হয়েছে */}
                <h2 className='text-[#165831] uppercase font-extrabold text-4xl text-center md:text-left md:text-5xl lg:text-[56px] lg:w-[738px] lg:h-[136px] lg:ps-7'>
                    Other Resources You&apos;ll Like
                </h2>
                {/* ৪. বাটনের সাইজ এবং মার্জিন ডেস্কটপের জন্য ঠিক রাখা হয়েছে */}
                <button className='w-full max-w-xs sm:w-auto lg:w-[200px] lg:h-[62px] rounded-[35px] bg-[#165831] text-white font-semibold text-base lg:text-[18px] flex-shrink-0 lg:mt-5 lg:me-3'>
                    VIEW MORE
                </button>
            </div>
            
            {/* ৫. Grid লেআউট রেসপন্সিভ করা হয়েছে এবং ডেস্কটপের স্পেসিং ঠিক রাখা হয়েছে */}
            <div className='grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:mt-16'>
                {
                    resources.map(resource => (
                        // ৬. কার্ডের সাইজ ডেস্কটপের জন্য ঠিক রাখা হয়েছে
                        <div key={resource.id} className='rounded-3xl shadow-2xl lg:w-[460px] lg:h-[726px] overflow-hidden mx-auto'>
                            {/* ৭. ইমেজের মার্জিন ডেস্কটপের জন্য ঠিক রাখা হয়েছে */}
                            <img className='p-4 lg:p-0 lg:m-8' src={resource.image} alt={resource.title} />
                            {/* ৮. টেক্সট কন্টেইনারের সাইজ এবং মার্জিন ডেস্কটপের জন্য ঠিক রাখা হয়েছে */}
                            <div className='p-6 pt-0 lg:p-0 lg:ms-8 lg:w-[364px]'>
                                <p className='text-base lg:text-[18px] italic'>{resource.date}</p>
                                <h3 className='mt-4 text-2xl lg:text-[28px] font-bold text-[#165831] lg:mt-7'>{resource.title}</h3>
                                <p className='mt-5 text-base lg:text-[18px]'>{resource.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OtherResources;
// import React from 'react'

// const OtherResources = () => {
//     const resources = [
//         {
//             id: 1,
//             title: "Investor's Guide To Real Estate Wholetailing",
//             description: "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.",
//             date: "May 9, 2024",
//             image: "https://i.ibb.co/VWRssxg3/Rectangle-14.png"
//         },
//         {
//             id: 2,
//             title: "Investor's Guide To Real Estate Wholetailing",
//             description: "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.",
//             date: "May 9, 2024",
//             image: "https://i.ibb.co/NgjNt6fT/Frame-39470.png"
//         },
//         {
//             id: 3,
//             title: "Investor's Guide To Real Estate Wholetailing",
//             description: "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.",
//             date: "May 9, 2024",
//             image: "https://i.ibb.co/60GMPz7v/Frame-39470-1.png"
//         }
//     ]
//     return (
//         <div className='w-[1420px] mx-auto py-[96px] h-[1118px]'>
//             <div className='flex items-center justify-between'>
//                 <h2 className='text-[#165831] uppercase font-extrabold text-[56px] w-[738px] h-[136px] ps-7'>Other Resources You&apos;ll Like</h2>
//                 <button className='w-[200px] h-[62px] rounded-[35px] bg-[#165831] text-white font-semibold text-[18px] mt-20 me-3'>VIEW MORE</button>
//             </div>
//             <div className='grid grid-cols-3 gap-5 mt-16'>
//                 {
//                     resources.map(resource => <div key={resource.id} className='w-[460px] h-[726px] rounded-3xl shadow-2xl'>
//                         <img className='m-8' src={resource.image} alt="" srcset="" />
//                         <div className='ms-8 w-[364px]'>
//                             <p className='text-[18px] italic'>{resource.date}</p>
//                             <h3 className='mt-7 text-[28px] font-bold text-[#165831]'>{resource.title}</h3>
//                             <p className='mt-5 text-[18px]'>{resource.description}</p>
//                         </div>
//                     </div>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default OtherResources
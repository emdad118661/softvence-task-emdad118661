import React from 'react';
import CenterHeadline from '../Components/CenterHeadline';
import { BsArrowUpRight } from "react-icons/bs";

const InterestedWorkingWithUs = () => {
    const contactIdeas = [
        {
            id: 1,
            title: "Active Deal",
            subtitle: "I have an active deal and would like a Term Sheet",
            image: "https://i.ibb.co/kg6kpVyn/svgexport-10-2024-05-31-T095819-745.png"
        },
        {
            id: 2,
            title: "Pre-Approval",
            subtitle: "I'd like to to get pre-approved so I can find my next deal.",
            image: "https://i.ibb.co/MDY14kdH/svgexport-10-2024-05-31-T100913-334-1.png"
        },
        {
            id: 3,
            title: "Schedule A Call",
            subtitle: "I'd like to schedule a call.",
            image: "https://i.ibb.co/Y7dM53mj/svgexport-10-2024-05-31-T101247-007-1.png"
        },
    ]
    return (
        // ১. সেকশনের প্যাডিং এবং মার্জিন রেসপন্সিভ করা হয়েছে
        <div className='max-w-[1420px] mx-auto px-4 md:px-8 my-20 lg:my-[120px]'>
            <CenterHeadline title="Interested In Working With Us?"></CenterHeadline>
            {/* ২. টেক্সট সাইজ রেসপন্সিভ করা হয়েছে */}
            <p className='mt-4 font-semibold text-center text-lg md:text-xl lg:text-[24px]'>We work with real estate investors across the country every day. How can we help?</p>
            
            {/* ৩. Grid লেআউট রেসপন্সিভ করা হয়েছে */}
            <div className='grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
                {
                    contactIdeas.map((idea) => (
                        // ৪. কার্ডের ফিক্সড সাইজগুলো শুধু ডেস্কটপের জন্য রাখা হয়েছে
                        <div key={idea.id} className='border-2 border-gray-200 rounded-lg lg:w-[447px] lg:h-[388px] flex flex-col items-center py-8 lg:py-0'>
                            {/* ৫. হেলানো বক্সের স্টাইল রেসপন্সিভ করা হয়েছে */}
                            <div className='w-[138.5px] h-[103px] bg-[#EEFFF5] transform skew-x-[-15deg] lg:mt-[46.1px] flex justify-center items-center'>
                                <div className='w-[91px] h-[64px] border-2 border-[#165831] bg-white flex justify-center items-center'>
                                    <span className='transform skew-x-[15deg]'>
                                        <img src={idea.image} alt="" />
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center flex-grow mt-6 text-center'>
                                <h2 className='text-xl lg:text-[24px] font-semibold text-[#165831]'>{idea.title}</h2>
                                {/* ৬. সাবটাইটেলের ফিক্সড সাইজ সরানো হয়েছে */}
                                <p className='mt-4 text-base lg:text-[18px] lg:w-[272px] lg:h-[53px]'>{idea.subtitle}</p>
                                
                                <div className='lg:mt-[25px] mt-auto'>
                                {
                                    idea.id === 2 ? 
                                    <button className='border border-[#165831] w-[180px] h-[55px] text-white bg-[#165831] rounded-xl font-semibold flex items-center justify-center gap-2'>Find a home <BsArrowUpRight /></button> 
                                    : 
                                    <button className='border border-[#165831] w-[180px] h-[55px] text-[#165831] rounded-xl font-semibold flex items-center justify-center gap-2'>Find a home <BsArrowUpRight /></button>
                                }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InterestedWorkingWithUs;
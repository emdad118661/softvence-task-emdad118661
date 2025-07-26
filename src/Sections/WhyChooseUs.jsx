import React from 'react';
import CenterHeadline from '../Components/CenterHeadline';
import SlantedButtonGreen from '../Components/SlantedButtonGreen';

const WhyChooseUs = () => {
    const options = [
        {
            title: "Simple Online Application",
            description: "Easy 2 minute online application, with no credit pull required.",
            image: "https://i.ibb.co/bGZKCyL/Group.png"
        },
        {
            title: "Quick Turn Around",
            description: "Receive a Term Sheet within the hour.",
            image: "https://i.ibb.co/SX3pZwtj/svgexport-6-16-1.png"
        },
        {
            title: "Reliable Financing",
            description: "Integrity and honesty are the foundations of our business. When we commit to a loan, we make sure you close on time.",
            image: "https://i.ibb.co/JWpkfG4z/svgexport-10-2024-05-30-T164708-360-1.png"
        },
    ]
    return (
        
        <div className='mx-auto px-4 md:px-8 pt-20 md:pt-24 lg:pt-[120px] max-w-[1420px]'>
            <CenterHeadline title="Why Choose Us" />
            
            
            <div className='grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3'>
                {options.map((option, index) => (
                    
                    <div key={index} className='relative pb-40 border-2 border-gray-200 rounded-lg'> 
                        <div className='p-6 md:p-8'>
                            
                            <h2 className='text-2xl md:text-[28px] font-bold'>{option.title}</h2>
                            <p className='mt-4 text-base font-normal md:text-lg'>{option.description}</p>
                        </div>
                        <div className='absolute bottom-0 left-4 md:left-[21px] w-[140px] h-[130px] md:w-[164px] md:h-[151px] bg-[#EEFFF5] transform skew-x-[-15deg]'>
                            <span className='absolute inset-0 transform skew-x-[15deg] p-6 md:p-8'>
                                <img src={option.image} alt={option.title} className='object-contain w-full h-full' /> 
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-12'>
                <SlantedButtonGreen title="MORE ABOUT US" />
            </div>
        </div>
    );
};

export default WhyChooseUs;
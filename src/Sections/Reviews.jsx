import React, { useState, useRef } from 'react';
import CenterHeadline from '../Components/CenterHeadline';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SlantedButton from '../Components/SlantedButton';

const reviewsData = [
    // reviews data
    { id: 1, name: "John D.", subtitle: "An amazing experience!", description: "The process was seamless and incredibly fast. The team was professional and supportive throughout. Highly recommended for any real estate investor.", image: "https://i.ibb.co/39Cnjp32/Ellipse-1.png" },
    { id: 2, name: "Sarah L.", subtitle: "Five stars service", description: "I got my term sheet within an hour, just as they promised. Their reliability is unmatched in the industry. Will definitely work with them again.", image: "https://i.ibb.co/LzvfZ8vz/Ellipse-1-1.png" },
    { id: 3, name: "Mike R.", subtitle: "Truly professional team", description: "From the initial application to closing, every step was handled with utmost professionalism. They understand the needs of investors perfectly.", image: "https://i.ibb.co/hJcCMH4T/Ellipse-1-2.png" },
    { id: 4, name: "Emily C.", subtitle: "Fast and reliable funding", description: "As a house flipper, time is money. This team provided the fast and reliable funding I needed to close my deal on time. Great communication!", image: "https://i.ibb.co/G3PVzdfK/Ellipse-1-3.png" },
    { id: 5, name: "David P.", subtitle: "The best in the business", description: "I've worked with many lenders, but this team stands out. Their integrity and commitment are second to none. A true partner for investors.", image: "https://i.ibb.co/39Cnjp32/Ellipse-1.png" },
    { id: 6, name: "Jessica M.", subtitle: "Exceeded all expectations", description: "The online application was simple and required no credit pull, which was a huge plus. The entire experience exceeded my expectations.", image: "https://i.ibb.co/LzvfZ8vz/Ellipse-1-1.png" },
    { id: 7, name: "Chris T.", subtitle: "Seamless and efficient", description: "If you're looking for an efficient and transparent lending process, look no further. They make financing straightforward and stress-free.", image: "https://i.ibb.co/hJcCMH4T/Ellipse-1-2.png" },
    { id: 8, name: "Laura B.", subtitle: "Fantastic customer service", description: "The customer service was fantastic. They were always available to answer my questions and guide me through the process. A pleasure to work with.", image: "https://i.ibb.co/G3PVzdfK/Ellipse-1-3.png" },
    { id: 9, name: "Kevin H.", subtitle: "A true partner", description: "They aren't just a lender; they are a partner in your success. Their expertise and support made all the difference in my project.", image: "https://i.ibb.co/39Cnjp32/Ellipse-1.png" },
    { id: 10, name: "Megan S.", subtitle: "Quick and easy", description: "The whole process, from pre-approval to funding, was incredibly quick and easy. It allowed me to focus on what I do best - finding deals.", image: "https://i.ibb.co/LzvfZ8vz/Ellipse-1-1.png" },
    { id: 11, name: "Brian K.", subtitle: "Highly professional", description: "A highly professional team that delivers on their promises. I was able to secure funding for my fix-and-flip deal without any hassle.", image: "https://i.ibb.co/hJcCMH4T/Ellipse-1-2.png" },
    { id: 12, name: "Olivia W.", subtitle: "Top-notch experience", description: "From start to finish, it was a top-notch experience. Their transparent terms and quick turnaround are exactly what investors need.", image: "https://i.ibb.co/G3PVzdfK/Ellipse-1-3.png" },
];

const ReviewCard = ({ review, isDesktop }) => (
    <div className={`relative flex-shrink-0 snap-center ${isDesktop ? 'w-[325px]' : 'w-[90%] sm:w-[48%]'}`}>
        <div className="mx-auto w-full h-[403px]">
            <div className={`absolute w-full h-[323px] rounded-[45px] shadow-2xl p-[2px] bg-gradient-to-r from-[rgba(255,255,255,0.2)] via-[rgba(0,0,0,0.05)] to-[rgba(255,255,255,0.8)] ${isDesktop ? 'top-[80px]' : 'top-[60px]'}`}>
                <div className={`w-full h-full bg-white opacity-[80%] rounded-[43px] px-4 md:px-6 ${isDesktop ? 'pt-[70px]' : 'pt-[70px]'}`}>
                    <h2 className={`text-[#165831] font-semibold text-center truncate ${isDesktop ? 'text-[24px]' : 'text-xl'}`}>{review.name}</h2>
                    <p className={`text-[#165831] font-medium text-center truncate ${isDesktop ? 'text-[18px]' : 'text-base'}`}>{review.subtitle}</p>
                    <p className={`mt-3 text-gray-700 line-clamp-5 ${isDesktop ? 'text-[14px]' : 'text-sm'}`}>{review.description}</p>
                </div>
            </div>
            <img className={`absolute left-1/2 -translate-x-1/2 ${isDesktop ? 'top-0 w-[140px] h-[140px]' : 'top-0 w-32 h-32'}`} src={review.image} alt={review.name} />
        </div>
    </div>
);

const Reviews = () => {
    // state for desktop slider
    const [currentIndex, setCurrentIndex] = useState(0);
    // ref for mobile slider
    const scrollRef = useRef(null);

    // desktop slider functions
    const handleDesktopPrev = () => {
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };
    const handleDesktopNext = () => {
        
        const maxIndex = reviewsData.length - 4;
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    // mobile slider function
    const handleMobileScroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = container.clientWidth;
            container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className='w-full lg:mt-20'>
            <div className='hidden lg:block lg:h-[880px] overflow-hidden relative'>
                {/* === desktop view === */}
                <div className='h-[450px] w-full pt-16'>
                    <CenterHeadline title="Ridge Street Client Reviews" />
                </div>
                <div className='absolute bottom-0 left-0 w-full h-[430px] bg-[#165831] -z-10' />
                <div className="absolute bottom-[76.5px] left-1/2 -translate-x-1/2">
                    <SlantedButton title="Get Approved Online" />
                </div>
                <div className='absolute bottom-[240px] w-full'>
                    <div className='flex items-center justify-center w-full'>
                        <button onClick={handleDesktopPrev} disabled={currentIndex === 0}>
                            <IoIosArrowBack className={`size-20 transition-colors ${currentIndex === 0 ? 'text-slate-500 cursor-not-allowed' : 'text-slate-200 hover:text-white'}`} />
                        </button>
                        
                        <div className="overflow-hidden w-[1360px]"> {/* 4 cards (325*4) + 3 gaps (20*3) = 1360px */}
                            <div className="flex gap-5 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (325 + 20)}px)` }}>
                                {reviewsData.map((review) => (<ReviewCard key={review.id} review={review} isDesktop={true} />))}
                            </div>
                        </div>
                        
                        <button onClick={handleDesktopNext} disabled={currentIndex >= reviewsData.length - 4}>
                            <IoIosArrowForward className={`size-20 transition-colors ${currentIndex >= reviewsData.length - 4 ? 'text-slate-500 cursor-not-allowed' : 'text-slate-200 hover:text-white'}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* === mobile tablet view === */}
            <div className='w-full pt-16 lg:hidden'>
                <CenterHeadline title="Ridge Street Client Reviews" />
                <div className='bg-[#165831] mt-10 pt-28 pb-12 relative'>
                    <div className='relative flex items-center w-full'>
                        <div ref={scrollRef} className="flex w-full gap-5 px-4 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
                            {reviewsData.map((review) => (<ReviewCard key={review.id} review={review} isDesktop={false} />))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-12 mt-8">
                        <button onClick={() => handleMobileScroll('left')}><IoIosArrowBack className="text-4xl text-slate-200" /></button>
                        <button onClick={() => handleMobileScroll('right')}><IoIosArrowForward className="text-4xl text-slate-200" /></button>
                    </div>
                    <div className="flex justify-center mt-12">
                        <SlantedButton title="Get Approved Online" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;


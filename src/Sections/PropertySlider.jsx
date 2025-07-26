import React, { useRef } from 'react';
// Icons
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding, FaCar, FaBed, FaBath } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// ডেমো ডেটা
const properties = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: i % 3 === 0 ? "4321 Alton Rd, Miami Beach" : i % 3 === 1 ? "AMLI 7th Street Station" : "201 South Orange Avenue",
    location: i % 3 === 0 ? "Miami, Florida" : i % 3 === 1 ? "Houston, Texas" : "Orlando, Florida",
    image: "https://i.ibb.co/JWhbFFZp/Mask-group.png",
    price: "$3,45,000",
    specs: { sqft: "2350 Square Feet", garages: "4 Garages", bedrooms: "2 Bedrooms", bathrooms: "3 Bathrooms" },
    loan: { amount: "$328,000", ltv: "84.65%", rate: "11.75%", term: "12 Months" }
}));

const PropertyCard = ({ property }) => {
    return (
        // কার্ডের প্রস্থ রেসপন্সিভ করা হয়েছে এবং ফিক্সড উচ্চতা সরিয়ে দেওয়া হয়েছে
        <div className="flex-shrink-0 w-full p-2 snap-center sm:w-1/2 lg:w-1/3">
            <div className="rounded-xl overflow-hidden bg-white text-[#193D2C] h-full flex flex-col">
                <div className='relative'>
                    {/* ছবির উচ্চতা রেসপন্সিভ করা হয়েছে */}
                    <img src={property.image} alt={property.title} className="object-cover w-full h-52 md:h-64" />
                    <span className='absolute top-4 left-4 bg-[#2a6a43] text-white px-3 py-1 rounded-md text-sm font-semibold'>For Sale</span>
                </div>
                {/* কন্টেন্টের প্যাডিং রেসপন্সিভ করা হয়েছে */}
                <div className='flex-grow p-4 md:p-5'>
                    {/* টাইপোগ্রাফি রেসপন্সিভ করা হয়েছে */}
                    <h3 className="text-xl font-semibold text-center truncate md:text-2xl">{property.title}</h3>
                    <p className="flex items-center justify-center gap-1 mt-2 mb-6 text-sm text-gray-600"><IoLocationSharp className='text-[#2a6a43]'/> {property.location}</p>
                    
                    <hr className='my-4 border-t border-gray-200' />

                    <div className='grid grid-cols-2 mb-4 text-sm gap-x-4 gap-y-3'>
                        <p className='flex items-center gap-2 text-black'><FaBuilding className='text-[#2a6a43]' /> {property.specs.sqft}</p>
                        <p className='flex items-center gap-2 text-black'><FaCar className='text-[#2a6a43]'/> {property.specs.garages}</p>
                        <p className='flex items-center gap-2 text-black'><FaBed className='text-[#2a6a43]'/> {property.specs.bedrooms}</p>
                        <p className='flex items-center gap-2 text-black'><FaBath className='text-[#2a6a43]'/> {property.specs.bathrooms}</p>
                    </div>

                    <hr className='my-4 border-t border-gray-200' />

                    <div className='grid grid-cols-2 mt-4 text-sm gap-x-4 gap-y-1'>
                        <p>• Loan Amount: <strong>{property.loan.amount}</strong></p>
                        <p>• LTV: <strong>{property.loan.ltv}</strong></p>
                        <p>• Rate: <strong>{property.loan.rate}</strong></p>
                        <p>• Term: <strong>{property.loan.term}</strong></p>
                    </div>
                </div>
                <div className='bg-[#193D2C] text-white text-center py-3 text-xl md:text-2xl font-bold'>
                    {property.price}
                </div>
            </div>
        </div>
    );
};

const PropertySlider = () => {
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const card = container.querySelector(':scope > div');
            const scrollAmount = card ? card.offsetWidth : container.offsetWidth;
            
            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="pt-8 md:pt-12">
            <div className="flex items-center w-full gap-1 mx-auto sm:gap-2 md:gap-4">
                
                {/* === বাম দিকের নেভিগেশন বাটন (এখানে পরিবর্তন করা হয়েছে) === */}
                <button 
                    onClick={() => handleScroll('left')}
                    // মোবাইলের জন্য ছোট আকার এবং বড় স্ক্রিনের জন্য বড় আকার
                    className="p-1 text-2xl text-white transition-colors rounded-full sm:text-3xl lg:text-4xl lg:p-2 hover:text-gray-300"
                >
                    <IoIosArrowBack />
                </button>

                <div
                    ref={scrollContainerRef}
                    className="flex flex-grow overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                >
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                {/* === ডান দিকের নেভিগেশন বাটন (এখানে পরিবর্তন করা হয়েছে) === */}
                <button 
                    onClick={() => handleScroll('right')}
                    // মোবাইলের জন্য ছোট আকার এবং বড় স্ক্রিনের জন্য বড় আকার
                    className="p-1 text-2xl text-white transition-colors rounded-full sm:text-3xl lg:text-4xl lg:p-2 hover:text-gray-300"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default PropertySlider;
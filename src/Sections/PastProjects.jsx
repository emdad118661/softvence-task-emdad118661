import PropertySlider from "./PropertySlider";
import itemForProject from "../assets/button-item-for-project.png";

const PastProjects = () => {
    return (
        // ফিক্সড উচ্চতা সরিয়ে দেওয়া হয়েছে এবং প্যাডিং রেসপন্সিভ করা হয়েছে
        <div className='bg-[#165831] w-full py-20 md:py-24 lg:py-[120px]'>
            {/* max-w এবং প্যাডিং রেসপন্সিভ করা হয়েছে */}
            <div className='max-w-[1420px] px-4 mx-auto text-center md:px-8 md:text-left'>
                {/* টাইপোগ্রাফি রেসপন্সিভ করা হয়েছে */}
                <h1 className='text-white text-4xl md:text-5xl lg:text-[56px] font-bold'>PAST PROJECTS</h1>
                <p className='text-lg md:text-2xl lg:text-[32px] text-white mt-2'>A Proven Track Record Funding Projects Like These</p>
                <div>
                    <PropertySlider />
                </div>
                <div className="flex justify-center pt-12">
                    {/* ইমেজটিকেও রেসপন্সিভ করা হয়েছে */}
                    <img src={itemForProject} alt="More Projects" className="w-auto h-auto max-w-xs md:max-w-sm" />
                </div>
            </div>
        </div>
    );
};

export default PastProjects;
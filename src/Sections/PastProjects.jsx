import PropertySlider from "./PropertySlider";
import SlantedButton from "../Components/SlantedButton";

const PastProjects = () => {
    return (
        
        <div className='bg-[#165831] w-full py-20 md:py-24 lg:py-[120px]'>
            
            <div className='max-w-[1420px] px-4 mx-auto text-center md:px-8 md:text-left'>
                
                <h1 className='text-white text-4xl md:text-5xl lg:text-[56px] font-bold'>PAST PROJECTS</h1>
                <p className='text-lg md:text-2xl lg:text-[32px] text-white mt-2'>A Proven Track Record Funding Projects Like These</p>
                <div>
                    <PropertySlider />
                </div>
                <div className="flex justify-center pt-12">
                    
                    <SlantedButton title="Get Terms For Your Project"></SlantedButton>
                </div>
            </div>
        </div>
    );
};

export default PastProjects;
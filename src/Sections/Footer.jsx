import React from 'react';
import HeadOfFooter from '../Components/HeadOfFooter';
import { CiMail, CiMobile3 } from "react-icons/ci";
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        // section background and padding
        <div className='bg-[#165831] text-white w-full py-16 lg:h-[430px] lg:py-10'>
            {/*grid layout*/}
            <div className='max-w-[1420px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10'>
                
                {/* column */}
                
                <div className='lg:w-[325px]'>
                    <HeadOfFooter title="Company" />
                    <ul className='mt-3 space-y-2 text-lg lg:text-[20px]'>
                        <li>About</li>
                        <li>Fix And Flip Loans</li>
                        <li>DSCR Rental Loans</li>
                        <li>Ground Up Construction Loans</li>
                    </ul>
                    <div className='mt-6 lg:mt-3'>
                        <HeadOfFooter title="Where We Lend" />
                        <ul className='mt-3 space-y-2 text-lg lg:text-[20px]'>
                            <li>Florida</li>
                            <li>Texas</li>
                            <li>Georgia</li>
                        </ul>
                    </div>
                </div>

                {/* column 2 */}
                <div className='lg:w-[325px]'>
                    <HeadOfFooter title="Top Cites We Lend In" />
                    <ul className='mt-3 space-y-2 text-lg lg:text-[20px]'>
                        <li>Orlando</li>
                        <li>Tampa</li>
                        <li>Miami</li>
                        <li>Jacksonville</li>
                        <li>Houston</li>
                        <li>Austin</li>
                        <li>Dallas</li>
                        <li>San Antonio</li>
                    </ul>
                </div>

                {/* column 3 */}
                <div className='lg:w-[325px]'>
                    <HeadOfFooter title="Top Resources" />
                    <ul className='mt-3 space-y-2 text-lg lg:text-[20px]'>
                        <li>Loan Calculator</li>
                        <li>What is a Hard Money Loan</li>
                        <li>What is a Hard Money Loan</li>
                        <li>How to find fix and flip deals</li>
                        <li>Best Cities for Fix and Flips</li>
                    </ul>
                    <div className='mt-6 lg:mt-3'>
                        <HeadOfFooter title="Useful Link" />
                        <ul className='mt-3 space-y-2 text-lg lg:text-[20px]'>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                </div>

                {/* column 4 */}
                <div className='lg:w-[325px]'>
                    <HeadOfFooter title="Contact Us" />
                    <ul className='mt-3 space-y-2 text-lg lg:text-[20px]'>
                        <li>Email</li>
                        <li className='flex items-center gap-2'><CiMail size={24} />loans@ridgestreetcap.com</li>
                    </ul>
                    <ul className='mt-3 space-y-2 text-lg lg:text-[20px]'>
                        <li>Direct/Text</li>
                        <li className='flex items-center gap-2'><CiMobile3 size={24} />Phone: 786-304-2751</li>
                    </ul>
                    <div className='w-full bg-white h-[71px] rounded-xl text-2xl md:text-[32px] flex justify-center items-center font-bold gap-2 uppercase mt-4 lg:mt-3'>
                        <span className='text-[#165831]'>Ridge</span>
                        <span className='text-[#949293]'>Street</span>
                    </div>
                    <div className='flex items-center justify-center gap-8 mt-6 lg:gap-10 lg:mt-5'>
                        <FaLinkedin className='size-7 lg:size-8' />
                        <FaFacebookF className='size-7 lg:size-8' />
                        <FaTwitter className='size-7 lg:size-8' />
                        <RiInstagramFill className='size-7 lg:size-8' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

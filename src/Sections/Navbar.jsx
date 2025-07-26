// Navbar.jsx

import React, { useState } from 'react';
// Step 1: Import icons for the hamburger menu
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // Step 2: State to manage mobile menu visibility (open/closed)
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Add 'relative' so the absolute positioned mobile menu works correctly
    <nav className='relative flex w-full md:h-[120px] items-center justify-between px-8 md:px-12 max-w-[1420px] mx-auto'>
      
      {/* Logo */}
      <h1 className='text-[40px] font-bold gap-1 uppercase'>
        <span className='text-[#165831]'>Ridge</span>
        <span className='text-[#949293]'>Street</span>
      </h1>

      {/* ============== DESKTOP MENU ============== */}
      {/* Step 3: This menu will be hidden on small screens and visible on large (lg) screens */}
      <div className='items-center hidden gap-8 lg:flex'>
        <ul className='flex text-[20px] font-medium text-[#343434] gap-8'>
          <li className='whitespace-nowrap'>Fix and Flip</li>
          <li className='whitespace-nowrap'>Rental Loans</li>
          <li className='whitespace-nowrap'>Where We Lend</li>
          <li className='whitespace-nowrap'>About Us</li>
          <li className='whitespace-nowrap'>Resources</li>
        </ul>
        <button className='w-[275px] h-[62px] uppercase bg-[#165831] text-[#FFFFFF] font-semibold text-lg rounded-lg'>
          Get Approved Online
        </button>
      </div>

      {/* ============== HAMBURGER ICON ============== */}
      {/* Step 4: This icon will be visible ONLY on small screens (hidden on lg and up) */}
      <div onClick={toggleMenu} className='cursor-pointer lg:hidden'>
        {isOpen ? <FaTimes size={30} color="#165831" /> : <FaBars size={30} color="#165831" />}
      </div>


      {/* ============== MOBILE MENU (DROPDOWN) ============== */}
      {/* Step 5: This menu appears only when 'isOpen' is true. */}
      {/* It's positioned absolutely to float below the navbar */}
      {isOpen && (
        <div className='lg:hidden absolute top-[100px] left-0 w-full bg-white z-50 flex flex-col items-center gap-8 py-10 shadow-lg'>
          {/* Menu items are now stacked vertically */}
          <ul className='flex flex-col items-center text-[20px] font-medium text-[#343434] gap-6'>
            <li>Fix and Flip</li>
            <li>Rental Loans</li>
            <li>Where We Lend</li>
            <li>About Us</li>
            <li>Resources</li>
          </ul>
          {/* The button is also inside the mobile menu */}
          <button className='w-[275px] h-[62px] uppercase bg-[#165831] opacity-[10%] text-[#FFFFFF] font-semibold text-lg rounded-lg shadow-2xl'>
            Get Approved Online
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
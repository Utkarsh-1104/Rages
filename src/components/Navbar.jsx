import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='pt-4 flex justify-center items-center gap-10 px-12 z-10 -mb-24 sticky top-0'>
        <img className='me-auto w-60' src={Logo} alt="" srcset="" />
        <p className="text-[1.3rem] font-[Poppins] text-[#FF3434] hover:text-white cursor-pointer ">Home</p>
        <p className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer ">Store</p>
        <p className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">Blogs</p>
        <p className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">Academics</p>
        <p className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">Services</p>
        <p className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">About Us</p>
        <p className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">Contact</p>
    </div>
  )
}

export default Navbar
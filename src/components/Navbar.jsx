import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='pt-4 flex justify-center items-center gap-10 px-12 z-10 -mb-24 sticky top-0'>
        <img className='me-auto w-60' src={Logo} alt="" srcset="" />
        <Link 
          to='home'
          smooth={true}
          spy={true}
          className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer ">Home</Link>
        <Link 
          to='home'
          activeClass='text-[#FF3434]'
          smooth={true}
          spy={true}
          className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer ">Store</Link>
        <Link 
          to='home'
          smooth={true}
          spy={true}
          className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">Blogs</Link>
        <Link 
          to='home'
          smooth={true}
          spy={true}
          className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">Academics</Link>
        <Link 
          to='services'
          activeClass='text-red-500'
          smooth={true}
          spy={true}
          className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">Services</Link>
        <Link 
          to='home'
          smooth={true}
          spy={true}
          className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">About Us</Link>
        <Link 
          to='home'
          smooth={true}
          spy={true}
          className="text-[1.3rem] font-[Poppins] text-white hover:text-[#FF3434] cursor-pointer">Contact</Link>
    </div>
  )
}

export default Navbar
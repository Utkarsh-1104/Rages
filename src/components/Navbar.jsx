import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='pt-4 flex justify-center items-center gap-10 px-12 z-10 -mb-24 sticky top-0 text-[1.3rem] font-[Poppins] text-white'>
        <img className='me-auto w-60' src={Logo} alt="" srcset="" />
        <Link 
          to='home'
          activeClass='active'
          smooth={true}
          spy={true}
          className="hover:text-[#FF3434] cursor-pointer ">Home</Link>
        <Link 
          to='products'
          activeClass='active'
          smooth={true}
          spy={true}
          className="hover:text-[#FF3434] cursor-pointer ">Store</Link>
        <Link 
          to='blog'
          activeClass='active'
          smooth={true}
          spy={true}
          className="hover:text-[#FF3434] cursor-pointer ">Blogs</Link>
        <Link 
          to=''
          smooth={true}
          spy={true}
          className="hover:text-[#FF3434] cursor-pointer ">Academics</Link>
        <Link 
          to='services'
          activeClass='active'
          smooth={true}
          spy={true}
          className="hover:text-[#FF3434] cursor-pointer ">Services</Link>
        <Link 
          to=''
          smooth={true}
          spy={true}
          className="hover:text-[#FF3434] cursor-pointer ">About Us</Link>
        <Link 
          to=''
          smooth={true}
          spy={true}
          className="hover:text-[#FF3434] cursor-pointer ">Contact</Link>
    </div>
  )
}

export default Navbar
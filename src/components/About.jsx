import React from 'react'
import aboutbg from '../assets/aboutBg.png'

const About = () => {
  return (
    <div className='bg-black' id='about'>
        <div style={ {backgroundImage: `url(${aboutbg})`} } className='bg-cover p-28 flex flex-col justify-center items-center gap-16'>
            <h1 className='font-[Poppins] text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white from-0% to-[#9F9696] to-50% font-bold '>WHY CHOOSE US ?</h1>
            <div className='w-[75%] text-white text-center font-[Poppins] text-2xl tracking-wide border py-9 px-3 rounded-3xl '>
                Whether you're a hobbyist looking for the perfect drone, a business owner seeking automation solutions, or a tech enthusiast ready to explore limitless possibilities, RagesTech is your ultimate partner in progress. Don't miss out on the future - it's here, and it's at RagesTech. <br /><br /><br />
                Visit our website today and discover the tech revolution you've been waiting for. Elevate your game with RagesTech and be part of the innovation that shapes tomorrow!
            </div>
            <button className='bg-[#FF0000] w-36 h-10 rounded-full text-white font-[Poppins] flex items-center justify-center hover:bg-[#13152B] ' >Contact Us</button>
        </div>
    </div>
  )
}

export default About
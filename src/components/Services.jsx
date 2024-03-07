import React from 'react'
import ServicesComp from './ServicesComp'
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Services = () => {
  return (
    <div className='bg-black pt-10' id='services'>
        <h1 className='font-[Poppins] text-center text-4xl text-white font-bold '>Services We Offer</h1>
        <p className="text-white text-xl w-fit mt-4 ms-auto pe-10 underline font-[Poppins] hover:cursor-pointer hover:text-[#FF3434] ">View all Services</p>
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}
          className="flex items-center justify-around p-10">
          <div className='bg-gradient-to-b from-[#FF3434] from-0% via-[#033E4F] via-47% to-[#000000] to-95% w-[424px] h-[555px] p-10 flex flex-col items-center gap-6 rounded-[2rem] '>
          <h2 className="text-white text-3xl text-center font-bold">Drones for every purpose</h2>
          <ul className='text-white text-xl pt-2 font-[Poppins] font-medium list-disc ms-10 leading-relaxed'>
            <li>Aerial Photography Drones</li>
            <li>Videography Drones</li>
            <li> Racing and FPV Drones</li>
            <li>Mapping Drones</li>
            <li>Agriculture Crop Monitoring Drones</li>
            <li>Professional Surveying Drones</li>
            <li>Recreational and Hobbyist Drones</li>
          </ul>
          </div>
          <ServicesComp
            title="Robots for Efficiency and Innovation"
            p1="Industrial Automation Robots"
            p2="Educational and STEM Robotics"
            p3="Service and Healthcare Robots"
            p4="Custom Robotic Solutions"
            p5="Research and Development Robotics"
          />
          <ServicesComp
            title="Comprehensive Parts and Components"
            p1="Motors, Propellers, and Batteries"
            p2="Sensors and Controllers"
            p3="Chassis and Frames"
            p4="Cameras and Gimbals"
            p5="Software and Programming Tools"
          />
        </motion.div>
    </div>
  )
}

export default Services
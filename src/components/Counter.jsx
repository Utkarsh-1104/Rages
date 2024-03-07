import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { MdComment } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'

const Counter = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })
  return (
    <div className='bg-black flex items-center justify-center p-5' ref={ref}>
      <div className="bg-gradient-to-b from-[#14749D] from-0% to-[#021C23] to-70% w-[95%] rounded-3xl py-4 flex justify-around items-center bg-white text-[#FF0000] text-5xl">
        <div className="flex flex-col justify-center items-center ">
          <FaUsers />
          <div className="text-4xl pt-2 text-white font-[Poppins] font-bold ">
            {inView ? <CountUp start={0} end={150} duration={3} /> : null}+
          </div>
          <div className="text-white text-sm font-[Poppins] font-medium">
            Happy Customers
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdComment />
          <div className="text-4xl pt-2 text-white font-[Poppins] font-bold ">
            {inView ? <CountUp start={0} end={200} duration={3} /> : null}+
          </div>
          <div className="text-white text-sm font-[Poppins] font-medium">
          Satisfactory Reviews
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaSuitcase />
          <div className="text-4xl pt-2 text-white font-[Poppins] font-bold ">
            {inView ? <CountUp start={0} end={15} duration={3} /> : null}+
          </div>
          <div className="text-white text-sm font-[Poppins] font-medium">
          Products
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <HiSpeakerphone />
          <div className="text-4xl pt-2 text-white font-[Poppins] font-bold ">
            {inView ? <CountUp start={0} end={1000} duration={3} /> : null}+
          </div>
          <div className="text-white text-sm font-[Poppins] font-medium">
          Product Fanbase
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
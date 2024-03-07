import React from 'react'
import bg from '../assets/bg.png'
import drone from '../assets/drone.png'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover pb-32">
        <Navbar />
        <div className="text-white font-extrabold">
          <h1 className="outlined text-[18rem] tracking-widest -mt-24 mb-10 -ms-56">
            DRONE
          </h1>
          <h1 className="outlined text-[18rem] tracking-widest ms-96">TECH</h1>
          <div className="text-start relative -mt-64 ms-16 ">
            <h1 className="text-white font-[Poppins] text-3xl ">
              Elevating Tomorrow's
            </h1>
            <h1 className="text-5xl font-extrabold text-[#FF2929] uppercase">
              Technology
            </h1>
            <h1 className="text-3xl font-[Poppins] text-white ">Today.</h1>
          </div>
        </div>
        <motion.div
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.9}}
        className="z-10 absolute top-28 left-52 w-[1200px] "
        >
          <img
            src={drone}
            alt=""
            srcset=""
          />
          </motion.div>
      </div>
    </div>
  );
}

export default Home
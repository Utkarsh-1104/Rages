import React from 'react'
import prodbg from '../assets/prodBg.png'
import ProductsComp from './ProductsComp'
import quad from '../assets/quad.png'
import mini from '../assets/mini.png'
import surv from '../assets/surv.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Products = () => {
  return (
    <div className='bg-black' id='products'>
        <div style={{ backgroundImage: `url(${prodbg})` }} className='bg-cover py-20 flex flex-col justify-center items-center'>
            <h1 className='font-[Poppins] text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white from-0% via-[#0A8AAE] via-19% to-[#162428] to-80% font-bold pb-20 '>Some Of Our Products</h1>
            <ProductsComp
                title='Surveillance Drone'
                img={surv}
            />
            <div className='w-full flex justify-between items-center px-20 text-white font-[Poppins] text-7xl font-bold uppercase '>
                <h1>Quadcopter</h1>
                <motion.img
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    src={quad} alt="" srcset="" />
            </div>
            <ProductsComp
                title='Mini Drones'
                img={mini}
            />
        </div>
    </div>
  )
}

export default Products
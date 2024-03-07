import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const ProductsComp = (props) => {
  return (
    <div className='w-full flex justify-between items-center px-20 text-white font-[Poppins] text-7xl font-bold uppercase '>
      <motion.img
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        src={props.img} alt="" srcset="" />
      <h1>{props.title}</h1>
    </div>
  )
}

export default ProductsComp
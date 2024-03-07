import React from 'react'
import blogbg from '../assets/blogBg.png'
import BlogComp from './BlogComp'
import fly from '../assets/fly.png'
import soar from '../assets/soar.png'

const Blog = () => {
  return (
    <div className='bg-black' id='blog'>
        <div style={ {backgroundImage: `url(${blogbg})`} } className='bg-cover p-28 flex flex-col justify-center items-center'>
          <h1 className='font-[Poppins] text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white from-0% to-[#9F9696] to-50% font-bold pb-16 '>NEWS</h1>
          <div className="flex justify-around items-center">
            <BlogComp img={fly} title="Flying on the Edge: The Thrill of FPV Drone Races" />
            <BlogComp img={soar} title="Soaring High: The Thrilling World of Drone Competitions" />
            <BlogComp img={fly} title="Flying on the Edge: The Thrill of FPV Drone Races" />
          </div>
        </div>
    </div>
  )
}

export default Blog
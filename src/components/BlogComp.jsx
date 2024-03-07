import React from 'react'

const BlogComp = (props) => {
  return (
    <div className='w-[22%] flex flex-col justify-center items-center'>
        <img src={props.img} alt="" srcset="" />
        <h2 className='text-white text-xl pt-7 text-center font-[Poppins] font-bold '>{props.title}</h2>
    </div>
  )
}

export default BlogComp
import React from 'react'

const ServicesComp = (props) => {
  return (
    <div className='bg-gradient-to-b from-[#FF3434] from-0% via-[#033E4F] via-47% to-[#000000] to-95% w-[424px] h-[555px] p-10 flex flex-col items-center gap-6 rounded-[2rem] '>
        <h2 className="text-white text-3xl text-center font-bold">{props.title}</h2>
        <ul className='text-white text-xl pt-2 font-[Poppins] font-medium list-disc ms-10 leading-relaxed'>
          <li>{props.p1}</li>
          <li>{props.p2}</li>
          <li>{props.p3}</li>
          <li>{props.p4}</li>
          <li>{props.p5}</li>
        </ul>
    </div>
  )
}

export default ServicesComp
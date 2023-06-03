import React from 'react'

const ProjectsItem = ({img, title}) => {
  return (
    <div className='relative flex item-center justify-center h-auto
     w-full shadown-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#0A2C4E]'>
      <img src={img} alt='' className='round-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white text-center tracking-wider'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>Next Js</p>
        <a href='/'>
            <p className='text-center py-4 px-4 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>Built on Next js</p>
        </a>
      </div>
      
    </div>
  )
}

export default ProjectsItem

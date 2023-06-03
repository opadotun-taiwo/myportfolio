import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import taiwoopadotun from '../assets/taiwoopadotun.jpg'


const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={taiwoopadotun} alt='taiwo opadotun a developer and growth expert'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-black/50'>
        <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-white'>I am opadotun Taiwo</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>I am 
                <TypeAnimation
                sequence={[
                    'Web developer', // Types 'One'
                    1000, // Waits 1s
                    'Digital strategist', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Data Analyst',
                    3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                />
            </h2>
            <div className='flex justify-between text-white max-w-[200px] w-full pt-6'>
                <FaTwitter size={20} className='cursor-pointer' />
                <FaFacebook size={20} className='cursor-pointer' />
                <FaInstagram size={20} className='cursor-pointer' />
                <FaLinkedin size={20} className='cursor-pointer' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main

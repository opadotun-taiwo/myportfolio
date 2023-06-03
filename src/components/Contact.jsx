import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#0A2C4E]'>Contact</h1>
      <form action="https://formsubmit.co/0b22fce3aec0db7a2fab55d3bef1eb56" method="POST">
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Name</label>
                <input type="text" name="name" className='border-2 rounded-lg p-3 flex border-gray-300'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Phone</label>
                <input type="text" name="phone" className='border-2 rounded-lg p-3 flex border-gray-300'/>
            </div>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input type="email" name="email" className='border-2 rounded-lg p-3 flex border-gray-300'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input type="text" name="subject" className='border-2 rounded-lg p-3 flex border-gray-300'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea name="message" id="" cols="30" rows="10" className='border-2 rounded-lg p-3 flex border-gray-300'></textarea>
        </div>
        <button type="submit" className='bg-[#0A2C4E] text-gray-100 mt-4 w-full p-4 rounded-lg'>Send message</button>
      </form>
    </div>
  )
}

export default Contact

import React from 'react'
import ProjectsItem from './ProjectsItem';
import img1 from '../assets/budget-project.png'
import img2 from '../assets/report3.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#0A2C4E]'>Projects</h1>
            <p className='text-center py-8'>Experienced digital marketer, SEO specialist, strong market research skills with a deep understanding of online campaigns. Searching for opportunity to leverage my expertise in digital marketing and strategy to drive user acquisition and growth for businesses, while continuously experimenting and innovating to optimize performance and user engagement.</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectsItem img={img1} title='Budget app'/>
                <ProjectsItem img={img2} title='Dasboard'/>
                <ProjectsItem img={img1} title='Budget'/>
                <ProjectsItem img={img2} title='Movie check API'/>
            </div>
    </div>
  )
}

export default Projects

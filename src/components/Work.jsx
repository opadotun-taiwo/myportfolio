import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: '2020',
        title: 'Digital marketer',
        duration: '2 years',
        details : 'Strategized and managed Facebook advertising with a monthly budget of 200 thousand Naira resulting in about 250 leads with average 11% conversion.Scheduling weekly email marketing campaign that improved customer retention by 23% using mail chimp.Developed Google ads campaign (Display ads) for product awareness for periodic product launch Launched SEO campaign for high volume and long tail keywords that generated 9,201 visitors and 20 monthly customers'
    },
    {
        year: '2022',
        title: 'Seo specialist',
        duration: '1 year',
        details : 'Acquired a total of 17,497 users organically with an LTV of $18,995.89 in nine months.Developed strategies that increased the web app total keyword to 435 with 43 within 1 -2 page. Created and optimized blogs and 90 product pages that resulted to 49.51%of the total conversion.Implemented link building strategy that increased DA from 2 to 20 with 2000 links in 6 months'
    },
    {
        year: '2023',
        title: 'Web devloper',
        duration: '1 year',
        details : 'Cooperated with the web development lead in writing website proposals.E-commerce website development with Word Press CMS for clients.Supported marketing team by writing and editing 71+ email and social media campaigns.Domain registration and launching of client’s website.Automated marketing KPI reporting using Google analytics and Google sheets saving hour of work'
    }, 
   
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#0A2C4E]'>Work</h1>
    {
        data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details}
            />
        ))
    }
    </div>
  )
}

export default Work

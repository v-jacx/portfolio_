import React from 'react'
import { Divider } from './Divider'

export const About = () => {
  return (

    <div 
    id='about' 
    class='flex flex-col md:mt-[0] p-5 h-screen relative'>
            <h2 class='text-2xl text-center font-slab text-[#bb6d79] font-bold md:mt-11 md:text-4xl lg:ml-[25%]'>• About Me •</h2>
            <div class='absolute hidden lg:block lg:mx-[38%] lg:my-[20%]'><Divider/></div>
    <div class='lg:flex lg:justify-center lg:align-center pt-4 lg:mx-28'>

    <img 
            src='about_image.jpg'
            class='invisible h-0 w-0 lg:visible lg:h-96 lg:mt-8 lg:ml-[3rem] lg:w-[25rem] lg:rounded-lg'
            />
        <div className='text-sm text-justify font-slab lg:mx-44 lg:pl-24'>
        <p class='mt-3'>
        I'm a Software Engineer with a passion for problem-solving and a drive to create amazing applications that make life easier. With a wealth of experience in React, Redux, Python, and AWS, I strive to build efficient, user-friendly solutions that meet the needs of customers and the demands of today's market. In addition to software engineering, I have a strong attention to detail that I bring to all my projects, ensuring accuracy and precision in my work.
        </p>
        <p class='mt-3'>
        On my off time, I enjoy taking hikes in the outdoors, exploring new recipes in the kitchen, spending quality time with my family, and diving into a good book. Being able to find a perfect balance between being productive in the workplace and being able to relax outside the workplace is one of the biggest motivations for me.
        </p>
        <p class='mt-3'>
        I'm a dedicated professional with a drive to make meaningful contributions to society by using my leadership and technical skills in the technology industry. My technical skills and passion for creating positive change has enabled me to make a positive impact on the people I've worked with and help bring out the best in teams and individuals. With this drive, I'm always looking to take on new challenges, collaborate with like-minded people and organizations, and continue to grow and develop as a professional. Ultimately, my goal is to use my skills and knowledge to make an impact in the world, improve lives, and help build a better tomorrow for us all.
        </p>
        </div>
    </div>

        </div>
  )
}

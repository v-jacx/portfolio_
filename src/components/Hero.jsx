import React from 'react'

export const Hero = () => {
  return (
    <div 
    class='flex flex-col m-5 relative
    lg:flex-row lg:m-0 lg:border-b-2 lg:border-b-[#cc9933]
    '>
        <div class='row-start-1 row-span-2 col-span-1 md:px-28 md:py-14 lg:border-r-2 lg:border-r-[#cc9933] uppercase font-slab font-regular text-center text-3xl lg:text-5xl  lg:w-6/12'>
            <div class='ml-6 lg:ml-0 lg:py-7'>  
                <h2>Software Engineer</h2>
                <h3 class='text-lg lg:text-2xl'>with small coffee addiction</h3>
                <p className='text-sm text-justify mt-4 md:mt-11 font-slab text-[#cc9933]'>
                    I also love cooking and baking. I value spending time with my family, and creating cool, useful applications.
                </p>

                <div class='flex gap-4 justify-center text-sm mt-4 lg:mt-11'>
                    <button class='bg-[#eab750] py-2 px-4 rounded-full'>Resume</button>
                    <button class='bg-[#eab750] py-2 px-4 rounded-full'>Let's Chat</button>
                </div>
            </div>
        </div>

        <div class='absolute hidden rounded-full h-14 w-14 bg-[#cc9933] mx-[47.7%] my-[18%] lg:block'/>

        <div class='self-center  lg:w-6/12 lg:px-48 lg:py-20'>
            
            <img
            src='/about_image.jpg'
            class='h-80 w-auto rounded-lg lg:rounded-t-full mt-4'
            />

        </div>
    </div>
  )
}

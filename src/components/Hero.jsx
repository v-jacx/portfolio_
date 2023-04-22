import React from 'react'

export const Hero = () => {
  return (
    <div 
    id='hero'
    class='flex lg:h-screen flex-col m-5 relative mt-24
    md:mt-0 lg:flex-row lg:m-0 lg:border-b-2 lg:border-b-[#bb6d79]
    '>
        <div class='row-start-1 row-span-2 col-span-1 md:px-28 md:pt-44 lg:border-r-2 lg:border-r-[#bb6d79] uppercase font-slab font-regular text-center text-3xl lg:text-5xl  lg:w-6/12'>
            <div class='lg:pl-2 lg:py-7'>  
                <h2>Coffee and Coding?</h2>
                <h3 class='text-lg lg:text-2xl'>Count Me In!</h3>
                <p className='text-sm text-justify mt-4 md:mt-11 font-slab text-[#bb6d79]'>
                Unlocking the full potential of technology with personalized solutions designed to make life easier. Discover how I can use my expertise to help your business achieve success.
                </p>

                <div class='flex gap-4 justify-center text-sm mt-4 lg:mt-11'>
                    <button class='bg-[#bb6d79] py-2 px-4 rounded-full'>Resume</button>
                    <button class='bg-[#bb6d79] py-2 px-4 rounded-full'>Let's Chat</button>
                </div>
            </div>
        </div>

        <div class='absolute hidden rounded-full h-14 w-14 bg-[#bb6d79] mx-[47.7%] my-[25%] lg:block'/>

        <div class='self-center lg:w-6/12 lg:px-48 lg:py-22'>
            
            <img
            src='/about_image.jpg'
            class='h-80 mt-4 lg:h-96  w-auto rounded-lg lg:rounded-t-full'
            />

        </div>
    </div>
  )
}

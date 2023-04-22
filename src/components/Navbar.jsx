import React from "react";
import { SocialIcon } from "react-social-icons";

export const Navbar = () => {
  return (
    <div
    id='navbar'
    class='grid grid-cols-3 fixed top-0 bg-[#fdfbfb]
    md:grid-cols-6 border-b-[#bb6d79] md:w-screen border-b-2 z-20'>
      
      <div 
      class="text-[#bb6d79] font-lobster text-[1.75rem] p-3 text-center
      lg:col-span-2 md:border-r-2 md:border-r-[#bb6d79] md:col-span-3">
        
        <h1>Jacquelin_Velasquez.</h1>
      
      </div>
      
      <div 
      class='bg-[#fbdedeec] w-[23rem] rounded-3xl p-[1rem] overflow-hidden fixed bottom-4 col-span-3 text-[.8rem] left-2
      md:bg-transparent md:top-0 md:ml-0 md:relative md:rounded-none md:border-r-2 md:pt-5 md:w-full md:border-r-[#bb6d79] md:text-md lg:text-lg lg:col-span-4 '>
        
        <ul 
        class="flex gap-6 text-[#bb6d79] uppercase font-slab font-light justify-center">
          <li class=' hover:underline'>About Me</li>
          <li class=' hover:underline'>Projects</li>
          <li class=' hover:underline'>Skills</li>
          <li class=' hover:underline'>Get In Touch</li>
        </ul>

      </div>
      
      <div 
      class="flex col-start-4 pt-2
      md:col-start-7 md:ml-9 md:mr-9 ">
        
        <SocialIcon
          url="https://www.linkedin.com/in/jacquelinvelasquez"
          fgColor="#bb6d79"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/v-jacx"
          fgColor="#bb6d79"
          bgColor="transparent"
        />

      </div>

    </div>
  );
};

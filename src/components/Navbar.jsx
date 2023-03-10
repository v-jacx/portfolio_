import React from "react";
import { SocialIcon } from "react-social-icons";

export const Navbar = () => {
  return (
    <div 
    class='ml-3 mr-3 grid grid-cols-3 sticky top-0
    md:grid-cols-6 border-b-[#cc9933] border-b-2'>
      
      <div 
      class="text-[#cc9933] font-lobster text-[1.75rem] p-3 text-center
      lg:col-span-2 md:border-r-2 md:border-r-[#cc9933] md:col-span-3">
        
        <h1>Jacquelin_Velasquez.</h1>
      
      </div>
      
      <div 
      class='bg-[#e0d7c7] w-[23rem] rounded-3xl p-[1rem] overflow-hidden fixed bottom-4 col-span-3 text-[.8rem] left-2
      md:bg-transparent md:top-0 md:ml-0 md:relative md:rounded-none md:border-r-2 md:pt-5 md:w-full md:border-r-[#cc9933] md:text-md lg:text-lg lg:col-span-4 '>
        
        <ul 
        class="flex gap-6 text-[#cc9933] uppercase font-slab font-light justify-center">
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
          fgColor="#cc9933"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/v-jacx"
          fgColor="#cc9933"
          bgColor="transparent"
        />

      </div>

    </div>
  );
};

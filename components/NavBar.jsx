"use client"
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
const NavBar = () => {
  return (
    <nav  className='h-[65px] w-full md:py-1 py-0  shadow-navbarShadow  bg-gray-50 bottom-3   '  >  
    <div  className='flex items-center justify-center gap-7 py-1 ' >

         <Image  src='/image/mosque.png' width={35} height={25} alt='mosque'/>




            
      <h1 className='md:text-3xl text-xl   text-black ' >    
            <Typewriter
  options={{
    strings: ['أوقات الصلاة بالمغرب'],
    autoStart: true,
    loop: true,
  }}
/>    
            
            
            
            </h1>
            
      
       

    </div>
   
      
        </nav>
  )
}

export default NavBar
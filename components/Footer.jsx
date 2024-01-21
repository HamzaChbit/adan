import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion'
const Footer = () => {
  return (
 

<footer        className="bg-white shadow-navbarShadow">
  <div className="mx-auto w-full px-4 py-1 sm:px-6 lg:px-8">
    
     

    <div className="mt-1 border-t  border-gray-100 pt-2 ">
      <div className="flex justify-center  items-center gap-14 ">
        <p className="text-xs text-gray-500">2024@ شبيت جميع الحقوق محفوظة   </p>

        <Link href="https://www.linkedin.com/in/hamza-1dz4/" target="_blank"className="flex  justify-start gap-4 text-xl  ">
         <FaLinkedin size={20} className='text-sky-700 ' />
          
       


        </Link>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
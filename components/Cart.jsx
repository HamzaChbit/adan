import Image from 'next/image'
import React from 'react'

const Cart = ({image,name,time}) => {
  return (
    <>


<div className="h-auto rounded-lg bg-gray-200">
  <div href="" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
  <Image
  width={150} height={150}
    alt="Home"
    src={image}
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
  <h1  className='text-black font-extrabold text-2xl'   > {name}</h1>
  <div className='flex justify-center items-center' >
     <h1   className='text-black font-md text-5xl'>{time}</h1>
  </div>
 


  </div>
</div>
  </div>
    </>
  )
}

export default Cart
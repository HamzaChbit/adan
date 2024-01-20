
import NavBar from '@/components/NavBar'
import './globals.css'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'





export default function Home() {

  
  return (
    <div className='w-full h-screen  overflow-x-hidden overflow-y-scroll  scrollbar scrollbar-track-white scrollbar-thumb-black cursor-pointer ' >
    <NavBar/>
    <div  className=' mx-auto py-12 w-full flex my-12  justify-center items-center' >
          <Hero/> 
          
    </div>




 <Footer/> 

    </div>
  )
}

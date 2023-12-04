import HomeProduct from '@/Components/Home/HomeProduct'
import HeroSection from '@/Components/hero/HeroSection'
import Navbar from '@/Components/navigation/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-c1'>
      <HeroSection/>
      <HomeProduct/>
    </div>

  )
}

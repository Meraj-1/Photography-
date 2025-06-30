import React from 'react'
import Image from '../assets/assets'
const Hero = () => {
  return (
    <div>
        <div className='bg-[url(./assets/hero.png)] h-[100vh] flex justify-center items-center'>
        <img src={Image.hero1} alt="" className='h-auto p-20' />
        </div>
    </div>
  )
}

export default Hero
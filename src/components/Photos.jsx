import React from 'react'
import Image from '../assets/assets'

const photos = () => {
  return (
    <div className='lg:flex justify-center items-center pt-20'>
        <div className=''>
             <img src={Image.logo} alt="" />
            <img src={Image.image_r} alt="" />
        </div>
        <div className=''>
            <img src={Image.image_l} alt="" />
            <img src={Image.left} alt="" />
        </div>
    </div>
  )
}

export default photos
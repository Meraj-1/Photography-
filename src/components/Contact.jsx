import React from 'react'
import Image from '../assets/assets'
const Contact = () => {
  return (
    <div className='pt-20 gap-20'>
        <img src={Image.shop} alt="" />
        <div className='flex flex-col justify-center items-center pt-10'>
            <h1 id='heading' className='text-6xl'>Designer</h1>
            <span>Meraj Ansari</span>
            <span id='para' className='font-extrabold'>Instagram : <span>@vue_coders</span></span>
            <span id='para' className='font-extrabold'>Gmail : <span>merajansari786@gmail.com</span></span>
           <span  id='para'className='font-extrabold'>Github : <span>Meraj-1</span></span>
        </div>
    </div>
  )
}

export default Contact
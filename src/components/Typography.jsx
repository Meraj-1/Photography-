import React from 'react'
import Image from '../assets/assets'
const Typography = () => {
  return (
    <div className='flex flex-col pt-20 justify-center items-center '>
     <img className='' src={Image.card} alt="" />
         <div className='justify-center items-start lg:px-150 pt-30'>
            <h1 id='heading' className='text-6xl'>Typography</h1>
            <span id='para' className='text-sm'>
              The main font used, The Seasons Light, exudes elegance and sophistication, perfectly reflecting
               the aesthetic of capturing timeless love stories. Complementing it is the secondary font, Calibri 
               Regular, which adds a modern touch and ensures readability. This harmonious combination of fonts creates 
               a visually appealing and cohesive brand image, leaving a lasting impression on clients 
              and making their wedding moments truly unforgettable.
            </span>
        </div>
    </div>
  )
}

export default Typography
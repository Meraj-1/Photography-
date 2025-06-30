import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Brand from './components/Brand'
import Typography from './components/Typography'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Photos from './components/Photos'

function App() {

  return (
    <div className='bg-[#F2F2F2]'>
     <Hero/>
     <About/>
     <Photos/>
     <Brand/>
     <Typography/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App

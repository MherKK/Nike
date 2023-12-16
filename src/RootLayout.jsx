import React from 'react'
import { Nav } from './components'
import { Outlet } from 'react-router-dom'
import { Footer } from './sections'

const RootLayout = () => {
  return (
    <div>
        <Nav />
        <p className='border-b text-slate-gray font-montserrat border-coral-red pt-[100px] text-center text-sm p-2'>Save your favorite items by 
          <a className='text-coral-red' href=''> Sign In</a> / 
          <a className='text-coral-red' href=''> Sign Up</a>
        </p>
        <Outlet />
        <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </div>

  )
}

export default RootLayout
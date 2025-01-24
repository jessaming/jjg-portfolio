import React from 'react'
import { navList } from '../constants'

const Navbar = () => {

  return (
    <header className='w-full py-5 sm:px-10 m-5 px-5 flex justify-between items-center' style={{padding: '32px'}}>
      <nav className='flex w-full screen-max-width items-center relative'>
        <p className='font-bold inter-extrabold text-2xl lg:text-3xl text-center'>Jessamin Jhoy Godio</p>

        <div className='flex flex-1 justify-center hidden md:flex' style={{marginLeft: '-70px'}}>
          {navList.map((nav) => (
            <div key={nav} className='inter-regular flex items-center text-md cursor-pointer text-[#636364] hover:text-[#1d1d1f] transition-all md:p-3 lg:px-5' style={{paddingInline:'12px'}}>
              {nav}
            </div>
          ))}
        </div>
        <div className='bg-[#1d1d1f] rounded-3xl flex items-center max-sm:absolute max-sm:right-0 sm:absolute sm:right-0' style={{paddingTop:'8px', paddingBottom:'8px', paddingInline:'18px'}}>
          <p className='inter-bold text-white text-center p-3 text-md' >
          Connect
        </p>
        </div>
      </nav>
    </header>
  )
}


export default Navbar;
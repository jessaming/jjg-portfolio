import React from 'react'
import { navList } from '../constants'

const Navbar = () => {

  return (
    <header className='w-full py-6 sm:px-10 m-5 px-6 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width items-center relative'>
        <p className='font-bold inter-extrabold text-2xl lg:text-3xl text-center max-sm:-ml-5 sm:-ml-5'>Jessamin Jhoy Godio</p>

        <div className='flex flex-1 justify-center hidden md:flex -ml-28'>
          {navList.map((nav) => (
            <div key={nav} className='inter-regular flex items-center text-md cursor-pointer text-[#636364] hover:text-[#1d1d1f] transition-all px-4 md:p-3 lg:px-6 xl:px-7'>
              {nav}
            </div>
          ))}
        </div>
        {/* change to animated button (when hovered) */}
        <div className='bg-[#1d1d1f] rounded-3xl flex items-center max-sm:absolute max-sm:right-5 sm:absolute sm:right-5 px-4'>
          <p className='inter-bold text-white text-center p-3 text-md' >
          Connect
        </p>
        </div>
      </nav>
    </header>
  )
}


export default Navbar;
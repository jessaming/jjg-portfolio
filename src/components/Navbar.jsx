import React from 'react';
import { navList } from '../constants';
import logo from '../assets/logo/logo.png';

const Navbar = () => {
  const ScrollToConnect = () => {
    const connectElement = document.getElementById('connect');
    if (connectElement) {
      connectElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='w-full py-2 sm:px-10 m-6 px-6 flex justify-center items-center'>
      <nav className='flex w-full screen-max-width items-center relative'>
        <div className='font-medium font-clash text-2xl lg:text-3xl text-center max-sm:-ml-5 sm:-ml-5'>
          <img src={logo} className='w-25 p-1' alt='logo' />
        </div>

        <div className='flex flex-1 justify-center hidden md:flex -ml-28'>
          {navList.map((nav) => (
            <a
              key={nav} 
              href={nav.link}
              className='inter-regular flex items-center text-md cursor-pointer text-[#636364] hover:text-[#1d1d1f] hover:text-lg transition-all px-4 md:p-3 lg:px-6 xl:px-7'>
              {nav.name}
            </a>
          ))}
        </div>

        <button onClick={ScrollToConnect} className='group bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 hover:bg-gradient-to-br focus:outline-none rounded-3xl flex items-center max-sm:absolute max-sm:right-10 sm:absolute sm:right-5 px-6'>
          <p className='group font-clash tracking-wide text-white p-3 text-md'> Connect </p>
          <div className='group-hover:translate-x-1 transition-all'>
            <i className="fa fa-angle-right fa-sm text-white" aria-hidden="true"></i>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Connect = () => {
  return (
    <div id='connect' className='h-screen flex flex-col justify-center items-center'>
      <h1 className='mx-8 p-10 -mt-30 text-4xl font-clash font-medium flex justify-center items-center'>
        Get in touch.
      </h1>
      <div className='flex flex-wrap justify-center items-center mt-40 gap-10 mx-10'>
        <div className="grid grid-cols-2 gap-25 xs:grid-cols-2 md:grid-cols-3 md:gap-30 lg:grid-cols-6 lg:gap-20 xl:gap-30 ">
          <i className="fa fa-phone fa-4x icon" aria-hidden="true"></i>
          <i className="fa fa-envelope fa-4x icon" aria-hidden="true"></i>
          <i className="fab fa-linkedin-in fa-4x icon" aria-hidden="true"></i>
          <i className="fab fa-facebook-messenger fa-4x icon" aria-hidden="true"></i>
          <i className="fab fa-instagram fa-4x icon" aria-hidden="true"></i>
          <i className="fab fa-github fa-4x icon" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default Connect
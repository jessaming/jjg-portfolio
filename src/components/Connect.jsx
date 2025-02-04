import React, { useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { emailAddress, fbmUrl, fbUrl, ghUrl, igUrl, liUrl } from '../constants/info';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Connect = () => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type-up');

    splitTypes.forEach((char) => {
      gsap.fromTo(
        char,
        {
          opacity: 0, 
          y:300,
        },
        {
          opacity: 1,
          y: -50, 
          duration: 1,
          scrollTrigger: {
            trigger: char,
            start: 'top 100%',
            end: 'top 80%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div id='connect' className='h-screen flex flex-col justify-center items-center my-40'>
      <h1 className='reveal-type-up mx-8 p-10 -mt-30 text-4xl font-clash font-medium flex justify-center items-center'>
        Get in touch.
      </h1>

      <div className='flex flex-wrap justify-center items-center my-20 sm:my-30 gap-10 mx-10'>
        <div className="reveal-type-up grid grid-cols-2 gap-25 xs:grid-cols-2 md:grid-cols-3 md:gap-30 lg:grid-cols-6 lg:gap-20 xl:gap-30 ">
          <a href={`mailto:${emailAddress}`}>
            <i className="fa fa-envelope fa-4x icon" aria-hidden="true"></i>
          </a>
          <a href={`${ghUrl}`}>
            <i className="fab fa-github fa-4x icon" aria-hidden="true"></i>
          </a>
          <a href={`${liUrl}`}>
            <i className="fab fa-linkedin-in fa-4x icon" aria-hidden="true"></i>
          </a>
          <a href={`${igUrl}`}>
            <i className="fab fa-instagram fa-4x icon" aria-hidden="true"></i>
          </a>
          <a href={`${fbUrl}`}>
          <i className="fab fa-facebook-f fa-4x icon" aria-hidden="true"></i>
          </a>
          <a href={`${fbmUrl}`}>
            <i className="fab fa-facebook-messenger fa-4x icon" aria-hidden="true"></i>
          </a>
        </div>

        <button onClick={ScrollToTop} className='pt-15 absolute bottom-15 lg:bottom-20 flex flex-col items-center justify-center group transition-all duration-300'>
          <i className="fa fa-angle-double-up fa-xl transition-all group-hover:-translate-y-2 text-[#1d1d1f]" aria-hidden="true"></i>
          <h2 className='hove mt-3 text-center text-sm font-clash font-regular text-[#1d1d1f]'>Make your way up.</h2>
        </button>
      </div>
    </div>
  )
}

export default Connect
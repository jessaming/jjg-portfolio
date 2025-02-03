import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ tags }) => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type-right');

    splitTypes.forEach((char) => {

      gsap.fromTo(
        char,
        {
          opacity: 0, 
          x:-300,
        },
        {
          color: '#1d1d1f',
          opacity: 1, 
          x: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: char,
            start: 'top 100%',
            end: 'top 60%',
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

  return (
    <div id='skills' className='h-screen flex flex-col justify-center items-center'>
      <div
        id='title'
        className='reveal-type-right text-[#1d1d1f] text-4xl sm:text-5xl md:text-6xl py-10 flex justify-center items-center font-clash font-medium'
      >
        Skills on display.
      </div>
      <div className='reveal-type-right flex flex-wrap justify-center items-center px-0 lg:px-5 lg:gap-1 mx-10 sm:mx-18 md:mx-16 lg:mx-50 mt-14 sm:mt-20'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="relative flex items-center justify-center overflow-hidden border border-[#1d1d1f] text-sm lg:text-lg inter-medium px-5 py-2 rounded-full mx-1 my-1 bg-white text-black transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#1d1d1f] before:duration-500 before:ease-out hover:before:h-80 hover:before:w-80 hover:text-[#fafafa] hover:px-7"
          >
            <span className='relative z-10'>{tag}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
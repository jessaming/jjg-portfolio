import React, {useEffect} from 'react';
import gsap from 'gsap'

const Skills = ({ tags }) => {
  useEffect(() => {
    gsap.to('#title', { opacity: 1, delay: 0.4, duration: 2 });
  }, []);

  return (
    <div id='skills' className='h-screen bg-[#1d1d1f]'>
      <div id='title' className='text-[#fafafa] pt-20 sm:pt-25 md:pt-28 text-3xl flex justify-center items-center inter-semibold opacity-0'>
        Skills on display.
      </div>
      <div className='flex flex-wrap justify-center items-center lg:gap-1 mx-12 sm:mx-18 lg:mx-65 mt-14 sm:mt-20'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='border border-[#fafafa] hover:bg-[#fafafa] hover:text-[#1d1d1f] text-white text-sm lg:text-lg inter-medium px-5 py-1 rounded-full mx-1 my-1'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
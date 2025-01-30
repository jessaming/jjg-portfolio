import React from 'react'
import { projectList } from '../constants';

const Works = () => {
  const panels = document.querySelectorAll('.panel');

  panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
  });

  function removeActiveClasses() {
      panels.forEach(panel => {
          panel.classList.remove('active');
      });
  }


  return (
    <div className='h-full justify-center items-center'>
        <h1 className='mx-8 p-10 text-3xl inter-semibold flex justify-center items-center'>
            Explore the creations.
        </h1>
        <div className='flex flex-col items-center justify-center h-full overflow-hidden my-10'>
          <div className='lg:flex lg:flex-row w-[80%] mx-auto gap-7'> 
            {projectList.map(item => (
            <div
              key={item.id}
              className="panel"
              style={{ backgroundImage: `url(${item.image})`}}
            >
              <h1 className='rotated absolute left-10 bottom-10 text-2xl inter-bold justify-center items-center w-100'>{item.title}</h1>
              <div id='desc' className='absolute left-10 bottom-10'>
                <h3 className='text-black inter-semibold text-2xl opacity-0'>{item.title}</h3>
                <h3 className='text-black inter-regular text-md  opacity-0'>{item.description}</h3>
                <h3 className='text-black inter-light-italic text-md opacity-0'>{item.language}</h3>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Works
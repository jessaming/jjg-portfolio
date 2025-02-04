import React, { useState, useEffect } from 'react';
import { projectList } from '../constants';
import { Modal, Divider } from 'antd';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type-left');

    splitTypes.forEach((char) => {
      gsap.fromTo(
        char,
        {
          opacity: 0, 
          x:300,
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

  const [activePanel, setActivePanel] = useState(projectList[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (id) => {
    if (activePanel === id) {
      setActivePanel(null);
    } else {
      setActivePanel(id);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const activeItem = projectList.find(item => item.id === activePanel);

  return (
    <div id='works' className='h-full justify-center items-center my-40'>
      <h1 className='reveal-type-left mx-5 p-10 text-4xl sm:text-5xl text-center font-clash font-medium flex justify-center items-center text-[#1d1d1f]'>
        Explore the creations.
      </h1>
      <div className='reveal-type-left flex flex-col items-center justify-center h-full overflow-hidden my-10'>
        <div className='xl:flex xl:flex-row w-[80%] mx-auto gap-7'>
          {projectList.map(item => (
            <div
              key={item.id}
              className={`panel flex items-center justify-center relative ${activePanel === item.id ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => handleClick(item.id)}>
              <h1 className='rotated absolute left-[70%] top-[75%] text-lg md:text-2xl font-clash font-semibold justify-center items-center text-center w-100'>{item.title}</h1>
              <h1 className='not-rotated text-lg sm:text-2xl font-clash font-semibold justify-center items-center text-center text-[#1d1d1f] w-100'>{item.title}</h1>
              
              {activePanel === item.id && (
                <button
                  className='absolute bottom-5 left-5 text-white p-2 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 hover:bg-gradient-to-br'
                  onClick={(e) => {
                    e.stopPropagation();
                    showModal();
                  }}>
                  <InformationCircleIcon className='h-6 w-6' />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <Modal
        title={activeItem ? activeItem.title : ''}
        className='inter-semibold'
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        footer={null}
        width={'400px'}
      >
        {activeItem && (
          <>
            <p className='inter-regular text-center mt-2'>{activeItem.description}</p>
            <Divider plain className='text-center inter-regular-italic'>Made with {activeItem.language}</Divider>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Works;
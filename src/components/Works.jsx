import React, { useState } from 'react';
import { projectList } from '../constants';
import { Modal, Divider } from 'antd';
import { InformationCircleIcon } from '@heroicons/react/24/outline'; // Import the info icon

const Works = () => {
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
    <div className='h-full justify-center items-center mb-40'>
      <h1 className='mx-8 p-10 text-4xl font-clash font-medium flex justify-center items-center'>
        Explore the creations.
      </h1>
      <div className='flex flex-col items-center justify-center h-full overflow-hidden my-10'>
        <div className='xl:flex xl:flex-row w-[80%] mx-auto gap-7'>
          {projectList.map(item => (
            <div
              key={item.id}
              className={`panel flex items-center justify-center relative ${activePanel === item.id ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => handleClick(item.id)}
            >
              <h1 className='rotated absolute left-[70%] top-[75%] text-2xl font-clash font-semibold justify-center items-center text-center w-100'>{item.title}</h1>
              <h1 className='not-rotated text-2xl font-clash font-semibold justify-center items-center text-center text-[#1d1d1f] w-100'>{item.title}</h1>
              
              {activePanel === item.id && (
                <button
                  className='absolute bottom-5 left-5 text-white p-2 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 hover:bg-gradient-to-br'
                  onClick={(e) => {
                    e.stopPropagation();
                    showModal();
                  }}
                >
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
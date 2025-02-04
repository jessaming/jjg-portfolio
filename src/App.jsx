import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Cursor from './components/Cursor';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Works from './components/Works';
import Connect from './components/Connect';
import { skills } from './constants';

const App = () => {
  return (
    <ReactLenis root>
      <main className='text-black lg:ml-0'>
        <Background />
        <Navbar />
        <div className='relative'>
          <Cursor />
          <Routes>
            <Route path="/" element={<Bio id='discover' />} />
            <Route path="/skills" element={<Skills tags={skills} id='skills' />} />
            <Route path="/works" element={<Works id='works' />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </div>
      </main>
    </ReactLenis>
  );
}

export default App;
import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Cursor from './components/Cursor';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Works from './components/Works';
import Connect from './components/Connect';
import { skills } from './constants';
import './index.css';

const App = () => {
  return (
    <ReactLenis root>
      <main className='text-black lg:ml-0'>
        <Background />
        <Navbar />
        <div className='relative'>
        <Cursor/>
          <Bio id='discover'/>
          <Skills  tags={skills} id='skills' />
          <Works id='works' />
          <Connect />
        </div>
      </main>
    </ReactLenis>
  );
}

export default App;
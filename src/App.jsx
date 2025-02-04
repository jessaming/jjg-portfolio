import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Cursor  from '../src/components/Cursor'
import Bio from '../src/components/Bio'
import Skills from '../src/components/Skills'
import Works from '../src/components/Works'
import Connect from '../src/components/Connect'
import { skills } from '../src/constants';

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
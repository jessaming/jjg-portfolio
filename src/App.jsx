import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import Cursor  from '../src/components/Cursor'
import Bio from '../src/components/Bio'
import Discover from '../src/components/Discover'
import Skills from '../src/components/Skills'
import Works from '../src/components/Works'
import Connect from '../src/components/Connect'
import { skills } from '../src/constants';

const App = () => {
  return (
    <main className='text-black lg:ml-0'>
      <Background />
      <Navbar />
      <div className='relative'>
      <Cursor/>

        <Bio />
        {/* <Discover id='discover' /> */}
        <Skills  tags={skills} id='skills' />
        <Works id='works' />
        <Connect />
        {/* <Hero /> */}
      </div>
    </main>
  );
}

export default App;
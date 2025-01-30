import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
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
      <Navbar />
      <Cursor/>
      <Bio />
      {/* <Discover id='discover' /> */}
      <Skills  tags={skills} id='skills' />
      <Works id='works' />
      <Connect />
      {/* <Hero /> */}
      <Highlights />
    </main>
  );
}

export default App;
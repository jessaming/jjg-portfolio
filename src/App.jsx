import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Cursor  from '../src/components/Cursor'
import Bio from '../src/components/Bio'

const App = () => {
  return (
    <main className='text-black lg:ml-0'>
      <Navbar />
      <Cursor/>
      <Bio />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
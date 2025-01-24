import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';

const App = () => {
  return (
    <main className='text-black'>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
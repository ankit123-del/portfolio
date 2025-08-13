import React from 'react';
import Navbar from './compo/Navbar';
import Home from './compo/Home';
import About from './compo/About';
import Projects from './compo/Projects';
import Skills from './compo/Skills';      
import Contact from './compo/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Add top padding to avoid hiding behind fixed navbar */}
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;

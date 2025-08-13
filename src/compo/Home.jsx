import React from 'react';
import { scroller } from 'react-scroll';

const Home = () => {
  // Function to scroll to projects section
  const scrollToProjects = () => {
    scroller.scrollTo('projects', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-indigo-50 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-indigo-600">Ankit Sharma</span>
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          I'm a Full Stack Developer passionate about building modern and scalable web applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Scroll to Projects Button */}
          <button
            onClick={scrollToProjects}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            View My Work
          </button>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf" 
            download="Ankit_Sharma_Resume.pdf"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

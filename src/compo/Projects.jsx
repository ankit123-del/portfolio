import React from 'react';
import { Element } from 'react-scroll';

const projects = [
  {
    title: 'AI Recipe Generator',
    description: 'An AI-powered app that generates recipes using ingredients and preferences.',
    image: 'recipefinder.jpg',
    link: 'https://github.com/yourusername/recipe-generator',
  },
  {
    title: 'DevConnect – Social Hub',
    description: 'A developer social media platform built with the MERN stack.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/yourusername/devconnect',
  },
  {
    title: 'Jarvis Ai Voice Assistant',
    description: 'An AI-Powered Command-based and voice based Assistant using Python',
    image: 'https://repository-images.githubusercontent.com/251086624/3c486c80-729e-11ea-8279-5f9e57b8e2d9',
    link: 'https://github.com/ankit123-del/python_project',
  },
];

const Projects = () => {
  return (
    <Element name="projects">
      <section className="px-6 py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;

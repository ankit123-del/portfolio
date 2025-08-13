import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
  return (
   <div className="box1 flex justify-center items-center min-h-screen bg-gray-100">
  <Element name="about">
    <section className="px-6 py-16">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg leading-relaxed text-center text-gray-700">
          Hello! I’m <strong>Ankit Sharma</strong>, a passionate Full Stack Developer who loves building scalable and user-friendly applications...
          and I am pursuing my B.Tech in Computer Science. I have a strong interest in full-stack web development, with skills in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.
          <br /><br />
          I have completed multiple internships, including as a Frontend Developer Intern at Yatharth Educational Services, where I worked with React.js to enhance UI/UX and optimize performance, and as a Python Programming Intern at Mission Minded Foundation, where I developed automation scripts and improved my knowledge of data structures and algorithms.
          <br /><br />
          Recently, I worked as a MERN Stack Developer Intern at UpFlair Pvt. Ltd., where I built full-stack applications, developed RESTful APIs, and integrated real-time features into live projects.
        </p>
      </div>
    </section>
  </Element>
</div>

  );
};

export default About;

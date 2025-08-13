import React from 'react';
import { Element } from 'react-scroll';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'MongoDB', level: 70 },
];

const Skills = () => {
  return (
    <Element name="skills">
      <section className="px-6 py-16 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;

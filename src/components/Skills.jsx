import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
    ],
  },
  {
    category: 'Machine Learning',
    technologies: [
      { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {skills.map((skill, index) => (
          <div key={index} className="border border-blue-900 p-8 rounded-lg bg-blue-900/20 shadow-lg w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skill.technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

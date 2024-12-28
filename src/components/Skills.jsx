import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiPython,
  DiNodejsSmall,
  DiJava,
  DiGithubBadge,
} from "react-icons/di";

import { TbBrandCpp,TbAssembly  } from "react-icons/tb";
import { FaGolang,FaJenkins  } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { SiNumpy,SiPytorch, SiScikitlearn,SiOpencv    } from "react-icons/si";
import { PiLetterCircleVFill  } from "react-icons/pi";

import { GiCircuitry,GiProcessor  } from "react-icons/gi";
import Reveal from "./Reveal";

// <DiPython className="text-blue-600 mx-2" />
//             <TbBrandCpp className="text-purple-500 mx-2" />
//             <DiJavascript1 className="text-yellow-500 mx-2" />
//             <DiJava className="text-orange-600 mx-2" />
//             <FaGolang className="text-blue-500  mx-2 text-100xl" />

const skills = [ 
  {
    category: 'Machine Learning',
    technologies: [
      { name: 'Python', icon: <DiPython className='text-yellow-600' /> },
      { name: 'NumPy', icon: <SiNumpy className='text-blue-400' /> },
      { name: 'PyTorch', icon: <SiPytorch  className='text-orange-500' /> },
      { name: 'SciKit-Learn', icon: <SiScikitlearn  className='text-gray-600' /> },
      { name: 'OpenCV', icon: <SiOpencv  className='text-green-600' /> },

    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'Java', icon: <DiJava className='text-red-600' /> },
      { name: 'Go', icon: <FaGolang className='text-blue-600' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'AWS', icon: <FaAws className='text-orange-600' /> },
      { name: 'Jenkins', icon: <FaJenkins className='text-gray-400' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },

    ],
  },
  {
    category: 'Hardware',
    technologies: [
      { name: 'C/C++', icon: <TbBrandCpp className='text-purple-600' /> },
      { name: 'PCB', icon: <GiCircuitry className='text-pink-600' /> },
      { name: 'Verilog', icon: <PiLetterCircleVFill  className='text-gray-500' /> },
      { name: 'DSP', icon: <GiProcessor  className='text-purple-600' /> },
      { name: 'Assembly', icon: <TbAssembly className='text-yellow-500' /> },
    ],
  },
];




const Skills = () => {
  return (
    <div 
      className="flex justify-center items-center  text-gray-200" // Added flexbox styles
      id="skills"
    >
      <Reveal>
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center px-4 pb-8 md:py-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-blue-900 p-8 rounded-lg bg-blue-900/20 shadow-lg w-full md:w-2/3 lg:w-1/2"
              >
                <h3 className="text-xl font-bold mb-4 text-center">
                  {skill.category}
                </h3>
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
      </Reveal>
    </div>
  );
};

export default Skills;


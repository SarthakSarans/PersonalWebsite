import React from 'react';
import project1 from "../assets/proj.png"
import project2 from "../assets/proj.png"
import project4 from "../assets/proj.png"
import project5 from "../assets/proj.png"
import project6 from "../assets/proj.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Arithmetic Logic Unit",
      description: "ALU built on ARM architecture in Logisim, performs binary calculations and input/output.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "A fullstack application built with Node.js and MongoDB.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project4,
      title: "Project #3",
      description: "An e-commerce platform with various features.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "A mobile-friendly application using React Native.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project6,
      title: "Project #5",
      description: "A data visualization project using D3.js and other libraries.",
      links: {
        site: "#",
        github: "#",
      },
    },
  ]

const Projects = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="projects">
        <h2 className='text-3xl text-center font-bold text-gray-200 mb-8'>Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Projects
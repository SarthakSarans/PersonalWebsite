import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import "react-vertical-timeline-component/style.min.css";
  

const experiences = [
  {
    company: 'Rialtes Technologies',
    role: 'Software Engineering Intern',
    period: 'Jul 2023 - Jan 2024',
    description: 'At Rialtes Technologies, I worked as a Software Engineering Intern, optimizing CI/CD pipelines and performing comprehensive API testing to enhance software reliability and deployment efficiency. Additionally, I contributed to Salesforce development, integrating solutions to improve business workflows and client satisfaction.',
  },
  {
    company: 'Urban Ai Resilience Lab',
    role: 'Undergraduate Reseacher',
    period: 'Jan 2024 - May 2024',
    description: 'At the Urban Resilience AI Lab, I tackled complex challenges in wildfire prediction and data visualization, combining machine learning with geospatial analysis to deliver impactful results. My work included refining predictive models to achieve 87% accuracy in forecasting California wildfires and uncovering patterns in vast datasets through clustering and detailed visualizations, supporting informed decision-making for urban resilience.',
  },
  {
    company: 'General Motors x Data Science Club',
    role: 'Machine Learning Team Lead',
    period: 'Jan 2024 - May 2024',
    description: 'As the Machine Learning Team Lead for a semester-long project with General Motors and the Data Science Club, I guided a team of four in developing a predictive model to optimize electric vehicle charging infrastructure. We collaborated closely to create a locally-weighted regression model that achieved 93% accuracy in forecasting energy loads, while maintaining comprehensive project documentation and delivering a polished final presentation that highlighted our collective efforts.',
  },
]

const Experience = () => {
  return (
    <div className="p-8 max-w-full center">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">Experience</h1>
      <div className="relative">
        {/* <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 border-l-2 border-blue-500"></div> */}
        <div>
      <VerticalTimeline>
        {experiences.map((element, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              date={element.period}
              dateClassName="date"
              iconClassName="bg-white"
              contentStyle={{
                border: '1px solid #2563eb', // Use the hex color for blue-600
                borderRadius: '0.5rem', // Corresponds to rounded-lg
                backgroundColor: 'rgba(29, 78, 216, 0.1)', // bg-blue-700/10
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-md
                transition: 'box-shadow 0.3s', // hover:shadow-xl transition effect
              }}
                          >
              <h3 className="vertical-timeline-element-title text-gray-100 text-2xl font-semibold">
                {element.company}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.role}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
        {/* <motion.div className="space-y-8 center">
          {experiences.map((experience, index) => (
            <Reveal>
              <motion.div key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
                >
                <div className={`w-full p-8 border border-blue-600 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-blue-700/10 flex flex-col  ${index % 2 !== 0 ? 'flex-row-reverse text-left' : 'flex-row'} ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                  <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                  <p className='text-gray-200'>{experience.role}</p>
                  <p className='text-gray-300 text-lg'>{experience.period}</p>
                  <p className='text-gray-400 mt-4'>{experience.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </motion.div> */}
      </div>
    </div>
  )
}

export default Experience


{/* <div>
      <VerticalTimeline>
        {experiences.map((element, index) => {
          return (
            <VerticalTimelineElement
              key=index
              date={element.date}
              dateClassName="date"
            >
              <h3 className="vertical-timeline-element-title">
                {element.company}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.role}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div> */}
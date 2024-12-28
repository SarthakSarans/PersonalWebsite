import React from "react";
import profilepic from "../assets/profpic.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineX,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiPython,
  DiJava,
  DiJavascript1,
} from "react-icons/di";




import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-0"
                >
                    Hey, I'm <br/>
                    <span className="text-blue-500">Sarthak Sarans</span>
                </motion.p>
                <TypeAnimation
                    sequence={[
                        "Student",
                        1000,
                        "Researcher",
                        1000,
                        "Engineer",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic mb-1"
                />
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mt-4 mb-6"
                >
                    I am a passionate student with experience in machine learning, software development, and computer architecture.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-blue-400 rounded-xl"     
                    >
                        <a
                            href="/resume.pdf" 
                            rel="noopener noreferrer"
                            className="text-gray-200 no-underline"
                        >
                            Download Resume
                        </a>
                    </motion.button>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-blue-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/SarthakSarans">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/sarthaksarans/">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineX/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={profilepic}
                alt="COver Photo" 
                style={{
                    width: '500px', 
                    height: '500px', 
                    borderRadius: '75px', // Half of the height to create an oval
                    border: '5px solid #ccc', 
                    objectFit: 'cover'
                  }} 
                className="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>

        {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>
            <DiPython className="text-blue-600 mx-2" />
            <TbBrandCpp className="text-purple-500 mx-2" />
            <DiJavascript1 className="text-yellow-500 mx-2" />
            <DiJava className="text-orange-600 mx-2" />
            <FaGolang className="text-blue-500  mx-2 text-100xl" />
        </motion.div> */}

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero
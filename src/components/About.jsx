import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import pic3 from "../assets/Images/pic1.jpg";
import pic2 from "../assets/Images/pic2.jpg";
import pic1 from "../assets/Images/pic3.jpg";
import Navbar from "./Navbar";

const About = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.8], [-10, 10]);

  const skills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <>
      <div className="relative w-full h-[100vh] flex justify-center items-center bg-[#18181b]">

        <Navbar />
        
        {/* Container for stacked images */}
        <div className="absolute -top-10 right-90 w-150 h-200">

          {/* First Image (Rotated) */}
          <motion.div
            style={{ rotate }}
            className="absolute -top-10 -left-25 w-full h-full rounded-2xl overflow-hidden z-2 transition-all duration-300 -rotate-12 hover:z-5 hover:-translate-y-5 shadow-xl"
          >
            <img
              src={pic1}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>

          {/* Second Image (Rotated) */}
          <motion.div
            style={{ rotate }}
            className="absolute top-5 left-0 w-full h-full rounded-2xl overflow-hidden z-3 transition-all duration-300 hover:z-5 hover:-translate-y-5 shadow-xl"
          >
            <img
              src={pic2}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>

          {/* Third Image (More Rotation) */}
          <motion.div
            style={{ rotate }}
            className="absolute top-30 left-25 w-full h-full rounded-2xl overflow-hidden z-4 transition-all duration-300 rotate-12 hover:z-5 hover:-translate-y-5 shadow-xl"
          >
            <img
              src={pic3}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute -left-150 w-full h-full flex justify-center items-center text-white font-[CoffeeHealing] text-4xl"
        >
          <div className="w-120 text-left">
            <h1 className="text-9xl text-[#ff8a47] italic drop-shadow-lg">
              About Me
            </h1>
            <p className="text-4xl font-[Burvetica] text-slate-200">
              I am Nikhil, a passionate web developer crafting seamless,{" "}
              <span className="text-[#ffd700] font-bold">interactive</span>, and
              visually striking experiences for the web.
            </p>
            <div className="flex space-x-4 mt-8">
              <div className="relative group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 font-[Burvetica] text-xl hover:cursor-pointer text-white rounded-2xl active:scale-95 transition-all duration-300 hover:bg-white/20 shadow-md hover:shadow-lg">
                  Skills & Expertise
                </div>

                {/* Invisible connector between button and dropdown */}
                <div className="absolute h-2 w-full left-0 -bottom-2"></div>

                {/* Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-full mt-2 bg-white/95 backdrop-blur-sm text-black p-4 rounded-lg shadow-lg z-10 w-72 hidden group-hover:block border border-[#ffd700]/20"
                >
                  <h3 className="font-[Burvetica] mb-3 text-xl text-[#4a0000] border-b border-[#ffd700]/30 pb-2">
                    My Skills
                  </h3>
                  <div className="grid grid-cols-2 font-[Burvetica] gap-3">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-slate-50 to-slate-100 px-3 py-2 rounded-lg text-sm flex items-center hover:shadow-md transition-all duration-200 hover:from-white hover:to-white"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-[#ffd700] to-[#ff8a47] rounded-full mr-2 flex-shrink-0"></div>
                        <span className="inline-block font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;

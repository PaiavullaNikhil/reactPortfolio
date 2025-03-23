import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Project from "./Project";
const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full min-h-screen overflow-hidden flex flex-col justify-center items-center bg-[#18181b]"
      >
        <Navbar />

        <div className="relative w-full h-[60vh] flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[19vh] text-white font-[Burvetica] absolute top-10 left-60"
          >
            Creative
          </motion.h1>

          {/* Second Text: "Web Developer" */}
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[19vh] text-white font-[Burvetica] absolute bottom-10 right-60"
          >
            <span className="text-red-600 font-bold font-[HelloSwashes]">
              Web
            </span>{" "}
            Developer
          </motion.h1>
        </div>
      </motion.div>
      <About />
      <Project />
    </>
  );
};

export default Home;

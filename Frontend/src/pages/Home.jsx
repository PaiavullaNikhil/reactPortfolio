import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

const Home = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const homeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      scale: 3,
      backgroundColor: "rgba(255, 59, 59, 0.2)",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const dopplerEffect = {
    rest: {
      scale: 1,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* Custom Cursor */}
      {/* <motion.div
        className="cursor hidden md:block fixed top-0 left-0 w-8 h-8 bg-red-600 rounded-full z-1 pointer-events-none mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      /> */}

      <motion.div
        id="home"
        ref={homeRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full min-h-screen overflow-x-hidden flex flex-col justify-center items-center bg-zinc-900 text-white"
      >
        <Navbar />

        <div className="relative w-full max-w-6xl h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 ">
          {/* Background Glow Effect */}
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl" />
          </div>

          {/* Creative */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold tracking-tighter"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            variants={dopplerEffect}
            whileHover="hover"
          >
            Creative
          </motion.h1>

          {/* Web Developer */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold tracking-tighter mt-4"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            variants={dopplerEffect}
            whileHover="hover"
          // initial="rest"
          >
            <span className="inline-block text-red-500 font-[HelloSwashes] mr-2">
              Web
            </span>
            <span className="inline-block">Developer</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl"
          >
            Crafting digital experiences that blend innovation with
            functionality
          </motion.p>
        </div>
      </motion.div>

      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Home;

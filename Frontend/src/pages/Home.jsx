import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Experience from "./Experience";

const Home = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const homeRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: homeRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(
    heroProgress,
    [0, 0.4, 0.9, 1],
    [1, 1, 0.3, 0]
  );
  const heroY = useTransform(heroProgress, [0, 1], [0, -40]);

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
        className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center bg-zinc-900 text-white"
      >
        {/* Background Glow Effect - Full width */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl" />
        </div>

        <Navbar />

        <motion.div
          className="relative w-full max-w-6xl h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 "
          style={{ opacity: heroOpacity, y: heroY }}
        >
          {/* Hero Heading Line 1 */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold tracking-tighter transition-colors duration-300 hover:text-zinc-100"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Your friendly
          </h1>

          {/* Hero Heading Line 2 */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold tracking-tighter mt-4 transition-colors duration-300 hover:text-zinc-100"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <span className="inline-block mr-2">neighborhood</span>
            <span className="inline-block text-red-500 font-[HelloSwashes]">
              Developer
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl">
            Crafting digital experiences that blend innovation with
            functionality
          </p>
        </motion.div>
      </motion.div>

      <About />
      <Project />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;

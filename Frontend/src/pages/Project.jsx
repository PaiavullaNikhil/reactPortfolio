import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import project1 from "../assets/Images/Project1.png";
import project2 from "../assets/Images/Project2.png";
import project3 from "../assets/Images/Project3.png";
import project4 from "../assets/Images/Project4.png";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [0, 15]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // References for sections
  const projectsRef = useRef(null);

  // Toggle function with scroll to additional projects
  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
    
    // If we're showing all projects, scroll down slightly after a small delay
    // to make sure the new projects are visible
    if (!showAllProjects) {
      setTimeout(() => {
        if (projectsRef.current) {
          const rect = projectsRef.current.getBoundingClientRect();
          const scrollTarget = window.scrollY + rect.bottom - window.innerHeight + 200;
          window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Project Management Tool",
      description:
        "A streamlined project management tool for tracking tasks and team collaboration in one place.",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project-ecommerce.example.com",
      githubLink: "https://github.com/Rishben/ProjectManagementTool",
      image: project1,
    },
    {
      id: 2,
      title: "Theme Generator",
      description:
        "A web app that lets users effortlessly create, customize, and export stunning color themes for their projects.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://rishben.github.io/Color-Theme-Generator/",
      githubLink: "https://github.com/Rishben/Color-Theme-Generator",
      image: project2,
    },
    {
      id: 3,
      title: "Tesla Website",
      description:
        "An interactive 3D website showcasing a Tesla model using GLB files for immersive real-time visualization.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://rishben.github.io/TeslaWebsite/",
      githubLink: "https://github.com/Rishben/TeslaWebsite",
      image: project3,
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "A responsive weather app that displays real-time forecasts with dynamic visuals.",
      tags: ["React", "Framer Motion", "Tailwind"],
      liveLink: "https://weatherapp-rishben.netlify.app",
      githubLink: "https://github.com/Rishben/WeatherReact",
      image: project4,
    },
    {
      id: 5,
      title: "Chat Application",
      description:
        "Real-time messaging platform with user authentication and media sharing.",
      tags: ["Socket.io", "Express", "React"],
      liveLink: "https://chat-app.example.com",
      githubLink: "https://github.com/yourusername/chat-application",
      image: "/api/placeholder/400/200",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description:
        "Search engine for recipes with filtering options and user collections.",
      tags: ["JavaScript", "API", "Bootstrap"],
      liveLink: "https://recipe-finder.example.com",
      githubLink: "https://github.com/yourusername/recipe-finder",
      image: "/api/placeholder/400/200",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  // Simplified doppler effect animation
  const dopplerEffect = {
    rest: {
      scale: 1,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
  };

  // Calculate which projects to display based on state
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div id="projects" className="relative w-full bg-zinc-900 text-white overflow-hidden">
      {/* Simplified Background Glow Effect */}
      <div className="absolute w-full max-w-6xl flex justify-center h-full">
          <div
            className="absolute w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl"
            style={{ top:100, right: -300}}
          />
          <div
            className="absolute w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
            style={{ top: 120, right: -500 }}
          />
        </div>

      {/* Simplified code-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,100 Q300,150 500,50 T1000,120"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1"
            opacity="0.2"
          />
          <path
            d="M0,200 Q400,100 700,250 T1000,180"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1"
            opacity="0.15"
          />
          <path
            d="M20,400 Q200,450 500,350 T980,420"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1"
            opacity="0.1"
          />
          <path
            d="M0,600 Q400,500 700,650 T1000,580"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1"
            opacity="0.05"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="py-32 flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:pr-12"
            >
              <motion.h1
                initial="rest"
                whileHover="hover"
                variants={dopplerEffect}
                className="text-6xl md:text-8xl font-bold tracking-tighter text-white"
              >
                Project's by{" "}
                <span className="text-red-500 font-[HelloSwashes]">Me</span>
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 leading-relaxed"
              >
                A showcase of my{" "}
                <span className="text-red-500 font-bold">creative</span> work
                and technical{" "}
                <span className="text-red-500 font-bold">expertise</span>.
              </motion.p>

              <motion.p
                className="text-2xl md:text-3xl text-zinc-400 mb-8 leading-relaxed" 
              >
                Each project represents a unique challenge and solution,
                showcasing my skills in web development.
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative Image or Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0 relative z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ rotate }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl transform"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-blue-600/20 z-10"></div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  background: [
                    "linear-gradient(0deg, rgba(220,38,38,0.2) 0%, rgba(37,99,235,0.1) 100%)",
                    "linear-gradient(180deg, rgba(220,38,38,0.2) 0%, rgba(37,99,235,0.1) 100%)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "reverse"
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32 text-red-500 opacity-80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl text-red-500 font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.1 }}
          >
            Featured Work
          </motion.h2>

          {/* Projects container with simplified animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.08
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  hoveredProject={hoveredProject}
                  setHoveredProject={setHoveredProject}
                />
              </motion.div>
            ))}
          </div>

          {/* Project count indicator */}
          <div className="text-center mt-8 text-zinc-400">
            Showing {displayedProjects.length} of {projects.length} projects
          </div>

          {/* "View More" Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={toggleProjects}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-medium text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 relative z-20 border-2 border-red-500"
            >
              {showAllProjects ? "Show Fewer Projects" : "Show All Projects"}
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Project;
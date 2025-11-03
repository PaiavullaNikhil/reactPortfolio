import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import proj1 from "../assets/Images/Proj1.png";
import project2 from "../assets/Images/Project2.png";
import project3 from "../assets/Images/Project3.png";
import project4 from "../assets/Images/Project4.png";
import project5 from "../assets/Images/Project5.png";
import project6 from "../assets/Images/Project6.png";
import project7 from "../assets/Images/Project7.png";
import ProjectCard from "../components/ProjectCard";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.8], [0, 15]);

  // References for sections
  const projectsRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;   // pinned section (plain <section>)
    const row = projectsRef.current;          // the flex row that moves

    if (!container || !row) return;

    // Helper to compute max horizontal shift
    const getMaxX = () => {
      const max = row.scrollWidth - container.clientWidth;
      return Math.max(0, max);
    };

    // Reset X on refresh to prevent “vanish” from stale transforms
    const tween = gsap.to(row, {
      x: () => -getMaxX(),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + getMaxX(),
        pin: true,
        pinSpacing: true,
        scrub: 1.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefresh: () => gsap.set(row, { x: 0 }),
        // markers: true, // uncomment to debug
      },
    });

    // Refresh after images load (widths change!)
    const imgs = Array.from(row.querySelectorAll("img"));
    const onImgLoad = () => ScrollTrigger.refresh();
    imgs.forEach(img => { if (!img.complete) img.addEventListener("load", onImgLoad); });

    // Refresh on resize
    window.addEventListener("resize", ScrollTrigger.refresh);

    return () => {
      imgs.forEach(img => img.removeEventListener("load", onImgLoad));
      window.removeEventListener("resize", ScrollTrigger.refresh);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  // Sample projects data
  const projects = [
    {
      id: 0,
      title: "PlanGrid: Material Forecasting (Powergrid)",
      description:
      "Smart dashboard for forecasting materials and managing powergrid project operations efficiently.",
      tags: ["React", "Tailwind", "Framer Motion", "Flask", "Python", "MongoDB"],
      liveLink: "https://material-forecast-website.onrender.com/",
      githubLink: "https://github.com/arnavsrao09/Material_Forecast_Website.git",
      image: project7,
    },
    
    {
      id: 1,
      title:
        " ProjX: A MERN Stack Project Management ToolProject Management Tool",
      description:
        "A streamlined project management tool for tracking tasks and team collaboration in one place.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      liveLink: "https://project-manager-g042.onrender.com",
      githubLink: "https://github.com/Rishben/project-manager",
      image: proj1,
    },
    {
      id: 2,
      title: "Coal Mine Carbon Management",
      description:
        "A platform that helps coal mines track, reduce, and neutralize their carbon emissions for a greener future.",
      tags: ["React", "API", "Tailwind"],
      liveLink: "https://carbonfootprint-swsa.onrender.com",
      githubLink: "https://github.com/cpy-ninja05/CarbonFootprint",
      image: project6,
    },

    {
      id: 3,
      title: "ML Heart Stroke Predictor",
      description:
        "Heart disease predictor using KNN model with Flask and React frontend.",
      tags: ["ML", "React", "Flask", "KNN Model"],
      liveLink: "https://ml-heart-disease-predictor-xga7.onrender.com/",
      githubLink: "https://github.com/Rishben/ML-heart_disease_predictor",
      image: project5,
    },
    {
      id: 4,
      title: "Tesla Website",
      description:
        "An interactive 3D website showcasing a Tesla model using GLB files for immersive real-time visualization.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://rishben.github.io/TeslaWebsite/",
      githubLink: "https://github.com/Rishben/TeslaWebsite",
      image: project3,
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "A responsive weather app that displays real-time forecasts with dynamic visuals.",
      tags: ["React", "Framer Motion", "Tailwind"],
      liveLink: "https://weatherapp-rishben.netlify.app",
      githubLink: "https://github.com/Rishben/WeatherReact",
      image: project4,
    }, {
      id: 6,
      title: "Theme Generator",
      description:
        "A web app that lets users effortlessly create, customize, and export stunning color themes for their projects.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://rishben.github.io/Color-Theme-Generator/",
      githubLink: "https://github.com/Rishben/Color-Theme-Generator",
      image: project2,
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
  const displayedProjects = projects;

  return (
    <div
      id="projects"
      className="relative w-full bg-zinc-900 text-white overflow-hidden"
    >
      {/* Simplified Background Glow Effect */}
      <div className="absolute w-full max-w-6xl flex justify-center h-full">
        <div
          className="absolute w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl"
          style={{ top: 100, right: -300 }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
          style={{ top: 120, right: -500 }}
        />
      </div>

      {/* Simplified code-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        {/* Projects Section with fixed header inside */}
        <section ref={containerRef} className="py-20 relative">
          <motion.h2
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-0 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.1 }}
          >
            Project's by <span className="text-red-500 font-[HelloSwashes]">Me</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-zinc-400 mt-4 mb-16 leading-relaxed text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ amount: 0.1 }}
          >
            A showcase of my creative work and technical expertise.
          </motion.p>
          {/* Row that moves horizontally */}
          <div
            ref={projectsRef}
            className="flex flex-row items-stretch gap-8 md:gap-12 lg:gap-50 xl:gap-60 will-change-transform"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card flex-shrink-0 w-[420px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}

            {/* Optional spacer so the LAST card can be fully in-frame on stop */}
            {/* <div className="flex-shrink-0" style={{ width: "calc(100vw - 420px)" }} /> */}
          </div>
        </section>


      </div>
    </div>
  );
};

export default Project;
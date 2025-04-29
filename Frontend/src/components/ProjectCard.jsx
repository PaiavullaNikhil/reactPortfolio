import { motion } from "framer-motion";
import React from "react";

const ProjectCard = ({ project, index, hoveredProject, setHoveredProject, textEnter, textLeave }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        delay: index * 0.1 
      } 
    }
  };

  // Icon for project links
  const LiveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className={`relative bg-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden border ${
        hoveredProject === project.id 
          ? "border-red-500/50 shadow-xl shadow-red-500/10" 
          : "border-slate-700"
      } transition-all duration-300 transform ${
        hoveredProject === project.id ? "scale-105" : "scale-100"
      }`}
    >
      {/* Corner decoration */}
      {hoveredProject === project.id && (
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center z-20 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
          </svg>
        </motion.div>
      )}

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <motion.h3 
            className="text-xl font-bold text-white"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            {project.title}
          </motion.h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5">
        <motion.p 
          className="text-gray-300 mb-4"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          {project.description}
        </motion.p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              className="bg-red-500/10 text-red-300 text-xs px-2 py-1 rounded-md border border-red-500/20"
              whileHover={{ 
                backgroundColor: "rgba(220, 38, 38, 0.2)", 
                scale: 1.05 
              }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3 mt-6">
          <motion.a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <span className="mr-2">Live Demo</span>
            <LiveIcon />
          </motion.a>
          <motion.a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-slate-700 hover:bg-slate-800 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <span className="mr-2">GitHub</span>
            <GitHubIcon />
          </motion.a>
        </div>
      </div>

      {/* Decorative corner - visible only on hover */}
      {hoveredProject === project.id && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-500/20 to-transparent rounded-tl-full"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import pic3 from "../assets/Images/pic1.jpg";
// import resumePDF from "../assets/Resume_PaiavullaNikhil.pdf";
import resumePDF from "../assets/Resume.pdf";

const About = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.8], [0, 15]);
  const [showModal, setShowModal] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const skillsRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node.js",
    "Express",
    "Mongodb",
    "Git",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/paiavulla-nikhil/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/PaiavullaNikhil",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:nikhil.20th65@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
        </svg>
      ),
    },
    {
      name: "Portfolio",
      url: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
        </svg>
      ),
    },
  ];

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  // Close skills dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (skillsRef.current && !skillsRef.current.contains(event.target)) {
        setShowSkills(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const headingEffect = {
    rest: {
      scale: 1,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
    hover: {
      scale: 1.05, // Slightly reduced scale for better consistency with other components
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
  };

  return (
    <>
      <div id="about" className="relative w-full flex justify-center min-h-screen bg-zinc-900 overflow-x-hidden">
        <div className="absolute w-full max-w-6xl flex justify-center h-full">
          <div
            className="absolute w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
            style={{ bottom: 170, right: 20 }}
          />
        </div>

        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row lg:min-h-[80vh] items-center">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:pr-12"
            >
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 hover:scale-105 transition duration-300 ease-in-out"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                variants={headingEffect}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white">About</span>{" "}
                <span className="text-red-500 font-[HelloSwashes]">Me</span>
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 leading-relaxed"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                variants={dopplerEffect}
                whileHover="hover"
              >
                I am Nikhil, a passionate web developer crafting seamless,{" "}
                <span className="text-red-500 font-bold">interactive</span>, and
                visually striking experiences for the web.
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                variants={dopplerEffect}
                whileHover="hover"
              >
                I build clean user interfaces and solid backend systems. My
                experience in web development helps me turn ideas into smooth,
                working projects.
              </motion.p>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-5 mb-10 relative z-20"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300"
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: "rgba(255, 59, 59, 0.2)",
                      boxShadow: "0 0 15px rgba(255, 59, 59, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-6 mt-10 relative z-20">
                {/* Skills Dropdown - Fixed with useState instead of CSS hover */}
                <div className="relative" ref={skillsRef}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSkills(!showSkills)}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-xl text-white rounded-full transition-all duration-300 hover:bg-white/20 shadow-lg"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    Skills & Expertise
                  </motion.button>

                  {showSkills && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 top-full mt-2 bg-white/95 backdrop-blur-sm text-black p-6 rounded-lg shadow-xl z-30 w-80 border border-red-500/20"
                    >
                      <h3 className="mb-4 text-2xl text-red-600 border-b border-red-500/30 pb-2 font-medium">
                        My Skills
                      </h3>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                        className="grid grid-cols-2 gap-4"
                      >
                        {skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-gradient-to-r from-slate-50 to-slate-100 px-4 py-3 rounded-lg text-lg flex items-center hover:shadow-md transition-all duration-200 hover:from-white hover:to-white"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-2"></div>
                            <span className="inline-block font-medium">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Resume Preview Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenModal}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium text-xl transition-all duration-300 shadow-lg"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  Preview Resume
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center mb-12 lg:mb-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ rotate }}
              className="relative w-72 h-96 sm:w-80 sm:h-[28rem] md:w-96 md:h-[32rem] rounded-2xl overflow-hidden shadow-2xl transform hover:-translate-y-3 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent z-10 pointer-events-none"></div>
              <img
                src={pic3}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                alt="Profile"
              />

              {/* Decorative corner icon with gradient */}
              <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center z-20 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.984 0 3.319 1.195 3.319 3.055.001 1.225-.489 1.816-1.449 2.219z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Resume Modal - Added higher z-index */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tighter text-gray-800 text-center sm:text-left">
                My <span className="text-red-500">Resume</span>
              </h3>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <motion.a
                  href={resumePDF}
                  download="Nikhil_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-5 py-2 rounded-full font-medium text-base sm:text-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </motion.a>
                <motion.button
                  onClick={handleCloseModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-zinc-200 text-zinc-700 px-5 py-2 rounded-full font-medium text-base sm:text-lg hover:bg-zinc-300 transition-all duration-300"
                >
                  Close
                </motion.button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="flex-1 overflow-auto p-1 bg-gray-100">
              <iframe
                src={`${resumePDF}#view=FitH`}
                className="w-full h-full rounded border border-gray-200 bg-white"
                title="Resume Preview"
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default About;

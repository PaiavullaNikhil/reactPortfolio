import { motion } from "framer-motion";

const Experience = () => {
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

  // Data-driven experience list so you can easily add more entries
  const experiences = [
    {
      company: "GKVK (World Bank-Funded)",
      location: "Bangalore, India",
      role: "Frontend Developer Intern",
      dates: "Aug 2024 - Present",
      bullets: [
        "Implemented graphical visualization of Crop Analysis and Behavioral Analysis data, improving data interpretation efficiency.",
        "Processed and prepared large datasets, enabling accurate analysis and reporting with approximately 95% data reliability.",
        "Developing a voice-enabled chatbot for farmers to query soil nutrient percentages (N, P, K) and receive actionable guidance.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative w-full bg-zinc-900 py-20">
      <div className="absolute w-full max-w-8xl flex justify-center h-full">
        <div className="absolute w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl" style={{ top: 40, left: 20 }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-0"
        >
          <span className="text-white">Experience</span>{" "}
          <span className="text-red-500 font-[HelloSwashes]">& Roles</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.1 }}
          className="text-xl md:text-2xl text-zinc-400 mt-4 mb-16 leading-relaxed"
        >
          A snapshot of my journey — roles, responsibilities, and the impact I’ve made.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-10 md:pl-12">
                <div className="absolute left-0 top-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)]" />

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4 mb-4">
                    <motion.h3
                      className="text-2xl md:text-3xl font-semibold text-white"
                      variants={dopplerEffect}
                      whileHover="hover"
                    >
                      {exp.company}, {exp.location}
                    </motion.h3>
                    <p className="text-zinc-400 text-base md:text-lg">{exp.role} • {exp.dates}</p>
                  </div>

                  <ul className="list-disc list-inside space-y-3 text-zinc-300 text-lg md:text-xl">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;



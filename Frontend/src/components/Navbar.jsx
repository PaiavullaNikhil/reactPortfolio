import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  return (
    <div>
<nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 z-10 bg-transparent backdrop-blur-sm">

        <div className="flex space-x-4 w-full justify-between px-10 items-center font-[CoffeeHealing] text-2xl">
          <motion.div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white relative pb-1"
            whileHover={{ scale: 1.05 }}
          >
            Home
            <motion.div
              className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scaleX: [0, 1, 0], // Expands from left, then disappears
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            />
          </motion.div>
          <motion.div
            onClick={() => window.scrollTo({ top: 870, behavior: "smooth" })}
            className="text-white relative pb-1"
            whileHover={{ scale: 1.05 }}
          >
            About
            <motion.div
              className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scaleX: [0, 1, 0], // Expands from left, then disappears
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            />
          </motion.div>
          <motion.div
            onClick={() => window.scrollTo({ top: 1800, behavior: "smooth" })}
            className="text-white relative pb-1"
            whileHover={{ scale: 1.05 }}
          >
            Projects
            <motion.div
              className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scaleX: [0, 1, 0], // Expands from left, then disappears
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            />
          </motion.div>

          <motion.div
            onClick={() => window.scrollTo({ top: 3850, behavior: "smooth" })}
            className="text-white relative pb-1"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
            <motion.div
              className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scaleX: [0, 1, 0], // Expands from left, then disappears
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            />
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

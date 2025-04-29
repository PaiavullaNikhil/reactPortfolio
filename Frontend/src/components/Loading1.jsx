import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Loading = ({ onComplete }) => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30); // Adjust speed of loading percentage

    setTimeout(() => {
      clearInterval(interval);
      onComplete(); // Notify App.jsx to switch to Home
    }, 3500); // Adjust to match animation duration

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-zinc-900 w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full  flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.95, delay: 1.5 }}
          className="loading flex justify-center items-center font-[CoffeeHealing] lg:text-9xl sm:text-6xl md:text-7xl text-red-600 italic"
        >
          Nikhil's Portfolio {load}%
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;

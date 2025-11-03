import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact Me", id: "contact" },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 z-20 bg-transparent backdrop-blur-sm">
        {/* Mobile Menu Button */}
        <div className="md:hidden px-4 z-20">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 w-full justify-between px-10 items-center font-[CoffeeHealing] text-2xl">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => scrollToSection(item.id)}   // ✅ use id instead of position
              className="text-white relative pb-1 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
              <motion.div
                className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  scaleX: [0, 1, 0],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              />
            </motion.div>
          ))}
        </div>
      </nav>

      <div className={`md:hidden fixed top-14 left-0 w-full bg-black/5 backdrop-blur-lg z-10 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center py-6 space-y-6 font-[CoffeeHealing] text-2xl">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="text-white relative pb-1 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
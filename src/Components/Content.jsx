import React, { useState, useEffect } from "react";
import "./content.css";
import my_img from "../assets/myImg.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

import { motion } from "framer-motion";

function Content() {
  const roles = [
    "Software Engineer",
    "Web Developer",
    "Machine Learning Engineer",
    "Cloud Engineer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const handleDownload = () => {
    const fileUrl = "../../public/resume_updated.pdf"; 
    const fileName = "Himanshu_Singh_Resume.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="flex">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-row md:flex-row justify-between items-center w-full min-h-screen p-4 md:p-8"
      >
        {/* Image Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
        >
          <motion.img
            src={my_img}
            alt="Profile"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col text-white w-full md:w-1/2 justify-center order-2 md:order-1 mt-8 md:mt-0"
        >
          <span className="text-3xl md:text-4xl lg:text-5xl font-light mb-2">
            Hi, I'm
          </span>

          <motion.span
            className="text-red-400 text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            HIMANSHU SINGH
          </motion.span>

          <div className="h-16 md:h-20 overflow-hidden">
            <motion.span
              key={currentRoleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-white"
            >
              {" "}
              A{" " + roles[currentRoleIndex]}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-15 left-1/2 transform -translate-x-1/2"
              >
                <MdKeyboardDoubleArrowDown className="text-white text-4xl animate-bounce" />
              </motion.div>
            </motion.span>
          </div>
          <div>
            <button type="submit" onClick={handleDownload} className="flex flex-row gap-2 justify-center cursor-pointer items-center border-2 border-red-400 py-2 px-5 hover:rotate-6 duration-300 rounded-3xl backdrop-blur-sm my-4 opacity-100 hover:opacity-70"><IoMdDownload />Resume</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Content;

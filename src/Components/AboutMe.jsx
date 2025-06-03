import { React } from "react";
import "./aboutme.css";
import { motion } from "framer-motion";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-w-full max-w-full min-h-screen flex items-center"
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full h-full p-2 md:p-4">
        <div className="flex-1 flex flex-row flex-wrap-reverse lg:flex-row order-2 lg:order-1 rounded-lg p-6 backdrop-blur-sm">
          {/* Vertical "About Me" title */}
          <div className="flex-1 order-1 lg:order-2 flex items-center justify-center p-2 lg:p-3">
            <h1 className="text-red-400 lg:text-6xl text-4xl md:text-6xl font-bold rotate-0 lg:-rotate-90 hover:rotate-7 duration-300 transform origin-center whitespace-nowrap">
              About Me
            </h1>
          </div>

          {/* Content section */}
          <div className="flex-1 flex flex-col justify-center max-w-full px-4 lg:px-8">
            <div className="text-white text-center pt-2 lg:pt-8">
              <h1 className="text-red-400 text-2xl md:text-3xl font-bold">
                India | Software Engineer
              </h1>
            </div>

            <div className="text-white text-center py-4 px-5 lg:py-6 space-y-3 md:space-y-4">
              <p className="text-[clamp(15px,2vw,18px)] leading-relaxed">
                Hi, I'm Himanshu Singh. A Full Stack Developer with a Master's
                in Computer Applications and a passion for building scalable web
                applications and intelligent systems. I specialize in crafting
                seamless digital experiences, combining clean, responsive UIs
                with powerful and efficient backends.
              </p>
              <p className="text-[clamp(16px,2vw,18px)] leading-relaxed">
                With hands-on experience in end-to-end development, I enjoy
                bringing ideas to life from concept and design to deployment and
                optimization. My skill set extends beyond traditional
                development into machine learning and cloud technologies,
                allowing me to create smarter, more adaptive solutions that
                scale effortlessly.
              </p>
              <p className="text-[clamp(16px,2vw,18px)] leading-relaxed">
                I thrive in collaborative, fast-paced environments where logic
                meets creativity. Whether it's refining system architecture,
                improving user interactions, or exploring new technologies, I'm
                always eager to take on meaningful challenges and push the
                boundaries of what's possible through code. Let's connect and
                innovate!
              </p>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-6 md:gap-8 w-auto pt-4 lg:pt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/__mr.__matrix__/"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="size-7 md:size-8 lg:size-10 text-white hover:rotate-12 duration-300 hover:text-red-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu-singh-15282a222"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <TbBrandLinkedin className="size-7 md:size-8 lg:size-10 text-white hover:rotate-12 duration-300 hover:text-red-400" />
              </a>
              <a
                href="https://github.com/Matrix9339"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FiGithub className="size-7 md:size-8 lg:size-10 text-white hover:rotate-12 duration-300 hover:text-red-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
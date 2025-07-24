import React from 'react'
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiAnaconda } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiGeopandas } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { AiOutlineKubernetes } from "react-icons/ai";
import { SiFlask } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { SiMacos } from "react-icons/si";
import { LiaWindows } from "react-icons/lia";
import { SiZap } from "react-icons/si";
import { SiWireshark } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { AiOutlinePython } from "react-icons/ai";
import { GrOracle } from "react-icons/gr";
import { SiPycharm } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandCss3 } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiAngularjsLine } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiNetbeans } from "react-icons/di";

import "./skill.css"

function Skill() {
  return (
    <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 flex-wrap w-full h-full p-2'>
      {/* Right Column - Skills */}
        <div className="flex-1  flex flex-col justify-evenly items-center py-5 px-10 backdrop-blur-sm rounded-lg my-5">
          {/* Hands-on Experience Title */}
          <div className="text-white text-center p-4 lg:pt-8 px-4">
            <h2 className="text-red-400 hover:rotate-6 duration-300 lg:text-6xl text-4xl font-bold">
              <b>Technical Skills</b>
            </h2>
          </div>

          {/* Skills Sections */}
          <div className="flex justify-center flex-row flex-wrap gap-15 md:gap-25 my-10 p-5 md:px-30 ">
            {/* Development */}
            <div className="flex flex-col items-center text-white cursor-default text-center">
              <p className=" text-2xl sm:text-2xl md:text-2xl mb-4">
                Programming Languages
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[FaJava, AiOutlinePython, TbBrandJavascript].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
                
              </div>
            </div>
            <div className="flex flex-col items-center text-white cursor-default text-center">
              <p className=" text-2xl sm:text-2xl md:text-2xl mb-4">
                Frontend Development
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[AiOutlineHtml5, TbBrandCss3,FaReact, RiAngularjsLine,SiFlask,RiBootstrapLine].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center text-white cursor-default">
              <p className="text-2xl sm:text-2xl md:text-2xl mb-4 text-center">
                Backend Development
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[SiSpring, FaNodeJs, SiExpress].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center text-white cursor-default">
              <p className=" text-2xl sm:text-2xl md:text-2xl mb-4">
                Database
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[BiLogoMongodb, SiMysql, GrOracle].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
              </div>
            </div>
            
            {/* Machine Learning */}
            <div className="flex flex-col items-center text-white cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <p className=" text-2xl sm:text-2xl md:text-2xl mb-4">
                  Machine Learning
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {[ SiAnaconda, SiNumpy, SiGeopandas, SiScikitlearn].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div className="flex flex-col items-center text-white cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <p className=" text-2xl sm:text-2xl md:text-2xl mb-4">
                  Cloud & DevOps
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {[AiOutlineKubernetes, LiaDocker].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
              </div>
            </div>
            {/* Cloud */}
            <div className="flex flex-col items-center text-white cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <p className=" text-2xl sm:text-2xl md:text-2xl mb-4">
                  Cybersecurity
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {[SiZap, SiWireshark,].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center text-white cursor-default">
              <p className=" text-2xl sm:text-2xl md:text-2xl mb-4 text-center">
                Testing & Automation
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[SiSelenium, ].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center text-white cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-2xl sm:text-2xl md:text-2xl mb-4">
                  Tools & IDEs
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {[TbBrandVscode,SiIntellijidea, SiPycharm, SiPostman, FaGitAlt, DiNetbeans, SiEclipseide].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center text-white cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-2xl sm:text-2xl md:text-2xl mb-4">
                  Operating System
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {[SiMacos, LiaWindows, SiKalilinux].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className="size-10 lg:size-10 text-white hover:text-red-400 transition-colors duration-300 hover:rotate-12 hover:scale-110" 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skill

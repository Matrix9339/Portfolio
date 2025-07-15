import React from "react";
import "./project.css";
import { Card } from "flowbite-react";
import autospecs from "../assets/as.png";
import autospecsLogo from "../assets/logo.jpg";
import jbLogo from "../assets/logo.png";
import petacare from "../assets/petacare.png";
import petalogo from "../assets/homewild.png";
import research from "../assets/research.jpg";
import sla from "../assets/sla.png";
import resbg from "../assets/mlaidata-modelling.webp";
import jb from "../assets/jb.png";
import ACR from "../assets/ACR.png";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { MdDoNotDisturb } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";

function ProfExp() {
  let data = [
    
    {
      Title: "Advanced Computer Ranchi",
      Date: "FEB 2025 - JUN 2025",
      Description:"I built a high-performance client website using React.js and Tailwind CSS, focusing on responsive design and optimal user experience. By implementing code-splitting, lazy loading, and React component optimization, I achieved a 30% improvement in page load speeds. Working closely with stakeholders, I delivered scalable and maintainable front-end solutions tailored to the project’s requirements.",
      link: "https://acrranchi.github.io/ACR",
      Img: ACR,
      Designation: "Web Developer",
      Tech: [FaReact, RiTailwindCssLine],
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 flex-wrap w-full h-full p-2">
      <div className="flex-1 flex flex-col order-2 lg:order-1 rounded-lg flex-wrap p-3 my-4 backdrop-blur-sm gap-10">
        <div className="flex-1 order-0 lg:order-1 flex items-center justify-center p-2">
          <h1 className="text-red-400 lg:text-6xl text-4xl font-bold rotate-0  items-center lg:-rotate-90 hover:rotate-7 duration-300 transform origin-center h-fit text-center">
            Work Experience
          </h1>
        </div>

        <div className="flex flex-row flex-wrap gap-10 justify-center">
          {data.map((data) => (
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <Card
                key={data.index}
                className="max-w-sm w-full min-h-[600px] max-h-[800px] md:h-[600px] sm:h-[600px] lg:h-[600px] bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg hover:shadow-red-500/20 transition-all duration-300 flex flex-col overflow-hidden"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={data.Img}
                    alt="Meaningful alt text"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col h-full">
                  <div className="flex flex-col gap-4 items-start">
                    
                    <h5
                      className="text-[20px] font-bold tracking-tight
                    text-white
                    hover:text-red-400"
                    >
                      {data.Title}
                      <h1
                      className="text-[15px] font-bold tracking-tight
                    text-white
                    hover:text-red-400"
                    >
                      {data.Date}
                    </h1>
                    </h5>
                  </div>

                  <p className="font-normal text-gray-700 dark:text-gray-400 flex-grow mt-2 overflow-y-auto">
                    {data.Description}
                  </p>
                  <div className="mt-auto">
                    <h1 className="text-white my-2">Designation: {data.Designation}</h1>
                    <h1 className="text-white my-2">Tech Stack</h1>
                    <div className="px-2 flex flex-row">
                      {data.Tech.map((Icon, index) => (
                        <Icon
                          key={index}
                          className="size-8 lg:size-9 text-white hover:text-red-400 transition-colors duration-300 w-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfExp;

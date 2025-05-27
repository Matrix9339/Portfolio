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
import jb from "../assets/jb.png";
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

function Project() {
  let data = [
    {
      Title: "Intelligent SLA & Realtime Network Monitoring",
      Logo: research,
      Description:
        "AI-powered tracking of network performance and SLA compliance in real-time. Detects breaches early, prevents downtime, and ensures optimal connectivity with live dashboards and automated alerts. Keeps networks efficient and users happy.",
      link: "https://github.com/Matrix9339/JustBooked",
      Img: sla,
      Type:"Research",
      Domain:"Cloud",
      Tech: [MdDoNotDisturb],
    },
    {
      Title: "PetaCare",
      Logo: petalogo,
      Description:
        "A hackathon project aimed at promoting wildlife awareness and conservation. Developed a web application with secure user authentication, animal data management, and awareness content. The app enables users to explore endangered species, report sightings, and access conservation resources.",
      link: "https://github.com/Matrix9339/JustBooked",
      Img: petacare,
      Type:"Project",
      Domain:"Web Development",
      Tech: [AiOutlineHtml5, TbBrandCss3, TbBrandJavascript, FaJava, GrOracle],
    },
    {
      Title: "AutoSpecs",
      Logo: autospecsLogo,
      Description:
        "A sleek, responsive web application built to browse an extensive collection of cars with detailed specifications. Filter by make, model, or price, and book a test drive effortlessly. Ideal for car enthusiasts, dealerships, or as a demo for modern front-end development.",
      link: "https://github.com/Matrix9339/AutoSpecs",
      Img: autospecs,
      Type:"Project",
      Domain:"Web Development",
      Tech: [FaReact, SiSpring, SiMysql],
    },
    {
      Title: "JustBooked",
      Logo: jbLogo,
      Description:
        "A seamless platform for booking cabs, hotels, flights, and trains in one place. Designed for travelers who value convenience, it offers real-time availability, competitive pricing, and instant confirmations—simplifying every step of your journey.",
      link: "https://github.com/Matrix9339/JustBooked",
      Img: jb,
      Type:"Project",
      Domain:"Web Development",
      Tech: [AiOutlineHtml5, TbBrandCss3, TbBrandJavascript, FaJava, GrOracle],
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 flex-wrap w-full h-full p-2">
      <div className="flex-1 flex flex-col order-2 lg:order-1 rounded-lg flex-wrap p-6 my-4 backdrop-blur-sm gap-10">
        <div className="flex-1 order-0 lg:order-1 flex items-center justify-center p-6">
          <h1 className="text-red-400 lg:text-5xl text-6xl font-bold rotate-0 lg:-rotate-90 hover:rotate-7 duration-300 transform origin-center h-fit whitespace-wrap">
            Projects & Research
          </h1>
        </div>

        <div className="flex flex-row flex-wrap gap-10 justify-center">
          {data.map((data) => (
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <Card
                key={data.index}
                className="max-w-sm w-full min-h-[500px] max-h-[600px] md:h-[600px] bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg hover:shadow-red-500/20 transition-all duration-300 flex flex-col overflow-hidden"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={data.Img}
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-row gap-4 items-center">
                    <img
                      src={data.Logo}
                      alt=""
                      className="size-10 rounded-4xl"
                    />
                    <h5 className="text-[20px] font-bold tracking-tight
                    text-white
                    hover:text-red-400">
                      {data.Title}
                    </h5>
                  </div>

                  <p className="font-normal text-gray-700 dark:text-gray-400 flex-grow mt-2 overflow-y-auto">
                    {data.Description}
                  </p>
                  <div className="mt-auto">
                    <h1 className="text-white   my-2">Domain: {data.Domain}</h1>
                    <h1 className="text-white  my-2">Type: {data.Type}</h1>
                    <h1 className="text-white  my-2">Tech Stack</h1>
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

export default Project;

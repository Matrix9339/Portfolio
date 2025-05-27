import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="w-full h-15 ">
      <ul className="text-white text-[18px] flex flex-row gap-5.5 h-full mr-5 items-center justify-end ">
        <li className="hover:text-red-400 cursor-pointer hover:rotate-6 transition-colors duration-300 ease-in-out">
          <Link
            to="content"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-red-400 duration-300 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="hover:text-red-400 hover:rotate-6 cursor-pointer transition-colors duration-300 ease-in-out">
          <Link
            to="aboutMe"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-red-400 duration-300 cursor-pointer"
          >
            About Me
          </Link>
        </li>
        <li className="hover:text-red-400 hover:rotate-6 cursor-pointer transition-colors duration-300 ease-in-out">
          <Link
            to="skill"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-red-400 duration-300 cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li className="hover:text-red-400 hover:rotate-6 cursor-pointer transition-colors duration-300 ease-in-out">
          <Link
            to="education"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-red-400 duration-300 cursor-pointer"
          >
            Education
          </Link>
        </li>
        <li className="hover:text-red-400 hover:rotate-6 cursor-pointer transition-colors duration-300 ease-in-out">
          <Link
            to="project"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-red-400 duration-300 cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li className="hover:text-red-400 hover:rotate-6 cursor-pointer transition-colors duration-300 ease-in-out">
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-red-400 duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import './App.css'
import Navbar from "./Components/Navbar.jsx"
import Content from "./Components/Content.jsx"
import AboutMe from "./Components/AboutMe.jsx"
import Education from "./Components/Education.jsx"
import Skill from "./Components/Skill.jsx"
import Project from "./Components/Project.jsx"
import Contact from "./Components/ContactMe.jsx"


function App() {
  return (
    <>
      <div 
      className="min-h-screen bg-gray-900 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url("https://images6.alphacoders.com/114/1146320.jpg")` }}
    >
        <Navbar/>
        <div id="content"><Content/></div>
        <div id="aboutMe"><AboutMe/></div>
        <div id="skill"><Skill/></div>
        <div id="education"><Education/></div>
        <div id="project"><Project/></div>
        <div id="contact"><Contact/></div>
      </div>
    </>
  )
}

export default App

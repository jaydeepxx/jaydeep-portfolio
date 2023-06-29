import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import FirstAbout from "./components/first_about/FirstAbout";
import Projects from "./components/projects/Projects";
import About from "./components/AboutMe/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return(
   
    <div className="bg-black" id="/">
      <Navbar/>
      <FirstAbout/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;

import About from "./components/About";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Project from "./components/Projects"
function App() {
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
    </>
  );
}

export default App;
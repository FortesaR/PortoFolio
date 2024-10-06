import Navbar from "./components/Navbar";
import Hero
 from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <section id="home"> <Hero /> </section>
      <section id="about"> <AboutMe /> </section>
      <section id="skills"><Skills /></section>
      <section id="project"><Project/></section>
      <section id="contact"><Contact/></section>
      <Footer/>
    </div>
  );
}

export default App;

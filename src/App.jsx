import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Experiences from "./components/Experiences";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      
      <Navbar />
      
      <div className="container mx-auto px-8 pt-24"> {/* Added pt-24 to create space for fixed navbar */}
        <section id="hero">
        <Hero />
        </section>
        
        <section id="about">
        <About />
        </section>

        <section id="technologies">
          <Technologies />
        </section>
        
        <section id="timeline">
          <Timeline />
        </section>
        
        <section id="experiences">
          <Experiences />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="certification">
          <Certification />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
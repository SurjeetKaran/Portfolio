import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Social Sidebar (only visible on large screens) */}
      <SocialSidebar />

      {/* Sections (mobile-safe spacing and stacking) */}
      <div className="flex flex-col gap-0">
        <Hero />
        <AboutMe />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;






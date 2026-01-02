import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import FeaturedProject from "./components/sections/FeaturedProject";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Awards from "./components/sections/Awards";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import ContactModal from "./components/contact/ContactModal";
import AIChat from "./components/AIChat";

export type ProjectTab = "All" | "IoT" | "Electrical" | "Simulation";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans text-slate-800">
      <Navbar
        onNavigate={scrollToSection}
        onContactClick={() => setIsContactModalOpen(true)}
        onMobileToggle={() => setIsMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
        onContactClick={() => setIsContactModalOpen(true)}
      />

      <Hero
        onContactClick={() => setIsContactModalOpen(true)}
        onViewProjects={() => scrollToSection("projects")}
      />

      <Experience />
      <FeaturedProject />
      <Skills />
      <Projects activeTab={activeTab} onTabChange={setActiveTab} />
      <Awards />
      <Certifications />
      <Contact onContactClick={() => setIsContactModalOpen(true)} />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <AIChat />
    </div>
  );
};

export default App;

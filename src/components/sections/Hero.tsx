import React from "react";
import { motion } from "framer-motion";

interface Props {
  onContactClick: () => void;
  onViewProjects: () => void;
}

const Hero: React.FC<Props> = ({ onContactClick, onViewProjects }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-20 md:pb-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
              <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center z-10 gap-8 md:gap-0">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left"
                >
                  <h2 className="text-elec-blue font-semibold tracking-widest mb-2 text-xs md:text-base">ELECTRICAL ENGINEER & INNOVATOR</h2>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                    Hello, I'm <br />
                    <span className="text-elec-blue">Abhishek Malviya</span>
                  </h1>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
                    <strong>"Driving change, one circuit at a time."</strong><br />
                    Bridging the gap between heavy industrial electricals and modern IoT solutions. Optimizing systems with PLC, SCADA, and embedded technology.
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="px-6 md:px-8 py-3 bg-elec-blue text-white font-semibold rounded shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1 text-sm md:text-base"
                    >
                      Hire Me
                    </button>
                    <button 
                      onClick={() => scrollToSection('projects')}
                      className="px-6 md:px-8 py-3 border-2 border-elec-blue text-elec-blue font-semibold rounded hover:bg-blue-50 transition text-sm md:text-base"
                    >
                      View Work
                    </button>
                    <a 
                      href="/resume.pdf" 
                      download="Abhishek_Malviya_Resume.pdf"
                      className="px-6 md:px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded shadow-sm hover:border-elec-blue hover:text-elec-blue transition flex items-center gap-2 group text-sm md:text-base"
                    >
                      <i className="fas fa-download group-hover:animate-bounce"></i> Resume
                    </a>
                  </div>
                  
                  <div className="flex justify-center md:justify-start space-x-6 mt-8 md:mt-10 text-2xl text-slate-500">
                      <a href="https://www.linkedin.com/in/abhishekmalviya-" target="_blank" rel="noreferrer" className="hover:text-elec-blue transition transform hover:scale-110"><i className="fab fa-linkedin"></i></a>
                      <a href="https://github.com/malviyabhishek" target="_blank" rel="noreferrer" className="hover:text-elec-blue transition transform hover:scale-110"><i className="fab fa-github"></i></a>
                  </div>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.8 }}
                   className="md:w-1/2 flex justify-center relative w-full"
                >
                  <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                  
                  {/* Professional Photo Card */}
                  <div className="relative bg-white/30 backdrop-blur-md p-3 md:p-4 rounded-3xl shadow-2xl border border-white/50 group rotate-2 hover:rotate-0 transition-all duration-500 w-full max-w-[280px] md:max-w-sm">
                    <div className="w-full aspect-[3/4] bg-gradient-to-b from-slate-200 to-elec-light rounded-2xl flex items-end justify-center overflow-hidden relative">
                      <img 
                          src="/profile-photo.jpg" 
                          alt="Abhishek Malviya" 
                          className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-elec-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-xl border-l-4 border-elec-blue z-20 animate-bounce-slow max-w-[150px] md:max-w-none">
                      <div className="flex items-center gap-3">
                          <div className="bg-elec-blue/10 p-2 rounded-full text-elec-blue shrink-0">
                              <i className="fas fa-briefcase text-sm md:text-base"></i>
                          </div>
                          <div>
                              <p className="text-xs md:text-sm font-bold text-slate-800">Experience</p>
                              <p className="text-[10px] md:text-xs text-slate-500 leading-tight">Industrial Maintenance & IoT</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
  );
};

export default Hero;

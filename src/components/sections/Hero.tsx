import React from "react";
import { motion } from "framer-motion";

interface Props {
  onContactClick: () => void;
  onViewProjects: () => void;
}

const Hero: React.FC<Props> = ({ onContactClick, onViewProjects }) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-20 md:pb-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center z-10 gap-8 md:gap-0">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left"
        >
          <h2 className="text-elec-blue font-semibold tracking-widest mb-2 text-xs md:text-base">
            ELECTRICAL ENGINEER & INNOVATOR
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Hello, I'm <br />
            <span className="text-elec-blue">Abhishek Malviya</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
            <strong>"Driving change, one circuit at a time."</strong>
            <br />
            Bridging heavy industrial electricals with modern IoT, PLC, and SCADA
            systems to build efficient and intelligent solutions.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            <button
              onClick={onContactClick}
              className="px-6 md:px-8 py-3 bg-elec-blue text-white font-semibold rounded shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1 text-sm md:text-base"
            >
              Hire Me
            </button>

            <button
              onClick={onViewProjects}
              className="px-6 md:px-8 py-3 border-2 border-elec-blue text-elec-blue font-semibold rounded hover:bg-blue-50 transition text-sm md:text-base"
            >
              View Work
            </button>

            <a
              href="/abhishek-malviya-electrical-engineer-resume.pdf"
              download="Abhishek_Malviya_Electrical_Engineer_Resume.pdf"
              className="px-6 md:px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded shadow-sm hover:border-elec-blue hover:text-elec-blue transition flex items-center gap-2 text-sm md:text-base"
            >
              <i className="fas fa-download"></i>
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + RECTANGLE EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center relative w-full"
        >
          <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          <div className="relative bg-white/30 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white/50 rotate-2 hover:rotate-0 transition-all duration-500 w-full max-w-[280px] md:max-w-sm">
            <div className="w-full aspect-[3/4] bg-gradient-to-b from-slate-200 to-elec-light rounded-2xl overflow-hidden">
              <img
                src="/profile-photo.jpg"
                alt="Abhishek Malviya"
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* 🔷 RECTANGULAR EXPERIENCE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[260px]"
            >
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl rounded-lg px-5 py-4">
                
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-slate-900">
                    Professional Experience
                  </p>
                  <i className="fas fa-briefcase text-elec-blue"></i>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Industrial Maintenance • PLC • SCADA • IoT Automation
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1 w-10 bg-elec-blue rounded-full"></span>
                  <span className="text-[10px] text-slate-400">
                    Hands-on Industry Work
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

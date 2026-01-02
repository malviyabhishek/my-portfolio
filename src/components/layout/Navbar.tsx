import React from "react";
import { motion } from "framer-motion";

interface Props {
  onNavigate: (id: string) => void;
  onContactClick: () => void;
  onMobileToggle: () => void;
}

const Navbar: React.FC<Props> = ({ onNavigate, onContactClick, onMobileToggle }) => {
  return (
    <nav className="fixed w-full z-40 bg-white/90 backdrop-blur shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => onNavigate("about")}
          className="text-2xl font-bold text-elec-blue"
        >
          AM.
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {["about", "experience", "featured", "skills", "projects", "awards"].map(
            (id) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.1 }}
                onClick={() => onNavigate(id)}
              >
                {id.toUpperCase()}
              </motion.button>
            )
          )}
          <button
            onClick={onContactClick}
            className="bg-elec-blue text-white px-4 py-2 rounded"
          >
            Contact Me
          </button>
        </div>

        <button onClick={onMobileToggle} className="md:hidden">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

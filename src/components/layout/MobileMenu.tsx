import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  onContactClick: () => void;
}

const MobileMenu: React.FC<Props> = ({
  isOpen,
  onClose,
  onNavigate,
  onContactClick,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8"
        >
          {["about", "experience", "featured", "skills", "projects", "awards"].map(
            (id) => (
              <button
                key={id}
                onClick={() => {
                  onNavigate(id);
                  onClose();
                }}
                className="text-2xl font-bold"
              >
                {id.toUpperCase()}
              </button>
            )
          )}
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="bg-elec-blue text-white px-6 py-3 rounded"
          >
            CONTACT ME
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

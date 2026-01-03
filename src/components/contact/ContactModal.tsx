import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-xl"
            >
              ✕
            </button>

            {/* Header */}
            <h3 className="text-3xl font-heading font-bold text-center text-slate-900 mb-2">
              Let’s Work Together
            </h3>
            <p className="text-center text-slate-600 mb-8">
              Tell me about your idea, project, or opportunity.
            </p>

            {/* FORM */}
            <form className="space-y-7">

              {/* NAME */}
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 text-sm border border-slate-300 rounded-xl outline-none focus:border-elec-blue transition bg-transparent"
                />
                <label
                  className="
                    absolute left-4 -top-4 z-20
                    bg-white px-2 py-0.5 rounded-md
                    text-xs text-slate-600
                    transition-all
                    peer-placeholder-shown:top-4
                    peer-placeholder-shown:text-sm
                    peer-placeholder-shown:text-slate-400
                    peer-placeholder-shown:bg-transparent
                    peer-focus:-top-4
                    peer-focus:text-xs
                    peer-focus:text-elec-blue
                    peer-focus:bg-white
                  "
                >
                  Your Name
                </label>
              </div>

              {/* EMAIL */}
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 text-sm border border-slate-300 rounded-xl outline-none focus:border-elec-blue transition bg-transparent"
                />
                <label
                  className="
                    absolute left-4 -top-4 z-20
                    bg-white px-2 py-0.5 rounded-md
                    text-xs text-slate-600
                    transition-all
                    peer-placeholder-shown:top-4
                    peer-placeholder-shown:text-sm
                    peer-placeholder-shown:text-slate-400
                    peer-placeholder-shown:bg-transparent
                    peer-focus:-top-4
                    peer-focus:text-xs
                    peer-focus:text-elec-blue
                    peer-focus:bg-white
                  "
                >
                  Email Address
                </label>
              </div>

              {/* SUBJECT */}
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 text-sm border border-slate-300 rounded-xl outline-none focus:border-elec-blue transition bg-transparent"
                />
                <label
                  className="
                    absolute left-4 -top-4 z-20
                    bg-white px-2 py-0.5 rounded-md
                    text-xs text-slate-600
                    transition-all
                    peer-placeholder-shown:top-4
                    peer-placeholder-shown:text-sm
                    peer-placeholder-shown:text-slate-400
                    peer-placeholder-shown:bg-transparent
                    peer-focus:-top-4
                    peer-focus:text-xs
                    peer-focus:text-elec-blue
                    peer-focus:bg-white
                  "
                >
                  Subject
                </label>
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <textarea
                  rows={4}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 text-sm border border-slate-300 rounded-xl outline-none focus:border-elec-blue transition resize-none bg-transparent"
                />
                <label
                  className="
                    absolute left-4 -top-4 z-20
                    bg-white px-2 py-0.5 rounded-md
                    text-xs text-slate-600
                    transition-all
                    peer-placeholder-shown:top-4
                    peer-placeholder-shown:text-sm
                    peer-placeholder-shown:text-slate-400
                    peer-placeholder-shown:bg-transparent
                    peer-focus:-top-4
                    peer-focus:text-xs
                    peer-focus:text-elec-blue
                    peer-focus:bg-white
                  "
                >
                  Message
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                className="w-full bg-elec-blue text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Send Message
              </motion.button>
            </form>

            {/* Footer */}
            <p className="text-xs text-center text-slate-400 mt-6">
              I usually reply within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

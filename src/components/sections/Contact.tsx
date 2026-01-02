const Contact = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section id="contact" className="py-20 bg-slate-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
      <p className="text-slate-600 mb-8">
        Currently working at HEG Limited but open to connections.
      </p>

      <button
        onClick={onContactClick}
        className="bg-elec-blue text-white px-8 py-4 rounded-lg shadow-lg"
      >
        Get In Touch
      </button>

      <p className="mt-12 text-xs text-slate-400">
        © 2025 Abhishek Malviya. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;

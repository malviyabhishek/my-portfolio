import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../../constants";

const Certifications = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Certifications & Workshops
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-50 p-6 rounded-lg shadow border"
            >
              <div className={`${c.colorClass} mb-3`}>
                <i className={`${c.icon} text-2xl`} />
              </div>
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-xs text-slate-500">{c.issuer}</p>
              <p className="text-xs text-slate-400">{c.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

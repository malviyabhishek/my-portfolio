import { motion } from "framer-motion";
import { EXPERIENCES } from "../../constants";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Professional Experience
        </h2>

        <div className="relative max-w-3xl mx-auto space-y-12">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-300" />

          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-16">
              <div
                className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow ${
                  exp.isCurrent ? "bg-elec-blue" : "bg-slate-300"
                }`}
              >
                <i
                  className={`${exp.icon} text-xs ${
                    exp.isCurrent ? "text-white" : "text-slate-600"
                  }`}
                />
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow border">
                <span className="text-xs font-bold text-elec-blue uppercase">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                <p className="font-medium text-slate-600">{exp.company}</p>
                <p className="mt-2 text-slate-600">{exp.description}</p>

                {exp.points && (
                  <ul className="mt-3 list-disc list-inside text-sm text-slate-500">
                    {exp.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

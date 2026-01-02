import { motion } from "framer-motion";
import { SKILLS } from "../../constants";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-20 bg-slate-50"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-8">Core Electrical</h3>

          {SKILLS.map((skill, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="bg-elec-blue h-2 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Software & Tools</h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Embedded C",
              "MATLAB",
              "AutoCAD",
              "Arduino IDE",
              "Proteus",
              "Blynk IoT",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white border rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../../constants";
import { ProjectTab } from "../../App";

interface Props {
  activeTab: ProjectTab;
  onTabChange: (tab: ProjectTab) => void;
}

const Projects: React.FC<Props> = ({ activeTab, onTabChange }) => {
  const filtered =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Academic Projects
        </h2>

        <div className="flex justify-center mb-10 gap-2">
          {(["All", "IoT", "Electrical", "Simulation"] as ProjectTab[]).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  activeTab === tab
                    ? "bg-elec-blue text-white"
                    : "bg-slate-100"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="border rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-slate-600 mt-2">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;

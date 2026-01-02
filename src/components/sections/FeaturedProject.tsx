import { motion } from "framer-motion";

const FeaturedProject = () => {
  return (
    <motion.section
      id="featured"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-20 bg-slate-100"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            INTERNSHIP SPOTLIGHT
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-6">
            IoT-Based Smart Home Automation
          </h2>

          <p className="text-slate-600 mb-6">
            Designed a complete smart automation system using ESP32 and Blynk IoT
            platform covering climate, lighting and water management.
          </p>

          <div className="flex flex-wrap gap-2">
            {["ESP32", "Blynk", "DHT22", "Wokwi", "C++"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white border rounded text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold text-center mb-6">
            System Architecture
          </h3>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-slate-100 rounded">DHT22</div>
              <div className="px-4 py-2 bg-slate-100 rounded">LDR</div>
            </div>
            <i className="fas fa-arrow-down text-slate-400" />
            <div className="bg-elec-blue text-white px-6 py-3 rounded-lg">
              ESP32 Controller
            </div>
            <i className="fas fa-arrow-down text-slate-400" />
            <div className="flex gap-4">
              <div className="bg-green-100 px-4 py-2 rounded">Actuators</div>
              <div className="bg-indigo-100 px-4 py-2 rounded">
                Blynk Cloud
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProject;

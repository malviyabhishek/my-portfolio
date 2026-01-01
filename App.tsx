import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES, PROJECTS, SKILLS, AWARDS, CERTIFICATIONS } from '../constants';
import AIChat from '../components/AIChat';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'IoT' | 'Electrical' | 'Simulation'>('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    purpose: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Load LinkedIn Script dynamically to ensure badge renders
  useEffect(() => {
    const loadLinkedInScript = () => {
        const scriptUrl = "https://platform.linkedin.com/badges/js/profile.js";
        
        // Remove any existing script to force a re-scan of the DOM
        const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        script.defer = true;
        script.type = "text/javascript";
        document.body.appendChild(script);
    };

    // Small timeout ensures the DOM element is fully rendered before the script runs
    const timer = setTimeout(() => {
        loadLinkedInScript();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
        const response = await fetch("https://formsubmit.co/ajax/abhi15.malviya@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: contactForm.name,
                email: contactForm.email,
                message: contactForm.purpose,
                _subject: `Portfolio Contact from ${contactForm.name}`,
                _template: "table",
                _captcha: "false"
            })
        });

        if (response.ok) {
            setSubmitStatus('success');
            setContactForm({ name: '', email: '', purpose: '' });
            setTimeout(() => {
                setIsContactModalOpen(false);
                setSubmitStatus('idle');
            }, 3000);
        } else {
            console.error("Form submission failed");
            setSubmitStatus('error');
        }
    } catch (error) {
        console.error("Network error", error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans text-slate-800">
      
      {/* Contact Modal (Popup Card) */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
            >
              <button 
                onClick={() => {
                    setIsContactModalOpen(false);
                    setSubmitStatus('idle');
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-elec-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 text-elec-blue">
                    <i className="fas fa-paper-plane text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-800">Let's Connect</h3>
                  <p className="text-sm text-slate-500 mt-1">Send me a message directly.</p>
                </div>

                {submitStatus === 'success' ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-check text-green-600 text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-800">Message Sent!</h4>
                        <p className="text-slate-500 mt-2">Thanks for reaching out. I'll reply soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                        <input 
                          required
                          type="text" 
                          name="name"
                          value={contactForm.name}
                          onChange={e => setContactForm({...contactForm, name: e.target.value})}
                          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-elec-blue focus:border-elec-blue transition text-white placeholder-slate-400 text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Email</label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={contactForm.email}
                          onChange={e => setContactForm({...contactForm, email: e.target.value})}
                          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-elec-blue focus:border-elec-blue transition text-white placeholder-slate-400 text-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Purpose / Message</label>
                        <textarea 
                          required
                          name="message"
                          value={contactForm.purpose}
                          onChange={e => setContactForm({...contactForm, purpose: e.target.value})}
                          rows={4}
                          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-elec-blue focus:border-elec-blue transition text-white placeholder-slate-400 text-sm resize-none"
                          placeholder="How can I help you?"
                        ></textarea>
                      </div>

                      {submitStatus === 'error' && (
                          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                            <p className="text-red-600 text-xs mb-2 font-bold">Automatic submission failed.</p>
                            <a 
                                href={`mailto:abhi15.malviya@gmail.com?subject=Portfolio Contact from ${contactForm.name}&body=${contactForm.purpose}`}
                                className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded text-xs font-bold hover:bg-red-200 transition"
                            >
                                <i className="fas fa-envelope mr-1"></i> Click to Send via Email App
                            </a>
                          </div>
                      )}

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-elec-blue text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-0.5 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                            <>
                                <i className="fas fa-spinner fa-spin"></i> Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                      </button>
                    </form>
                )}
                
                {/* Always visible fallback */}
                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                     <a href="mailto:abhi15.malviya@gmail.com" className="text-slate-400 hover:text-elec-blue text-xs transition flex items-center justify-center gap-1">
                        <i className="fas fa-envelope"></i> or email abhi15.malviya@gmail.com
                     </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <button onClick={() => scrollToSection('about')} className="text-xl md:text-2xl font-heading font-bold text-elec-blue tracking-wider z-50 relative">AM.</button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            {['About', 'Experience', 'Featured', 'Skills', 'Projects', 'Awards'].map((item) => (
              <motion.button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())} 
                whileHover={{ scale: 1.1, color: '#0056b3' }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="transition-colors cursor-pointer uppercase"
              >
                {item}
              </motion.button>
            ))}
            <motion.button 
              onClick={() => setIsContactModalOpen(true)} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-elec-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors uppercase shadow-md hover:shadow-lg"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-slate-800 focus:outline-none p-2"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-all duration-300`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '100vh', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed inset-0 top-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
            >
              {['About', 'Experience', 'Featured', 'Skills', 'Projects', 'Awards'].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-heading font-bold text-slate-700 hover:text-elec-blue tracking-wide"
                >
                  {item.toUpperCase()}
                </motion.button>
              ))}
              <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="text-xl font-bold bg-elec-blue text-white px-8 py-3 rounded-full shadow-lg"
              >
                CONTACT ME
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-20 md:pb-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center z-10 gap-8 md:gap-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left"
          >
            <h2 className="text-elec-blue font-semibold tracking-widest mb-2 text-xs md:text-base">ELECTRICAL ENGINEER & INNOVATOR</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
              Hello, I'm <br />
              <span className="text-elec-blue">Abhishek Malviya</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
              <strong>"Driving change, one circuit at a time."</strong><br />
              Bridging the gap between heavy industrial electricals and modern IoT solutions. Optimizing systems with PLC, SCADA, and embedded technology.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 md:px-8 py-3 bg-elec-blue text-white font-semibold rounded shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1 text-sm md:text-base"
              >
                Hire Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 md:px-8 py-3 border-2 border-elec-blue text-elec-blue font-semibold rounded hover:bg-blue-50 transition text-sm md:text-base"
              >
                View Work
              </button>
              <a 
                href="/resume.pdf" 
                download="Abhishek_Malviya_Resume.pdf"
                className="px-6 md:px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded shadow-sm hover:border-elec-blue hover:text-elec-blue transition flex items-center gap-2 group text-sm md:text-base"
              >
                <i className="fas fa-download group-hover:animate-bounce"></i> Resume
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-6 mt-8 md:mt-10 text-2xl text-slate-500">
                <a href="https://www.linkedin.com/in/abhishekmalviya-" target="_blank" rel="noreferrer" className="hover:text-elec-blue transition transform hover:scale-110"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/malviyabhishek" target="_blank" rel="noreferrer" className="hover:text-elec-blue transition transform hover:scale-110"><i className="fab fa-github"></i></a>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="md:w-1/2 flex justify-center relative w-full"
          >
            <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Professional Photo Card */}
            <div className="relative bg-white/30 backdrop-blur-md p-3 md:p-4 rounded-3xl shadow-2xl border border-white/50 group rotate-2 hover:rotate-0 transition-all duration-500 w-full max-w-[280px] md:max-w-sm">
              <div className="w-full aspect-[3/4] bg-gradient-to-b from-slate-200 to-elec-light rounded-2xl flex items-end justify-center overflow-hidden relative">
                <img 
                    src="/profile-photo.jpg" 
                    alt="Abhishek Malviya" 
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elec-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-xl border-l-4 border-elec-blue z-20 animate-bounce-slow max-w-[150px] md:max-w-none">
                <div className="flex items-center gap-3">
                    <div className="bg-elec-blue/10 p-2 rounded-full text-elec-blue shrink-0">
                        <i className="fas fa-briefcase text-sm md:text-base"></i>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm font-bold text-slate-800">Experience</p>
                        <p className="text-[10px] md:text-xs text-slate-500 leading-tight">Industrial Maintenance & IoT</p>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-12 md:py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10 md:mb-16">Professional Experience</h2>
          
          <div className="relative max-w-3xl mx-auto space-y-8 md:space-y-12">
            {/* Timeline vertical line */}
            <div className="absolute left-[13px] md:left-[29px] top-0 h-full w-[2px] bg-slate-300 z-0"></div>
            
            {EXPERIENCES.map((exp) => (
              <motion.div 
                key={exp.id}
                whileHover={{ x: 5 }}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline Node */}
                <div className={`absolute left-0 md:left-4 top-1 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 ${exp.isCurrent ? 'bg-elec-blue' : 'bg-slate-200'}`}>
                  <i className={`${exp.icon} text-[10px] md:text-xs ${exp.isCurrent ? 'text-white' : 'text-slate-500'}`}></i>
                </div>
                <div className="bg-slate-50 p-5 md:p-6 rounded-lg shadow-sm border border-slate-100 group-hover:shadow-md group-hover:border-elec-blue/30 transition-all">
                  <span className="text-[10px] md:text-xs font-bold text-elec-blue tracking-wide uppercase">{exp.period}</span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mt-1">{exp.role}</h3>
                  <p className="text-sm md:text-md text-slate-600 font-medium">{exp.company}</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                  {exp.points && (
                    <ul className="mt-3 space-y-1 text-sm text-slate-500 list-disc list-inside">
                        {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Project Section */}
      <motion.section 
        id="featured"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold mb-4 tracking-wide">INTERNSHIP SPOTLIGHT</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">IoT-Based Smart Home Automation</h2>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                Designed and simulated a complete IoT solution for smart home management using the <strong>ESP32 Microcontroller</strong> and <strong>Blynk IoT Platform</strong>. The system automates critical home functions including climate control, lighting, and water management.
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold text-slate-800 mb-3 text-sm md:text-base">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['ESP32', 'Blynk IoT', 'DHT22', 'Wokwi', 'C++'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-700">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                 <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                        <i className="fas fa-temperature-high text-blue-600 text-sm"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-800 text-sm md:text-base">Intelligent Climate Control</h5>
                        <p className="text-xs md:text-sm text-slate-600 mt-1">Logic-based Heater/AC triggering based on DHT22 sensor readings.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-4">
                        <i className="fas fa-water text-green-600 text-sm"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-800 text-sm md:text-base">Smart Water Management</h5>
                        <p className="text-xs md:text-sm text-slate-600 mt-1">Serial Tank Interfacing with auto-inlet value control based on volume.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-1 mr-4">
                        <i className="fas fa-lightbulb text-yellow-600 text-sm"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-800 text-sm md:text-base">Adaptive Lighting</h5>
                        <p className="text-xs md:text-sm text-slate-600 mt-1">Garden lights controlled by LDR sensor intensity. Brighter sunlight = Lower intensity, preserving energy.</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-blue-600 w-24 h-24 rounded-bl-full -mr-10 -mt-10 opacity-10"></div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6 text-center">System Architecture</h3>
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex gap-2 md:gap-4">
                        <div className="px-3 md:px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg text-[10px] md:text-xs font-bold w-20 md:w-24 text-center">DHT22</div>
                        <div className="px-3 md:px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg text-[10px] md:text-xs font-bold w-20 md:w-24 text-center">LDR</div>
                    </div>
                    <i className="fas fa-arrow-down text-slate-400"></i>
                    <div className="w-full max-w-xs bg-blue-600 text-white py-3 rounded-lg text-center shadow-lg font-bold text-sm md:text-base">
                        <i className="fas fa-microchip mr-2"></i> ESP32 Controller
                    </div>
                    <i className="fas fa-arrow-down text-slate-400"></i>
                    <div className="flex gap-2 md:gap-4 w-full justify-center">
                        <div className="w-1/2 bg-green-50 border border-green-200 p-3 rounded-lg text-center">
                            <span className="text-[10px] md:text-xs font-bold text-green-800">ACTUATORS</span>
                        </div>
                        <div className="w-1/2 bg-indigo-50 border border-indigo-200 p-3 rounded-lg text-center">
                            <span className="text-[10px] md:text-xs font-bold text-indigo-800">BLYNK CLOUD</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-12 md:py-20 bg-slate-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-6 md:mb-8 flex items-center">
                <i className="fas fa-plug text-elec-blue mr-3"></i> Core Electrical
              </h3>
              <div className="space-y-5 md:space-y-6">
                {SKILLS.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs md:text-sm font-medium text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeOut" }}
                        className="bg-elec-blue h-2.5 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-6 md:mb-8 flex items-center">
                <i className="fas fa-laptop-code text-indigo-600 mr-3"></i> Software & Tools
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Embedded C', 'MATLAB', 'AutoCAD', 'Arduino IDE', 'MPLAB X IDE', 'Proteus', 'ROS', 'PICSimLab', 'Blynk IoT'].map((tool, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-sm cursor-default ${tool === 'Blynk IoT' ? 'bg-blue-100 border border-blue-200 text-blue-700' : 'bg-white border border-slate-200 text-slate-600'}`}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
              
              <div className="mt-8 bg-white p-5 md:p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-bold text-md md:text-lg text-slate-800">Education</h4>
                <p className="text-slate-600 font-semibold mt-1 text-sm md:text-base">B.Tech Electrical Engineering</p>
                <p className="text-slate-500 text-xs md:text-sm">Samrat Ashok Technological Institute (2021-2025)</p>
                <div className="mt-2 inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded">CGPA: 7.2</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-12 md:py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">Academic Projects</h2>
          
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-inner">
                {(['All', 'IoT', 'Electrical', 'Simulation'] as const).map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors duration-200 z-10 ${
                    activeTab === tab ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                    {activeTab === tab && (
                    <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-elec-blue rounded-full shadow-md -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    )}
                    {tab}
                </button>
                ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode='wait'>
            {filteredProjects.map((project) => (
               <motion.div 
                 key={project.id}
                 layout
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.3 }}
                 className="group relative overflow-hidden rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition flex flex-col"
               >
                 <div className="bg-gradient-to-r from-blue-600 to-ind-gray h-2 w-full"></div>
                 <div className="p-6 md:p-8 flex-1 flex flex-col">
                   <div className="flex justify-between items-start mb-2">
                       <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-elec-blue transition">{project.title}</h3>
                       <i className={`${project.icon} text-slate-300 group-hover:text-elec-blue transition text-lg md:text-xl`}></i>
                   </div>
                   <p className="text-slate-600 text-sm mb-4 flex-1">{project.description}</p>
                   
                   <div className="flex flex-wrap gap-2 mb-4">
                     {project.tags.map(tag => (
                       <span key={tag} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">{tag}</span>
                     ))}
                   </div>

                   {/* Project Links */}
                   {project.links && project.links.length > 0 && (
                       <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                           {project.links.map((link, i) => (
                               <a 
                                   key={i} 
                                   href={link.url} 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className={`text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition shadow-sm ${
                                       link.type === 'github' ? 'bg-slate-800 text-white border-slate-800 hover:bg-slate-700' :
                                       link.type === 'youtube' ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' :
                                       'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
                                   }`}
                               >
                                   <i className={`fab ${link.type === 'github' ? 'fa-github' : link.type === 'youtube' ? 'fa-youtube' : 'fa-external-link-alt'}`}></i>
                                   {link.label || (link.type === 'github' ? 'Code' : link.type === 'youtube' ? 'Watch' : 'Visit')}
                               </a>
                           ))}
                       </div>
                   )}
                 </div>
               </motion.div>
            ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Awards */}
      <motion.section 
        id="awards"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-12 md:py-16 bg-slate-50 border-y border-slate-200"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10 md:mb-12 text-slate-800">Honors & Awards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
             {AWARDS.map((award, i) => (
                <div key={i} className={`bg-white p-6 rounded-xl shadow-md border-l-4 border-${award.colorClass}-500 relative overflow-hidden group hover:-translate-y-1 transition duration-300`}>
                    <div className={`absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-${award.colorClass}-100 rounded-full opacity-50`}></div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800">{award.title}</h3>
                    <p className={`text-${award.colorClass}-600 font-bold text-xs md:text-sm mb-2`}>{award.rank}</p>
                    <p className="text-slate-600 text-sm">{award.description}</p>
                </div>
             ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 md:mb-10 text-center text-slate-800">Certifications & Workshops</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {CERTIFICATIONS.map((cert, i) => (
                    <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.05 }}
                        className="bg-slate-50 p-5 md:p-6 rounded-lg shadow-sm border border-slate-100"
                    >
                        <div className={`${cert.colorClass} mb-3`}><i className={`${cert.icon} text-xl md:text-2xl`}></i></div>
                        <h3 className="font-bold text-sm md:text-md text-slate-800">{cert.title}</h3>
                        <p className="text-slate-500 text-xs">{cert.issuer}</p>
                        <p className="text-slate-400 text-xs mt-1">{cert.date}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 mb-6">Let's Connect</h2>
          <p className="text-slate-600 mb-8 md:mb-10 max-w-xl mx-auto text-sm md:text-base">Currently working at HEG Limited but open to connecting with industry professionals.</p>
          
          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-elec-blue text-white rounded-lg hover:bg-blue-700 transition shadow-lg text-base font-bold"
            >
              <i className="fas fa-paper-plane"></i> Get In Touch
            </button>

            {/* LinkedIn Badge */}
            <div className="mt-4 flex justify-center w-full overflow-visible">
                <div 
                    className="badge-base LI-profile-badge" 
                    data-locale="en_US" 
                    data-size="large" 
                    data-theme="light" 
                    data-type="VERTICAL" 
                    data-vanity="abhishekmalviya-" 
                    data-version="v1"
                >
                    <a 
                      className="badge-base__link LI-simple-link" 
                      href="https://in.linkedin.com/in/abhishekmalviya-?trk=profile-badge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abhishek Malviya
                    </a>
                </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-slate-400 text-xs md:text-sm mt-4">&copy; 2025 Abhishek Malviya. All rights reserved.</p>
          </div>
        </div>
      </section>

      {/* AI Chat Bot */}
      <AIChat />
    </div>
  );
}

export default App;

import ProjectsPage from "./Projects";
import Skills from "./Skills";
import Info from "./Info";
import Contact from "./Contact";
import RadialMenu from "./SelectionWheel";
import HeroSection from './herosection';

import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [selectedSection, setSelectedSection] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  useEffect(() => {
    if (selectedSection) {
      const timeout = setTimeout(() => setActiveSection(selectedSection), 300);
      return () => clearTimeout(timeout);
    }
  }, [selectedSection]);

  const closeOverlay = () => {
    setActiveSection(null);
    setSelectedSection(null);
  };

  return (
    <div className="min-h-screen custom-gradient flex flex-col items-center justify-start px-4 relative overflow-hidden">
      <HeroSection/>

  

      {/* Radial Menu */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex items-center justify-center mt-16 mb-20 z-10"
      >
        <RadialMenu onSelect={(pos) => setSelectedSection(pos)} />
      </motion.div>

      {/* CTA Section */}
      <section className="w-full bg-[#ffffff0a] border-t border-black py-12 mt-10 text-center px-4 z-10">
        <h3 className="textcolor text-2xl font-semibold mb-2">Let’s Build Something Great</h3>
        <p className="secondcolor max-w-xl mx-auto mb-4">I'm currently in my final year of BTech, and I'm open to collaboration, freelance work, or full-time opportunities. Let's build something awesome together.

        </p>
      </section>

      {/* Divider */}
      <div className="w-3/4 h-0.5 bg-black opacity-30 my-10 rounded-full"></div>

      {/* Footer */}
      <footer className="w-full text-center text-gray-400 text-sm pb-6 mt-6 z-10">
        &copy; {new Date().getFullYear()} Joyal James. All rights reserved.
      </footer>

      {/* Overlay Panel */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            key={activeSection}
            className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-md flex items-start justify-center pt-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4 }}
          >
            <div className=" p-4 sm:p-8 mt-10 mx-auto min-w-screen">
              {activeSection === "projects" && <ProjectsPage com ={true} onClose={closeOverlay} />}
              {activeSection === "skills" && <Skills com ={true} onClose={closeOverlay} />}
              {activeSection === "about" && <Info com ={true} onClose={closeOverlay} />}
              {activeSection === "contact" && <Contact com ={true} onClose={closeOverlay} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

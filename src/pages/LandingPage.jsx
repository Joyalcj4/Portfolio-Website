import ProjectsPage from "./Projects";
import HeroSection from './herosection';
import Skills from './Skills';
import Contact from './Contact';
import Info from './Info';
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function LandingPage() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  const projectsInView = useInView(projectsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  const projectsControls = useAnimation();
  const contactControls = useAnimation();

  useEffect(() => {
    if (projectsInView) {
      projectsControls.start({ opacity: 1, y: 0 });
    }
  }, [projectsControls, projectsInView]);

  useEffect(() => {
    if (contactInView) {
      contactControls.start({ opacity: 1, y: 0 });
    }
  }, [contactControls, contactInView]);

  return (
    <div className="min-h-screen custom-gradient flex flex-col items-center justify-start px-4 relative overflow-hidden">
      <HeroSection/>

      {/* Projects Section */}
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 60 }}
        animate={projectsControls}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full mt-16 mb-20 z-10"
      >
        <ProjectsPage com={true} />
      </motion.div>

      {/* Skills Section */}
      <div className="w-full mb-20 z-10">
        <Skills com={true} />
      </div>

      {/* About Section */}
      <div className="w-full mb-20 z-10">
        <Info com={true} />
      </div>

      {/* Contact Section */}
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 60 }}
        animate={contactControls}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full mb-20 z-10"
      >
        <Contact com={true} />
      </motion.div>

      {/* CTA Section */}
      <section className="w-full bg-[#ffffff0a] border-t border-black py-12 mt-10 text-center px-4 z-10">
        <h3 className="textcolor text-2xl font-semibold mb-2">Let's Build Something Great</h3>
        <p className="secondcolor max-w-xl mx-auto mb-4">I'm currently in my final year of BTech, and I'm open to collaboration, freelance work, or full-time opportunities. Let's build something awesome together.</p>
      </section>

      {/* Divider */}
      <div className="w-3/4 h-0.5 bg-black opacity-30 my-10 rounded-full"></div>

      {/* Footer */}
      <footer className="w-full text-center text-gray-400 text-sm pb-6 mt-6 z-10">
        &copy; {new Date().getFullYear()} Joyal James. All rights reserved.
      </footer>
    </div>
  );
}

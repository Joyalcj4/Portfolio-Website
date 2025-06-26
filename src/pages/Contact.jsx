import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ScrollReveal from '../components/ScrollReveal';

export default function Contact({ com = false, onClose }) {
  const navigate = useNavigate();
  return (
    <div className="py-16 text-black relative custom-gradient">
      {!com && <ScrollReveal
        direction="left"
        distance={30}
        duration={0.4}
      >
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 right-6 text-black hover:text-red-500 transition text-2xl z-50"
          aria-label="Close"
        >
          <FaTimes />
        </button>
      </ScrollReveal>}

      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal
          direction="up"
          distance={30}
          duration={0.5}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-12">
            Get in <span className="outline-text font-extrabold">Touch</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          distance={40}
          duration={0.6}
          delay={0.1}
        >
          <p className="text-lg text-slate-600 text-center mb-12">
            Let's connect! Here's how you can reach me.
          </p>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          distance={40}
          duration={0.6}
          delay={0.2}
        >
          <div className="bg-[#ffffff0a] backdrop-blur-sm p-8 rounded-xl border border-black/10 shadow-lg hover:shadow-2xl hover:scale-103 transition-all duration-300 group">
            <ContactItem icon={<FaEnvelope />} label="Email" value="joyalchandrankunnel@gmail.com" />
            <ContactItem icon={<FaPhone />} label="Phone" value="+91 7025746809" />
            <ContactItem icon={<FaMapMarkerAlt />} label="Location" value="Kerala, India" />
            <ContactItem
              icon={<FaLinkedin />}
              label="LinkedIn"
              value="linkedin.com/in/joyalcj"
              link="https://www.linkedin.com/in/joyalcj"
            />
            <ContactItem
              icon={<FaGithub />}
              label="GitHub"
              value="github.com/joyalcj"
              link="https://github.com/Joyalcj4"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, link }) {
  return (
    <div className="flex items-center space-x-4 text-left py-4 border-b border-black/10 last:border-0 group/item">
      <div className="text-slate-600 text-xl group-hover/item:text-black transition-colors">{icon}</div>
      <div>
        <p className="text-sm text-slate-800 font-medium">{label}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-slate-600 hover:text-black transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-slate-600">{value}</p>
        )}
      </div>
    </div>
  );
}

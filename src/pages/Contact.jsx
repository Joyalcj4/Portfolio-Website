import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Contact({ com = false, onClose }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 py-16 text-black">
      <button
        onClick={() => com ? onClose() : navigate('/')}
        className="absolute top-6 right-6  hover:text-red-500 transition text-2xl"
        aria-label="Close"
      >
        <FaTimes />
      </button>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <p className="text-lg text-slate-900 mb-12">
          Let's connect! Here's how you can reach me.
        </p>

        <div className="bg-gray-50 p-8 rounded-xl border border-black shadow-lg max-w-2xl mx-auto space-y-6">
          <ContactItem icon={<FaEnvelope />} label="Email" value="joyalchandrankunnel@gmail.com" />
          <ContactItem icon={<FaPhone />} label="Phone" value="+91 7025746809" />
          <ContactItem icon={<FaMapMarkerAlt />} label="Location" value="Kerala, India" />
          <ContactItem
            icon={<FaLinkedin />}
            label="LinkedIn"
            value="linkedin.com/in/yourusername"
            link="https://www.linkedin.com/in/joyalcj"
          />
          <ContactItem
            icon={<FaGithub />}
            label="GitHub"
            value="github.com/yourusername"
            link="https://github.com/Joyalcj4"
          />
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, link }) {
  return (
    <div className="flex items-center space-x-4 text-left">
      <div className="text-gray-800 text-base sm:text-xl">{icon}</div>
      <div>
        <p className="text-xs sm:text-sm text-slate-800">{label}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-lg hover:text-slate-500 transition"
          >
            {value}
          </a>
        ) : (
          <p className="text-base sm:text-lg">{value}</p>
        )}
      </div>
    </div>

  );
}

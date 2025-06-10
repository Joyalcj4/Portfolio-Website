import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt,
} from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiMongoose, SiApollographql } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import ScrollReveal from '../components/ScrollReveal';

export default function Skills({com=false, onClose}) {
    const navigate = useNavigate();
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300 text-3xl" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300 text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
        { name: "Mongoose", icon: <SiMongoose className="text-red-400 text-3xl" /> },
      ],
    },
    {
      category: "Other",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
        { name: "REST APIs", icon: <SiApollographql className="text-pink-400 text-3xl" /> },
        { name: "VS Code", icon: <DiVisualstudio className="text-blue-400 text-3xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400 text-3xl" /> },
      ],
    },
  ];

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

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal
          direction="up"
          distance={50}
          duration={0.8}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-12">
            My <span className="outline-text font-extrabold">Skills</span>
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {skills.map((group, i) => (
            <ScrollReveal
              key={i}
              direction="up"
              distance={60}
              duration={0.8}
              delay={i * 0.2}
            >
              <div className="bg-[#ffffff0a] backdrop-blur-sm p-8 rounded-xl border border-black/10 shadow-lg hover:shadow-2xl hover:scale-103 transition-all duration-300 group">
                <h2 className="text-2xl font-bold mb-6 text-slate-600 group-hover:text-black transition-colors">
                  {group.category}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {group.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="mb-3 p-3 bg-black/5 rounded-full">{skill.icon}</div>
                      <p className="text-sm text-slate-700">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

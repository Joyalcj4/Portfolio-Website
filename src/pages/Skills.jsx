import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt,
} from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiMongoose, SiApollographql } from "react-icons/si";
import{DiVisualstudio} from "react-icons/di"
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen px-6 py-16 text-black">
      <button
        onClick={() => com ? onClose() : navigate('/')}
        className="absolute top-6 right-6 text-black hover:text-red-500 transition text-2xl"
        aria-label="Close"
      >
        <FaTimes />
      </button>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl border border-black shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {group.category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {group.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center hover:scale-105 transition"
                  >
                    <div className="mb-2">{skill.icon}</div>
                    <p className=" text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

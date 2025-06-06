import { FaTimes } from "react-icons/fa";
import { FaPaintBrush, FaGamepad, FaGraduationCap, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Info({com=false,onClose}) {
    const navigate = useNavigate();
  const steps = [
  {
    title: "Creative Beginnings",
    icon: <FaPaintBrush className="text-white text-xl" />,
    color: "bg-pink-500",
    description: "Started as a 3D animator, taking on freelance gigs and building a creative foundation.",
  },
  {
    title: "Game Dev Spark",
    icon: <FaGamepad className="text-white text-xl" />,
    color: "bg-purple-500",
    description: "Explored game development and discovered a deep love for coding through interactive design.",
  },
  {
    title: "Academic Growth",
    icon: <FaGraduationCap className="text-white text-xl" />,
    color: "bg-yellow-400",
    description: "Currently pursuing a B.Tech in Computer Science, continuously strengthening my technical skills.",
  },
  {
    title: "Web Dev Focus",
    icon: <FaGlobe className="text-white text-xl" />,
    color: "bg-blue-500",
    description: "Found my calling in web development — crafting modern, scalable, user-focused experiences.",
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
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>

        <div className="bg-gray-50 p-8 rounded-xl border border-black shadow-lg mb-16">
          <p className="text-lg text-black leading-relaxed mb-6">
            I'm <span className="text-purple-300 font-semibold">Joyal</span>, a full-stack web developer passionate about building smooth, engaging user experiences using the MERN stack. With a focus on clean code and problem solving, I enjoy taking ideas from concept to creation.
          </p>
          <p className="text-lg text-black leading-relaxed">
            Outside of coding, I’m a big football fan (Força Barça!) and love exploring new technologies. My journey as a developer can be seen below:
          </p>
        </div>

        {/* Roadmap Section */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-black z-0"></div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md ${step.color}`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mt-9 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-900">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { FaTimes } from "react-icons/fa";
import { FaPaintBrush, FaGamepad, FaGraduationCap, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ScrollReveal from '../components/ScrollReveal';

export default function Info({com=false, onClose}) {
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

            <div className="max-w-5xl mx-auto px-6">
                <ScrollReveal
                    direction="up"
                    distance={30}
                    duration={0.5}
                >
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-12">
                        About <span className="outline-text font-extrabold">Me</span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal
                    direction="up"
                    distance={40}
                    duration={0.6}
                    delay={0.1}
                >
                    <div className="bg-[#ffffff0a] backdrop-blur-sm p-8 rounded-xl border border-black/10 shadow-lg hover:shadow-2xl hover:scale-103 transition-all duration-300 group mb-16">
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            I'm <span className="text-purple-300 font-semibold">Joyal</span>, a full-stack web developer passionate about building smooth, engaging user experiences using the MERN stack. With a focus on clean code and problem solving, I enjoy taking ideas from concept to creation.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Outside of coding, I'm a big football fan (Força Barça!) and love exploring new technologies. My journey as a developer can be seen below:
                        </p>
                    </div>
                </ScrollReveal>

                {/* Roadmap Section */}
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-black z-0 opacity-0 md:opacity-100"></div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
                        {steps.map((step, idx) => (
                            <ScrollReveal
                                key={idx}
                                direction="up"
                                distance={40}
                                duration={0.6}
                                delay={0.2 + (idx * 0.1)}
                            >
                                <div className="flex flex-col items-center text-center group">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md ${step.color} transform group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mt-14 mb-2 text-slate-600 group-hover:text-black transition-colors">{step.title}</h3>
                                    <p className="text-sm text-slate-600">{step.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

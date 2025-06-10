import { FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import gafferImg from '../assets/gaffer.png';
import ScrollReveal from '../components/ScrollReveal';

const projects = [
  {
    title: 'The Gaffer',
    description: 'A football tactics builder and tester built with the MERN stack.',
    image: gafferImg,
    liveDemo: 'https://the-gaffer-football-tactics-builder-beta.vercel.app',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    tools: ['Tailwind CSS', 'Dnd Kit', 'OpenAI API', 'Postman', 'Vite'],
    Git: 'https://github.com/Joyalcj4/The-Gaffer--Football-tactics-builder---tester-website'
  },
  {
    title: 'Personal Blog Website',
    description: 'Personal Blog website with every features needed built with MERN Stack :(for website testing - USER: admin, PASSWORD: admin )',
    image: '/images/sudoku.jpg',
    liveDemo: 'https://personal-blog-mern-project.vercel.app/',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    tools: ['Postman'],
    Git: 'https://github.com/Joyalcj4/Personal-Blog-mern-project'
  },
  {
    title: 'AI mock Interview website',
    description: 'Personalised mock interviews created by AI based on skills you have',
    image: '/images/sudoku.jpg',
    liveDemo: '',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    tools: ['Postman'],
    Git: 'https://github.com/Joyalcj4/AI-mock-interview-website'
  },
];

const ProjectsPage = ({ com = false}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-16 text-black relative custom-gradient">
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

      <div className="max-w-6xl mx-auto">
        <ScrollReveal
          direction="up"
          distance={30}
          duration={0.5}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-12">
            Here are some of my <span className=" outline-text font-extrabold">Projects</span>
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal
              key={i}
              direction="up"
              distance={40}
              duration={0.6}
              delay={i * 0.1}
            >
              <div className="bg-[#ffffff0a] backdrop-blur-sm p-8 rounded-xl border border-black/10 shadow-lg hover:shadow-2xl hover:scale-103 transition-all duration-300 h-[600px] flex flex-col group">
                <div
                  className="h-48 bg-cover bg-center rounded-lg mb-6 overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                <h2 className="text-2xl font-bold mb-3 text-slate-600 group-hover:text-black transition-colors">{project.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-black/5 rounded-full text-sm text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="px-3 py-1 bg-black/5 rounded-full text-sm text-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 inline-flex items-center justify-center border-2 border-black px-4 sm:px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="w-full sm:w-1/2 inline-flex items-center justify-center bg-black/5 border border-black/20 text-slate-600 px-4 sm:px-6 py-3 rounded-full text-sm">
                      Live Demo Coming Soon
                    </span>
                  )}

                  <a
                    href={project.Git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 border-2 border-black px-4 sm:px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Github <FaGithub />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal
          direction="up"
          distance={20}
          duration={0.5}
          delay={0.3}
        >
          <p className="text-center mt-12 text-gray-600">
            Note: The projects displayed are my most impactful. Other smaller works are intentionally left out.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProjectsPage;

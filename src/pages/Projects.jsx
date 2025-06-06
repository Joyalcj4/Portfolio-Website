import { FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import gafferImg from '../assets/gaffer.png';

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
    description: 'Personal Blog website with every features needed built with MERN Stack',
    image: '/images/sudoku.jpg',
    liveDemo: '',
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

const ProjectsPage = ({ com = false, onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 py-16 text-black relative">
      <button
        onClick={() => com ? onClose() : navigate('/')}

        className="absolute top-6 right-6 text-black hover:text-red-500 transition text-2xl z-50"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 textcolor">Projects</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-xl transition duration-300"
            >
              <div
                className="h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="secondcolor mb-4">{project.description}</p>

              <div className="mb-3">
                <h4 className="text-sm font-semibold textcolor mb-1">Stack:</h4>
                <ul className="text-sm secondcolor list-disc list-inside pl-4">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold textcolor mb-1">Tools:</h4>
                <ul className="text-sm secondcolor list-disc list-inside pl-4">
                  {project.tools.map((tool, idx) => (
                    <li key={idx}>{tool}</li>
                  ))}
                </ul>
              </div>

              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-50 border hover:bg-black hover:text-amber-50 transition px-4 py-2 rounded-full text-sm mt-2"
                >
                  Live Demo
                </a>
              ) : (
                <span className="inline-block bg-gray-200 border border-gray-400 text-gray-600 px-4 py-2 rounded-full text-sm mt-2">
                  Live Demo Coming Soon
                </span>
              )}

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-2 bg-gray-50 border hover:bg-black hover:text-amber-50 transition px-4 py-2 rounded-full text-sm ml-5 mt-2"
              >
                Github <FaGithub />
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-6">Note: The projects displayed are my most impactful. Other smaller works are intentionally left out.</p>
      </div>
    </div>
  );
};

export default ProjectsPage;

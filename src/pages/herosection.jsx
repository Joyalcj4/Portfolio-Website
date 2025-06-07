import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function HeroSection() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen text-black relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute" />

            <nav className="w-full max-w-7xl mx-auto px-6 py-6 z-10 relative">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-xl">Hello.</div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6 text-sm font-medium">
                        <li><Link to="/about" className="hover:text-gray-600">About</Link></li>
                        <li><Link to="/skills" className="hover:text-gray-600">Skills</Link></li>
                        <li><Link to="/projects" className="hover:text-gray-600">Projects</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-600">Contact</Link></li>
                    </ul>

                    {/* Mobile Icon */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl transition-transform duration-200">
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu with animation */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                    <ul className="flex flex-col gap-4 mt-4 text-sm font-medium">
                         <li><Link to="/about" className="hover:text-gray-600">About</Link></li>
                        <li><Link to="/skills" className="hover:text-gray-600">Skills</Link></li>
                        <li><Link to="/projects" className="hover:text-gray-600">Projects</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-600">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="border-2 w-screen border-black relative z-10 "></div>

            {/* Hero */}
            <section className="flex flex-col items-center justify-center text-center mt-24 z-10 relative px-4">
                <h1 className=" text-5xl md:text-7xl font-extrabold tracking-tight">
                    JOYAL JAMES
                </h1>
                <div className="mt-6 text-lg md:text-xl text-gray-600 font-light">
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer.",
                            2000,
                            "Clean Code Enthusiast.",
                            2000,
                            "Creative Problem Solver.",
                            2000,
                        ]}
                        speed={40}
                        repeat={Infinity}
                    />
                </div>

                <div className="flex flex-wrap gap-4 mt-18">
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 border-2 border-black px-8 py-4 rounded text-xl hover:bg-black hover:text-white transition"
                    >
                        Download Resume <FaDownload />
                    </a>
                </div>
                <p className="my-16 max-w-2xl text-center text-gray-700 text-base md:text-lg leading-relaxed">
                    I'm a full stack web developer working with the MERN stack. I enjoy learning new things every day and love working on the backend side of projects. I'm always trying to improve and build clean, useful applications.                    </p>

                <div className="mt-12 animate-bounce text-black opacity-70">
                    <div className="w-5 h-8 border-2 border-black rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
                    </div>
                </div>
            </section>
        </div>

    );
}

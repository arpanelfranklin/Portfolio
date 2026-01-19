import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import Section from './Section';

const ProjectCard = ({ title, description, tech, github, live }) => (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="p-8">
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded-xl text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
                    <Folder size={24} />
                </div>
                <div className="flex gap-4">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {live && (
                        <a href={live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
            <p className="text-slate-400 mb-6 line-clamp-3">{description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
    {
        title: "STUDIA – Academic Management Platform",
        description: "A full-stack academic management system with student and faculty portals, timetable scheduling, QR-based attendance, and leave management, built during SIH internal hackathon.",
        tech: ["Node.js", "Express", "MySQL", "EJS", "Sessions"],
        github: "https://github.com/arpanelfranklin/STUDIA",
        live: null
    },
    {
        title: "Campus 2 Corporate (C2C)",
        description: "Official website for a university club showcasing events, activities, and announcements with a clean, responsive UI.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/arpanelfranklin/C2C",
        live: null
    },
    {
        title: "Clinic Management System (Ongoing)",
        description: "Developing a full-stack clinic management system to handle patient records, doctor visits, and appointments using Java and Spring Boot.",
        tech: ["Java", "Spring Boot", "MongoDB", "REST API"],
        github: "#",
        live: null
    },
    {
        title: "Amazon Homepage UI Clone",
        description: "A frontend recreation of the Amazon homepage focusing on layout structure and UI styling.",
        tech: ["HTML", "CSS", "Responsive Design"],
        github: "#",
        live: "#"
    }
];



    return (
        <Section id="projects" className="bg-slate-900/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on to sharpen my skills.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;

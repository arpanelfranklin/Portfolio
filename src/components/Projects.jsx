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
            title: "Instagram Login UI Clone",
            description: "A pixel-perfect clone of the Instagram login page featuring a fully responsive layout and modern CSS styling techniques.",
            tech: ["HTML", "CSS", "Responsive Design"],
            github: "#",
            live: "#"
        },
        {
            title: "Amazon Homepage UI Clone",
            description: "Recreation of the Amazon homepage layout focusing on complex grid systems, responsive sections, and navigation structures.",
            tech: ["HTML", "CSS", "Grid Layout"],
            github: "#",
            live: "#"
        },
        {
            title: "Restaurant Management System",
            description: "A comprehensive console-based system to manage restaurant operations including menu management, order processing, and billing.",
            tech: ["Python", "MySQL", "File Handling"],
            github: "#",
            live: null
        },
        {
            title: "FunWithCS",
            description: "Concept landing page for a YouTube channel dedicated to making Computer Science education fun and accessible for school students.",
            tech: ["HTML", "CSS", "JavaScript"],
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

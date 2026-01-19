import React from 'react';
import { Code, Server, Terminal, Wrench } from 'lucide-react';
import Section from './Section';

const SkillCard = ({ title, icon: Icon, skills }) => (
    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors group">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 transition-colors">
                <Icon className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-all"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code,
        skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"]
    },
    {
        title: "Backend Development",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST APIs", "Spring Boot (learning)", "MongoDB", "MySQL"]
    },
    {
        title: "Programming Languages",
        icon: Terminal,
        skills: ["Java", "Python", "JavaScript"]
    },
    {
        title: "Tools & Core Skills",
        icon: Wrench,
        skills: ["Git", "GitHub", "Linux (Basics)", "Postman", "VS Code"]
    }
];


    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A collection of technologies and tools I work with to build digital products.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                    <SkillCard key={index} {...category} />
                ))}
            </div>
        </Section>
    );
};

export default Skills;

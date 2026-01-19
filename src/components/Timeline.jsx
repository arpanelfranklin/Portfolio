import React from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import Section from './Section';

const TimelineItem = ({ year, title, subtitle, description, icon: Icon, isLast }) => (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 gap-8 group">
        {/* Line */}
        <div className={`absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:left-auto md:right-0 md:col-start-1 md:col-end-3 md:mr-[-1px] ${isLast ? 'h-8' : ''}`} />

        {/* Dot */}
        <div className="absolute left-[-4px] top-8 w-2 h-2 rounded-full bg-cyan-500 ring-4 ring-slate-900 md:left-auto md:right-[-4px] md:col-start-1 md:col-end-3 md:mr-[-4px]" />

        {/* Content */}
        <div className="md:col-start-3 md:col-end-6 pb-12">
            <div className="flex items-center gap-4 mb-2">
                <span className="text-cyan-400 font-mono text-sm">{year}</span>
                <div className="h-px flex-grow bg-slate-800/50" />
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                        <p className="text-purple-400 font-medium text-sm">{subtitle}</p>
                    </div>
                    <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                        <Icon size={20} />
                    </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const Timeline = () => {
    const milestones = [
    {
        year: "2026 (Goal)",
        title: "Backend & DevOps Growth",
        subtitle: "Spring Boot, System Design & DevOps Foundations",
        description: "Strengthening backend development with Java and Spring Boot, and beginning DevOps fundamentals like Docker and CI/CD.",
        icon: Code
    },
    {
        year: "2025 - Present",
        title: "Full Stack Development Journey",
        subtitle: "Projects & Self-Learning",
        description: "Building real-world systems using Node.js and Java backend, focusing on clean architecture and scalable applications.",
        icon: Briefcase
    },
    {
        year: "2025 - 2029",
        title: "B.Tech in CSE (DevOps)",
        subtitle: "Bennett University",
        description: "Pursuing Computer Science Engineering with focus on core CS, backend development, and DevOps fundamentals.",
        icon: GraduationCap
    },
    {
        year: "2024",
        title: "Higher Secondary (Class 12)",
        subtitle: "CBSE Board",
        description: "Completed Class 12 with PCM + Computer Science and built foundational programming projects.",
        icon: GraduationCap
    }
];


    return (
        <Section id="journey">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My Journey</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    The path that led me to where I am today.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                {milestones.map((milestone, index) => (
                    <TimelineItem
                        key={index}
                        {...milestone}
                        isLast={index === milestones.length - 1}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Timeline;

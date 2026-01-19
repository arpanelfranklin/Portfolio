import React from 'react';
import { MapPin, Mail, Github, Linkedin, Calendar, GraduationCap } from 'lucide-react';
import Section from './Section';

const About = () => {
    return (
        <Section id="about" className="bg-slate-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Card */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-slate-900 ring-1 ring-slate-800 rounded-2xl p-8">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-4xl font-bold text-slate-500">
                            AF
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <MapPin size={20} className="text-cyan-400" />
                                <span>Durg, Chhattisgarh, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Mail size={20} className="text-cyan-400" />
                                <a href="mailto:arpanelfranklin@gmail.com" className="hover:text-white transition-colors">arpanelfranklin@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Github size={20} className="text-cyan-400" />
                                <a href="https://github.com/arpanelfranklin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github.com/arpanelfranklin</a>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Linkedin size={20} className="text-cyan-400" />
                                <a href="https://linkedin.com/in/arpanelfranklin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin.com/in/arpanelfranklin</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bio Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
                    <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                        I'm a B.Tech CSE student specializing in DevOps at Bennett University (2025–2029).
                        My journey in technology is driven by a passion for building scalable web applications
                        and automating development workflows.
                    </p>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Currently, I'm focused on mastering Full-Stack Development and exploring the depths of DevOps.
                        I'm also preparing for Google Summer of Code (GSoC) 2026, aiming to contribute to open-source
                        projects in the web development space.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                            <div className="flex items-center gap-3 mb-2">
                                <GraduationCap className="text-purple-400" />
                                <h3 className="font-semibold text-white">Education</h3>
                            </div>
                            <p className="text-sm text-slate-400">B.Tech CSE (DevOps)</p>
                            <p className="text-xs text-slate-500">Bennett University</p>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                            <div className="flex items-center gap-3 mb-2">
                                <Calendar className="text-purple-400" />
                                <h3 className="font-semibold text-white">Goals</h3>
                            </div>
                            <p className="text-sm text-slate-400">GSoC 2026 Aspirant</p>
                            <p className="text-xs text-slate-500">Open Source Contributor</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;

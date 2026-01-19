import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Section from './Section';

const Hero = () => {
    return (
        <Section id="home" className="min-h-screen flex items-center justify-center pt-32">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-sm"
                >
                    <span className="text-cyan-400 font-medium">Available for new projects</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Arpanel Franklin</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-400 mb-8 font-light"
                >
                    Web Developer · DevOps Enthusiast · B.Tech CSE (DevOps)
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto"
                >
                    I build clean, scalable web experiences and love automating everything.
                    Passionate about Full-Stack Development and Cloud Technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group"
                    >
                        View Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#"
                        className="px-8 py-4 rounded-full bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700 flex items-center gap-2"
                    >
                        Download CV
                        <Download size={20} />
                    </a>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;

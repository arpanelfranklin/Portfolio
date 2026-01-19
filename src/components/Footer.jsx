import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Arpanel Franklin</h3>
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Arpanel Franklin. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/arpanelfranklin" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/arpanelfranklin" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:arpanelfranklin@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

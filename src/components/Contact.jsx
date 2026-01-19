import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import Section from './Section';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Section id="contact" className="bg-slate-900/30">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
                    <p className="text-slate-400 text-lg mb-8">
                        I'm currently looking for new opportunities and open to collaboration.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Email</p>
                                <a href="mailto:arpanelfranklin@gmail.com" className="text-lg font-medium hover:text-white transition-colors">
                                    arpanelfranklin@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="p-3 bg-slate-800 rounded-lg text-purple-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Location</p>
                                <p className="text-lg font-medium">Durg, Chhattisgarh, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                    {isSubmitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <CheckCircle size={64} className="text-green-500 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                    placeholder="What's on your mind?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Contact;

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/index.css';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-[var(--deep-black)] border-t border-[var(--glass-border)] pt-12 pb-6">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 flex items-center justify-center border border-[var(--neon-green)] rounded bg-black">
                                <span className="text-[var(--neon-green)] font-bold font-mono text-sm">VS</span>
                            </div>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Building digital experiences with passion and precision.
                            Always learning, always coding.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-[var(--neon-green)] transition-colors">Home</Link></li>
                            <li><Link to="/projects" className="hover:text-[var(--neon-green)] transition-colors">Projects</Link></li>
                            <li><Link to="/about" className="hover:text-[var(--neon-green)] transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-[var(--neon-green)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/Vigneshsakthivel07" target="_blank" rel="noopener noreferrer" className="p-2 bg-[rgba(255,255,255,0.05)] rounded-full hover:bg-[var(--neon-green)] hover:text-black transition-all" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/vigneshsakthivel07/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[rgba(255,255,255,0.05)] rounded-full hover:bg-[var(--neon-green)] hover:text-black transition-all" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://twitter.com/vigneshsakthivel07" target="_blank" rel="noopener noreferrer" className="p-2 bg-[rgba(255,255,255,0.05)] rounded-full hover:bg-[var(--neon-green)] hover:text-black transition-all" aria-label="Twitter">
                                <Twitter size={18} />
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vigneshsakthivel004@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[rgba(255,255,255,0.05)] rounded-full hover:bg-[var(--neon-green)] hover:text-black transition-all" aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Vignesh Sakthivel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

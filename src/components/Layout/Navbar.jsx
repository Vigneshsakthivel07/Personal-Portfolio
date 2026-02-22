import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail, Zap, Code, Menu, X, GraduationCap, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navItems = [
        { name: 'Profile', path: '/', icon: <User size={20} /> },
        { name: 'Projects', path: '/projects', icon: <Briefcase size={20} /> },
        { name: 'Skills', path: '/skills', icon: <Code size={20} /> },
        { name: 'Education', path: '/education', icon: <GraduationCap size={20} /> },
        { name: 'Certifications', path: '/certifications', icon: <Award size={20} /> },
        { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-4">
            <div className="glass-panel container mx-auto flex justify-between items-center rounded-2xl px-6 py-3 max-w-6xl relative z-50">
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 flex items-center justify-center bg-black border border-[var(--neon-green)] rounded-md shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                        <span className="text-[var(--neon-green)] font-bold text-xl font-mono">VS</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => `
                  flex items-center gap-2 transition-all duration-300 hover:text-[var(--neon-green)]
                  ${isActive ? 'text-[var(--neon-green)] drop-shadow-[0_0_8px_var(--neon-green)]' : 'text-gray-400'}
                `}
                            >
                                {item.icon}
                                <span className="text-sm font-medium">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[var(--neon-green)] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-20 left-4 right-4 z-40 md:hidden"
                    >
                        <div className="glass-panel rounded-2xl p-4 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) => `
                      flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                      ${isActive ? 'bg-[rgba(57,255,20,0.1)] text-[var(--neon-green)] shadow-[inset_0_0_10px_rgba(57,255,20,0.1)]' : 'text-gray-300 hover:bg-[rgba(255,255,255,0.05)] hover:text-white'}
                    `}
                                >
                                    <div className="text-inherit">
                                        {item.icon}
                                    </div>
                                    <span className="font-bold tracking-widest uppercase text-sm">{item.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

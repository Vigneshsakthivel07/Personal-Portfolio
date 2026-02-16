import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-xl md:text-2xl font-mono text-gray-400 mb-4 tracking-widest"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        HI, I'M <span className="text-[var(--neon-green)] font-bold">VIGNESH</span>
                    </motion.h2>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    >
                        I CRAFT <span className="neon-text">DIGITAL REALITY</span> <br />
                        WITH CODE & LOGIC.
                    </motion.h1>

                    <motion.p
                        className="max-w-2xl mx-auto text-gray-400 mb-12 text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        I'm a developer who doesn't just write code—I solve problems.
                        From complex algorithms to immersive web experiences, I build software that feels alive.
                        Focused on performance, scalability, and pushing the boundaries of what's possible in a browser.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <Link to="/projects">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(57, 255, 20, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-[var(--neon-green)] text-[var(--neon-green)] font-bold rounded-none hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300"
                            >
                                <span className="relative z-10 tracking-wider">VIEW MY WORK</span>
                                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;

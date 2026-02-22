import { motion } from 'framer-motion';
import { Award, Code, Terminal, Download } from 'lucide-react';
import Card3D from '../components/UI/Card3D';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text uppercase tracking-tighter">DECODING MY JOURNEY</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed italic">
                        "Technology is the closest thing we have to magic, and I've spent the last few years mastering the spells."
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-start mb-20">

                    {/* Left Column: 3D Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <Card3D>
                            <div className="glass-panel p-8 rounded-2xl border border-gray-800 relative group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-green-dim)] to-transparent opacity-10 group-hover:opacity-20 transition-opacity"></div>

                                <div className="relative z-10">
                                    <div className="mb-8 flex justify-center">
                                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-[var(--neon-green)] shadow-[0_0_20px_var(--neon-green-dim)] bg-gray-900 group-hover:scale-105 transition-transform duration-500">
                                            <img
                                                src="/profile.jpg"
                                                alt="Vignesh Sakthivel"
                                                className="w-full h-full object-cover transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-2 uppercase tracking-widest flex justify-between items-center">
                                        <span>THE ARCHITECT</span>
                                        <span className="text-xs text-[var(--neon-green)] font-mono border border-[var(--neon-green)] px-2 py-1 rounded">VIBE CODER</span>
                                    </h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed font-light">
                                        I am a second-year Information Technology student at Kongu Engineering College with a relentless drive to build and innovate. My journey in tech isn't just about learning syntax; it's about solving real-world puzzles using Java, Data Structures, and Object-Oriented principles.
                                    </p>

                                    <div className="grid grid-cols-1 gap-4 mb-8">
                                        {[
                                            { icon: <Code size={20} />, title: 'Core Dev', sub: 'React, Node, Java' },
                                            { icon: <Terminal size={20} />, title: 'Systems', sub: 'DSA, Clean Architecture' },
                                            { icon: <Award size={20} />, title: 'Focus', sub: 'Performance & Scale' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4 group/item">
                                                <div className="p-2 bg-[rgba(57,255,20,0.1)] rounded text-[var(--neon-green)] group-hover/item:bg-[var(--neon-green)] group-hover/item:text-black transition-all">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-white text-sm uppercase tracking-wider">{item.title}</div>
                                                    <div className="text-xs text-gray-500">{item.sub}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.a
                                        href="/Resume.pdf"
                                        target="_blank"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full flex items-center justify-center gap-2 py-3 border border-[var(--neon-green)] text-[var(--neon-green)] rounded hover:bg-[var(--neon-green)] hover:text-black transition-all font-bold text-sm tracking-widest uppercase"
                                    >
                                        <Download size={16} />
                                        Access Full Dossier (CV)
                                    </motion.a>
                                </div>
                            </div>
                        </Card3D>
                    </motion.div>

                    {/* Right Column: Refined Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="space-y-8 mt-12 md:mt-0"
                    >
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3 tracking-widest uppercase text-shadow-neon pl-2">
                            <span className="w-8 h-[2px] bg-[var(--neon-green)]"></span>
                            MY QUOTES
                        </h3>

                        <div className="border-l-2 border-gray-900 ml-4 relative space-y-12">
                            {[
                                { year: 'VISION', title: 'THE ONE GOAL', desc: '"One ring to rule them all... No, one goal to achieve them all." Mastering the convergence of AI-driven systems and high-performance engineering.' },
                                { year: 'DRIVE', title: 'THE MILEAGE', desc: '"It\'s not the years, honey, it\'s the mileage." Pushing through industrial-grade challenges and architecting secure client-server ecosystems.' },
                                { year: 'GENESIS', title: 'FORTUNE AND GLORY', desc: '"Fortune and glory, kid. Fortune and glory." Embarking on the quest of core Java fundamentals and system design.' }
                            ].map((item, index) => (
                                <div key={index} className="relative pl-10 group">
                                    <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-black border-2 border-gray-800 group-hover:border-[var(--neon-green)] group-hover:shadow-[0_0_15px_var(--neon-green)] transition-all duration-500"></div>
                                    <div className="text-[var(--neon-green)] font-mono text-xs font-bold mb-2 tracking-widest">{item.year}</div>
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--neon-green)] transition-all uppercase tracking-wider">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code, BookmarkCheck, ExternalLink, Trophy, Users, Briefcase, Sparkles, X, ZoomIn } from 'lucide-react';

const certifications = [
    {
        title: "Elite Pack Student",
        issuer: "KEC x GeeksforGeeks",
        year: "2024 - Present",
        icon: <Award size={20} className="text-[var(--neon-green)]" />,
        link: "https://www.geeksforgeeks.org/profile/vignesh3otj",
        image: "/gfg_elite_cert.jpg"
    },
    {
        title: "Software Development Intern",
        issuer: "Right Angle Solutions",
        year: "Jul 2025",
        icon: <Briefcase size={20} />,
        link: "/internship_cert.pdf",
        image: "/internship_cert.jpg"
    },
    {
        title: "Introduction to Generative AI",
        issuer: "IBM SkillsBuild",
        year: "Sep 2025",
        icon: <Sparkles size={20} />,
        link: "/ibm_ai_cert.pdf",
        image: "/ibm_ai_cert.jpg"
    },
    {
        title: "Digital Application Fundamentals (STEM)",
        issuer: "Nasscom (FutureSkills Prime)",
        year: "Sep 2025",
        icon: <Award size={20} />,
        link: "/nasscom_stem_cert.pdf",
        image: "/nasscom_stem_cert.jpg"
    },
    {
        title: "Cricket Champions (Fresh Fusion 2024)",
        issuer: "Kongu Engineering College (Physical Education)",
        year: "2024",
        icon: <Trophy size={20} className="text-[var(--neon-green)]" />,
        link: "/cricket_cert.pdf",
        image: "/cricket_cert.png"
    },
    {
        title: "Society Member (ISTE)",
        issuer: "Indian Society for Technical Education",
        year: "2024 - Present",
        icon: <Users size={20} />,
        link: "#",
        image: "/iste_cert.jpg"
    },
    {
        title: "Oracle Java Foundation Badge",
        issuer: "Oracle",
        year: "2025",
        icon: <BookmarkCheck size={20} />,
        link: "https://mylearn.oracle.com/ou/profile-dashboard/Achievements",
        image: "/oracle_cert.jpg"
    },
    {
        title: "Frontend Web Developer (Modern HTML, CSS, JS)",
        issuer: "Udemy",
        year: "2025",
        icon: <Code size={20} />,
        link: "https://www.udemy.com/certificate/UC-9a8f60f6-9612-427b-aefb-028caa72591d/",
        image: "/udemy_frontend_cert.jpg"
    }
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 neon-text tracking-tighter uppercase">CREDENTIALS & HONORS</h2>
                    <p className="text-gray-400 font-light italic text-lg">"The future belongs to those who learn more skills and combine them in creative ways."</p>
                </motion.div>

                <div className="grid gap-6">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.01 }}
                            onClick={() => setSelectedCert(cert)}
                            className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-[var(--neon-green)] flex items-center gap-6 group transition-all cursor-pointer relative overflow-hidden"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(57,255,20,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="p-4 bg-gray-900 rounded-2xl text-[var(--neon-green)] group-hover:bg-[var(--neon-green)] group-hover:text-black transition-colors relative z-10">
                                {cert.icon}
                            </div>
                            <div className="flex-1 relative z-10">
                                <h4 className="font-bold text-white group-hover:text-[var(--neon-green)] transition-all text-xl uppercase tracking-wider">{cert.title}</h4>
                                <div className="flex items-center gap-2 text-gray-500 mt-1">
                                    <span className="text-sm">{cert.issuer}</span>
                                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                    <span className="text-xs font-mono text-[var(--neon-green-dim)]">{cert.year}</span>
                                </div>
                            </div>

                            <div className="flex gap-4 relative z-10">
                                <button
                                    className="p-3 text-gray-700 group-hover:text-[var(--neon-green)] transition-colors"
                                    title="View Certificate"
                                >
                                    <ZoomIn size={20} />
                                </button>
                                {cert.link !== "#" && (
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 45 }}
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-3 text-gray-700 hover:text-[var(--neon-green)] transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-[var(--neon-green)] hover:text-black transition-all"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-2">
                                <img
                                    src={selectedCert.image || 'https://via.placeholder.com/800x600?text=Certificate+Image+Preview'}
                                    alt={selectedCert.title}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>

                            <div className="p-6 border-t border-gray-800 bg-black/40">
                                <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wider">{selectedCert.title}</h3>
                                <p className="text-[var(--neon-green)] font-medium mb-4">{selectedCert.issuer}</p>
                                {selectedCert.link !== "#" && (
                                    <a
                                        href={selectedCert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[var(--neon-green)] transition-colors uppercase tracking-widest"
                                    >
                                        Verify Credential <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Certifications;

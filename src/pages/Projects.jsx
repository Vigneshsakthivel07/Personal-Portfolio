import { motion } from 'framer-motion';
import Card3D from '../components/UI/Card3D';

const projects = [
    {
        title: 'Banking Application (Client-Server)',
        desc: 'A secure client-server banking system implementing socket programming and multi-threading for real-time transaction processing.',
        tech: ['Java', 'Socket Programming', 'Multi-threading', 'Swing'],
        link: 'https://github.com/Vigneshsakthivel07/Banking-Application-Client-Server-'
    },
    {
        title: 'HR Management System',
        desc: 'Java-based HR management system to manage employee records with add, update, delete functionality.',
        tech: ['Java', 'OOP', 'Data Structures'],
        link: 'https://github.com/Vigneshsakthivel07/hrmanagementsystem'
    },
    {
        title: 'Contact Management System',
        desc: 'A console-based Java application to store, search, update, and delete contact information efficiently.',
        tech: ['Java', 'Algorithms', 'File Handling'],
        link: 'https://github.com/Vigneshsakthivel07/contactmanagementsystem'
    },
    {
        title: 'Gift Shop Management System',
        desc: 'Desktop-based system using Java Swing to manage products, sales, and customer details.',
        tech: ['Java Swing', 'MySQL', 'JDBC'],
        link: 'https://github.com/Vigneshsakthivel07/Giftshop-Management'
    }
];

const Projects = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl font-bold mb-4 text-center neon-text"
                >
                    ENGINEERED REALITY
                </motion.h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    A collection of systems, tools, and experiments I've built. PROOF OF WORK.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card3D className="h-full">
                                <div className="glass-panel p-6 rounded-xl border border-gray-800 hover:border-[var(--neon-green)] transition-colors group h-full">
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--neon-green)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-[rgba(57,255,20,0.1)] text-[var(--neon-green)] border border-[rgba(57,255,20,0.2)]">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-sm font-bold text-white hover:text-[var(--neon-green)] transition-colors"
                                    >
                                        VIEW ON GITHUB &rarr;
                                    </a>
                                </div>
                            </Card3D>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        items: ["Java", "JavaScript (ES6+)", "HTML5", "CSS3", "Basics of C", "Kotlin"]
    },
    {
        category: "Frameworks & Libraries",
        items: ["React.js", "Basics JWT", "Node.js (Basic)", "Java Swing"]
    },
    {
        category: "Tools & Platforms",
        items: ["Git & GitHub", "VS Code", "IntelliJ IDEA", "Cursor", "Antigravity", "GitHub Copilot"]
    },
    {
        category: "Core Concepts",
        items: ["Data Structures", "Algorithms", "OOP", "DBMS"]
    }
];

const Skills = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 neon-text">THE STACK</h2>
                    <p className="text-gray-400">The languages and frameworks I use to bend the web to my will.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillsData.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="glass-panel p-8 rounded-xl border border-gray-800 hover:border-[var(--neon-green)] transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold text-[var(--neon-green)] mb-6 border-b border-gray-800 pb-2">
                                {section.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {section.items.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(57, 255, 20, 0.2)" }}
                                        className="px-4 py-2 bg-[rgba(255,255,255,0.05)] rounded-full text-sm font-medium text-gray-300 border border-gray-800 cursor-default transition-colors hover:text-white"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

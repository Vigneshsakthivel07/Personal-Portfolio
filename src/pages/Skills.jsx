import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        items: [
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
        ]
    },
    {
        category: "Tech Stack",
        items: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
        ]
    },
    {
        category: "Core Concepts",
        items: [
            { name: "DSA", icon: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/39FF14/external-data-structure-big-data-flatart-icons-outline-flatarticons.png" },
            { name: "OOP", icon: "https://img.icons8.com/ios/50/39FF14/object-oriented-programming.png" },
            { name: "DBMS", icon: "https://img.icons8.com/ios/50/39FF14/database.png" },
            { name: "Algorithms", icon: "https://img.icons8.com/ios/50/39FF14/flow-chart.png" }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
            { name: "Antigravity", icon: "https://img.icons8.com/ios/50/39FF14/gravity.png" },
            { name: "Cursor", icon: "https://img.icons8.com/ios/50/39FF14/cursor.png" },
            { name: "Copilot", icon: "https://img.icons8.com/color/48/github-copilot.png" }
        ]
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
                    <h2 className="text-4xl font-bold mb-4 neon-text tracking-tighter uppercase">TECHNICAL ARSENAL</h2>
                    <p className="text-gray-400 font-light">The neural interface components I use to architect digital realities.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillsData.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl border border-gray-800 hover:border-[var(--neon-green-dim)] hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] transition-all duration-500 group"
                        >
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-2 h-2 bg-[var(--neon-green)] rounded-full animate-pulse"></span>
                                {section.category}
                            </h3>

                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                                {section.items.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="flex flex-col items-center gap-3 group/item cursor-default"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-gray-900/50 border border-gray-800 group-hover/item:border-[var(--neon-green)] group-hover/item:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-300"
                                                onError={(e) => { e.target.src = 'https://img.icons8.com/ios/50/39FF14/code.png'; }}
                                            />
                                        </div>
                                        <span className="text-[10px] md:text-xs font-medium text-gray-500 group-hover/item:text-[var(--neon-green)] transition-colors text-center uppercase tracking-widest">
                                            {skill.name}
                                        </span>
                                    </motion.div>
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

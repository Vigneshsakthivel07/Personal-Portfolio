import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
    {
        degree: "B.Tech in Information Technology",
        institution: "Kongu Engineering College, Perundurai",
        duration: "2024 - 2028",
        grade: "CGPA: 9.16"
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Govt Higher Secondary School, Koduvai",
        duration: "2022 - 2024",
        grade: "Percentage: 88.83%"
    },
    {
        degree: "SSLC",
        institution: "Govt Higher Secondary School, Koduvai",
        duration: "2021 - 2022",
        grade: "Percentage: 80.6%"
    }
];

const Education = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 neon-text tracking-tighter uppercase">EDUCATIONAL JOURNEY</h2>
                    <p className="text-gray-400 font-light italic text-lg">"The beautiful thing about learning is that no one can take it away from you."</p>
                </motion.div>

                <div className="space-y-8">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="glass-panel p-8 rounded-2xl border-l-4 border-l-[var(--neon-green)] hover:bg-[rgba(57,255,20,0.05)] transition-all group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-900 rounded-xl text-[var(--neon-green)] group-hover:bg-[var(--neon-green)] group-hover:text-black transition-colors">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white uppercase tracking-wider group-hover:text-[var(--neon-green)] transition-colors">{edu.degree}</h4>
                                        <p className="text-[var(--neon-green-dim)] text-lg mb-1">{edu.institution}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-400 font-mono mb-1">{edu.duration}</div>
                                    <div className="text-[var(--neon-green)] font-bold text-lg">{edu.grade}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;

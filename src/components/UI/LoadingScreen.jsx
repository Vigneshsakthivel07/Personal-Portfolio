import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
            <motion.div
                className="relative w-24 h-24 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {/* Rotating Rings */}
                <motion.div
                    className="absolute inset-0 border-2 border-[var(--neon-green)] rounded-full opacity-20"
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-2 border-t-2 border-[var(--neon-green)] rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[var(--neon-green)] font-mono font-bold text-xl animate-pulse">VS</span>
                </div>
            </motion.div>

            <div className="flex flex-col items-center">
                <motion.p
                    className="text-[var(--neon-green)] font-mono text-sm tracking-[0.3em] uppercase"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Initializing System
                </motion.p>
                <div className="w-48 h-[1px] bg-gray-900 mt-4 overflow-hidden relative">
                    <motion.div
                        className="absolute inset-0 bg-[var(--neon-green)] shadow-[0_0_10px_var(--neon-green)]"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;

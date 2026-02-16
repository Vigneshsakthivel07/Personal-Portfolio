import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
            <motion.h1
                className="text-9xl font-bold neon-text mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                404
            </motion.h1>
            <motion.h2
                className="text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                SYSTEM FAILURE
            </motion.h2>
            <motion.p
                className="text-gray-400 text-lg mb-10 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                The page you are looking for has been moved, deleted, or possibly never existed in this dimension.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <Link to="/" className="px-8 py-3 bg-[var(--neon-green)] text-black font-bold rounded-full hover:shadow-[0_0_20px_var(--neon-green)] transition-all">
                    RETURN TO BASE
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;

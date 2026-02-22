import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, Code, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const templateParams = {
                from_name: formState.name,
                from_email: formState.email,
                reply_to: formState.email,
                name: formState.name,
                email: formState.email,
                message: formState.message,
                to_name: 'Vignesh',
            };

            await emailjs.send(
                'service_r0w9ddk',
                'template_mnvnnlp',
                templateParams,
                'rAKgVGi21l3zCMWY5'
            );

            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('TRANSMISSION ERROR:', error);
            setStatus('error');
        }

        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center relative overflow-hidden">
            <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side: Impactful Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-bold mb-6 neon-text">INITIATE UPLINK</h2>
                    <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                        I'm always scouting for the next major project or a deep technical challenge.
                        If you have something that pushes the limits of what's possible, let's talk.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: <Mail size={24} />, text: 'vigneshsakthivel004@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vigneshsakthivel004@gmail.com', external: true },
                            { icon: <Github size={24} />, text: 'github.com/Vigneshsakthivel07', href: 'https://github.com/Vigneshsakthivel07', external: true },
                            { icon: <Linkedin size={24} />, text: 'linkedin.com/in/vigneshsakthivel07', href: 'https://www.linkedin.com/in/vigneshsakthivel07/', external: true },
                            { icon: <Code size={24} />, text: 'leetcode.com/u/MpSE3kdZ7c/', href: 'https://leetcode.com/u/MpSE3kdZ7c/', external: true }
                        ].map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.href}
                                target={item.external ? "_blank" : "_self"}
                                rel={item.external ? "noopener noreferrer" : ""}
                                className="flex items-center gap-4 group p-2 rounded-lg hover:bg-[rgba(57,255,20,0.05)] transition-all"
                                whileHover={{ x: 10 }}
                            >
                                <div className="p-3 bg-[rgba(57,255,20,0.1)] rounded-full text-[var(--neon-green)] group-hover:bg-[var(--neon-green)] group-hover:text-black transition-all">
                                    {item.icon}
                                </div>
                                <span className="text-lg text-gray-300 group-hover:text-white transition-colors truncate">{item.text}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Professional Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-panel p-8 rounded-2xl border border-gray-800 relative"
                >
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <CheckCircle size={64} className="text-[var(--neon-green)] mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">SIGNAL RECEIVED</h3>
                                <p className="text-gray-400">Your message has been successfully transmitted. I'll get back to you soon.</p>
                            </motion.div>
                        ) : status === 'error' ? (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <AlertCircle size={64} className="text-red-500 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">UPLINK FAILED</h3>
                                <p className="text-gray-400">There was an issue transmitting your message. Please try again or reach out directly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-[var(--neon-green)] underline underline-offset-4 font-mono text-sm uppercase"
                                >
                                    RETRY CONNECTION
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest font-mono">Identification</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-[rgba(0,0,0,0.3)] border border-gray-700 rounded-lg p-3 text-white focus:border-[var(--neon-green)] focus:outline-none transition-all placeholder:text-gray-700"
                                        placeholder="ENTER YOUR NAME"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest font-mono">Communication Portal</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-[rgba(0,0,0,0.3)] border border-gray-700 rounded-lg p-3 text-white focus:border-[var(--neon-green)] focus:outline-none transition-all placeholder:text-gray-700"
                                        placeholder="EMAIL@EXAMPLE.COM"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest font-mono">Data Stream</label>
                                    <textarea
                                        rows="4"
                                        required
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-[rgba(0,0,0,0.3)] border border-gray-700 rounded-lg p-3 text-white focus:border-[var(--neon-green)] focus:outline-none transition-all placeholder:text-gray-700 resize-none"
                                        placeholder="TRANSMIT YOUR MESSAGE..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full group font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-3 ${status === 'submitting'
                                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                        : 'bg-[var(--neon-green)] text-black hover:shadow-[0_0_30px_var(--neon-green)]'
                                        }`}
                                >
                                    {status === 'submitting' ? (
                                        <div className="w-6 h-6 border-2 border-gray-500 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span className="tracking-[0.2em]">INITIATE SEND</span>
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

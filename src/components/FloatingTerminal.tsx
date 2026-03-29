import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';
import TerminalSection from './TerminalSection';

const FloatingTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[999]">
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[90vw] md:w-[600px] lg:w-[800px] shadow-2xl rounded-3xl overflow-hidden border border-border bg-[#0a0a0a]"
                    >
                        {/* Custom Header for the Floating Window */}
                        <div className="flex items-center justify-between px-6 py-4 bg-[#111] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                <span className="ml-3 text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                    <Terminal size={12} className="text-primary" />
                                    bhuvans.ssh
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                {/* <button onClick={() => setIsMinimized(true)} className="text-muted-foreground hover:text-foreground transition-colors p-1">
                                    <Minimize2 size={16} />
                                </button> */}
                                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-red-500 transition-colors p-1">
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Existing Terminal Logic - We wrap it but remove its own header/border if needed */}
                        <div className="bg-[#0a0a0a]">
                            <TerminalSection isFloating={true} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sticky Launcher Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    setIsOpen(true);
                    setIsMinimized(false);
                }}
                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 group ${isOpen && !isMinimized
                    ? 'bg-primary text-white rotate-90 scale-0'
                    : 'bg-[#111] text-primary border border-primary/20 hover:border-primary'
                    }`}
            >
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <Terminal size={24} className="relative z-10" />

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                )}
            </motion.button>

            {/* Minimized Tab */}
            {isMinimized && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setIsMinimized(false)}
                    className="absolute bottom-0 right-0 w-max px-4 py-2 bg-[#111] border border-primary/30 rounded-xl text-[10px] font-mono text-primary uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl hover:bg-[#1a1a1a]"
                >
                    <Maximize2 size={12} />
                    Terminal Active
                </motion.button>
            )}
        </div>
    );
};

export default FloatingTerminal;

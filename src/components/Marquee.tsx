import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    const words = ['Cloud', 'DevOps', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'Python'];
    const repeatedWords = [...words, ...words, ...words, ...words, ...words];

    return (
        <div className="w-full overflow-hidden relative flex items-center h-16">
            {/* Shortened Horizontal Borders */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent z-20" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent z-20" />

            {/* Technical Blur masks for fading ends */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-background/5 backdrop-blur-md z-10 pointer-events-none [mask-image:linear-gradient(to_right,black,transparent)]" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-background/5 backdrop-blur-md z-10 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)]" />

            <motion.div
                className="flex whitespace-nowrap gap-8 text-xl md:text-3xl font-black text-muted-foreground/10 uppercase tracking-widest py-1"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 30
                }}
            >
                {repeatedWords.map((word, idx) => (
                    <span key={idx} className="flex items-center gap-12 transition-colors duration-300">
                        {word}
                        <span className="text-primary/10 text-2xl">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;

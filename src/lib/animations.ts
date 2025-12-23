import { Variants } from "framer-motion";

// Common framer-motion variants for consistent animations across the site

export const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
        },
    },
};

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const floatVariants = (delay = 0): Variants => ({
    animate: {
        y: [0, -15, 0],
        rotate: [0, 5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
        },
    },
});

export const pulseVariants: Variants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export const glowVariants: Variants = {
    hover: {
        boxShadow: "0 0 20px rgba(5, 206, 145, 0.3)",
        transition: {
            duration: 0.3,
        },
    },
};

export const scaleUpVariants: Variants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

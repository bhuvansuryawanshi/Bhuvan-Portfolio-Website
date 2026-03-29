import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  animate?: boolean
}

export const GradientText = ({ children, className = "", animate = true }: GradientTextProps) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-terminal-green via-pipeline-blue to-deploy-orange bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: animate ? "200% auto" : "100% auto",
      }}
      animate={
        animate
          ? {
              backgroundPosition: ["0% center", "200% center"],
            }
          : {}
      }
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  )
}

interface GlitchTextProps {
  children: string
  className?: string
}

export const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  return (
    <motion.div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 left-0 text-terminal-green opacity-70"
        animate={{
          x: [0, -2, 2, -2, 0],
          y: [0, 2, -2, 2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-pipeline-blue opacity-70"
        animate={{
          x: [0, 2, -2, 2, 0],
          y: [0, -2, 2, -2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 0.1,
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  )
}

interface TypewriterProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export const Typewriter = ({
  text,
  className = "",
  delay = 0,
  speed = 0.05,
}: TypewriterProps) => {
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface FlipTextProps {
  children: string
  className?: string
  delay?: number
}

export const FlipText = ({ children, className = "", delay = 0 }: FlipTextProps) => {
  const words = children.split(" ")

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { rotateX: -90, opacity: 0 },
              visible: {
                rotateX: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            style={{ transformOrigin: "top" }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  )
}

interface WaveTextProps {
  children: string
  className?: string
  delay?: number
}

export const WaveText = ({ children, className = "", delay = 0 }: WaveTextProps) => {
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay,
          },
        },
      }}
    >
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { y: 0 },
            visible: {
              y: [0, -10, 0],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export const ShimmerText = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        background: "linear-gradient(90deg, currentColor 0%, hsl(var(--terminal-green)) 50%, currentColor 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={{
        backgroundPosition: ["0% center", "200% center"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  )
}

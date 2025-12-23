import { motion } from "framer-motion"

interface AnimatedBeamProps {
  className?: string
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
}

export const AnimatedBeam = ({
  className = "",
  duration = 2,
  delay = 0,
  colorFrom = "hsl(var(--terminal-green))",
  colorTo = "hsl(var(--pipeline-blue))"
}: AnimatedBeamProps) => {
  return (
    <div className={`absolute overflow-hidden ${className}`}>
      {/* Base track line */}
      <div className="absolute inset-0 bg-border/50" />

      {/* Animated pulse that travels along the line */}
      <motion.div
        className="absolute h-full"
        style={{
          width: "80px",
          background: `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          boxShadow: `0 0 20px ${colorFrom}, 0 0 40px ${colorTo}`,
          filter: "blur(1px)",
        }}
        initial={{ x: "-100%" }}
        animate={{ x: "calc(100vw + 100%)" }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

interface PipelineBeamProps {
  className?: string
}

export const PipelineBeam = ({ className = "" }: PipelineBeamProps) => {
  return (
    <div className={`absolute overflow-visible ${className} pointer-events-none`}>
      {/* Static base track */}
      <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-0.5 bg-border/30" />

      {/* Main traveling pulse - ECG Style - Enhanced Visibility */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 flex items-center drop-shadow-[0_0_15px_rgba(5,206,145,1)]"
        initial={{ left: "-200px" }}
        animate={{ left: "120%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Leading tail fade - Longer and brighter */}
        <div className="w-48 h-[3px] bg-gradient-to-r from-transparent via-terminal-green to-terminal-green" />

        {/* The Pulse (SVG) - Larger and thicker stroke */}
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          className="stroke-terminal-green fill-none -ml-[1px] -mr-[1px] overflow-visible"
          style={{ vectorEffect: "non-scaling-stroke" }}
        >
          <path
            d="M0 40 H20 L35 10 L55 70 L70 20 L80 40 H120"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Trailing tail fade */}
        <div className="w-48 h-[3px] bg-gradient-to-l from-transparent via-terminal-green to-terminal-green" />
      </motion.div>
    </div>
  )
}

// Background beams for hero section - Aceternity inspired
export const BackgroundBeams = ({ className = "" }: { className?: string }) => {
  const beams = [
    { top: "10%", duration: 8, delay: 0, opacity: 0.3 },
    { top: "25%", duration: 12, delay: 2, opacity: 0.2 },
    { top: "40%", duration: 10, delay: 4, opacity: 0.25 },
    { top: "60%", duration: 9, delay: 1, opacity: 0.2 },
    { top: "75%", duration: 11, delay: 3, opacity: 0.15 },
    { top: "90%", duration: 7, delay: 5, opacity: 0.2 },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {beams.map((beam, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full"
          style={{
            top: beam.top,
            background: `linear-gradient(90deg,
              transparent 0%,
              hsl(var(--terminal-green) / ${beam.opacity}) 25%,
              hsl(var(--pipeline-blue) / ${beam.opacity}) 50%,
              hsl(var(--terminal-green) / ${beam.opacity}) 75%,
              transparent 100%
            )`,
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: "100%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Vertical beams */}
      {[15, 35, 55, 75, 95].map((left, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px h-full"
          style={{
            left: `${left}%`,
            background: `linear-gradient(180deg,
              transparent 0%,
              hsl(var(--terminal-green) / 0.1) 50%,
              transparent 100%
            )`,
          }}
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 15 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Glowing orb that follows mouse or floats
export const GlowingOrb = ({
  size = 200,
  color = "terminal-green",
  className = ""
}: {
  size?: number
  color?: string
  className?: string
}) => {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, hsl(var(--${color}) / 0.15) 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

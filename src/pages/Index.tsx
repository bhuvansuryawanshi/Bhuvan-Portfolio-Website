import { Link } from "react-router-dom"
import { ArrowRight, Terminal, Cloud, Activity, CheckCircle2, Circle, Workflow, Cpu, Mail, Linkedin, Github, ExternalLink } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PipelineBeam, BackgroundBeams, GlowingOrb } from "@/components/ui/animated-beam"

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const, // easeOut curve
    },
  },
}

const Index = () => {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "whoami"

  // Refs for scroll-triggered animations
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const pipelineRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // InView hooks for scroll animations
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const pipelineInView = useInView(pipelineRef, { once: true, margin: "-100px" })
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 150)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  const pipeline = [
    { stage: "Code", icon: Terminal, status: "complete" },
    { stage: "Build", icon: Cpu, status: "complete" },
    { stage: "Test", icon: Activity, status: "complete" },
    { stage: "Deploy", icon: Cloud, status: "running" },
  ]

  // Tech stack with icons (SVG paths for proper icons)
  const techStack = [
    { name: "AWS", icon: "/icons/aws.png", },
    { name: "Docker", icon: "/icons/docker.png", color: "#2496ED" },
    { name: "Kubernetes", icon: "/icons/kubernetes.png", color: "#326CE5" },
    { name: "Terraform", icon: "/icons/terraform.svg", color: "#7B42BC" },
    // { name: "Jenkins", icon: "/icons/jenkins.svg", color: "#D24939" },
    { name: "GitHub Actions", icon: "/icons/github.svg", color: "#ffffff" },
    { name: "Linux", icon: "/icons/linux.png", color: "#FCC624" },
    // { name: "Ansible", icon: "/icons/ansible.svg", color: "#EE0000" },
    { name: "Grafana", icon: "/icons/grafana.png", color: "#F46800" },
    { name: "Prometheus", icon: "/icons/prometheus.svg", color: "#E6522C" },
    { name: "Python", icon: "/icons/python.svg", color: "#3776AB" },
    { name: "Nginx", icon: "/icons/nginx.svg", color: "#009639" },
    { name: "Github", icon: "/icons/github.svg", color: "#009639" },
    { name: "ClickHouse", icon: "/icons/clickhouse.png", color: "#009639" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Background Beams - Aceternity inspired */}
      <BackgroundBeams className="opacity-40" />

      {/* Glowing orbs for ambient effect */}
      <GlowingOrb size={400} color="terminal-green" className="top-20 -left-40" />
      <GlowingOrb size={300} color="pipeline-blue" className="bottom-40 -right-20" />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating geometric shapes with motion */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-terminal-green/10 rounded-lg rotate-12"
          animate={{
            y: [0, -20, 0],
            rotate: [12, 17, 12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 border border-pipeline-blue/10 rounded-full"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-20 h-20 border border-docker-blue/10 rounded-full"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating code snippets with enhanced animations */}
        <motion.div
          className="absolute top-32 right-40 px-3 py-2 rounded bg-terminal-green/5 border border-terminal-green/10 font-mono text-xs text-terminal-green/30 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            rotate: [6, 8, 6],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          kubectl apply -f
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-20 px-3 py-2 rounded bg-pipeline-blue/5 border border-pipeline-blue/10 font-mono text-xs text-pipeline-blue/30 hidden lg:block"
          animate={{
            y: [0, 10, 0],
            rotate: [-3, -6, -3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          docker build -t
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-10 px-3 py-2 rounded bg-deploy-orange/5 border border-deploy-orange/10 font-mono text-xs text-deploy-orange/30 hidden lg:block"
          animate={{
            y: [0, -12, 0],
            rotate: [12, 15, 12],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          terraform init
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/4 px-3 py-2 rounded bg-terminal-green/5 border border-terminal-green/10 font-mono text-xs text-terminal-green/30 hidden lg:block"
          animate={{
            y: [0, 8, 0],
            rotate: [-6, -9, -6],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          while(true)
        </motion.div>

        {/* Grid dots pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]" />
      </div>

      <div className="container max-w-5xl px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">

          {/* Hero Section */}
          <motion.section
            ref={heroRef}
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status indicator */}
            <motion.div
              className="flex items-center gap-3 text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="pulse-dot" />
              <span className="font-mono">system status: <span className="text-terminal-green">available</span></span>
            </motion.div>

            {/* Terminal-style intro - ENLARGED */}
            <motion.div
              className="terminal-window max-w-6xl bg-background/95 border-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">bhuvan@devops ~ </span>
              </div>
              <div className="terminal-body p-6 space-y-4">
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-terminal-green">$</span>
                  <span className="text-foreground">{typedText}</span>
                  <span className={`text-terminal-green ${showCursor ? 'opacity-100' : 'opacity-0'}`}>▋</span>
                </div>
                {typedText === fullText && (
                  <div className="space-y-3 animate-fade-in text-base">
                    <p className="text-muted-foreground">
                      <span className="text-pipeline-blue">name:</span> Bhuvan Suryawanshi
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-pipeline-blue">role:</span> DevOps Engineer & Cloud Enthusiast
                    </p>
                    <p className="text-muted-foreground mt-2">
                      <span className="text-terminal-green">motto:</span> Get Better Every Day
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.section>

          {/* About Me Section - Creative Terminal Style */}
          <motion.section
            ref={aboutRef}
            className="relative space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative terminal elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 border-2 border-terminal-green/20 rounded-lg hidden lg:block"
              animate={{ rotate: [12, 18, 12] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-pipeline-blue/20 rounded-lg hidden lg:block"
              animate={{ rotate: [-12, -18, -12] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 right-0 w-12 h-12 bg-deploy-orange/10 rounded-full hidden lg:block"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Role Badge
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-terminal-green/20 to-pipeline-blue/20 border border-terminal-green/30">
                <Terminal className="h-4 w-4 text-terminal-green" />
                <span className="text-sm font-bold tracking-wide text-terminal-green">DEVOPS ENGINEER</span>
              </div>
            </div> */}

            {/* Main Content Card */}
            <div className="relative">
              {/* Grid pattern background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-2xl" />

              <div className="relative grid lg:grid-cols-3 gap-8 p-8 rounded-2xl bg-background/90 border-2 border-border overflow-hidden">
                {/* Left: Content */}
                <div className="lg:col-span-2 space-y-6 relative z-10">
                  {/* Title */}
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">$ cat about.txt</h3>
                  </div>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    I specialize in automating infrastructure, building robust CI/CD pipelines, and deploying scalable cloud solutions.
                    My passion lies in transforming complex systems into efficient, reliable, and maintainable platforms.
                    I believe in <span className="text-terminal-green font-medium">Infrastructure as Code</span>,
                    continuous improvement, and creating systems that empower teams to ship faster and more confidently.
                  </p>

                  {/* Tech Stack Display */}
                  <div className="space-y-4">
                    {/* Primary Stack */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-terminal-green/50 to-transparent" />
                        <span className="text-xs  font-bold text-terminal-green font-mono">PRIMARY_STACK</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-terminal-green/50 to-transparent" />
                      </div>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={aboutInView ? "visible" : "hidden"}
                      >
                        {[
                          { name: "AWS", icon: "/icons/aws.png" },
                          { name: "Docker", icon: "/icons/docker.png" },
                          { name: "Kubernetes", icon: "/icons/kubernetes.png" },
                          { name: "Terraform", icon: "/icons/terraform.svg" },
                          { name: "Python", icon: "/icons/python.svg" },
                          { name: "Linux", icon: "/icons/linux.png" },
                          { name: "Grafana", icon: "/icons/grafana.png" },
                          { name: "Prometheus", icon: "/icons/prometheus.svg" },
                          { name: "Github", icon: "/icons/github.svg" },
                          { name: "ClickHouse", icon: "/icons/clickhouse.png" },
                        ].map((tech) => (
                          <motion.div
                            key={tech.name}
                            className="group relative p-2 rounded-lg bg-background/80 border border-border hover:border-terminal-green/50 transition-colors hover:shadow-lg hover:shadow-terminal-green/10"
                            variants={itemVariants}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: { type: "spring", stiffness: 400, damping: 17 }
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="h-8 w-8 object-contain"
                            />
                            {/* Tooltip */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background border border-terminal-green/30 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                              {tech.name}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Tool Stack */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-pipeline-blue/50 to-transparent" />
                        <span className="text-xs font-bold text-pipeline-blue font-mono">TOOL_STACK</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-pipeline-blue/50 to-transparent" />
                      </div>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={aboutInView ? "visible" : "hidden"}
                      >
                        {[
                          { name: "Slack", icon: "/icons/slack.svg" },
                          { name: "Notion", icon: "/icons/notion.png" },
                          { name: "Cursor", icon: "/icons/cursor.png" },
                          { name: "Claude", icon: "/icons/claude.png" },
                        ].map((tool) => (
                          <motion.div
                            key={tool.name}
                            className="group relative p-2 rounded-lg bg-background/80 border border-border hover:border-pipeline-blue/50 transition-colors hover:shadow-lg hover:shadow-pipeline-blue/10"
                            variants={itemVariants}
                            whileHover={{
                              scale: 1.1,
                              rotate: -5,
                              transition: { type: "spring", stiffness: 400, damping: 17 }
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="h-8 w-8 object-contain"
                            />
                            {/* Tooltip */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background border border-pipeline-blue/30 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                              {tool.name}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Right: Profile Image & Decorations */}
                <div className="relative flex items-center justify-center">
                  {/* Decorative code snippets */}
                  <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded bg-terminal-green/10 border border-terminal-green/20 font-mono text-xs text-terminal-green transform -rotate-6 hidden lg:block">
                    while(true)
                  </div>
                  <div className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded bg-pipeline-blue/10 border border-pipeline-blue/20 font-mono text-xs text-pipeline-blue transform rotate-6 hidden lg:block">
                    terraform apply
                  </div>

                  {/* Profile Image Placeholder */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-terminal-green/20 to-pipeline-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative w-64 h-64 rounded-2xl border-4 border-border bg-gradient-to-br from-secondary to-card overflow-hidden">
                      {/* Profile Image */}
                      <img
                        src="/profile-image.jpeg"
                        alt="Bhuvan Suryawanshi"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Scan line effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-green/5 to-transparent animate-scan-line" />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -bottom-2 -right-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border-2 border-terminal-green/50 shadow-lg">
                      <span className="pulse-dot" />
                      <span className="text-xs font-mono text-terminal-green">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>



          {/* Pipeline Visualization - Redesigned */}
          <motion.section
            ref={pipelineRef}
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={pipelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={pipelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Workflow className="h-6 w-6 text-terminal-green" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Deployment Pipeline</h2>
            </motion.div>

            <div className="relative p-8 rounded-xl bg-background/90 border-2 border-border">
              {/* Premium animated beam with traveling pulse */}
              <PipelineBeam className="top-1/2 left-8 right-8 h-20 -translate-y-1/2 hidden md:block rounded-full z-0" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {pipeline.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.stage}
                      className={`relative p-6 rounded-xl border-2 transition-colors duration-500 ${step.status === 'running'
                        ? 'bg-gradient-to-br from-terminal-green/20 to-terminal-green/5 border-terminal-green/50 shadow-lg shadow-terminal-green/20'
                        : step.status === 'complete'
                          ? 'bg-gradient-to-br from-secondary/50 to-card border-border/50'
                          : 'bg-gradient-to-br from-secondary/30 to-card border-border/30'
                        }`}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={pipelineInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.15,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      whileHover={{
                        scale: 1.02,
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {/* Stage number badge with pulse animation for running */}
                      <motion.div
                        className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-background border-2 flex items-center justify-center ${step.status === 'running' ? 'border-terminal-green' : 'border-border'
                          }`}
                        animate={step.status === 'running' ? {
                          boxShadow: [
                            '0 0 0 0 hsl(var(--terminal-green) / 0.4)',
                            '0 0 0 8px hsl(var(--terminal-green) / 0)',
                            '0 0 0 0 hsl(var(--terminal-green) / 0)'
                          ]
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      >
                        <span className="text-xs font-bold text-terminal-green">{index + 1}</span>
                      </motion.div>

                      <div className="flex flex-col gap-4">
                        {/* Icon and title */}
                        <div className="flex items-center gap-3">
                          <motion.div
                            className={`p-3 rounded-lg ${step.status === 'running'
                              ? 'bg-terminal-green/20 ring-2 ring-terminal-green/30'
                              : 'bg-secondary'
                              }`}
                            animate={step.status === 'running' ? {
                              scale: [1, 1.05, 1],
                            } : {}}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Icon className={`h-6 w-6 ${step.status === 'running'
                              ? 'text-terminal-green'
                              : step.status === 'complete'
                                ? 'text-foreground'
                                : 'text-muted-foreground'
                              }`} />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-base">{step.stage}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              {step.status === 'complete' ? (
                                <>
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                  >
                                    <CheckCircle2 className="h-4 w-4 text-terminal-green" />
                                  </motion.div>
                                  <span className="text-xs text-terminal-green font-medium">Completed</span>
                                </>
                              ) : step.status === 'running' ? (
                                <>
                                  <div className="h-4 w-4 rounded-full border-2 border-terminal-green border-t-transparent animate-spin" />
                                  <span className="text-xs text-terminal-green font-medium">In Progress</span>
                                </>
                              ) : (
                                <>
                                  <Circle className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">Pending</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Progress bar with animated fill */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Progress</span>
                            <span className={step.status === 'complete' ? 'text-terminal-green font-medium' : 'text-muted-foreground'}>
                              {step.status === 'complete' ? '100%' : step.status === 'running' ? '75%' : '0%'}
                            </span>
                          </div>
                          <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${step.status === 'running'
                                ? 'bg-gradient-to-r from-terminal-green to-pipeline-blue'
                                : step.status === 'complete'
                                  ? 'bg-gradient-to-r from-terminal-green to-terminal-green/80'
                                  : ''
                                }`}
                              initial={{ width: '0%' }}
                              animate={pipelineInView ? {
                                width: step.status === 'complete' ? '100%' : step.status === 'running' ? '75%' : '0%'
                              } : { width: '0%' }}
                              transition={{
                                duration: 1.2,
                                delay: 0.5 + index * 0.2,
                                ease: [0.25, 0.1, 0.25, 1]
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Connecting arrow with animation */}
                      {index < pipeline.length - 1 && (
                        <motion.div
                          className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={pipelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.6 + index * 0.15
                          }}
                        >
                          <ArrowRight className={`h-5 w-5 ${step.status === 'complete' || step.status === 'running' ? 'text-terminal-green' : 'text-border'}`} />
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.section>


          {/* Contact Section */}
          <motion.section
            ref={contactRef}
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Header */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Mail className="h-5 w-5 text-pipeline-blue" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Get In Touch</h2>
            </motion.div>

            {/* Quick Links - Compact with stagger animation */}
            <motion.div
              className="grid gap-3 sm:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              <motion.a
                href="mailto:bhuvansuryawanshi0@gmail.com"
                className="group flex items-center gap-3 p-4 rounded-lg bg-background/90 border border-border hover:border-terminal-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-terminal-green/10"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2 rounded-full bg-pipeline-blue/10 flex-shrink-0">
                  <Mail className="h-4 w-4 text-pipeline-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground truncate">bhuvansuryawanshi0@gmail.com</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/bhuvan-suryawanshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-lg bg-background/90 border border-border hover:border-terminal-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-docker-blue/10"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2 rounded-full bg-docker-blue/10 flex-shrink-0">
                  <Linkedin className="h-4 w-4 text-docker-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm text-foreground">LinkedIn</p>
                  <p className="text-xs text-muted-foreground truncate">bhuvan-suryawanshi</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </motion.a>

              <motion.a
                href="https://github.com/bhuvansuryawanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-lg bg-background/90 border border-border hover:border-terminal-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2 rounded-full bg-secondary/50 flex-shrink-0">
                  <Github className="h-4 w-4 text-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm text-foreground">GitHub</p>
                  <p className="text-xs text-muted-foreground truncate">bhuvansuryawanshi</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </motion.a>
            </motion.div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}

export default Index

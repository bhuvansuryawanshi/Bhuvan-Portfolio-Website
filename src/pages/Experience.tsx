import { Briefcase, Calendar, MapPin, Terminal, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { pageVariants, containerVariants, itemVariants } from "@/lib/animations"
import { BackgroundBeams, GlowingOrb } from "@/components/ui/animated-beam"

const Experience = () => {
    const experiences = [
        {
            company: "Procedure Tech",
            location: "Remote",
            role: "DevOps Intern",
            type: "Full-time",
            period: "Oct 2025 – Present",
            highlights: [
                "CI/CD Pipeline Development: Built and maintained CI/CD pipelines using GitHub Actions, automating build, test, and deployment processes.",
                "Infrastructure as Code: Designed and implemented infrastructure automation using Terraform, managing multi-environment AWS deployments.",
                "Container Orchestration: Deployed and managed containerized applications using Docker.",
                "Monitoring & Observability: Implemented real-time monitoring and visualization dashboards using Grafana to ensure system reliability."
            ]
        },
        {
            company: "Manasvi Tech Solutions Pvt. Ltd",
            location: "Onsite",
            role: "Jr. Software Developer",
            type: "Full-time",
            period: "Nov 2024 – July 2025",
            highlights: [
                "Web Development: Designed and developed dynamic, responsive websites using HTML, CSS, Bootstrap, JavaScript, React and CodeIgniter, ensuring seamless compatibility across browsers and mobile devices.",
                "AWS Services Integration: Configured and managed AWS services like S3 and AWS Transfer Family to enable secure, credential-based file transfer workflows.",
                "Cloud Environment Setup: Assisted in setting up cloud-hosted environments and supported deployment automation to improve scalability and operational efficiency.",
                "Version Control and Collaboration: Utilized Git and GitHub for version control, enabling efficient code management, branching, and team collaboration workflows."
            ]
        },

    ]

    return (
        <motion.div
            className="min-h-screen relative overflow-hidden bg-background"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {/* Background Decorative Elements */}
            <BackgroundBeams className="opacity-20" />
            <GlowingOrb size={300} color="terminal-green" className="top-1/4 -right-20 opacity-20" />

            <div className="fixed inset-0 pointer-events-none">
                {/* Floating geometric shapes */}
                <motion.div
                    className="absolute top-32 left-10 w-28 h-28 border border-terminal-green/10 rounded-lg"
                    animate={{
                        rotate: [-12, 0, -12],
                        y: [0, -10, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating code snippets */}
                <motion.div
                    className="absolute bottom-1/4 left-20 px-3 py-2 rounded bg-terminal-green/5 border border-terminal-green/10 font-mono text-xs text-terminal-green/30 hidden lg:block"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [-3, -6, -3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    npm run build
                </motion.div>

                {/* Grid dots pattern */}
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]" />
            </div>

            <div className="container max-w-4xl px-4 sm:px-6 py-8 sm:py-12 relative">
                <div className="space-y-8 sm:space-y-12">
                    {/* Header with scroll reveal */}
                    <motion.div
                        className="space-y-4"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">
                            <Briefcase className="h-6 w-6 text-terminal-green" />
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h1>
                        </div>
                    </motion.div>

                    {/* Timeline with scroll reveal */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-8 border-l-2 border-border group"
                                variants={itemVariants}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {/* Timeline animated line highlight */}
                                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-terminal-green origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

                                {/* Timeline dot */}
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-4 border-muted-foreground group-hover:border-terminal-green transition-colors duration-300 shadow-[0_0_0_4px_rgba(0,0,0,0)] group-hover:shadow-[0_0_10px_rgba(5,206,145,0.4)]" />

                                {/* Experience card */}
                                <div className="space-y-4 pb-8 p-4 rounded-lg transition-colors duration-300">
                                    {/* Header */}
                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-start justify-between gap-2">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-terminal-green transition-colors">{exp.company}</h3>
                                                <p className="text-base sm:text-lg text-pipeline-blue font-medium mt-1">
                                                    {exp.role}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-terminal-green/10 border border-terminal-green/20">
                                                <span className="h-2 w-2 rounded-full bg-terminal-green animate-pulse" />
                                                <span className="text-xs font-mono text-terminal-green">{exp.type}</span>
                                            </div>
                                        </div>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="h-4 w-4 text-terminal-green/70" />
                                                <span className="font-mono">{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="h-4 w-4 text-terminal-green/70" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="space-y-3">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <motion.div
                                                key={hIndex}
                                                className="flex gap-3 group/item"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * hIndex }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="flex-shrink-0 mt-1">
                                                    <CheckCircle2 className="h-4 w-4 text-terminal-green/50 group-hover/item:text-terminal-green transition-colors" />
                                                </div>
                                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                                                    {highlight}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience

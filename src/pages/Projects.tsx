import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Cloud, Server, Globe, Terminal, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { pageVariants, containerVariants, itemVariants } from "@/lib/animations"
import { BackgroundBeams, GlowingOrb } from "@/components/ui/animated-beam"

const Projects = () => {
    const projects = [
        {
            title: "Terraform AWS Multi-Tier Architecture",
            type: "Infrastructure",
            status: "deployed",
            icon: Cloud,
            description: [
                "Designed and implemented a custom Amazon VPC with public/private subnets across 2 availability zones, route tables, IGW, and NAT Gateways for high availability.",
                "Built modular, reusable Terraform infrastructure with 5 separate modules (VPC, SG, ALB, ASG, CloudFront) following IaC best practices.",
                "Configured Auto Scaling Groups with launch templates, health checks, and dynamic scaling (1-3 instances) for cost optimization and fault tolerance.",
                "Implemented remote state management using S3 backend with DynamoDB state locking to prevent concurrent modifications.",
                "Used CloudFront CDN for global latency reduction and performance enhancement."
            ],
            tech: ["VPC", "EC2", "ALB", "CloudFront", "IAM", "Auto Scaling", "s3", "dynamodb", "Terraform"],
            liveUrl: "#",
            githubUrl: "https://github.com/bhuvansuryawanshi/Terraform-AWS-Multi-Tier-Architecture"
        },
        {
            title: "Secure File Transfer with AWS Transfer Family",
            type: "Security",
            status: "deployed",
            icon: Server,
            description: [
                "Deployed AWS Transfer Family server with SFTP protocol for secure, encrypted file transfers to Amazon S3.",
                "Configured IAM roles and policies to map SFTP users to specific S3 bucket directories with least privilege access.",
                "Implemented password-based authentication for simplified user management and secure access control.",
                "Validated end-to-end file transfer workflow using FileZilla SFTP client with successful S3 integration."
            ],
            tech: ["AWS Transfer Family", "S3", "SFTP", "IAM", "Security", "FileZilla"],
            liveUrl: "#",
            githubUrl: "https://github.com/bhuvansuryawanshi"
        },
        {
            title: "Bombay Tribe E-commerce",
            type: "Web Dev",
            status: "live",
            icon: Globe,
            description: [
                "Designed and developed a fully responsive eCommerce website using CodeIgniter framework.",
                "Architected user-friendly layout optimized for desktop and mobile devices.",
                "Developed custom functionalities including product filters, authentication, and admin panel.",
                "Implemented form validations and error handling for robust user experience."
            ],
            tech: ["HTML", "CSS", "JavaScript", "PHP", "CodeIgniter"],
            liveUrl: "https://bombaytribe.com/home",
            githubUrl: "#"
        },
        {
            title: "Sahyadri Mitra Website",
            type: "Web Dev",
            status: "live",
            icon: Globe,
            description: [
                "Developed a fully responsive website using Bootstrap, PHP, and CodeIgniter.",
                "Implemented smooth animations and interactive UI elements for modern appeal.",
                "Ensured seamless navigation across all devices with mobile first design.",
                "Integrated dynamic content management and secure user authentication."
            ],
            tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "CodeIgniter"],
            liveUrl: "https://sahyadrimitra.com/",
            githubUrl: "#"
        }
    ]

    const getStatusBadge = (status: string) => {
        const styles = {
            deployed: "bg-green-500/10 text-green-400 border-green-500/30",
            active: "bg-blue-500/10 text-blue-400 border-blue-500/30",
            live: "bg-purple-500/10 text-purple-400 border-purple-500/30",
            development: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
        }
        return styles[status as keyof typeof styles] || styles.development
    }

    return (
        <motion.div
            className="min-h-screen relative overflow-hidden"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            <BackgroundBeams className="opacity-30" />
            <GlowingOrb size={300} color="terminal-green" className="top-10 -right-20 opacity-30" />

            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    className="absolute bottom-40 left-20 w-24 h-24 border border-terminal-green/10 rounded-full"
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                <motion.div
                    className="absolute top-1/2 left-10 w-20 h-20 border border-deploy-orange/10 rounded-lg"
                    animate={{
                        rotate: [-12, 12, -12],
                        x: [0, 10, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]" />
            </div>

            <div className="container max-w-5xl px-4 sm:px-6 py-8 sm:py-12 relative">
                <div className="space-y-8 sm:space-y-12">
                    <motion.div
                        className="space-y-4"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">
                            <Terminal className="h-6 w-6 text-terminal-green" />
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h1>
                        </div>
                        <p className="text-muted-foreground max-w-2xl">
                            Exploring cloud architectures, automation workflows, and full-stack solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {projects.map((project, index) => {
                            const Icon = project.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group rounded-lg bg-background/90 border-2 border-border overflow-hidden hover:border-terminal-green/50 transition-colors duration-300 relative"
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 40px -10px rgba(5, 206, 145, 0.1)"
                                    }}
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-terminal-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="p-4 sm:p-6 border-b border-border/50 bg-secondary/20">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                            <div className="flex items-start gap-4">
                                                <div className="p-2.5 rounded-lg bg-secondary shrink-0 group-hover:bg-terminal-green/10 transition-colors duration-300">
                                                    <Icon className="h-5 w-5 text-terminal-green" />
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <h3 className="text-lg font-semibold transition-colors duration-300">
                                                            {project.title}
                                                        </h3>
                                                        <Badge variant="outline" className={`text-xs ${getStatusBadge(project.status)}`}>
                                                            <CheckCircle2 className="h-3 w-3 mr-1" />
                                                            {project.status}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                                                        <span className="px-2 py-0.5 rounded bg-secondary">{project.type}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 ml-11 sm:ml-0">
                                                {project.liveUrl !== "#" && (
                                                    <Button variant="outline" size="sm" asChild className="h-8 hover:bg-terminal-green/10 hover:text-terminal-green hover:border-terminal-green/50">
                                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                                                            <span className="text-xs">Live</span>
                                                            <ArrowRight className="h-3 w-3 ml-1" />
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.githubUrl !== "#" && (
                                                    <Button variant="outline" size="sm" asChild className="h-8 hover:bg-pipeline-blue/10 hover:text-pipeline-blue hover:border-pipeline-blue/50">
                                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                            <Github className="h-3.5 w-3.5 mr-1.5" />
                                                            <span className="text-xs">Code</span>
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 sm:p-6 space-y-4">
                                        <ul className="space-y-2">
                                            {project.description.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-terminal-green mt-0.5 shrink-0 opacity-70">▸</span>
                                                    <span className="leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/50 text-muted-foreground border border-border/50 hover:border-terminal-green/30 hover:text-terminal-green hover:bg-terminal-green/5 transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    <motion.div
                        className="text-center py-8"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/90 border-2 border-border text-sm text-muted-foreground font-mono hover:border-terminal-green/30 transition-colors">
                            <span className="text-terminal-green">$</span>
                            <span>More projects coming soon...</span>
                            <span className="text-terminal-green animate-pulse">_</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects

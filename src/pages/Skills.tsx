import { Cloud, Container, GitBranch, Database, Monitor, Code, Network, Workflow, Terminal, Cpu, Shield, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { pageVariants, containerVariants, itemVariants, floatVariants } from "@/lib/animations"
import { BackgroundBeams, GlowingOrb } from "@/components/ui/animated-beam"

const Skills = () => {
    const skillCategories = [
        {
            title: "Cloud Platforms",
            description: "Hands-on experience with scalable and secure AWS services",
            icon: Cloud,
            color: "aws-orange",
            level: 85,
            skills: ["EC2", "S3", "VPC", "EFS", "CloudFront", "Transfer Family", "IAM", "RDS", "CloudWatch", "Route53"]
        },
        {
            title: "Container & Virtualization",
            description: "Fundamental knowledge of containerized environments",
            icon: Container,
            color: "docker-blue",
            level: 60,
            skills: ["Docker"]
        },
        {
            title: "CI/CD & Automation",
            description: "Experience building automated deployment pipelines",
            icon: Workflow,
            color: "terminal-green",
            level: 80,
            skills: ["GitHub Actions", "OIDC", "AWS S3 Deployment", "CI/CD Integration"]
        },
        {
            title: "Infrastructure & Networking",
            description: "Built and managed cloud infrastructure with performance and security in mind",
            icon: Network,
            color: "pipeline-blue",
            level: 75,
            skills: ["VPC", "Subnets", "Route Tables", "NAT Gateway", "Internet Gateway", "Security Groups", "NACLs"]
        },
        {
            title: "Version Control",
            description: "Efficient collaboration through source control systems",
            icon: GitBranch,
            color: "git-red",
            level: 90,
            skills: ["Git", "GitHub", "Branching", "Pull Requests"]
        },
        {
            title: "Frontend Development",
            description: "Developed responsive UI using modern frontend tools",
            icon: Code,
            color: "deploy-orange",
            level: 75,
            skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "CodeIgniter"]
        },
        {
            title: "Databases & Storage",
            description: "Used relational databases and AWS storage solutions",
            icon: Database,
            color: "pipeline-blue",
            level: 70,
            skills: ["MySQL", "AWS RDS", "Amazon EFS", "Amazon S3"]
        },
        {
            title: "Monitoring & Logging",
            description: "Basic exposure to monitoring and logging tools",
            icon: Monitor,
            color: "terminal-green",
            level: 55,
            skills: ["CloudWatch"]
        }
    ]

    const toolsMatrix = [
        { name: "AWS", category: "Cloud", icon: "☁️" },
        { name: "Docker", category: "Container", icon: "🐳" },
        { name: "GitHub Actions", category: "CI/CD", icon: "⚙️" },
        { name: "Git", category: "VCS", icon: "📦" },
        { name: "Linux", category: "OS", icon: "🐧" },
        { name: "React", category: "Frontend", icon: "⚛️" },
        { name: "MySQL", category: "Database", icon: "🗄️" },
        { name: "Nginx", category: "Server", icon: "🌐" },
    ]

    // Helper to safely get color classes or defaults
    const getColorClass = (colorName: string, opacity = false) => {
        // These need to match what's available in your Tailwind config or CSS classes
        // If they aren't working, we might need to use style={{ color: `hsl(var(--${colorName}))` }}
        return opacity ? `bg-${colorName}/10` : `text-${colorName}`;
    }

    return (
        <motion.div
            className="min-h-screen bg-background relative overflow-hidden"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {/* Background Elements */}
            <BackgroundBeams className="opacity-20" />
            <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />

            {/* Floating orbs */}
            <GlowingOrb size={400} color="terminal-green" className="-top-40 -left-40 opacity-20" />
            <GlowingOrb size={300} color="deploy-orange" className="bottom-0 right-0 opacity-10" />

            <div className="container max-w-5xl px-4 sm:px-6 py-8 sm:py-12 relative">
                <div className="space-y-12 sm:space-y-16">
                    {/* Header */}
                    <motion.div
                        className="space-y-4"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">
                            <Cpu className="h-6 w-6 text-terminal-green" />
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h1>
                        </div>
                        <div className="terminal-window max-w-xl">
                            <div className="terminal-header">
                                <div className="terminal-dot bg-red-500" />
                                <div className="terminal-dot bg-yellow-500" />
                                <div className="terminal-dot bg-cyan-500" />
                                <span className="ml-4 text-xs text-muted-foreground font-mono">skills.json</span>
                            </div>
                            <div className="terminal-body">
                                <p className="text-muted-foreground">
                                    <span className="text-terminal-green">$</span> cat ./devops-toolkit.json | jq
                                </p>
                                <p className="text-muted-foreground mt-1">
                                    <span className="text-muted-foreground/50"># </span>
                                    Technologies and tools I work with to build scalable cloud infrastructure
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Tools Matrix with scroll reveal */}
                    <motion.section
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="flex items-center gap-3">
                            <Layers className="h-5 w-5 text-pipeline-blue" />
                            <h2 className="text-lg font-semibold">Tech Stack</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {toolsMatrix.map((tool, index) => (
                                <motion.div
                                    key={tool.name}
                                    className="group p-4 rounded-lg bg-card border border-border hover:border-terminal-green/30 transition-all duration-300 glow-box cursor-default"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    <div className="text-center space-y-2">
                                        <span className="text-2xl filter drop-shadow-md">{tool.icon}</span>
                                        <p className="font-medium text-sm">{tool.name}</p>
                                        <span className="text-xs text-muted-foreground px-2 py-0.5 rounded bg-secondary block mx-auto w-fit">
                                            {tool.category}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Skills Grid with scroll reveal */}
                    <motion.section
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="flex items-center gap-3">
                            <Terminal className="h-5 w-5 text-terminal-green" />
                            <h2 className="text-lg font-semibold">Skill Breakdown</h2>
                        </div>

                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                            {skillCategories.map((category, index) => {
                                const Icon = category.icon
                                // Using inline styles for colors that might not be in Tailwind classes
                                const iconColorStyle = { color: `hsl(var(--${category.color}))` }
                                const bgColorStyle = { backgroundColor: `hsl(var(--${category.color}) / 0.1)` }
                                const progressColorStyle = { backgroundColor: `hsl(var(--${category.color}))` }

                                return (
                                    <motion.div
                                        key={index}
                                        className="group rounded-lg bg-card border border-border hover:border-opacity-50 transition-all duration-300 overflow-hidden relative"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            borderColor: `hsl(var(--border))`,
                                        }}
                                    >
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(var(--terminal-green)/0.3)] rounded-lg transition-colors duration-300 pointer-events-none" />

                                        {/* Category Header */}
                                        <div className="p-4 border-b border-border/50">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 rounded-lg shrink-0" style={bgColorStyle}>
                                                    <Icon className="h-5 w-5" style={iconColorStyle} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-sm sm:text-base">{category.title}</h3>
                                                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                                        {category.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Progress bar */}
                                            <div className="mt-3 space-y-1">
                                                <div className="flex justify-between text-xs">
                                                    <span className="text-muted-foreground font-mono">proficiency</span>
                                                    <span className="font-mono" style={iconColorStyle}>{category.level}%</span>
                                                </div>
                                                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full rounded-full"
                                                        style={progressColorStyle}
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${category.level}%` }}
                                                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                                        viewport={{ once: true }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Skills */}
                                        <div className="p-4">
                                            <div className="flex flex-wrap gap-1.5">
                                                {category.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="tech-badge hover:scale-105 cursor-default"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.section>

                    {/* Learning Section with scroll reveal */}
                    <motion.section
                        className="space-y-4"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-deploy-orange" />
                            <h2 className="text-lg font-semibold">Currently Learning</h2>
                        </div>

                        <div className="terminal-window group hover:border-[hsl(var(--deploy-orange)/0.3)] transition-colors duration-300">
                            <div className="terminal-header">
                                <div className="terminal-dot bg-red-500" />
                                <div className="terminal-dot bg-yellow-500" />
                                <div className="terminal-dot bg-cyan-500" />
                                <span className="ml-4 text-xs text-muted-foreground font-mono">learning.sh</span>
                            </div>
                            <div className="terminal-body space-y-3">
                                <div className="flex items-start gap-2">
                                    <span className="text-terminal-green">$</span>
                                    <div>
                                        <code className="text-deploy-orange">kubectl get pods</code>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            <span className="text-muted-foreground/50"># </span>
                                            Exploring Kubernetes for container orchestration
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-terminal-green">$</span>
                                    <div>
                                        <code className="text-deploy-orange">terraform init</code>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            <span className="text-muted-foreground/50"># </span>
                                            Learning Infrastructure as Code with Terraform
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Footer */}
                    <motion.div
                        className="text-center py-4"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-muted-foreground font-mono">
                            <span className="text-terminal-green">const</span> growth = <span className="text-deploy-orange">"continuous"</span>;
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills

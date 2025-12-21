import { Briefcase, Calendar, MapPin, Terminal, CheckCircle2 } from "lucide-react"

const Experience = () => {
    const experiences = [
        {
            company: "Procedure Tech",
            location: "Remote",
            role: "DevOps Engineer",
            type: "Full-time",
            period: "Oct 2025 – Present",
            highlights: [
                "CI/CD Pipeline Development: Built and maintained robust CI/CD pipelines using Jenkins and GitHub Actions, automating build, test, and deployment processes to reduce deployment time by 40%.",
                "Infrastructure as Code: Designed and implemented infrastructure automation using Terraform, managing multi-environment AWS deployments with version-controlled infrastructure configurations.",
                "Container Orchestration: Deployed and managed containerized applications using Docker and Kubernetes, implementing auto-scaling and load balancing for improved application reliability and performance."
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
        <div className="min-h-screen relative">
            <div className="container max-w-4xl px-4 sm:px-6 py-8 sm:py-12 relative">
                <div className="space-y-8 sm:space-y-12">
                    {/* Header */}
                    <div className="space-y-4 animate-fade-in-up">
                        <div className="flex items-center gap-3">
                            <Briefcase className="h-6 w-6 text-terminal-green" />
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h1>
                        </div>

                    </div>

                    {/* Timeline */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-8 border-l-2 border-border hover:border-terminal-green/50 transition-colors duration-300"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-terminal-green border-4 border-background" />

                                {/* Experience card */}
                                <div className="space-y-4 pb-8">
                                    {/* Header */}
                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-start justify-between gap-2">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.company}</h3>
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
                                                <Calendar className="h-4 w-4" />
                                                <span className="font-mono">{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="h-4 w-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="space-y-3">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <div key={hIndex} className="flex gap-3 group">
                                                <div className="flex-shrink-0 mt-1">
                                                    <CheckCircle2 className="h-4 w-4 text-terminal-green" />
                                                </div>
                                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                                    {highlight}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Experience

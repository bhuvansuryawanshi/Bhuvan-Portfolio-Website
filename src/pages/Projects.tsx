import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Cloud, Server, GitBranch, Database, Globe, Terminal, CheckCircle2, ArrowRight, Container } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline with Flask & AWS",
      type: "DevOps",
      status: "deployed",
      icon: Container,
      description: [
        "Architected a complete CI/CD pipeline using GitHub Actions for automated application deployment.",
        "Developed Flask web application with full CRUD functionality and PostgreSQL database integration.",
        "Implemented Docker containerization for portable, consistent deployments across environments.",
        "Deployed infrastructure on AWS using EC2 for compute and RDS for managed PostgreSQL database."
      ],
      tech: ["GitHub Actions", "Docker", "Flask", "AWS EC2", "AWS RDS", "PostgreSQL", "CI/CD"],
      liveUrl: "#",
      githubUrl: "https://github.com/bhuvansuryawanshi/CI-CD_Pipeline_with_Flask_AWS"
    },
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
        "Used CloudFront CDN for global latency reduction and performance enhancement.",
        "Applied Security Groups to control inbound/outbound traffic to AWS resources."
      ],
      tech: ["VPC", "EC2", "ALB", "CloudFront", "IAM", "Security Groups", "Auto Scaling", "s3", "dynamodb", "Terraform"],
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
        "Configured IAM roles and policies to map SFTP users to specific S3 bucket directories with least-privilege access.",
        "Implemented password-based authentication for simplified user management and secure access control.",
        "Validated end-to-end file transfer workflow using FileZilla SFTP client with successful S3 integration."
      ],
      tech: ["AWS Transfer Family", "S3", "SFTP", "IAM", "Security", "FileZilla"],
      liveUrl: "#",
      githubUrl: "https://github.com/bhuvansuryawanshi"
    },
    // {
    //   title: "Shared Storage with Amazon EFS",
    //   type: "Storage",
    //   status: "deployed",
    //   icon: Database,
    //   description: [
    //     "Created a shared storage system using Amazon EFS and connected it to two EC2 instances in the same VPC.",
    //     "Set up secure NFS mounting so both instances could access the same files at the same time.",
    //     "Enabled real-time file sharing across servers to keep data consistent and always available."
    //   ],
    //   tech: ["EC2", "EFS", "NFS", "VPC"],
    //   liveUrl: "#",
    //   githubUrl: "https://github.com/bhuvansuryawanshi"
    // },
    // {
    //   title: "CI/CD Pipeline with GitHub Actions",
    //   type: "Automation",
    //   status: "active",
    //   icon: GitBranch,
    //   description: [
    //     "Built an automated CI/CD pipeline to deploy a static website from GitHub to Amazon S3.",
    //     "Configured GitHub Actions to trigger deployments on every push using aws s3 sync.",
    //     "Implemented OIDC-based IAM role assumption for secure, keyless authentication.",
    //     "Integrated Amazon CloudFront as CDN for improved performance and global delivery."
    //   ],
    //   tech: ["S3", "CloudFront", "GitHub Actions", "OIDC", "CI/CD"],
    //   liveUrl: "#",
    //   githubUrl: "https://github.com/bhuvansuryawanshi"
    // },
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
        "Ensured seamless navigation across all devices with mobile-first design.",
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-pipeline-blue/10 rounded-lg rotate-12 animate-float" />
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-terminal-green/10 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 left-10 w-20 h-20 border border-deploy-orange/10 rounded-lg -rotate-12 animate-float" />

        {/* Floating code snippets */}
        {/* <div className="absolute top-32 left-40 px-3 py-2 rounded bg-terminal-green/5 border border-terminal-green/10 font-mono text-xs text-terminal-green/30 -rotate-6 animate-float hidden lg:block">
          git push origin
        </div> */}
        <div className="absolute bottom-1/3 right-20 px-3 py-2 rounded bg-pipeline-blue/5 border border-pipeline-blue/10 font-mono text-xs text-pipeline-blue/30 rotate-3 animate-float-delayed hidden lg:block">
          docker compose up
        </div>

        {/* Pipeline flow lines */}
        <div className="absolute top-1/3 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-pipeline-blue/10 to-transparent animate-pulse-slow" />

        {/* Grid dots pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]" />
      </div>

      <div className="container max-w-5xl px-4 sm:px-6 py-8 sm:py-12 relative">
        <div className="space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <Terminal className="h-6 w-6 text-terminal-green" />
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h1>
            </div>
            {/* <div className="terminal-window max-w-xl">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">projects.sh</span>
              </div>
              <div className="terminal-body">
                <p className="text-muted-foreground">
                  <span className="text-terminal-green">$</span> ls -la ./deployments
                </p>
                <p className="text-muted-foreground mt-1">
                  <span className="text-muted-foreground/50"># </span>
                  Cloud deployments, infrastructure projects & web applications
                </p>
              </div>
            </div> */}
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={index}
                  className="rounded-lg bg-background/90 border-2 border-border overflow-hidden hover:border-terminal-green/30 transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className="p-4 sm:p-6 border-b border-border/50">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-secondary shrink-0">
                          <Icon className="h-5 w-5 text-terminal-green" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
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

                      {/* Action buttons */}
                      <div className="flex gap-2 ml-11 sm:ml-0">
                        {project.liveUrl !== "#" && (
                          <Button variant="outline" size="sm" asChild className="h-8">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                              <span className="text-xs">Live</span>
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </a>
                          </Button>
                        )}
                        {project.githubUrl !== "#" && (
                          <Button variant="outline" size="sm" asChild className="h-8">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3.5 w-3.5 mr-1.5" />
                              <span className="text-xs">Code</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6 space-y-4">
                    {/* Description */}
                    <ul className="space-y-2">
                      {project.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-terminal-green mt-0.5 shrink-0">▸</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/50 text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer note */}
          <div className="text-center py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/90 border-2 border-border text-sm text-muted-foreground font-mono">
              <span className="text-terminal-green">$</span>
              <span>More projects coming soon...</span>
              <span className="text-terminal-green animated-underscore"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

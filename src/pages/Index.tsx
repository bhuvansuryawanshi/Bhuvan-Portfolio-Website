import { Link } from "react-router-dom"
import { ArrowRight, Terminal, Cloud, Activity, CheckCircle2, Circle, Workflow, Cpu, Mail, Linkedin, Github, ExternalLink, Briefcase } from "lucide-react"
import { useEffect, useState } from "react"

const Index = () => {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "whoami"

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
    { name: "AWS", icon: "/icons/aws.svg", color: "#FF9900" },
    { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
    { name: "Kubernetes", icon: "/icons/kubernetes.svg", color: "#326CE5" },
    { name: "Terraform", icon: "/icons/terraform.svg", color: "#7B42BC" },
    { name: "Jenkins", icon: "/icons/jenkins.svg", color: "#D24939" },
    { name: "GitHub Actions", icon: "/icons/github.svg", color: "#ffffff" },
    { name: "Linux", icon: "/icons/linux.svg", color: "#FCC624" },
    { name: "Ansible", icon: "/icons/ansible.svg", color: "#EE0000" },
    { name: "Grafana", icon: "/icons/grafana.svg", color: "#F46800" },
    { name: "Prometheus", icon: "/icons/prometheus.svg", color: "#E6522C" },
    { name: "Python", icon: "/icons/python.svg", color: "#3776AB" },
    { name: "Nginx", icon: "/icons/nginx.svg", color: "#009639" },
  ]

  return (
    <div className="min-h-screen relative">
      <div className="container max-w-5xl px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">

          {/* Hero Section */}
          <section className="space-y-8 animate-fade-in-up">
            {/* Status indicator */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground animate-fade-in-delay-1">
              <span className="pulse-dot" />
              <span className="font-mono">system status: <span className="text-terminal-green">available</span></span>
            </div>

            {/* Terminal-style intro - ENLARGED */}
            <div className="terminal-window max-w-6xl animate-fade-in-delay-2">
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
                      <span className="text-terminal-green">motto:</span> Getting Better Every Day
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* About Me Section - Creative Terminal Style */}
          <section className="relative space-y-6">
            {/* Decorative terminal elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-terminal-green/20 rounded-lg rotate-12 hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-pipeline-blue/20 rounded-lg -rotate-12 hidden lg:block" />
            <div className="absolute top-1/2 right-0 w-12 h-12 bg-deploy-orange/10 rounded-full hidden lg:block" />

            {/* Role Badge */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-terminal-green/20 to-pipeline-blue/20 border border-terminal-green/30">
                <Terminal className="h-4 w-4 text-terminal-green" />
                <span className="text-sm font-bold tracking-wide text-terminal-green">DEVOPS ENGINEER</span>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="relative">
              {/* Grid pattern background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-2xl" />

              <div className="relative grid lg:grid-cols-3 gap-8 p-8 rounded-2xl bg-gradient-to-br from-card via-secondary/50 to-card border-2 border-border overflow-hidden">
                {/* Left: Content */}
                <div className="lg:col-span-2 space-y-6 relative z-10">
                  {/* Title */}
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-terminal-green" />
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
                        <span className="text-xs font-bold text-terminal-green font-mono">PRIMARY_STACK</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-terminal-green/50 to-transparent" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { name: "AWS", icon: "/icons/aws.svg" },
                          { name: "Docker", icon: "/icons/docker.svg" },
                          { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
                          { name: "Terraform", icon: "/icons/terraform.svg" },
                          { name: "Jenkins", icon: "/icons/jenkins.svg" },
                          { name: "Python", icon: "/icons/python.svg" },
                          { name: "Linux", icon: "/icons/linux.svg" },
                          { name: "Ansible", icon: "/icons/ansible.svg" },
                        ].map((tech) => (
                          <div
                            key={tech.name}
                            className="group relative p-2 rounded-lg bg-background/80 border border-border hover:border-terminal-green/50 transition-all"
                            title={tech.name}
                          >
                            <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tool Stack */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-pipeline-blue/50 to-transparent" />
                        <span className="text-xs font-bold text-pipeline-blue font-mono">TOOL_STACK</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-pipeline-blue/50 to-transparent" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { name: "Slack", icon: "/icons/slack.svg" },
                          { name: "Notion", icon: "/icons/notion.svg" },
                          { name: "Cursor", icon: "/icons/cursor.svg" },
                          { name: "Claude", icon: "/icons/claude.svg" },
                          { name: "Grafana", icon: "/icons/grafana.svg" },
                          { name: "Prometheus", icon: "/icons/prometheus.svg" },
                        ].map((tool) => (
                          <div
                            key={tool.name}
                            className="group relative p-2 rounded-lg bg-background/80 border border-border hover:border-pipeline-blue/50 transition-all"
                            title={tool.name}
                          >
                            <img src={tool.icon} alt={tool.name} className="h-8 w-8 object-contain" />
                          </div>
                        ))}
                      </div>
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
                      {/* Placeholder with icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-terminal-green/5 to-pipeline-blue/5">
                        <div className="text-center space-y-3">
                          <Terminal className="h-16 w-16 mx-auto text-terminal-green/50" />
                          <p className="text-xs text-muted-foreground font-mono">Image Placeholder</p>
                          <p className="text-[10px] text-muted-foreground/50 max-w-[200px]">Add your photo here to personalize</p>
                        </div>
                      </div>
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
          </section>



          {/* Pipeline Visualization - Redesigned */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Workflow className="h-6 w-6 text-terminal-green" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Deployment Pipeline</h2>
            </div>

            <div className="relative p-8 rounded-xl bg-gradient-to-br from-card to-secondary/30 border border-border">
              {/* Pipeline track */}
              <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-border -translate-y-1/2 hidden md:block" />
              <div className="absolute top-1/2 left-8 w-3/4 h-0.5 pipeline-flow -translate-y-1/2 hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {pipeline.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={step.stage}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-500 ${step.status === 'running'
                        ? 'bg-gradient-to-br from-terminal-green/20 to-terminal-green/5 border-terminal-green/50 shadow-lg shadow-terminal-green/20'
                        : step.status === 'complete'
                          ? 'bg-gradient-to-br from-secondary/50 to-card border-border/50'
                          : 'bg-gradient-to-br from-secondary/30 to-card border-border/30'
                        }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Stage number badge */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                        <span className="text-xs font-bold text-terminal-green">{index + 1}</span>
                      </div>

                      <div className="flex flex-col gap-4">
                        {/* Icon and title */}
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-lg ${step.status === 'running'
                            ? 'bg-terminal-green/20 ring-2 ring-terminal-green/30'
                            : 'bg-secondary'
                            }`}>
                            <Icon className={`h-6 w-6 ${step.status === 'running'
                              ? 'text-terminal-green'
                              : step.status === 'complete'
                                ? 'text-foreground'
                                : 'text-muted-foreground'
                              }`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-base">{step.stage}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              {step.status === 'complete' ? (
                                <>
                                  <CheckCircle2 className="h-4 w-4 text-terminal-green" />
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

                        {/* Progress bar */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Progress</span>
                            <span className={step.status === 'complete' ? 'text-terminal-green font-medium' : 'text-muted-foreground'}>
                              {step.status === 'complete' ? '100%' : step.status === 'running' ? '75%' : '0%'}
                            </span>
                          </div>
                          <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-1000 ${step.status === 'running'
                                ? 'w-3/4 bg-gradient-to-r from-terminal-green to-pipeline-blue animate-pulse'
                                : step.status === 'complete'
                                  ? 'w-full bg-gradient-to-r from-terminal-green to-terminal-green/80'
                                  : 'w-0'
                                }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Connecting arrow */}
                      {index < pipeline.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                          <ArrowRight className={`h-5 w-5 ${step.status === 'complete' || step.status === 'running' ? 'text-terminal-green' : 'text-border'}`} />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>


          {/* Contact Section */}
          <section className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-pipeline-blue" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Get In Touch</h2>
            </div>

            {/* Quick Links - Compact */}
            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href="mailto:bhuvansuryawanshi0@gmail.com"
                className="group flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-terminal-green/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="p-2 rounded-full bg-pipeline-blue/10 flex-shrink-0">
                  <Mail className="h-4 w-4 text-pipeline-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground truncate">bhuvansuryawanshi0@gmail.com</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>

              <a
                href="https://www.linkedin.com/in/bhuvan-suryawanshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-terminal-green/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="p-2 rounded-full bg-docker-blue/10 flex-shrink-0">
                  <Linkedin className="h-4 w-4 text-docker-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm text-foreground">LinkedIn</p>
                  <p className="text-xs text-muted-foreground truncate">bhuvan-suryawanshi</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>

              <a
                href="https://github.com/bhuvansuryawanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-terminal-green/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="p-2 rounded-full bg-secondary/50 flex-shrink-0">
                  <Github className="h-4 w-4 text-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm text-foreground">GitHub</p>
                  <p className="text-xs text-muted-foreground truncate">bhuvansuryawanshi</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            </div>

            {/* Status Badge
            <div className="flex justify-center pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-terminal-green/10 border border-terminal-green/20 text-sm font-mono">
                <span className="pulse-dot" />
                <span className="text-terminal-green">Available for opportunities</span>
              </div>
            </div> */}
          </section>

        </div>
      </div>
    </div>
  )
}

export default Index

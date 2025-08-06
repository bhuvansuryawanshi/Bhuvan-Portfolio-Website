import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Website Deployment on AWS",
      description: [
        "Designed and implemented a custom Amazon VPC with public/private subnets, route tables, IGW, and NAT Gateway.",
        "Launched and configured EC2 instances with optimal type selection and Elastic IPs.",
        "Set up ALB, Target Groups, and Auto Scaling Groups to ensure 99.9% uptime.",
        "Used CloudFront CDN for global latency reduction and performance enhancement.",
        "Applied IAM roles and Security Groups to secure access to AWS resources."
      ],
      tech: ["VPC", "EC2", "ALB", "CloudFront", "IAM", "Security Groups", "Auto Scaling"],
      liveUrl: "#",
      githubUrl: "https://github.com/bhuvansuryawanshi"
    },

    {
      title: "Secure File Transfer to Amazon S3 using AWS Transfer Family",
      description: [
        "Configured AWS Transfer Family with SFTP protocol to enable secure, password-based file transfers to Amazon S3 without requiring AWS credentials or console access for end users.",
        "Created and managed SFTP users mapped to specific S3 directories using IAM roles and policies for scoped access control.",
        "Verified end-to-end functionality by uploading files using FileZilla SFTP client, simulating real-world usage scenarios",
      ],
      tech: ["S3", "Transfer Family"],
      liveUrl: "#",
      githubUrl: "https://github.com/bhuvansuryawanshi"
    },

    {
      title: "Shared Storage Setup Using Amazon EFS and EC2",
      description: [
        "Created a shared storage system using Amazon EFS and connected it to two EC2 instances in the same VPC",
        "Set up secure NFS mounting so both instances could access the same files at the same time.",
        "Enabled real-time file sharing across servers to keep data consistent and always available",
      ],
      tech: ["EC2", "EFS"],
      liveUrl: "#",
      githubUrl: "https://github.com/bhuvansuryawanshi"
    },

    {
      title: "CI/CD with GitHub Actions, AWS S3, and CloudFront",
      description: [
        "Built an automated CI/CD pipeline to deploy a static website from GitHub to an Amazon S3 bucketusing GitHub Actions.",
        "Configured GitHub Actions to trigger deployments on every push using the aws s3 sync command",
        "Implemented OIDC-based IAM role assumption for secure, keyless authentication between GitHub and AWS",
        "Integrated Amazon CloudFront as a Content Delivery Network (CDN) to improve website performance, reduce latency, and enable global content delivery.",
      ],
      tech: ["S3", "CloudFront", "GitHub Actions", "CI/CD"],
      liveUrl: "#",
      githubUrl: "https://github.com/bhuvansuryawanshi"
    },

    {
      title: "Bombay Tribe Website",
      description: [
        "Design and development of a fully responsive, feature-rich eCommerce website for Bombay Tribe using HTML, CSS, JavaScript, and PHP within the CodeIgniter framework.",
        "Architected a user-friendly layout optimized for both desktop and mobile devices, ensuring cross-browser compatibility and seamless user experience across varied screen sizes",
        "Developed and integrated custom functionalities including dynamic product filters, secure user authentication, cart and checkout systems, and admin panel with full CRUD capabilities",
        "Implemented form validations, error handling, and user feedback mechanisms to provide a robust and intuitive interface throughout the shopping journey",
      ],
      tech: ["S3", "CloudFront", "GitHub Actions", "CI/CD"],
      liveUrl: "https://bombaytribe.com/home",
      githubUrl: "https://github.com/bhuvansuryawanshi"
    },



    {
      title: "Sahyadri Mitra Website",
      description: [
        "Designed and developed a fully responsive, visually engaging website for Sahyadri Mitra using HTML, CSS, JavaScript, Bootstrap, PHP, and CodeIgniter.",
        "Implemented smooth animations and interactive UI elements to enhance user engagement and modern appeal.",
        "Ensured seamless navigation and optimal performance across all devices with a mobile-first, cross-browser compatible layout.",
        "Integrated dynamic content management, secure user authentication, and an admin panel for easy updates and maintenance.",
        "Focused on accessibility, fast load times, and a user-friendly experience for all visitors."
      ],
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "CodeIgniter", "Animation"],
      liveUrl: "https://sahyadrimitra.com/",
      githubUrl: "https://github.com/bhuvansuryawanshi"
    }

  ]



  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Discover the tools and experiments I've built
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                        {project.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
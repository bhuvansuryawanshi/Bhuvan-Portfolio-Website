import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      description: "Hands-on experience with scalable and secure AWS services",
      skills: ["AWS (EC2, S3, VPC, EFS, CloudFront, Transfer Family, IAM, RDS, CloudWatch, Route53)"]
    },
    {
      title: "Container & Virtualization",
      description: "Fundamental knowledge of containerized environments",
      skills: ["Docker"]
    },
    {
      title: "CI/CD & Automation",
      description: "Experience building automated deployment pipelines",
      skills: ["GitHub Actions", "OIDC", "AWS S3 Deployment", "CI/CD Integration"]
    },
    {
      title: "Infrastructure & Networking",
      description: "Built and managed cloud infrastructure with performance and security in mind",
      skills: ["VPC", "Subnets", "Route Tables", "NAT Gateway", "Internet Gateway", "Security Groups", "NACLs"]
    },
    {
      title: "Version Control",
      description: "Efficient collaboration through source control systems",
      skills: ["Git", "GitHub", "Branching", "Pull Requests"]
    },
    {
      title: "Frontend Development",
      description: "Developed responsive UI using modern frontend tools",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "CodeIgniter"]
    },
    {
      title: "Databases & Storage",
      description: "Used relational databases and AWS storage solutions",
      skills: ["MySQL", "AWS RDS", "Amazon EFS", "Amazon S3"]
    },
    {
      title: "Monitoring & Logging",
      description: "Basic exposure to monitoring and logging tools",
      skills: ["CloudWatch"]
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Skills</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Technologies and tools I work with to build scalable cloud infrastructure
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-cloud-blue-light hover:text-cloud-blue transition-colors"
                      >
                        {skill}
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

export default Skills
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const Index = () => {
  const proudOf = [
    "Deployed websites on AWS using EC2, S3, and Load Balancer.",
    "Built CI/CD pipelines with GitHub Actions and S3.",
    "Configured secure file transfers with AWS Transfer Family.",
    "Set up shared storage using EFS and EC2.",
    "Created scalable VPC architecture with public/private subnets.",
    "Developed responsive UIs using HTML, CSS, JS, React, and CodeIgniter."
  ];


  const beliefs = [
    "Automate everything that can be automated",
    "Infrastructure should be reproducible and version-controlled",
    "Monitoring and observability are not optional",
    "Security should be built into every layer",
    "Documentation prevents future headaches",
    "Fail fast, recover faster",
    "Strong systems beat quick fixes",
    "DevOps is a culture, not just tools",
    "Stay curious, keep learning"
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-balance">
              Bhuvan Suryawanshi
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl">
              Getting Better Every Day.
            </p>
          </div>

          {/* Things I'm proud of */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Things I'm proud of</h2>
            <ul className="space-y-3">
              {proudOf.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span
                    className="text-foreground"
                    dangerouslySetInnerHTML={{
                      __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }}
                  />
                </li>
              ))}
            </ul>
          </section>

          {/* Things I believe */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Things I believe</h2>
            <ul className="space-y-3">
              {beliefs.map((belief, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span className="text-foreground">{belief}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Call to action cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/projects">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Projects</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>
                    Discover the tools and experiments I've built
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/contact">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Contact</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>
                    Got feedback or an idea? Let's connect
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

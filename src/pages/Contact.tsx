import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"
import emailjs from '@emailjs/browser';

const Contact = () => {


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      e.target,
      'your_user_id'
    ).then(() => {
      alert('Message sent!');
    }).catch((error) => {
      console.error(error);
      alert('Something went wrong.');
    });
  };


  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Got feedback or an idea? Let's connect
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </CardTitle>
                  <CardDescription>
                    I'm always interested in discussing DevOps challenges, cloud architecture, or potential collaborations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">bhuvansuryawanshi0@gmail.com</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">https://www.linkedin.com/in/bhuvan-suryawanshi/</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-sm text-muted-foreground">https://github.com/bhuvansuryawanshi</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    What I'm Looking For
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Seeking opportunities in Cloud and DevOps to prove my skills and dedication.</li>
                    <li>Interested in working on real-world, hands-on projects that drive impact.</li>
                    <li>Passionate about learning new technologies and best practices in cloud engineering.</li>
                    <li>Looking to collaborate with teams on challenging DevOps problems.</li>
                    <li>Motivated to contribute, grow, and deliver value through practical experience.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What's this about?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or question..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        e.target.reset(); // Reset form
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
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
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What's this about?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or question..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  {submitStatus && (
                    <div className={`p-3 rounded-md text-sm ${submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                      }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
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
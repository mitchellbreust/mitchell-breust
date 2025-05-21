import Link from "next/link"
import { Mail, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind? Feel free to reach out through any of these channels.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Email Card */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="mt-2 text-muted-foreground">Drop me an email anytime</p>
                  <Button asChild variant="link" className="mt-2">
                    <Link href="mailto:hello@devportfolio.com">mitchell.breust2@gmail.com</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="mt-2 text-muted-foreground">Call during business hours or send a text</p>
                  <Button asChild variant="link" className="mt-2">
                    <Link href="tel:+1234567890">0410 413 506</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="overflow-hidden md:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Social Media</h3>
                  <p className="mt-2 text-muted-foreground">Connect with me on social platforms</p>
                  <div className="mt-4 flex space-x-4">
                    <Link
                      href="https://github.com/mitchellbreust"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/mitchellbreust/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/mitchell_breust/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Based in Cairns, QLD, Australia. Available for remote work worldwide.</p>
            <p className="mt-2 text-muted-foreground">Typically respond within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

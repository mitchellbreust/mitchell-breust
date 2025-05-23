import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work. Each project represents a unique challenge and solution.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <CardHeader className="flex-grow flex flex-col">
              <div className="h-[80px]">
                <CardTitle>Small Business Websites</CardTitle>
                <CardDescription className="line-clamp-2 mt-3">Custom websites built for real clients across various industries</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
              I've built fast, mobile-friendly websites for small businesses, complete with CMS, product catalogs, and custom design to match each brand.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4 w-full">
                <Link 
                  href="https://cairns-move-go.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative aspect-video overflow-hidden rounded-lg border bg-muted transition-all hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <Image
                    src="/cairns-move-go.vercel.app_ (1).png"
                    alt="Cairns Ute & Move - Removalist Services Website"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium">Cairns Ute & Move</p>
                    <p className="text-xs text-white/80">Removalist Services</p>
                  </div>
                </Link>
                <Link 
                  href="https://infuse-watch.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative aspect-video overflow-hidden rounded-lg border bg-muted transition-all hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <Image
                    src="/infuse-watch.vercel.app_(Nest Hub Max).png"
                    alt="InfuseWatch - Medical Device Safety Innovation"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium">InfuseWatch</p>
                    <p className="text-xs text-white/80">Medical Device Safety Innovation</p>
                  </div>
                </Link>
                <Link 
                  href="https://example3.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative aspect-video overflow-hidden rounded-lg border bg-muted transition-all hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <Image
                    src="/website-preview3.jpg"
                    alt="Website Preview 3"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium">Example Business 3</p>
                  </div>
                </Link>
                <Link 
                  href="https://example4.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative aspect-video overflow-hidden rounded-lg border bg-muted transition-all hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <Image
                    src="/website-preview4.jpg"
                    alt="Website Preview 4"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium">Example Business 4</p>
                  </div>
                </Link>
              </div>
            </CardFooter>
          </Card>
          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <CardHeader className="flex-grow flex flex-col">
              <div className="h-[80px]">
                <CardTitle>MockWise</CardTitle>
                <CardDescription className="line-clamp-2 mt-3">A real-time interviewing assistant</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                MockWise is an interview assistant that uses AI to generate mock questions and give feedback in real-time based on your resume 
                and job description. It helps you practice and improve your answers with tailored, dynamic coaching for technical interviews.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="https://mock-wise.online">View Project</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <CardHeader className="flex-grow flex flex-col">
              <div className="h-[80px]">
                <CardTitle>BareHTTP</CardTitle>
                <CardDescription className="line-clamp-2 mt-3">A tiny C-compatible HTTP client for bare-metal IOT systems.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Barehttp is a tiny, C-compatible HTTP/1.1 client for Zig, made to run on bare-metal systems with no OS and as little as 16 KB of 
                RAM. With no TLS, allocators, or threads, it's built for microcontrollers and IoT devices that need simple, blocking HTTP with 
                zero dependencies.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="https://github.com/mitchellbreust/bareHTTP">View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

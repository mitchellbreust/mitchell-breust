import { Code, Coffee, Globe, Laptop } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
            <p className="text-muted-foreground md:text-xl">
            I’m a full-stack developer focused on creating fast, clean, and reliable web applications. From service-based platforms and booking systems to portfolio sites and responsive interfaces, 
              I build with performance and clarity in mind—using tools like Next.js, React, and Tailwind CSS.
          </p>
          <p className="text-muted-foreground md:text-xl">
            Beyond the browser, I enjoy low-level development with Zig and C++, exploring embedded systems and performance-critical applications. 
            I also have a passion for server-side development using Go, building scalable and efficient backends. Whether working on frontend experiences or backend infrastructure, I strive to craft lean, maintainable, 
            and well-engineered solutions.
          </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
              <div className="rounded-full bg-muted p-2">
                <Laptop className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Frontend Development</h3>
              <p className="text-center text-sm text-muted-foreground">
                Creating responsive, accessible, and beautiful user interfaces
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
              <div className="rounded-full bg-muted p-2">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Backend Development</h3>
              <p className="text-center text-sm text-muted-foreground">
                Building robust APIs and server-side applications
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
              <div className="rounded-full bg-muted p-2">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">SEO Optimization</h3>
              <p className="text-center text-sm text-muted-foreground">
                Improving visibility and search engine rankings
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
              <div className="rounded-full bg-muted p-2">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Performance Tuning</h3>
              <p className="text-center text-sm text-muted-foreground">Optimizing websites for speed and efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

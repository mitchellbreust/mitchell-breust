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
      <CardTitle>Crop Health Pulse</CardTitle>
      <CardDescription className="line-clamp-2 mt-3">
        Satellite-Based Agricultural Monitoring Dashboard for Cairns surrounding areas.
      </CardDescription>
    </div>
  </CardHeader>
  <CardContent className="flex-grow">
    <p className="text-sm text-muted-foreground">
      Developed a crop health dashboard using Sentinel-2 NDVI satellite imagery to analyze vegetation patterns across Queensland regions. Implemented spatial databases and geospatial queries for detailed crop health monitoring.
    </p>
    <p className="text-xs text-muted-foreground italic mt-2">
      🔍 Enables early detection of drought stress and abnormal crop patterns to support proactive agricultural decisions.
    </p>
  </CardContent>
  <CardFooter className="flex flex-col gap-2">
    <Link
      href="https://new-front-end-crop-health-cegv.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-medium text-blue-600 hover:underline"
    >
      Visit Live Demo →
    </Link>
    <div className="w-full aspect-video bg-muted rounded-md flex items-center justify-center overflow-hidden border">
      <img
        src="/cropWeb.png"
        alt="Crop Health Pulse dashboard screenshot"
        className="object-cover w-full h-full"
      />
    </div>
  </CardFooter>
</Card>

          {/* OBD2 DATA DASH */}
          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <CardHeader className="flex-grow flex flex-col">
              <div className="h-[80px]">
                <CardTitle>Obd2 Data Dashbored</CardTitle>
                <CardDescription className="line-clamp-2 mt-3">
                  Real-time vehicle telemetry and diagnostics platform.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Built with Go, Python, and Next.js, this project connects to a vehicle’s OBD-II port to stream live engine data such as speed, throttle, and air flow. It features a secure web dashboard for visualizing performance metrics, uploading CSV logs, and analyzing trends — designed for mechanics, enthusiasts, and engineers who want deep insight into their vehicle’s health.
              </p>
            </CardContent>
              <CardFooter>
              <Link 
                href="https://obd-data-dash.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full overflow-hidden rounded-lg border bg-muted transition-all hover:shadow-md"
              >
                <Image
                  src="/Screenshot2025-10-22010206.png"
                  alt="Cairns Obd2"
                  width={640}
                  height={360}
                  priority
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium">Cairns Ute & Move</p>
                  <p className="text-xs text-white/80">Removalist Services</p>
                </div>
              </Link>
          </CardFooter>
          </Card>

          {/* InfuseWatch */}
          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <CardHeader className="flex-grow flex flex-col">
              <div className="h-[80px]">
                <CardTitle>InfuseWatch</CardTitle>
                <CardDescription className="line-clamp-2 mt-3">
                  Concept site for a smart insulin leak detection patch.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Designed and built with Next.js, this responsive site showcases a medical device concept for detecting insulin infusion failures. It focuses on clear communication, user pain points, and driving 
                validation through user feedback.
              </p>
            </CardContent>
            <CardFooter>
              <div className="relative w-full aspect-video overflow-hidden rounded-lg border bg-muted group transition-all hover:shadow-md">
                <Image
                  src="/infuse-watch.png"
                  alt="InfuseWatch - Medical Device Safety Innovation"
                  fill
                  priority
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <Link
                  href="https://infuse-watch.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium">InfuseWatch</p>
                    <p className="text-xs text-white/80">Medical Device Safety Innovation</p>
                  </div>
                </Link>
              </div>
            </CardFooter>
          </Card>

        </div>
      </div>
    </section>
  )
}

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

          {/* EchoMesh */}
          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <CardHeader className="flex-grow flex flex-col">
              <div className="h-[80px]">
                <CardTitle>EchoMesh</CardTitle>
                <CardDescription className="line-clamp-2 mt-3">
                  Decentralized Bluetooth mesh messaging across mobile devices.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Built with C++ and Java, EchoMesh lets phones relay messages over Bluetooth—hopping device to device. Works offline, peer-to-peer, with plans for 1km-range relay hardware and satellite bridging.
              </p>
              <p className="text-xs text-muted-foreground italic mt-2">
                🔧 Hardware relay box in planning.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Link
                href="https://github.com/mitchellbreust/EchoMesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 hover:underline"
              >
                View on GitHub →
              </Link>
              <div className="w-full aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm border">
                Video demo coming soon...
              </div>
            </CardFooter>
          </Card>

          {/* Cairns Ute & Move */}
          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <CardHeader className="flex-grow flex flex-col">
              <div className="h-[80px]">
                <CardTitle>Cairns Ute & Move</CardTitle>
                <CardDescription className="line-clamp-2 mt-3">
                  Service site for a local removalist team based in Cairns.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Built with Next.js, this mobile-friendly site promotes a Cairns-based moving and delivery service. It features a clear service breakdown, transparent pricing, and contact options — focused on trust, efficiency, and local connection.
              </p>
            </CardContent>
              <CardFooter>
              <Link 
                href="https://cairns-move-go.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full overflow-hidden rounded-lg border bg-muted transition-all hover:shadow-md"
              >
                <Image
                  src="/cairns-move-go.png"
                  alt="Cairns Ute & Move"
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

"use client"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { visible } = useScrollDirection()

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50",
        "transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container flex h-14 md:h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-4 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-sm md:text-base font-bold">
              <span className="md:hidden">Mitchell Breust</span>
              <span className="hidden md:inline">Mitchell Breust | Software Developer</span>
            </span>
          </Link>
        </div>
        <nav className="flex items-center space-x-3 md:space-x-6 text-xs md:text-sm font-medium">
          <Link href="#projects" className="transition-colors hover:text-foreground/80">
            Projects
          </Link>
          <Link href="#about" className="transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-foreground/80">
            Pricing
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

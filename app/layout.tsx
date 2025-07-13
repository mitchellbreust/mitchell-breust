import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Freelance Web Developer Portfolio",
  icons: {
    icon: '/download.png',
    shortcut: '/download.png',
    apple: '/download.png',
  },
  verification: {
    google: 'TV83qYE9oDE9JLnKYinph0Ww1b6IQ-R6bWQhmd2orOY',
  },
  other: {
    'preload-image': '/converted_image (1).jpeg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/converted_image (1).jpeg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className={`${jakarta.variable} font-sans antialiased tracking-tight`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

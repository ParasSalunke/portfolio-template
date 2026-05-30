import type { Metadata } from "next"
import { ThemeProvider } from "@/components/ThemeProvider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio | Data Scientist & Software Engineer",
  description: "Personal portfolio website turning data into decisions and ideas into products.",
  openGraph: {
    title: "Portfolio | Data Scientist & Software Engineer",
    description: "Personal portfolio website turning data into decisions and ideas into products.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="bg-noise" />
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-24">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

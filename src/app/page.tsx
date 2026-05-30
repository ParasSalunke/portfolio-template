"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Code, User, FileText, Star, ExternalLink, ArrowRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none -z-10">
          <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] dark:bg-primary/10" />
        </div>

        <motion.div
          className="max-w-4xl w-full text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 shadow-sm backdrop-blur-md">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-outfit tracking-tight mb-6 text-balance"
          >
            Hi, I&apos;m <span className="text-primary">John Doe</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-medium text-muted-foreground mb-6"
          >
            Data Scientist & Software Engineer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Turning complex data into actionable decisions and bold ideas into scalable, production-ready products.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/resume.pdf" target="_blank" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
            <Link href="https://github.com" target="_blank" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8" })}>
              <Code className="mr-2 h-5 w-5" />
              GitHub
            </Link>
            <Link href="https://linkedin.com" target="_blank" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8" })}>
              <User className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="py-20 px-4 md:px-8 bg-muted/30 border-y border-border">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-2">Featured Projects</h2>
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <Link href="/projects" className={buttonVariants({ variant: "ghost", className: "group" })}>
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur ring-1 ring-primary/50 shadow-primary/10 shadow-lg">
                  <CardHeader className="pb-4 relative">
                    <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </div>
                    <div className="mb-2">
                      <Badge variant="secondary" className="capitalize text-xs">
                        {project.category.replace("-", " ")}
                      </Badge>
                    </div>
                    <CardTitle className="font-outfit text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-balance mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <Badge key={t} variant="outline" className="text-[10px] py-0 px-1.5 bg-background font-normal">
                          {t}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-[10px] py-0 px-1.5 bg-background font-normal">
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50 bg-muted/20 flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "flex-1 rounded-md" })}>
                        <Code className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "sm", className: "flex-1 rounded-md" })}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-2">More About Me</h2>
              <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground text-balance mb-8">
                <p>
                  With over 4 years of experience, I specialize in architecting data pipelines, training deep learning models, and building the backend infrastructure required to serve them to millions of users. 
                </p>
                <p>
                  I believe that the best ML solutions are only as good as the software engineering practices that support them. When I'm not coding, you can find me hiking, reading sci-fi, or contributing to open-source projects.
                </p>
              </div>
              <Link href="/about" className={buttonVariants({ size: "lg", className: "rounded-full" })}>
                Read Full Bio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="bg-primary/5 border-primary/20 text-center py-8">
                <div className="text-4xl font-bold font-outfit text-foreground mb-2">4+</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Exp.</div>
              </Card>
              <Card className="bg-primary/5 border-primary/20 text-center py-8">
                <div className="text-4xl font-bold font-outfit text-foreground mb-2">20+</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects</div>
              </Card>
              <Card className="bg-primary/5 border-primary/20 text-center py-8 col-span-2">
                <div className="text-lg font-bold font-outfit text-foreground mb-2">Looking for new opportunities</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider flex items-center justify-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Available Now
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

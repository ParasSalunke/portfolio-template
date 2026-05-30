"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, ExternalLink, Star } from "lucide-react"

import { projects } from "@/data/projects"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"

type Category = "all" | "data-science" | "software-engineering" | "fullstack"

export default function ProjectsPage() {
  const [filter, setFilter] = React.useState<Category>("all")

  const filteredProjects = React.useMemo(() => {
    if (filter === "all") return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  const categories: { label: string; value: Category }[] = [
    { label: "All Projects", value: "all" },
    { label: "Data Science", value: "data-science" },
    { label: "Software Eng", value: "software-engineering" },
    { label: "Fullstack", value: "fullstack" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-2">Projects</h1>
        <div className="h-1 w-20 bg-primary rounded-full mb-10"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {categories.map((cat) => (
          <Button
            key={cat.value}
            variant={filter === cat.value ? "default" : "outline"}
            onClick={() => setFilter(cat.value)}
            className="rounded-full transition-all"
            size="sm"
          >
            {cat.label}
          </Button>
        ))}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur ${project.featured ? 'ring-1 ring-primary/50 shadow-primary/10 shadow-lg' : 'border-border'}`}>
                <CardHeader className="pb-4 relative">
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </div>
                  )}
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
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-foreground/80">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline" className="text-[10px] py-0 px-1.5 bg-background font-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground/80">Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="leading-tight">{h}</span>
                        </li>
                      ))}
                    </ul>
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
                      Live Demo
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

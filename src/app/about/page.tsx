"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, GraduationCap, MapPin, Globe } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timeline = [
  {
    year: "2024 - Present",
    title: "Senior Data Scientist",
    company: "Tech Innovators Inc.",
    description: "Leading a team of 4 to develop generative AI solutions for enterprise search, increasing efficiency by 45%.",
  },
  {
    year: "2022 - 2024",
    title: "Software Engineer / ML",
    company: "DataWorks",
    description: "Built scalable data pipelines and deployed machine learning models into production serving 100k+ daily users.",
  },
  {
    year: "2020 - 2022",
    title: "M.S. Computer Science",
    company: "University of Technology",
    description: "Specialized in Machine Learning and Distributed Systems. Published research on efficient transformer architectures.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-2">About Me</h1>
        <div className="h-1 w-20 bg-primary rounded-full mb-12"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Photo & Quick Facts */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="relative aspect-square mb-8 rounded-2xl overflow-hidden bg-secondary border border-border flex items-center justify-center shadow-lg">
            {/* Placeholder Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
              <span className="text-6xl font-outfit font-bold text-foreground/30">JD</span>
            </div>
          </div>

          <Card className="bg-card/50 backdrop-blur shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <span>English, Spanish (Fluent)</span>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="font-medium">Available for new roles</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column: Bio & Timeline */}
        <div className="lg:col-span-2 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground text-balance"
          >
            <p>
              I am a passionate <strong>Data Scientist and Software Engineer</strong> with a unique blend of skills that bridge the gap between building complex machine learning models and deploying them as scalable, robust applications.
            </p>
            <p>
              With over 4 years of experience, I specialize in architecting data pipelines, training deep learning models, and building the backend infrastructure required to serve them to millions of users. I believe that the best ML solutions are only as good as the software engineering practices that support them.
            </p>
            <p>
              Currently, my interests lie in Large Language Models (LLMs), MLOps, and building developer tools that accelerate AI adoption. When I'm not coding, you can find me hiking, reading sci-fi, or contributing to open-source projects.
            </p>
          </motion.div>

          {/* Highlight Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Years Exp.", value: "4+", icon: Briefcase },
              { label: "Projects", value: "20+", icon: Code },
              { label: "Certifications", value: "5+", icon: GraduationCap },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              >
                <Card className="bg-primary/5 border-primary/20 text-center py-6 hover:bg-primary/10 transition-colors">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold font-outfit text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-outfit mb-8 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Experience & Education
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col mb-1">
                      <Badge variant="outline" className="w-fit mb-2 text-primary border-primary/30 bg-primary/5">
                        {item.year}
                      </Badge>
                      <h4 className="text-lg font-bold font-outfit text-foreground">{item.title}</h4>
                      <span className="text-sm font-medium text-muted-foreground">{item.company}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

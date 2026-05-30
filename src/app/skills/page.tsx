"use client"

import { motion } from "framer-motion"
import { Code, BrainCircuit, Cloud, Layout, Wrench } from "lucide-react"

import { skillsData } from "@/data/skills"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const iconMap: Record<string, React.ElementType> = {
  "code": Code,
  "brain-circuit": BrainCircuit,
  "cloud": Cloud,
  "layout": Layout,
  "wrench": Wrench,
}

const levelToLabel = (level: number) => {
  switch (level) {
    case 1: return "Beginner"
    case 2: return "Novice"
    case 3: return "Intermediate"
    case 4: return "Advanced"
    case 5: return "Expert"
    default: return "Unknown"
  }
}

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-2">Technical Skills</h1>
        <div className="h-1 w-20 bg-primary rounded-full mb-12"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {skillsData.map((group, groupIdx) => {
          const IconComponent = iconMap[group.icon] || Code
          return (
            <motion.div variants={itemVariants} key={group.category}>
              <Card className="h-full bg-card/50 backdrop-blur shadow-sm border-border hover:border-primary/30 transition-colors">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 font-outfit text-2xl">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {group.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {group.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-medium text-foreground/90">{skill.name}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <span className="text-xs font-medium text-muted-foreground cursor-help border-b border-dashed border-muted-foreground/50">
                              Level {skill.level}/5
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{levelToLabel(skill.level)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

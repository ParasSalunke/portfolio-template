"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { certificates } from "@/data/certificates"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Category = "all" | "ml" | "cloud" | "data" | "dev"

export default function CertificatesPage() {
  const [filter, setFilter] = React.useState<Category>("all")

  const filteredCerts = React.useMemo(() => {
    if (filter === "all") return certificates
    return certificates.filter((c) => c.category === filter)
  }, [filter])

  const categories: { label: string; value: Category }[] = [
    { label: "All", value: "all" },
    { label: "Machine Learning", value: "ml" },
    { label: "Cloud", value: "cloud" },
    { label: "Data Science", value: "data" },
    { label: "Development", value: "dev" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-2">Certifications</h1>
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

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={cert.id}
              className="group h-[250px] perspective-1000"
            >
              <div className="relative w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-card/80 backdrop-blur border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                  <div className="text-4xl mb-4 bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full">
                    {cert.badge || "🏅"}
                  </div>
                  <h3 className="font-outfit font-bold text-lg leading-tight mb-2 text-balance">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {cert.issuer}
                  </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md">
                  <Badge className="mb-4" variant="outline">
                    {cert.date}
                  </Badge>
                  <h3 className="font-outfit font-bold text-lg leading-tight mb-6 text-balance">
                    {cert.title}
                  </h3>
                  
                  {cert.credentialUrl ? (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "sm", className: "rounded-full" })}>
                      View Credential
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">Credential verified</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

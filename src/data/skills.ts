export interface Skill {
  name: string
  level: number // 1 to 5
}

export interface SkillGroup {
  category: string
  icon: string // lucide icon name
  skills: Skill[]
}

export const skillsData: SkillGroup[] = [
  {
    category: "Languages",
    icon: "code",
    skills: [
      { name: "Python", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "SQL", level: 4 },
      { name: "R", level: 3 },
      { name: "Bash", level: 3 },
    ]
  },
  {
    category: "ML / Data Science",
    icon: "brain-circuit",
    skills: [
      { name: "Scikit-learn", level: 5 },
      { name: "Pandas", level: 5 },
      { name: "PyTorch", level: 4 },
      { name: "Hugging Face", level: 4 },
      { name: "SHAP", level: 4 },
      { name: "MLflow", level: 3 },
    ]
  },
  {
    category: "Backend / Cloud",
    icon: "cloud",
    skills: [
      { name: "Docker", level: 5 },
      { name: "FastAPI", level: 4 },
      { name: "Node.js", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "AWS", level: 3 },
      { name: "GCP", level: 3 },
      { name: "Redis", level: 3 },
    ]
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ]
  },
  {
    category: "Tools & DevOps",
    icon: "wrench",
    skills: [
      { name: "Git", level: 5 },
      { name: "Jupyter", level: 5 },
      { name: "Linux", level: 4 },
      { name: "Airflow", level: 3 },
    ]
  }
]

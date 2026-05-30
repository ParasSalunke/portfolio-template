export interface Project {
  id: string
  title: string
  description: string
  category: "data-science" | "software-engineering" | "fullstack"
  tech: string[]
  github?: string
  demo?: string
  highlights: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "customer-churn",
    title: "Customer Churn Predictor",
    description: "Machine learning pipeline to predict customer churn based on historical usage data and demographics. Deployed as a batch scoring job.",
    category: "data-science",
    tech: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Docker"],
    github: "https://github.com/example/churn-predictor",
    highlights: [
      "Achieved 94% accuracy and 91% recall on holdout set",
      "Reduced feature engineering time by 40% with automated pipelines",
      "Identified top 5 key drivers of churn for the marketing team"
    ],
    featured: true
  },
  {
    id: "sentiment-analyzer",
    title: "NLP Sentiment Analyzer",
    description: "Real-time sentiment analysis API for social media monitoring. Fine-tuned a pre-trained language model on domain-specific data.",
    category: "data-science",
    tech: ["Python", "PyTorch", "Hugging Face", "FastAPI", "Docker"],
    github: "https://github.com/example/nlp-sentiment",
    demo: "https://example.com/demo/sentiment",
    highlights: [
      "Fine-tuned BERT model achieving 92% F1 score",
      "Served via FastAPI with p99 latency under 150ms",
      "Handled over 50k requests per day in production"
    ],
    featured: true
  },
  {
    id: "fraud-pipeline",
    title: "Fraud Detection Pipeline",
    description: "Distributed streaming pipeline to detect fraudulent transactions in real-time using ensemble methods.",
    category: "data-science",
    tech: ["PySpark", "GCP", "Kafka", "Python", "MLflow"],
    highlights: [
      "Processed 5000+ transactions per second",
      "Decreased false positives by 15% using an ensemble approach",
      "Implemented continuous model monitoring with MLflow"
    ],
    featured: false
  },
  {
    id: "ecommerce-api",
    title: "E-commerce REST API",
    description: "Scalable backend services for a modern e-commerce platform. Handles inventory management, orders, and payment processing.",
    category: "software-engineering",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Jest"],
    github: "https://github.com/example/ecommerce-api",
    highlights: [
      "Designed normalized database schema resolving concurrency issues",
      "Implemented Redis caching, reducing database load by 60%",
      "Achieved 95% test coverage across all microservices"
    ],
    featured: true
  },
  {
    id: "chat-app",
    title: "Real-time Chat App",
    description: "A collaborative workspace chat application with real-time messaging, presence indicators, and file sharing.",
    category: "fullstack",
    tech: ["React", "Node.js", "WebSockets", "Docker", "MongoDB"],
    github: "https://github.com/example/chat-app",
    demo: "https://chat.example.com",
    highlights: [
      "Built resilient WebSocket architecture handling connection drops",
      "Implemented optimistic UI updates for zero-perceived latency",
      "Containerized deployment using Docker Compose"
    ],
    featured: false
  },
  {
    id: "portfolio-site",
    title: "Developer Portfolio",
    description: "Personal portfolio website built with modern web technologies. Features smooth animations and responsive design.",
    category: "fullstack",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/example/portfolio",
    demo: "https://example.com",
    highlights: [
      "Perfect 100 Lighthouse score for Performance and SEO",
      "Implemented dark mode and accessible semantic HTML",
      "Deployed on Vercel with automated CI/CD pipeline"
    ],
    featured: false
  }
]

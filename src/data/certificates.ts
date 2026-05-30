export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  category: "ml" | "cloud" | "data" | "dev"
  badge?: string
}

export const certificates: Certificate[] = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2024",
    credentialUrl: "https://aws.amazon.com/verification",
    category: "cloud",
    badge: "☁️"
  },
  {
    id: "tf-dev",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "November 2023",
    credentialUrl: "https://google.com",
    category: "ml",
    badge: "🧠"
  },
  {
    id: "ibm-ds",
    title: "IBM Data Science Professional",
    issuer: "IBM / Coursera",
    date: "August 2023",
    credentialUrl: "https://coursera.org",
    category: "data",
    badge: "📊"
  },
  {
    id: "meta-backend",
    title: "Meta Back-End Developer",
    issuer: "Meta / Coursera",
    date: "June 2023",
    credentialUrl: "https://coursera.org",
    category: "dev",
    badge: "⚙️"
  },
  {
    id: "dl-spec",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "December 2022",
    credentialUrl: "https://coursera.org",
    category: "ml",
    badge: "🤖"
  },
  {
    id: "google-data",
    title: "Google Data Analytics",
    issuer: "Google / Coursera",
    date: "September 2022",
    credentialUrl: "https://coursera.org",
    category: "data",
    badge: "📈"
  }
]

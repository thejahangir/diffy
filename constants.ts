import { 
  Code2, 
  Brain, 
  Palette, 
  Search, 
  Users, 
  GraduationCap, 
  Rocket, 
  ShieldCheck, 
  Globe2,
  Lightbulb,
  Workflow,
  Layers,
  Server
} from "lucide-react";
import { ServiceItem, FeatureItem, MethodologyStep, TrainingProgram } from "./types";

export const BRAND_COLORS = {
  blue: '#007BFF',
  cyan: '#00D2FF',
  orange: '#D36E00',
  red: '#D72626',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'development',
    title: 'Web & Mobile Engineering',
    description: 'Scalable, high-performance applications built on modern architectures.',
    outcome: 'Launch faster with robust code.',
    icon: Code2,
    color: 'text-brand-blue',
    expertiseLevel: 98
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Custom models and intelligent agents that automate complex workflows.',
    outcome: 'Reduce operational costs by 40%.',
    icon: Brain,
    color: 'text-brand-cyan',
    expertiseLevel: 95
  },
  {
    id: 'ui-ux',
    title: 'UI & UX Design',
    description: 'Immersive user interfaces and seamless experiences that drive engagement.',
    outcome: 'Maximize user retention.',
    icon: Palette,
    color: 'text-brand-orange',
    expertiseLevel: 96
  },
  {
    id: 'seo',
    title: 'SEO & Growth',
    description: 'Technical SEO and content strategies that dominate search rankings.',
    outcome: 'Increase organic traffic consistently.',
    icon: Search,
    color: 'text-brand-blue',
    expertiseLevel: 88
  },
  {
    id: 'consulting',
    title: 'Strategic Consulting',
    description: 'Digital transformation roadmaps tailored to your market position.',
    outcome: 'Navigate change with confidence.',
    icon: Users,
    color: 'text-brand-red',
    expertiseLevel: 90
  },
  {
    id: 'training',
    title: 'Corporate Training',
    description: 'Upskill your teams in the latest cloud, AI, and dev technologies.',
    outcome: 'Build internal capability.',
    icon: GraduationCap,
    color: 'text-brand-orange',
    expertiseLevel: 94
  }
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Global Scale",
    description: "Infrastructure designed to support millions of users from day one.",
    icon: Globe2
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance built into every solution.",
    icon: ShieldCheck
  },
  {
    title: "Rapid Deployment",
    description: "CI/CD pipelines that get features to market in days, not months.",
    icon: Rocket
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    title: "Discovery & Strategy",
    description: "We align with your business goals, user needs, and market constraints to define a winning roadmap.",
    icon: Lightbulb,
    step: "01"
  },
  {
    title: "Design & Prototyping",
    description: "High-fidelity UX/UI designs that visualize the solution before writing a single line of code.",
    icon: Layers,
    step: "02"
  },
  {
    title: "Agile Development",
    description: "Iterative sprints delivering shippable features every two weeks, ensuring full transparency.",
    icon: Workflow,
    step: "03"
  },
  {
    title: "Launch & Scale",
    description: "Automated deployment, rigorous testing, and infrastructure setup for global availability.",
    icon: Rocket,
    step: "04"
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    title: "Full Stack Excellence",
    description: "Master modern web development with React, Node.js, and cloud-native architectures.",
    icon: Code2,
    topics: ["React & Next.js", "Node.js Microservices", "PostgreSQL & Redis"],
    level: "Intermediate to Advanced"
  },
  {
    title: "AI & Data Engineering",
    description: "Practical implementation of LLMs, RAG pipelines, and predictive analytics models.",
    icon: Brain,
    topics: ["Python & PyTorch", "LLM Integration", "Data Pipelines"],
    level: "Advanced"
  },
  {
    title: "DevOps & Cloud",
    description: "Build robust CI/CD pipelines and manage Kubernetes clusters at scale.",
    icon: Server,
    topics: ["AWS & Azure", "Docker & Kubernetes", "Terraform"],
    level: "Intermediate"
  }
];

export const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Training', href: '#training' },
  { label: 'Contact Us', href: '#contact' },
];
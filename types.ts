import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string; // Tailwind text color class
  outcome: string;
  expertiseLevel: number;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MethodologyStep {
  title: string;
  description: string;
  icon: LucideIcon;
  step: string;
}

export interface TrainingProgram {
  title: string;
  description: string;
  icon: LucideIcon;
  topics: string[];
  level: string;
}
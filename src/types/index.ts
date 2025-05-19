export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}
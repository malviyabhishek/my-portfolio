export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  points?: string[];
  icon: string; // FontAwesome class
  isCurrent?: boolean;
}

export interface ProjectLink {
  url: string;
  type: 'github' | 'youtube' | 'demo';
  label?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: 'IoT' | 'Electrical' | 'Simulation';
  highlight?: boolean;
  links?: ProjectLink[];
  icon?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface AwardItem {
  title: string;
  rank: string;
  description: string;
  icon: string;
  colorClass: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  colorClass: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
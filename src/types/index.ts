export interface Achievement {
  title: string;
  description: string;
  extendedDescription: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: {
    performance?: string;
    efficiency?: string;
    components?: string;
  };
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  companyUrl?: string;
  description: string[];
}
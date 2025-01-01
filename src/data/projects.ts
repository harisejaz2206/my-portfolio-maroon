import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Innfini IoT Platform',
    description: 'Designed and developed architecture for IoT modules including things types, multi-tenancy support, and dynamic forms. Implemented MongoDB optimization and complex aggregation pipelines.',
    technologies: ['React', 'MongoDB', 'Redux', 'Redux Saga', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1470&h=800'
  },
  {
    title: 'Adboost-AI',
    description: 'Led API integration efforts using Nest.js and Next.js, creating a seamless connection between frontend and backend systems. Implemented real-time data synchronization and analytics dashboard.',
    technologies: ['Next.js', 'Nest.js', 'TypeScript', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470&h=800'
  },
  {
    title: 'RAK Ceramics Portal',
    description: 'Developed a comprehensive ERP system for inventory management, order processing, and customer relationship management. Integrated with legacy systems and implemented real-time tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1470&h=800'
  },
  {
    title: 'Ministry of Interior Portal',
    description: 'Built secure authentication and authorization systems for government personnel. Implemented role-based access control and audit logging for sensitive operations.',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&q=80&w=1470&h=800'
  }
];
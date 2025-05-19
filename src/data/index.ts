import { Project, Skill, SocialLink, Experience, Education } from '../types';
import PET from '../assests/Petstore.png';
import CODE from '../assests/Code.png';
import HMS from '../assests/hms.png';
import PRO from '../assests/portfolio.png';

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/veerlapavani',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pavani-veerla-6828b3331/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=veerlapavani754@gmail.com',
    icon: 'mail',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Petstore',
    description: 'Developed a dynamic Pet Store application to manage pet listings, customer interactions, and product inventory efficiently.',
    image: PET,
    tags: ['HTML', 'CSS', 'Bootstrap', 'MYSQL', 'Python', 'Django'],
    repoUrl: 'https://github.com/veerlapavani/Petstore.git',
    featured: true,
  },
  {
    id: 2,
    title: 'Code-B',
    description: 'Designed and developed an NGO Management System to streamline donor management, volunteer coordination, and event tracking.',
    image: CODE,
    tags: ['HTML', 'CSS', 'Bootstrap', 'MYSQL', 'Python', 'Django'],
    repoUrl: 'https://github.com/veerlapavani/Code-B.git',
    featured: true,
  },
  {
    id: 3,
    title: 'HMS',
    description: 'A weather forecast application that provides accurate weather data and forecasts for locations worldwide.',
    image: HMS,
    tags: ['HTML', 'CSS', 'Bootstrap', 'MYSQL', 'Python', 'Django'],
    repoUrl: 'https://github.com/veerlapavani/HMS.git',
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Portfolio website showcasing my projects, skills, and experiences. Built with React and Tailwind CSS.',
    image: PRO,
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/veerlapavani/Portfolio.git',
    featured: true,
  }
];

export const skills: Skill[] = [
  {
    name: 'React',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>',
    level: 5,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    level: 5,
    category: 'languages',
  },
  {
    name: 'Node.js',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>',
    level: 4,
    category: 'backend',
  },
  {
    name: 'CSS',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>',
    level: 5,
    category: 'frontend',
  },
  {
    name: 'GitHub',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="12" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><path d="m6 9 9 9"></path></svg>',
    level: 5,
    category: 'tools',
  },
  {
    name: 'Python',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 15v-2a2 2 0 0 0-2-2h-8"></path><path d="M5 15v2a2 2 0 0 0 2 2h10"></path><path d="m12 9-3-3 3-3"></path><path d="M9 19h3"></path><path d="M9 5h3"></path></svg>',
    level: 4,
    category: 'languages',
  },
  {
    name: 'AWS',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>',
    level: 3,
    category: 'tools',
  },
  
  {
    name: 'Pycharm',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>',
    level: 4,
    category: 'tools',
  },
  
  {
    name: 'Visual Studio Code',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>',
    level: 4,
    category: 'tools',
  },
  {
    name: 'Bootstrap',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5h9v14h-9 M7 7l-5 5 5 5"></path><path d="M16 3h-2c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h2"></path></svg>',
    level: 5,
    category: 'frontend',
  },
  {
    name: 'SQL',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M6 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>',
    level: 4,
    category: 'backend',
  },
  {
    name: 'HTML',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-1.5 0-3 0-6 0Z"></path><path d="m2 16 3-8 3 8c-1.5 0-3 0-6 0Z"></path><path d="M7 21h10"></path><path d="m12 3-3 7h6ZM9 10v4.1"></path><path d="m15 10v4.1"></path></svg>',
    level: 4,
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>',
    level: 5,
    category: 'languages',
  }
];

export const experiences: Experience[] = [
  {
    title: 'Full Stack Developer Inter',
    company: 'Code-B',
    location: 'Bungalow No-23, RDP 2, MHADA Colony, Mulund East, Mumbai 400081',
    period: '2025-Feb - 2025-April',
    description: [
      'Built dynamic web pages with Django views, templates, and models, ensuring a robust backend structure.',
      'Integrated MySQL database functionalities for efficient data storage, retrieval, and management.',
      'Implemented user authentication and authorization features using Django’s built-in authentication system.',
      'Optimized SQL queries and Django ORM logic to enhance application performance and scalability.',
      'Collaborated using Git for version control and participated in code reviews to maintain code quality.',
    ],
  }
];

export const education: Education[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    location: 'Stanford, CA',
    period: '2014 - 2016',
    description: 'Specialized in Web Technologies and Artificial Intelligence. Graduated with honors.',
  },
  {
    degree: 'Bachelor of Commerce in Computer Applications',
    institution: 'University of Kakatiya University',
    location: 'Hanumakonda, Telangana, India',
    period: '2021 - 2024',
    description: 'Developed skills in programming, business management, and data analysis, preparing for roles at the intersection of commerce and technology.',
  },
  {
    degree: 'Web Development Bootcamp',
    institution: 'Coding Academy',
    location: 'Online',
    period: '2013',
    description: 'Intensive 12-week program focused on full-stack web development.',
  },
];
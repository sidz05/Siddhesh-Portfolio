import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: 'ev-hub',
      title: 'EV-Hub',
      description:
        'A web platform for electric vehicle users to discover, book, and manage charging station reservations in real-time with secure payment processing.',
      technologies: ['Node.js', 'React', 'JavaScript', 'Machine Learning', 'MongoDB'],
      image: 'https://tru-vumonitors.com/wp-content/uploads/2023/02/EV-Charging-Touchscreen-scaled.jpg',
      link: 'https://evhub-pro.vercel.app/',
      github: 'https://github.com/sidz05/EV_HUB-Fuel_Predition.git',
      features: [
        'Real-time charging station availability tracking',
        'Secure booking and payment system',
        'User reviews and ratings',
        'Geolocation-based search algorithm',
        'Responsive design for all devices'
      ]
    },
    {
  id: 'portfolio',
  title: 'Personal Portfolio',
  description:
    'A modern, responsive portfolio website showcasing my projects, skills, and achievements with dynamic animations and dark mode support.',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  // Replace with your actual photo path (can be in /public or external link)
  image: '/my-photo.jpg',  
  link: 'https://siddhesh-portfolio-five.vercel.app/#home',
  github: 'https://github.com/sidz05/Siddhesh-Portfolio',
  features: [
    'Responsive design with dark mode support',
    'Dynamic typing animations and counters',
    'Smooth scrolling navigation',
    'Contact form with EmailJS integration',
    'Modern UI with Tailwind CSS'
  ]
},

    {
      id: 'goshop',
      title: 'GoShop',
      description:
        'A real-time price comparison platform that integrates APIs from Amazon, Flipkart, and Shopify to fetch and compare live product prices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      github: 'https://github.com/sidz05/goshop',
      features: [
        'Live price comparison across multiple platforms',
        'Price history tracking and alerts',
        'Product search and filtering',
        'Optimized MongoDB queries reducing latency by 30%',
        'Responsive UI/UX design'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Projects
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        {/* Custom grid for placement */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* EV Hub → left */}
          <ProjectCard 
            project={projects[0]} 
            activeProject={activeProject} 
            setActiveProject={setActiveProject} 
          />

          {/* Portfolio → center */}
          <ProjectCard 
            project={projects[1]} 
            activeProject={activeProject} 
            setActiveProject={setActiveProject} 
          />

          {/* GoShop → right */}
          <ProjectCard 
            project={projects[2]} 
            activeProject={activeProject} 
            setActiveProject={setActiveProject} 
          />
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  project: Project;
  activeProject: string | null;
  setActiveProject: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProjectCard: React.FC<CardProps> = ({ project, activeProject, setActiveProject }) => {
  return (
    <div 
      key={project.id}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-800 hover:border-teal-500"
    >
      {/* Image with hover overlay */}
      <div 
        className="h-60 overflow-hidden relative"
        onMouseEnter={() => setActiveProject(project.id)}
        onMouseLeave={() => setActiveProject(null)}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
          activeProject === project.id ? 'opacity-100' : ''
        }`}>
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500 text-black rounded-full hover:bg-teal-400 transition-colors transform hover:scale-110"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github size={24} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500 text-black rounded-full hover:bg-teal-400 transition-colors transform hover:scale-110"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Text content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-gray-400 text-sm flex items-start">
                <span className="text-teal-400 mr-2">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

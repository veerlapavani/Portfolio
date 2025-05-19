import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Get unique tags from all projects
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  useEffect(() => {
    // Filter projects based on selected tag
    if (filter === 'all') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.tags.includes(filter)));
    }
  }, [filter, projects]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="projects" className="section bg-foreground/5">
      <div className="container">
        <h2 className="text-center mb-8 text-foreground">
          <span className="inline-block relative">
            My Projects
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
          </span>
        </h2>
        <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-12">
          A selection of my recent work, showcasing my skills in web development, 
          design, and problem-solving. Each project represents a unique challenge 
          and solution.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tag
                  ? 'bg-primary text-white'
                  : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                isIntersecting ? 'fade-in slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary p-2 rounded-full hover:bg-primary/10"
                      aria-label="View repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary p-2 rounded-full hover:bg-primary/10"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
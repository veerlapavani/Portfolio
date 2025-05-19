import React, { useState } from 'react';
import { Skill } from '../../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & DevOps' },
    { id: 'languages', name: 'Languages' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section bg-background">
      <div className="container">
        <h2 className="text-center mb-8 text-foreground">
          <span className="inline-block relative">
            Skills &amp; Expertise
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
          </span>
        </h2>
        <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-12">
          My technical proficiency spans a variety of programming languages, frameworks, 
          and tools, allowing me to develop comprehensive solutions across the entire stack.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-foreground/10 shadow-sm hover:shadow-md transition-all duration-300 fade-in slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-primary text-3xl mb-3" dangerouslySetInnerHTML={{ __html: skill.icon }} />
              <h3 className="font-medium mb-2 text-foreground">{skill.name}</h3>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full mx-0.5 ${
                      i < skill.level ? 'bg-primary' : 'bg-foreground/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
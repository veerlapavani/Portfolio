import React, { useState } from 'react';
import { BriefcaseIcon, GraduationCap, DownloadIcon } from 'lucide-react';
import { Experience, Education } from '../../types';
import CV from '../../assests/Pavani.pdf';

interface ResumeProps {
  experiences: Experience[];
  education: Education[];
}

const Resume: React.FC<ResumeProps> = ({ experiences, education }) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="resume" className="section bg-foreground/5">
      <div className="container">
        <h2 className="text-center mb-8 text-foreground">
          <span className="inline-block relative">
            Resume
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === 'experience' 
                    ? 'bg-primary text-white' 
                    : 'bg-foreground/10 hover:bg-foreground/20 text-foreground'
                }`}
              >
                <BriefcaseIcon size={18} className="mr-2" />
                Experience
              </button>
              
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === 'education' 
                    ? 'bg-primary text-white' 
                    : 'bg-foreground/10 hover:bg-foreground/20 text-foreground'
                }`}
              >
                <GraduationCap size={18} className="mr-2" />
                Education
              </button>
            </div>
            
            <a
              href={CV}
              className="btn btn-outline flex items-center"
              download
            >
              <DownloadIcon size={18} className="mr-2" />
              Download CV
            </a>
          </div>
          
          <div className="relative">
            {/* Experience Tab */}
            <div className={`transition-opacity duration-300 ${activeTab === 'experience' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              <div className="space-y-12">
                {experiences.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 fade-in slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary"></div>
                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-[7px] top-4 w-[2px] h-[calc(100%+2rem)] bg-primary/20"></div>
                    )}
                    
                    <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <span className="inline-block mt-2 sm:mt-0 px-3 py-1 rounded-full bg-accent/20 text-accent/80 text-sm">
                          {item.period}
                        </span>
                      </div>
                      
                      <div className="mb-4 text-foreground/70">
                        <span className="font-medium">{item.company}</span>
                        <span className="mx-2">•</span>
                        <span>{item.location}</span>
                      </div>
                      
                      <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                        {item.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education Tab */}
            <div className={`transition-opacity duration-300 ${activeTab === 'education' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              <div className="space-y-12">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 fade-in slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary"></div>
                    {/* Timeline line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-[7px] top-4 w-[2px] h-[calc(100%+2rem)] bg-primary/20"></div>
                    )}
                    
                    <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                        <span className="inline-block mt-2 sm:mt-0 px-3 py-1 rounded-full bg-accent/20 text-accent/80 text-sm">
                          {item.period}
                        </span>
                      </div>
                      
                      <div className="mb-4 text-foreground/70">
                        <span className="font-medium">{item.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{item.location}</span>
                      </div>
                      
                      {item.description && (
                        <p className="text-foreground/80">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import { socialLinks, projects, skills, experiences, education } from './data';

// Lazy load sections for better performance
const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Resume = lazy(() => import('./components/sections/Resume'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Lazy loading fallback
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Portfolio | Developer Name";
    
    // Add background pattern class
    document.documentElement.classList.add('bg-grid-pattern');
    
    return () => {
      document.documentElement.classList.remove('bg-grid-pattern');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar socialLinks={socialLinks} />
      
      <main className="flex-grow">
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects projects={projects} />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills skills={skills} />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Resume experiences={experiences} education={education} />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;